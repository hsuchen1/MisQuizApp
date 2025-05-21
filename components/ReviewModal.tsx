
import React from 'react';
import { WrongAnswer } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  wrongAnswers: WrongAnswer[];
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, wrongAnswers }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-slate-700">Review Wrong Answers</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-grow">
          {wrongAnswers.length === 0 ? (
            <p className="text-slate-600 text-center">No wrong answers to review. Great job!</p>
          ) : (
            <ul className="space-y-6">
              {wrongAnswers.map((item, index) => (
                <li key={item.id || index} className="bg-slate-50 p-4 rounded-md shadow-sm">
                  <p className="text-sm font-semibold text-slate-500 mb-1">Mistake #{index + 1}</p>
                  <p className="text-base md:text-lg font-medium text-slate-800 mb-2">
                    <span className="font-semibold">Q:</span> {item.question}
                  </p>
                  <p className="text-base text-green-600 font-semibold">
                    <span className="font-semibold text-green-700">A:</span> {item.correct_answer}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 md:p-6 border-t border-gray-200 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
