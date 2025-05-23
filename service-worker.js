// service-worker.js
const CACHE_NAME = 'mis-challenge-cache-v4'; // Consider bumping cache version if major changes occur
const urlsToCache = [
  './', // Represents the root, typically index.html in the current directory
  './index.html',
  './index.js', // Cache the compiled JavaScript file
  'https://cdn.tailwindcss.com',
  'https://esm.sh/react@19.1.0',
  'https://esm.sh/react-dom@19.1.0/client', // Assuming this is the correct React 19 client import
  'https://esm.sh/react@^19.1.0/', // For react/* imports
  'https://esm.sh/react-dom@^19.1.0/', // For react-dom/* imports
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache:', CACHE_NAME);
        const cachePromises = urlsToCache.map(urlToCache => {
          const request = new Request(urlToCache, { mode: 'cors' });
          return fetch(request)
            .then(response => {
              if (!response.ok) {
                if (new URL(urlToCache, self.location.origin).origin !== self.location.origin) {
                  console.warn(`CORS request for ${urlToCache} failed (${response.status}), trying no-cors.`);
                  return fetch(new Request(urlToCache, { mode: 'no-cors' }));
                }
                throw new Error(`Failed to fetch (same-origin) ${urlToCache}: ${response.status} ${response.statusText}`);
              }
              return response;
            })
            .then(response => {
              if (!response.ok && response.type !== 'opaque') {
                 throw new Error(`Failed to cache ${urlToCache} (not ok and not opaque): ${response.status} ${response.statusText}`);
              }
              console.log(`Caching: ${urlToCache}, Type: ${response.type}`);
              return cache.put(urlToCache, response);
            })
            .catch(err => {
              console.warn(`Skipping ${urlToCache} from cache due to error:`, err.message);
              if (urlToCache === './' || urlToCache === './index.html' || urlToCache === './index.js') {
                throw err; 
              }
              return Promise.resolve();
            });
        });
        return Promise.all(cachePromises);
      })
      .then(() => {
        console.log('All specified assets attempted to cache. Check warnings for any skips.');
      })
      .catch(err => {
        console.error('Critical caching failed during install:', err);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
          return null; // Explicitly return null for cases where no deletion occurs
        })
      );
    }).then(() => self.clients.claim()) // Ensure new service worker takes control immediately
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          networkResponse => {
            if (
              event.request.method === 'GET' &&
              networkResponse &&
              networkResponse.status === 200 &&
              (networkResponse.type === 'basic' || networkResponse.type === 'cors')
            ) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return networkResponse;
          }
        ).catch(error => {
          console.warn('Fetch failed; trying to serve from cache or offline fallback for:', event.request.url, error);
          // For navigation requests, you might return a fallback offline page if one was cached.
          // For this app, if critical assets aren't cached, it might not fully work offline.
          // Example: if (event.request.mode === 'navigate') return caches.match('./offline.html');
        });
      })
  );
});