// index.tsx
import React3 from "react";
import ReactDOM from "react-dom/client";

// App.tsx
import { useState as useState2, useEffect as useEffect2, useCallback, useRef as useRef2, useMemo } from "react";

// types.ts
var GameMode = /* @__PURE__ */ ((GameMode2) => {
  GameMode2["SINGLE"] = "single";
  GameMode2["VERSUS_DESKTOP"] = "versus_desktop";
  GameMode2["VERSUS_MOBILE"] = "versus_mobile";
  GameMode2["VERSUS_SPEED_DESKTOP"] = "versus_speed_desktop";
  GameMode2["VERSUS_SPEED_MOBILE"] = "versus_speed_mobile";
  return GameMode2;
})(GameMode || {});

// constants.ts
var ROUND_TIME_LIMIT_SECONDS = 10;
var VERSUS_ANSWER_DISPLAY_DELAY_MS = 2500;
var VERSUS_EXTRA_DELAY_MS = 3e3;
var VERSUS_SPEED_RESULT_DELAY_MS = 2e3;
var SINGLE_PLAYER_DELAY_MS = 1800;
var QUESTIONS_BANK = [
  {
    id: "q_new_1",
    question: "The four kinds of structural organizational change enabled by IT, in order from least to most risky, are:",
    options: [
      "rationalization, automation, reengineering, and redesign.",
      "rationalization, automation, reengineering, and paradigm shift.",
      "automation, rationalization, redesign, and paradigm shift.",
      "automation, redesign, restructuring, and paradigm shift.",
      "paradigm shift, reengineering, rationalization, and automation."
    ],
    correct_answer: "automation, rationalization, redesign, and paradigm shift."
  },
  {
    id: "q_new_2",
    question: "Which of the following offers the highest reward but also the most substantial chance of failure?",
    options: [
      "Business process redesign",
      "TQM",
      "Automation",
      "Six Sigma",
      "Rationalization"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Business process redesign"
  },
  {
    id: "q_new_3",
    question: "A bank has reworked its mortgage application process so that several steps are handled by computer software, and some steps are combined to reduce bottlenecks in processing. The goal is to gradually improve its efficiency over time. This is an example of:",
    options: [
      "automation.",
      "business process redesign.",
      "paradigm shift.",
      "TQM.",
      "Six Sigma."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "business process redesign."
  },
  {
    id: "q_new_4",
    question: "BPM tools help businesses do all of the following except:",
    options: [
      "integrate existing systems to support business processes improvements.",
      "capture and enforce business rules.",
      "identify and document business processes.",
      "complete a systems analysis study.",
      "create models of improved processes."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "complete a systems analysis study."
  },
  {
    id: "q_new_5",
    question: "A(n) ________ is an organizational change that involves rethinking the nature of the business and the nature of the organization itself.",
    options: [
      "automation program",
      "rationalization program",
      "systems analysis",
      "paradigm shift",
      "business process redesign program"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "paradigm shift"
  },
  {
    id: "q_new_6",
    question: "Business process redesign involves a radical rethinking of the business model.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_7",
    question: "Six Sigma describes the measurement of quality as 60 defects per million.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_8",
    question: "Which conversion process introduces the system first to a limited portion of the organization?",
    options: [
      "Pilot study strategy",
      "Phased approach strategy",
      "Limited cutover strategy",
      "Parallel strategy",
      "Audit strategy"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Pilot study strategy"
  },
  {
    id: "q_new_9",
    question: "System testing:",
    options: [
      "includes all the preparations for the series of tests to be performed on the system.",
      "tests the functioning of the system as a whole in order to determine if discrete modules will function together as planned.",
      "tests each program separately.",
      "provides the final certification that the system is ready to be used in a production setting.",
      "tests the information requirements of a system."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "tests the functioning of the system as a whole in order to determine if discrete modules will function together as planned."
  },
  {
    id: "q_new_10",
    question: "In a parallel conversion strategy, the new system:",
    options: [
      "is tested by an outsourced company.",
      "replaces the old one on an appointed day.",
      "and the old are run together for a time.",
      "is introduced only to a limited area first.",
      "is slowly converted from the old system."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "and the old are run together for a time."
  },
  {
    id: "q_new_11",
    question: "In what stage of systems development are design specifications created?",
    options: [
      "Systems analysis",
      "Systems design",
      "Testing",
      "Conversion",
      "Implementation"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Systems design"
  },
  {
    id: "q_new_12",
    question: "A(n) ________ is the model or blueprint for an information system solution and consists of all the specifications that will deliver the functions identified during systems analysis.",
    options: [
      "feasibility study",
      "data flow diagram",
      "systems design document",
      "information requirements document",
      "request for proposal"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "systems design document"
  },
  {
    id: "q_new_13",
    question: "Which of the following should drive the entire system-building effort?",
    options: [
      "Six Sigma",
      "Feasibility studies",
      "Documentation",
      "User information requirements",
      "Available information technology"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "User information requirements"
  },
  {
    id: "q_new_14",
    question: "A phased approach conversion strategy introduces a new system in stages, either by functions or organizational units.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_15",
    question: "Test plans require input from both end users and information systems specialists.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_16",
    question: "Which of the following shows the most abstract level of design, providing an overview of an entire information system?",
    options: [
      "High-level structure chart",
      "Low-level data flow diagram",
      "Process specification",
      "High-level data flow diagram",
      "Logical design diagram"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "High-level structure chart"
  },
  {
    id: "q_new_17",
    question: "In an object-oriented development framework for a university, how would the classes Degree, Mathematics, and Physics be related?",
    options: [
      "Degree would be unrelated to Mathematics and Physics.",
      "Degree is a superclass to Mathematics and Physics.",
      "Mathematics and Physics would be common ancestors to Degree.",
      "Degree would be a subclass to Mathematics and Physics.",
      "Math, Physics and Degree are sister classes."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Degree is a superclass to Mathematics and Physics."
  },
  {
    id: "q_new_18",
    // Fix: Changed question": to question:
    question: "Which of the following statements about objects is not true?",
    options: [
      "Objects belonging to a certain class have the features of that class.",
      "Classes of objects inherit all the structure and behaviors of a more general class.",
      "An object combines data and the specifications of processes that operate on those data.",
      "Programs pass data to procedures which then send a message to the object.",
      "New classes of objects are created by choosing an existing class and specifying how the new class differs from the existing class."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Programs pass data to procedures which then send a message to the object."
  },
  {
    id: "q_new_19",
    // Fix: Changed question": to question:
    question: "________ describe the transformation occurring within the lowest level of the data flow diagrams.",
    options: [
      "Design requirements",
      "Information requirements",
      "Technology design plans",
      "Object-oriented frameworks",
      "Process specifications"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Process specifications"
  },
  {
    id: "q_new_20",
    // Fix: Changed question": to question:
    question: "Objects are grouped into hierarchies, and hierarchies into classes.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_21",
    // Fix: Changed question": to question:
    question: "Structured methods handle the modeling of data better than the modeling of processes.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_22",
    // Fix: Changed question": to question:
    question: "Structured methods treat data and processes as logically separate entities.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_23",
    // Fix: Changed question": to question:
    question: "Which of the following statements about the traditional systems life cycle is not true?",
    options: [
      'the systems life cycle is predominantly a "waterfall" approach.',
      "The systems life cycle is still used for building large, complex systems.",
      "The systems life cycle approach is suitable for small desktop systems, which tend to be less structured and more individualized.",
      "The systems life cycle approach can be costly, time-consuming, and inflexible.",
      "The systems life cycle methodology is a phased approach to building a system."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "The systems life cycle approach is suitable for small desktop systems, which tend to be less structured and more individualized."
  },
  {
    id: "q_new_24",
    // Fix: Changed question": to question:
    question: "Commercial software packages often include ________ features that allow the software to be modified to meet organizational requirements.",
    options: [
      "automation",
      "object-oriented",
      "programming",
      "design",
      "customization"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "customization"
  },
  {
    id: "q_new_25",
    // Fix: Changed question": to question:
    question: "The oldest method for building information systems is",
    options: [
      "agile development.",
      "prototyping.",
      "object-oriented development.",
      "the systems life cycle.",
      "rapid application development."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "the systems life cycle."
  },
  {
    id: "q_new_26",
    // Fix: Changed question": to question:
    question: "In which type of systems building are the development stages organized so that tasks in one stage are completed before the tasks in the next stage begin?",
    options: [
      "Systems life cycle",
      "Prototyping",
      "RAD",
      "JAD",
      "Object-oriented development"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Systems life cycle"
  },
  {
    id: "q_new_27",
    // Fix: Changed question": to question:
    question: "Which of the following statements about prototyping is not true?",
    options: [
      "Prototyping is least useful when there is some uncertainty about requirements or design solutions.",
      "Prototyping replaces unplanned rework with planned iteration, with each version more accurately reflecting users' requirements.",
      "The process of developing a prototype can be broken down into four steps.",
      "Sometimes a prototype is adopted as the production version of a system.",
      "Prototyping is often used for designing an information system's end-user interface."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Prototyping is least useful when there is some uncertainty about requirements or design solutions."
  },
  {
    id: "q_new_28",
    // Fix: Changed question": to question:
    question: "Which of the following statements about outsourcing is not true?",
    options: [
      "Domestic outsourcing is much more cost-driven than offshore outsourcing.",
      "Many offshore outsourcing firms offer world-class technology assets and skills",
      "Wage inflation outside the United States has recently eroded some of the advantages of offshore outsourcing.",
      "Firms often outsource daily operation of IT systems.",
      "Hidden costs can increase the total cost of an offshore outsourcing project by an extra 15 to 57 percent."
    ],
    // Fix: Changed correct_answer": to correct_answer: and removed erroneous " - 1"
    correct_answer: "Domestic outsourcing is much more cost-driven than offshore outsourcing."
  },
  {
    id: "q_new_29",
    // Fix: Changed question": to question:
    question: "A software package evaluation process is often based on a series of detailed questions sent to vendors, called a(n):",
    options: [
      "systems design document.",
      "strategic planning document.",
      "information systems management plan.",
      "RFP.",
      "logical design document."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "RFP."
  },
  {
    id: "q_new_30",
    // Fix: Changed question": to question:
    question: "As a technical project manager, you have decided to propose implementing a prototyping methodology for a small web-based design project. What is the order of steps you will follow in this project?",
    options: [
      "Develop the prototype; use the prototype; revise and enhance the prototype.",
      "Identify basic requirements, develop the prototype, use the prototype, revise and enhance the prototype.",
      "Define the requirements, develop solutions, select the best prototype, and implement the prototype.",
      "Define the requirements, develop the prototype, revise and enhance the prototype.",
      "Select the best prototype, define the requirements, and implement the prototype."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Identify basic requirements, develop the prototype, use the prototype, revise and enhance the prototype."
  },
  {
    id: "q_new_31",
    // Fix: Changed question": to question:
    question: "The systems life cycle methodology maintains a formal division of labor between end users and information systems specialists.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_32",
    // Fix: Changed question": to question:
    question: "A prototype is a working version of an information system that serves as the final version.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_33",
    // Fix: Changed question": to question:
    question: "Firms generally do not outsource the conception, systems analysis, and design of IT systems to offshore firms.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_34",
    // Fix: Changed question": to question:
    question: "Cloud computing is a form of outsourcing.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_35",
    // Fix: Changed question": to question:
    question: "A native mobile app is:",
    options: [
      "a mobile website.",
      "a mobile web app.",
      "a standalone application that does not use a browser.",
      "a responsive mobile app.",
      "one that can operate on all platforms and devices."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "a standalone application that does not use a browser."
  },
  {
    id: "q_new_36",
    // Fix: Changed question": to question:
    question: `A "responsive design" for mobile applications is a design that responds to a user's:`,
    options: [
      "needs.",
      "location.",
      "voice commands.",
      "digital device and screen resolution.",
      "gestures."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "digital device and screen resolution."
  },
  {
    id: "q_new_37",
    // Fix: Changed question": to question:
    question: "Which of the following is not a true statement about native mobile apps?",
    options: [
      "A native app is installed directly on a mobile device.",
      "Native apps can only operate if they are connected to the Internet",
      "Native mobile apps provide fast performance.",
      "Native mobile apps provide a high degree of reliability.",
      "The Kindle e-reading app is an example of a native mobile app."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Native apps can only operate if they are connected to the Internet"
  },
  {
    id: "q_new_38",
    // Fix: Changed question": to question:
    question: "________ development focuses on rapid delivery of working software by breaking a large project into a series of small subprojects that are completed in short periods of time using iteration, continuous feedback and ongoing user development.",
    options: [
      "Agile",
      "No-code",
      "Low-code",
      "Traditional systems life cycle",
      "DevOps"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Agile"
  },
  {
    id: "q_new_39",
    // Fix: Changed question": to question:
    question: "The process of creating workable information systems in a very short period of time with some flexibility to adapt as a project evolves is called:",
    options: [
      "RAD.",
      "JAD.",
      "object-oriented development.",
      "systems analysis and design.",
      "No-code development."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "RAD."
  },
  {
    id: "q_new_40",
    // Fix: Changed question": to question:
    question: "Which of the following is not a feature of agile development?",
    options: [
      "Sprints",
      "Waterfall approach",
      "Continuous integration",
      "Cross-functional teams",
      "Early testing"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Waterfall approach"
  },
  {
    id: "q_new_41",
    // Fix: Changed question": to question:
    question: "Which of the following statements about mobile web apps is true?",
    options: [
      "Users access mobile web apps through their mobile device's web browser.",
      "A mobile web app resides on the user's device.",
      "A mobile web app only works on certain mobile platforms.",
      "A mobile web app requires the user to sign onto a web page.",
      "A mobile web app requires the user to login to a web service."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Users access mobile web apps through their mobile device's web browser."
  },
  {
    id: "q_new_42",
    // Fix: Changed question": to question:
    question: "Many no-code applications have very limited functionality.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_43",
    // Fix: Changed question": to question:
    question: "DevOps helps developers at Netflix make hundreds of software changes every day.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_44",
    // Fix: Changed question": to question:
    question: "Which of the following best describes the central method used in a portfolio analysis?",
    options: [
      "Performing an inventory of all of the organization's information systems projects and assets",
      "Performing a weighted comparison of the criteria used to evaluate a system",
      "Surveying a large sample of managers on their objectives, decision-making process, and uses and needs for data and information",
      "Interviewing a small number of top managers to identify their goals and criteria for achieving success",
      "Scoring proposed systems on a number of dimensions, and selecting the one with the highest score"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Performing an inventory of all of the organization's information systems projects and assets"
  },
  {
    id: "q_new_45",
    // Fix: Changed question": to question:
    question: "A firm in the finance industry should do which of the following to ensure that it stays current with technology?",
    options: [
      "Select only low-cost, low risk projects",
      "Limit work to those projects with great rewards",
      "Select only low-risk, high-reward projects",
      "Have a few high-risk, high-benefit projects",
      "Avoid projects that are very costly"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Have a few high-risk, high-benefit projects"
  },
  {
    id: "q_new_46",
    // Fix: Changed question": to question:
    question: "Which of the following best describes the central method used in a scoring model?",
    options: [
      "Performing an inventory of all of the organization's information systems projects and assets",
      "Performing a weighted comparison of the criteria used to evaluate a system",
      "Surveying a large sample of managers on their objectives, decision-making process, and uses and needs for data and information",
      "Interviewing a small number of top managers to identify their goals and criteria for achieving success",
      "Calculating the return on investment for each system, and choosing the system with the best return"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Performing a weighted comparison of the criteria used to evaluate a system"
  },
  {
    id: "q_new_47",
    // Fix: Changed question": to question:
    question: "Which method is used to assign weights to various features of a system?",
    options: [
      "Information systems plan",
      "Scoring model",
      "Portfolio analysis",
      "TCO analysis",
      "Capital budget"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Scoring model"
  },
  {
    id: "q_new_48",
    // Fix: Changed question": to question:
    question: "Which of the following statements about scoring models is not true?",
    options: [
      "There are many qualitative judgments involved in using a scoring model.",
      "A scoring model is useful for selecting projects where many criteria must be considered.",
      "The most important outcome of a scoring model is the score.",
      "Agreement on the criteria used in a scoring model often requires lengthy discussions among the decision-making group.",
      "Weights assigned in a scoring model indicate which criteria are considered the most important by the decision-making group."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "The most important outcome of a scoring model is the score."
  },
  {
    id: "q_new_49",
    // Fix: Changed question": to question:
    question: "Which of the following strategies represents the proper approach to a low risk, high reward project?",
    options: [
      "Identify and develop",
      "Avoid",
      "Treat as a routine project",
      "Pursue after all other projects are complete",
      "Cautiously examine"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Identify and develop"
  },
  {
    id: "q_new_50",
    // Fix: Changed question": to question:
    question: "The value of systems from a financial perspective essentially revolves around the issue of:",
    options: [
      "total cost of ownership.",
      "adherence to information requirements.",
      "asset utilization.",
      "return on invested capital.",
      "the cost of computing equipment."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "return on invested capital."
  },
  {
    id: "q_new_51",
    // Fix: Changed question": to question:
    question: "Which of the following is not a tangible benefit of information systems?",
    options: [
      "Reduced rate of growth in expenses",
      "Lower computer expenses",
      "Improved resource control",
      "Increased productivity",
      "Reduced facility costs"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Improved resource control"
  },
  {
    id: "q_new_52",
    // Fix: Changed question": to question:
    question: "The principal capital budgeting models for evaluating information technology projects are the payback method, the accounting rate of return on investment (ROI), net present value, and the:",
    options: [
      "future present value.",
      "internal rate of return.",
      "external rate of return.",
      "ROPM (real options pricing model).",
      "present value of future cash flows."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "internal rate of return."
  },
  {
    id: "q_new_53",
    // Fix: Changed question": to question:
    question: "Enhanced employee goodwill falls under what category of costs and benefits of information systems?",
    options: [
      "Costs",
      "Tangible benefits",
      "Cost savings",
      "Intangible costs",
      "Intangible benefits"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Intangible benefits"
  },
  {
    id: "q_new_54",
    // Fix: Changed question": to question:
    question: "Which of the following is a limitation of using a financial approach to evaluate information systems?",
    options: [
      "Inability to measure ROI",
      "Inability to control vendor costs",
      "Inability to assess risk",
      "Inability to assess costs from organizational disruption",
      "Inability to assess the cost of technology"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Inability to assess costs from organizational disruption"
  },
  {
    id: "q_new_55",
    // Fix: Changed question": to question:
    question: "________ methods rely on measures of cash flows into and out of the firm.",
    options: [
      "Scoring model",
      "Portfolio analysis",
      "Real options pricing",
      "Capital budgeting",
      "Risk profiling"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Capital budgeting"
  },
  {
    id: "q_new_56",
    // Fix: Changed question": to question:
    question: "Which of the following is not one of the seven major factors that should be addressed when making the business case for a specific new information system?",
    options: [
      "Improved decision making",
      "Survival",
      "Results of a portfolio analysis of alternative solutions",
      "Customer and supplier relationships",
      "New products and services"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Results of a portfolio analysis of alternative solutions"
  },
  {
    id: "q_new_57",
    // Fix: Changed question": to question:
    question: "A business case does all of the following except:",
    options: [
      "describe the rationale for proceeding with an investment.",
      "show how the investment supports the firm's strategic goals.",
      "detail the specific hardware and software needed to implement the investment.",
      "explain how the investment will provide value for the business.",
      "identify any risks that could negatively affect outcomes."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "detail the specific hardware and software needed to implement the investment."
  },
  {
    id: "q_new_58",
    // Fix: Changed question": to question:
    question: "An information systems plan contains a statement of corporate goals and specifies how information technology will support the attainment of those goals.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_59",
    // Fix: Changed question": to question:
    question: "An information systems plan focuses solely on the technology needed to implement the proposed new information system.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_60",
    // Fix: Changed question": to question:
    question: "Transaction and clerical systems that displace labor and save space typically produce less tangible benefits than management information systems.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_61",
    // Fix: Changed question": to question:
    question: "Intangible benefits may lead to quantifiable gains in the long run.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_62",
    // Fix: Changed question": to question:
    question: 'A benefit of using TCO analysis to evaluate an information technology investment is that it is able to incorporate intangible and "soft" factors such as benefits and complexity costs.',
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_63",
    // Fix: Changed question": to question:
    question: "More timely information is an intangible benefit of information systems.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_64",
    // Fix: Changed question": to question:
    question: "As discussed in the chapter, which of the following is not one of the immediate consequences of inadequate software project management?",
    options: [
      "Cost overruns",
      "Reduced workforce",
      "Time slippage",
      "Technical shortfalls",
      "Failure to obtain anticipated benefits"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Reduced workforce"
  },
  {
    id: "q_new_65",
    // Fix: Changed question": to question:
    question: "All of the following are indications of a failed information systems project except:",
    options: [
      "employees are refusing to switch to the new system.",
      "employees have created a spreadsheet solution to manipulate the data generated by the system.",
      "a redesigned website has fewer visits to the customer support pages.",
      "employees require training to properly use the system.",
      "the system is not being used by anyone."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "employees require training to properly use the system."
  },
  {
    id: "q_new_66",
    // Fix: Changed question": to question:
    question: "As described in the text, which of the following statements about runaway or failed IT projects is not true?",
    options: [
      "Large software projects on average run 33 percent over schedule.",
      "Large software projects on average run 66 percent over budget.",
      "50% of businesses have experienced IT project failure in the last year.",
      "IT projects often fail because they lack sufficient computing capacity.",
      "One study found that private sector projects underestimate costs and time required by half."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "IT projects often fail because they lack sufficient computing capacity."
  },
  {
    id: "q_new_67",
    // Fix: Changed question": to question:
    question: "The cost of a project is based solely on the time to complete a project multiplied by the cost of computer resources required to complete the project.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_68",
    // Fix: Changed question": to question:
    question: "Project management refers to the application of knowledge, skills, tools, and techniques to achieve specific targets within specified budget and time constraints.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_69",
    // Fix: Changed question": to question:
    question: "Risk is an important variable that project management must deal with.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_70",
    // Fix: Changed question": to question:
    question: "Successful system building requires careful ________ management to minimize organizational resistance.",
    options: [
      "cost",
      "technology",
      "change",
      "supply chain",
      "system application"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "change"
  },
  {
    id: "q_new_71",
    // Fix: Changed question": to question:
    question: "The differing background between users and information systems specialists is referred to as the:",
    options: [
      "user expertise gap.",
      "information system specialist inefficiency.",
      "user-designer paradigm.",
      "user-designer expertise gap.",
      "user-designer communications gap."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "user-designer communications gap."
  },
  {
    id: "q_new_72",
    // Fix: Changed question": to question:
    question: "While users are concerned about an information system delivering the information needed for work, designers might be concerned about:",
    options: [
      "accessing the data on iPhones and tablets.",
      "the procedures required to enter data into the system.",
      "how operation of the system will change their daily routines.",
      "what demands the system will place on the company servers.",
      "opening lines of communication with end users."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "what demands the system will place on the company servers."
  },
  {
    id: "q_new_73",
    // Fix: Changed question": to question:
    question: "Which of the following statements best describes the effect that project structure has on overall project risk?",
    options: [
      "Highly structured projects are more complex and run a higher risk of programmers and users misunderstanding the ultimate goals.",
      "Projects with relatively undefined goals are more likely to be subjected to users changing requirements and to run a higher risk of not satisfying project goals.",
      "Highly structured projects tend to be larger, affecting more organizational units, and run both the risk of out-of-control costs and becoming too difficult to control.",
      "Less structured projects pose less risk of running up unforeseen costs.",
      "The less structured a project, the higher the likelihood that its outputs and processes can be easily defined."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Projects with relatively undefined goals are more likely to be subjected to users changing requirements and to run a higher risk of not satisfying project goals."
  },
  {
    id: "q_new_74",
    // Fix: Changed question": to question:
    question: "Which of the following statements about project risk is not true?",
    options: [
      "The more dollars spent on a project, the greater the risk.",
      "The higher the number of implementation staff on a project, the lower the risk.",
      "The higher the number of organizational units affected by a project, the greater the risk.",
      "Very large-scale systems project have a failure rate that is 50 to 75 percent higher than that for other projects.",
      "The organizational complexity of a system contributes to the complexity of large-scale systems projects."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "The higher the number of implementation staff on a project, the lower the risk."
  },
  {
    id: "q_new_75",
    // Fix: Changed question": to question:
    question: "Which of the following types of projects have a higher likelihood of failure?",
    options: [
      "Creating a spreadsheet-based payroll register.",
      "Upgrading a contact management system based on a software package to the most recent version",
      "Very large-scale or complex systems projects",
      "Redesigning a user interface to an online investment site",
      "Building a web-based interface to an existing system"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Very large-scale or complex systems projects"
  },
  {
    id: "q_new_76",
    // Fix: Changed question": to question:
    question: "Which of the following is not a factor in the high failure rate of reengineering systems projects?",
    options: [
      "Employees' concerns about change",
      "Resistance by key managers",
      "Changes in career paths signaled by the new system",
      "Changes in job descriptions signaled by the new system",
      "Failures of the new technologies to perform according to plan"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Failures of the new technologies to perform according to plan"
  },
  {
    id: "q_new_77",
    // Fix: Changed question": to question:
    question: "The relationship between users and information systems specialists has traditionally been a problem area for information systems implementation efforts.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_78",
    // Fix: Changed question": to question:
    question: "User concerns and designer concerns are usually the same at the beginning of the project but may diverge later as the system is built.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_79",
    // Fix: Changed question": to question:
    question: "Project management software typically has all of the following capabilities except:",
    options: [
      "identifying and quantifying project risk.",
      "assigning resources to tasks.",
      "tracking progress at both individual and team levels.",
      "establishing starting and ending dates for tasks.",
      "facilitating modifications to tasks and resources."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "identifying and quantifying project risk."
  },
  {
    id: "q_new_80",
    // Fix: Changed question": to question:
    question: "Which type of planning tool shows each task as a horizontal bar whose length is proportional to the time required to complete it?",
    options: [
      "PERT chart",
      "Gantt chart",
      "Both a PERT chart and a Gannt chart",
      "Scoring model",
      "Portfolio analysis"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Gantt chart"
  },
  {
    id: "q_new_81",
    // Fix: Changed question": to question:
    question: "To review a project's tasks and their interrelationships, you would use which of the following?",
    options: [
      "PERT chart",
      "Gantt chart",
      "PERT chart or a Gantt chart",
      "Scoring model",
      "Portfolio analysis"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "PERT chart"
  },
  {
    id: "q_new_82",
    // Fix: Changed question": to question:
    question: "Which of the following helps project managers identify bottlenecks in project development?",
    options: [
      "Internal integration tools",
      "External integration tools",
      "Formal planning and control tools",
      "Both internal and external integration tools",
      "Portfolio analysis tools"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Formal planning and control tools"
  },
  {
    id: "q_new_83",
    // Fix: Changed question": to question:
    question: "Which of the following is an example of using an external integration tool?",
    options: [
      "Creating a Gantt chart",
      "Including user representatives as active members of the project team",
      "Creating a PERT chart",
      "Using portfolio analysis",
      "Developing a scoring model"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Including user representatives as active members of the project team"
  },
  {
    id: "q_new_84",
    // Fix: Changed question": to question:
    question: "You have been hired to implement an enterprise system that will automate much of the billing and accounting work for a statewide HVAC services company. Which of the following would you prepare to describe how the new system will affect a firm's structure and operations?",
    options: [
      "Information systems plan",
      "Internal integration report",
      "Sociotechnical design report",
      "Organizational impact analysis",
      "Strategic planning document"
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "Organizational impact analysis"
  },
  {
    id: "q_new_85",
    // Fix: Changed question": to question:
    question: "Counterimplementation is best defined as:",
    options: [
      "multiple implementations that are run in parallel.",
      "deliberate attempts to thwart the implementation of a system.",
      "critiquing the implementation of a system constructively.",
      "all of the organizational challenges involved in implementing a system.",
      "strategies used to overcome user resistance to change."
    ],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "deliberate attempts to thwart the implementation of a system."
  },
  {
    id: "q_new_86",
    // Fix: Changed question": to question:
    question: "Mandatory use of a system is one effective way of overcoming user resistance to an information system.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  },
  {
    id: "q_new_87",
    // Fix: Changed question": to question:
    question: "Increased error rates may be a sign of user resistance to a new system.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_88",
    // Fix: Changed question": to question:
    question: "The design of jobs, health issues, and the end-user interface of information systems are all considerations in the field of ergonomics.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u662F"
  },
  {
    id: "q_new_89",
    // Fix: Changed question": to question:
    question: "The goal of sociotechnical design is to create systems where the organization changes to fit the requirements of the technology.",
    options: ["\u662F", "\u975E"],
    // Fix: Changed correct_answer": to correct_answer:
    correct_answer: "\u975E"
  }
];
var TOTAL_QUESTIONS_AVAILABLE = QUESTIONS_BANK.length;
var PLAYER_COLORS = {
  p1: "text-blue-600",
  p2: "text-orange-600",
  default: "text-gray-700"
};
var FEEDBACK_COLORS = {
  correct: "text-green-600",
  wrong: "text-red-600",
  timer: "text-gray-500",
  timeout: "text-amber-600"
};
var BUTTON_COLORS = {
  default: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  correct: "bg-green-500 hover:bg-green-600 text-white",
  wrong: "bg-red-500 hover:bg-red-600 text-white",
  highlightCorrect: "bg-lime-300 text-black"
};

// components/StartScreen.tsx
import { useState, useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var getModeDisplayName = (mode) => {
  switch (mode) {
    case "single" /* SINGLE */:
      return "\u55AE\u4EBA\u6A21\u5F0F";
    case "versus_desktop" /* VERSUS_DESKTOP */:
      return "\u96D9\u4EBA\u5C0D\u6230 (\u96FB\u8166)";
    case "versus_mobile" /* VERSUS_MOBILE */:
      return "\u96D9\u4EBA\u5C0D\u6230 (\u884C\u52D5\u88DD\u7F6E)";
    case "versus_speed_desktop" /* VERSUS_SPEED_DESKTOP */:
      return "\u96D9\u4EBA\u7AF6\u901F (\u96FB\u8166)";
    case "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */:
      return "\u96D9\u4EBA\u7AF6\u901F (\u884C\u52D5\u88DD\u7F6E)";
    default:
      const modeAsString = mode;
      return modeAsString.replace(/_/g, " ").split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  }
};
var StartScreen = ({ onStartGame, totalAvailableQuestions }) => {
  const [selectedMode, setSelectedMode] = useState("single" /* SINGLE */);
  const [numQuestions, setNumQuestions] = useState("10");
  const numQuestionsInputRef = useRef(null);
  useEffect(() => {
    if (numQuestionsInputRef.current) {
      numQuestionsInputRef.current.focus();
    }
  }, []);
  const handleStart = () => {
    const num = parseInt(numQuestions, 10);
    if (isNaN(num) || num <= 0) {
      alert("\u8ACB\u8F38\u5165\u6709\u6548\u7684\u6B63\u6574\u6578\u4F5C\u70BA\u984C\u76EE\u6578\u91CF\u3002");
      return;
    }
    if (num > totalAvailableQuestions) {
      alert(`\u76EE\u524D\u984C\u5EAB\u53EA\u6709 ${totalAvailableQuestions} \u984C\u3002\u5C07\u4EE5 ${totalAvailableQuestions} \u984C\u958B\u59CB\u3002`);
      onStartGame(selectedMode, totalAvailableQuestions);
    } else {
      onStartGame(selectedMode, num);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleStart();
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center min-h-screen bg-amber-50 p-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-lg text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-slate-700 mb-6", children: "\u{1F9E0} \u8CC7\u7BA1\u5C0E\u5927\u6311\u6230 \u{1F9E0}" }),
    /* @__PURE__ */ jsxs("p", { className: "text-slate-600 mb-8 text-base md:text-lg", children: [
      "\u7E3D\u984C\u6578: ",
      totalAvailableQuestions
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-slate-700 mb-3", children: "\u9078\u64C7\u6A21\u5F0F:" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: Object.values(GameMode).map((mode) => /* @__PURE__ */ jsxs("label", { className: `flex items-center space-x-2 p-3 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer transition-colors ${selectedMode === mode ? "ring-2 ring-blue-500 bg-blue-50" : ""}`, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            name: "gameMode",
            value: mode,
            checked: selectedMode === mode,
            onChange: () => setSelectedMode(mode),
            className: "form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-slate-700 text-sm md:text-base", children: getModeDisplayName(mode) })
      ] }, mode)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "numQuestions", className: "block text-xl font-semibold text-slate-700 mb-3", children: "\u984C\u76EE\u6578\u91CF:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          id: "numQuestions",
          ref: numQuestionsInputRef,
          value: numQuestions,
          onChange: (e) => setNumQuestions(e.target.value),
          onKeyDown: handleKeyPress,
          min: "1",
          max: totalAvailableQuestions.toString(),
          className: "w-1/2 sm:w-1/3 p-3 text-center border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleStart,
        className: "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg text-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
        children: "\u958B\u59CB\u6311\u6230"
      }
    )
  ] }) });
};
var StartScreen_default = StartScreen;

// components/GameScreen.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var KeyHint = ({ gameMode }) => {
  let hintText = "";
  if (gameMode === "single" /* SINGLE */) {
    hintText = "\u63D0\u793A\uFF1A\u4F7F\u7528\u6578\u5B57\u9375 1-5 \u56DE\u7B54\u3002";
  } else if (gameMode === "versus_desktop" /* VERSUS_DESKTOP */) {
    hintText = "\u73A9\u5BB61: QWEAS | \u73A9\u5BB62: 12345 (\u5148\u7B54\u8005\u555F\u52D5\u53E6\u4E00\u4F4D\u73A9\u5BB6\u7684 10 \u79D2\u8A08\u6642)";
  } else if (gameMode === "versus_speed_desktop" /* VERSUS_SPEED_DESKTOP */) {
    hintText = "\u73A9\u5BB61: QWEAS | \u73A9\u5BB62: 12345 (\u7AF6\u901F\u8CFD - \u5148\u6436\u5148\u8D0F\uFF01)";
  } else if (gameMode === "versus_mobile" /* VERSUS_MOBILE */) {
    hintText = "\u73A9\u5BB61\uFF1A\u9EDE\u64CA\u5DE6\u5074 | \u73A9\u5BB62\uFF1A\u9EDE\u64CA\u53F3\u5074 (\u5148\u7B54\u8005\u555F\u52D5\u53E6\u4E00\u4F4D\u73A9\u5BB6\u7684 10 \u79D2\u8A08\u6642)";
  } else if (gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */) {
    hintText = "\u73A9\u5BB61\uFF1A\u9EDE\u64CA\u5DE6\u5074 | \u73A9\u5BB62\uFF1A\u9EDE\u64CA\u53F3\u5074 (\u7AF6\u901F\u8CFD - \u5148\u6436\u5148\u8D0F\uFF01)";
  }
  return hintText ? /* @__PURE__ */ jsx2("p", { className: "text-sm italic text-gray-500 mt-4 text-center", children: hintText }) : null;
};
var GameScreen = (props) => {
  const {
    gameMode,
    currentQuestion,
    questionNumber,
    totalQuestions,
    player1Score,
    player2Score,
    singlePlayerScore,
    wrongAnswersCount,
    onAnswer,
    timerSecondsLeft,
    feedbackMessage,
    p1Feedback,
    p2Feedback,
    player1Choice,
    player2Choice,
    isRoundEvaluated,
    isSinglePlayerButtonsEnabled,
    player1Answered,
    player2Answered,
    roundFirstAnswerBy,
    onGoToHome
  } = props;
  if (!currentQuestion) {
    return /* @__PURE__ */ jsx2("div", { className: "flex items-center justify-center h-screen text-xl", children: "\u8F09\u5165\u984C\u76EE\u4E2D..." });
  }
  const isMobileVersus = gameMode === "versus_mobile" /* VERSUS_MOBILE */ || gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */;
  const getDesktopButtonClass = (option) => {
    let baseClass = "font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out w-full text-left flex items-center space-x-3 text-sm md:text-base";
    if (gameMode === "single" /* SINGLE */) {
      if (!isSinglePlayerButtonsEnabled && isRoundEvaluated) {
        if (option === currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.correct}`;
        if (option === player1Choice && option !== currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.wrong}`;
        return `${baseClass} ${BUTTON_COLORS.default}`;
      }
      return `${baseClass} ${isSinglePlayerButtonsEnabled ? BUTTON_COLORS.default : BUTTON_COLORS.disabled}`;
    } else {
      if (isRoundEvaluated) {
        if (option === currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.highlightCorrect}`;
        if (option === player1Choice && option !== currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.wrong}`;
        if (option === player2Choice && option !== currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.wrong}`;
        return `${baseClass} ${BUTTON_COLORS.default}`;
      }
      return `${baseClass} ${BUTTON_COLORS.default}`;
    }
  };
  const getMobileButtonClass = (option, playerContext) => {
    let baseClass = "font-semibold py-2 px-3 md:py-3 md:px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out w-full text-left flex items-start space-x-2 md:space-x-3 text-xs sm:text-sm md:text-base";
    if (isRoundEvaluated) {
      const actualPlayerChoice = playerContext === "p1" /* PLAYER1 */ ? player1Choice : player2Choice;
      if (option === currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.highlightCorrect}`;
      if (option === actualPlayerChoice && option !== currentQuestion.correct_answer) return `${baseClass} ${BUTTON_COLORS.wrong}`;
      return `${baseClass} ${BUTTON_COLORS.default}`;
    }
    if (gameMode === "versus_mobile" /* VERSUS_MOBILE */) {
      if (playerContext === "p1" /* PLAYER1 */ && player1Answered) return `${baseClass} ${BUTTON_COLORS.disabled}`;
      if (playerContext === "p2" /* PLAYER2 */ && player2Answered) return `${baseClass} ${BUTTON_COLORS.disabled}`;
    } else if (gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */) {
      if (roundFirstAnswerBy) return `${baseClass} ${BUTTON_COLORS.disabled}`;
    }
    return `${baseClass} ${BUTTON_COLORS.default}`;
  };
  return /* @__PURE__ */ jsx2("div", { className: "flex flex-col items-center justify-start min-h-screen bg-amber-50 p-2 pt-4 sm:p-4 sm:pt-8 md:p-6", children: /* @__PURE__ */ jsxs2("div", { className: "bg-white shadow-xl rounded-lg p-3 md:p-8 w-full max-w-3xl", children: [
    /* @__PURE__ */ jsxs2("div", { className: "mb-4 md:mb-6 flex flex-row justify-between items-center text-sm md:text-base font-semibold", children: [
      /* @__PURE__ */ jsx2("div", { className: "flex flex-col sm:flex-row sm:items-center sm:space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-4", children: gameMode === "single" /* SINGLE */ ? /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsxs2("span", { className: `${PLAYER_COLORS.default}`, children: [
          "\u5206\u6578: ",
          singlePlayerScore
        ] }),
        /* @__PURE__ */ jsxs2("span", { className: `${PLAYER_COLORS.default}`, children: [
          "\u9032\u5EA6: ",
          questionNumber,
          "/",
          totalQuestions
        ] }),
        /* @__PURE__ */ jsxs2("span", { className: `${FEEDBACK_COLORS.wrong}`, children: [
          "\u7B54\u932F: ",
          wrongAnswersCount
        ] })
      ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsxs2("span", { className: `${PLAYER_COLORS.p1}`, children: [
          "\u73A9\u5BB61: ",
          player1Score
        ] }),
        /* @__PURE__ */ jsxs2("span", { className: `${PLAYER_COLORS.default}`, children: [
          "\u984C: ",
          questionNumber,
          "/",
          totalQuestions
        ] }),
        /* @__PURE__ */ jsxs2("span", { className: `${PLAYER_COLORS.p2}`, children: [
          "\u73A9\u5BB62: ",
          player2Score
        ] })
      ] }) }),
      /* @__PURE__ */ jsx2(
        "button",
        {
          onClick: onGoToHome,
          className: "bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 sm:py-1.5 sm:px-3 rounded-md text-xs sm:text-sm shadow-sm hover:shadow transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 ml-2 sm:ml-4 shrink-0",
          "aria-label": "\u56DE\u5230\u4E3B\u756B\u9762",
          children: "\u56DE\u5230\u4E3B\u756B\u9762"
        }
      )
    ] }),
    (gameMode === "versus_desktop" /* VERSUS_DESKTOP */ || gameMode === "versus_mobile" /* VERSUS_MOBILE */) && timerSecondsLeft !== void 0 && timerSecondsLeft < ROUND_TIME_LIMIT_SECONDS && /* @__PURE__ */ jsxs2("p", { className: `text-center text-lg font-bold my-2 ${timerSecondsLeft <= 3 ? FEEDBACK_COLORS.timeout : FEEDBACK_COLORS.timer}`, children: [
      "\u5269\u9918\u6642\u9593: ",
      timerSecondsLeft,
      "\u79D2"
    ] }),
    /* @__PURE__ */ jsx2("div", { className: "bg-slate-100 p-3 md:p-6 rounded-lg mb-4 md:mb-6 min-h-[80px] md:min-h-[100px] flex items-center justify-center", children: /* @__PURE__ */ jsx2("p", { className: "text-md md:text-xl text-slate-800 text-center break-words", children: currentQuestion.question }) }),
    isMobileVersus ? /* @__PURE__ */ jsxs2("div", { className: "flex flex-row gap-2 md:gap-4 mb-4", children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex-1 flex flex-col gap-1.5 md:gap-3", children: [
        /* @__PURE__ */ jsx2("h3", { className: `text-center font-semibold ${PLAYER_COLORS.p1} mb-1 md:mb-2 text-sm md:text-base`, children: "\u73A9\u5BB61" }),
        currentQuestion.options.map((option, index) => /* @__PURE__ */ jsxs2(
          "button",
          {
            onClick: () => {
              if (isRoundEvaluated) return;
              if (gameMode === "versus_mobile" /* VERSUS_MOBILE */ && !player1Answered) {
                onAnswer(option, "p1" /* PLAYER1 */);
              } else if (gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */ && !roundFirstAnswerBy) {
                onAnswer(option, "p1" /* PLAYER1 */);
              }
            },
            disabled: isRoundEvaluated || gameMode === "versus_mobile" /* VERSUS_MOBILE */ && player1Answered || gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */ && !!roundFirstAnswerBy,
            className: getMobileButtonClass(option, "p1" /* PLAYER1 */),
            "aria-label": `\u73A9\u5BB61, \u9078\u9805 ${index + 1}: ${option}`,
            children: [
              /* @__PURE__ */ jsx2("span", { className: "bg-black/10 text-black/70 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5", children: index + 1 }),
              /* @__PURE__ */ jsx2("span", { className: "flex-grow break-words min-w-0", children: option })
            ]
          },
          `p1-${currentQuestion.id}-${option}`
        ))
      ] }),
      /* @__PURE__ */ jsx2("div", { className: "w-px bg-slate-300 mx-1" }),
      " ",
      /* @__PURE__ */ jsxs2("div", { className: "flex-1 flex flex-col gap-1.5 md:gap-3", children: [
        /* @__PURE__ */ jsx2("h3", { className: `text-center font-semibold ${PLAYER_COLORS.p2} mb-1 md:mb-2 text-sm md:text-base`, children: "\u73A9\u5BB62" }),
        currentQuestion.options.map((option, index) => /* @__PURE__ */ jsxs2(
          "button",
          {
            onClick: () => {
              if (isRoundEvaluated) return;
              if (gameMode === "versus_mobile" /* VERSUS_MOBILE */ && !player2Answered) {
                onAnswer(option, "p2" /* PLAYER2 */);
              } else if (gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */ && !roundFirstAnswerBy) {
                onAnswer(option, "p2" /* PLAYER2 */);
              }
            },
            disabled: isRoundEvaluated || gameMode === "versus_mobile" /* VERSUS_MOBILE */ && player2Answered || gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */ && !!roundFirstAnswerBy,
            className: getMobileButtonClass(option, "p2" /* PLAYER2 */),
            "aria-label": `\u73A9\u5BB62, \u9078\u9805 ${index + 1}: ${option}`,
            children: [
              /* @__PURE__ */ jsx2("span", { className: "bg-black/10 text-black/70 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5", children: index + 1 }),
              /* @__PURE__ */ jsx2("span", { className: "flex-grow break-words min-w-0", children: option })
            ]
          },
          `p2-${currentQuestion.id}-${option}`
        ))
      ] })
    ] }) : /* @__PURE__ */ jsx2("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4", children: currentQuestion.options.map((option, index) => /* @__PURE__ */ jsxs2(
      "button",
      {
        onClick: () => gameMode === "single" /* SINGLE */ && isSinglePlayerButtonsEnabled && onAnswer(option),
        disabled: isRoundEvaluated || gameMode === "single" /* SINGLE */ && !isSinglePlayerButtonsEnabled,
        className: getDesktopButtonClass(option),
        "aria-label": `\u9078\u9805 ${index + 1}: ${option}`,
        children: [
          /* @__PURE__ */ jsx2("span", { className: "bg-black/10 text-black/70 rounded-full w-6 h-6 flex items-center justify-center text-xs font-mono shrink-0", children: index + 1 }),
          /* @__PURE__ */ jsx2("span", { children: option })
        ]
      },
      `${currentQuestion.id}-${option}`
    )) }),
    /* @__PURE__ */ jsxs2("div", { className: "min-h-[60px] md:min-h-[80px] flex flex-col items-center justify-center", children: [
      gameMode !== "single" /* SINGLE */ && /* @__PURE__ */ jsxs2("div", { className: "w-full flex justify-between text-xs sm:text-sm md:text-base font-semibold mb-2", children: [
        /* @__PURE__ */ jsx2("span", { className: `${p1Feedback.includes("\u6B63\u78BA") ? FEEDBACK_COLORS.correct : p1Feedback.includes("\u7B54\u932F") || p1Feedback.includes("\u8D85\u6642") ? FEEDBACK_COLORS.wrong : PLAYER_COLORS.p1} ${p1Feedback.includes("\u5DF2\u4F5C\u7B54") ? "animate-pulse" : ""} w-1/2 text-left`, children: p1Feedback }),
        /* @__PURE__ */ jsx2("span", { className: `${p2Feedback.includes("\u6B63\u78BA") ? FEEDBACK_COLORS.correct : p2Feedback.includes("\u7B54\u932F") || p2Feedback.includes("\u8D85\u6642") ? FEEDBACK_COLORS.wrong : PLAYER_COLORS.p2} ${p2Feedback.includes("\u5DF2\u4F5C\u7B54") ? "animate-pulse" : ""} w-1/2 text-right`, children: p2Feedback })
      ] }),
      feedbackMessage && /* @__PURE__ */ jsx2("p", { className: `text-center text-sm md:text-lg font-bold 
                ${feedbackMessage.includes("\u6B63\u78BA") ? FEEDBACK_COLORS.correct : ""}
                ${feedbackMessage.includes("\u932F") || feedbackMessage.includes("\u4E0D\u6B63\u78BA") ? FEEDBACK_COLORS.wrong : ""}
                ${feedbackMessage.includes("\u6642\u9593\u5230") || feedbackMessage.includes("\u8D85\u6642") ? FEEDBACK_COLORS.timeout : ""}
              `, children: feedbackMessage })
    ] }),
    /* @__PURE__ */ jsx2(KeyHint, { gameMode })
  ] }) });
};
var GameScreen_default = GameScreen;

// components/GameOverScreen.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var GameOverScreen = ({
  gameMode,
  player1Score,
  player2Score,
  singlePlayerScore,
  wrongAnswerCount,
  totalQuestionsAnswered,
  targetQuestions,
  onRestart,
  onReviewWrongAnswers,
  canReview
}) => {
  let M_message = `\u6311\u6230\u5B8C\u6210: ${totalQuestionsAnswered}/${targetQuestions} \u984C`;
  let scoreMessage = "";
  let winnerMessage = "";
  if (gameMode === "single" /* SINGLE */) {
    scoreMessage = `\u6700\u7D42\u5206\u6578: ${singlePlayerScore} | \u7B54\u932F\u984C\u6578: ${wrongAnswerCount}`;
  } else {
    scoreMessage = `\u6700\u7D42\u5206\u6578 -> \u73A9\u5BB61: ${player1Score} | \u73A9\u5BB62: ${player2Score}`;
    if (player1Score > player2Score) {
      winnerMessage = "\u{1F3C6} \u73A9\u5BB61 \u7372\u52DD\uFF01 \u{1F3C6}";
    } else if (player2Score > player1Score) {
      winnerMessage = "\u{1F3C6} \u73A9\u5BB62 \u7372\u52DD\uFF01 \u{1F3C6}";
    } else {
      winnerMessage = "\u{1F610} \u5E73\u624B\uFF01 \u{1F610}";
    }
  }
  return /* @__PURE__ */ jsx3("div", { className: "flex flex-col items-center justify-center min-h-screen bg-amber-50 p-6 text-center", children: /* @__PURE__ */ jsxs3("div", { className: "bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-lg", children: [
    /* @__PURE__ */ jsx3("h1", { className: "text-3xl md:text-4xl font-bold text-slate-700 mb-4", children: "\u{1F389} \u6311\u6230\u7D50\u675F\uFF01 \u{1F389}" }),
    /* @__PURE__ */ jsx3("p", { className: "text-slate-600 mb-6 text-base md:text-lg", children: M_message }),
    /* @__PURE__ */ jsxs3("div", { className: "bg-slate-100 p-6 rounded-lg mb-8", children: [
      /* @__PURE__ */ jsx3("p", { className: "text-xl font-semibold text-slate-800 mb-2", children: scoreMessage }),
      winnerMessage && /* @__PURE__ */ jsx3("p", { className: "text-2xl font-bold text-blue-600", children: winnerMessage })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center", children: [
      /* @__PURE__ */ jsx3(
        "button",
        {
          onClick: onRestart,
          className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
          children: "\u91CD\u65B0\u958B\u59CB"
        }
      ),
      canReview && onReviewWrongAnswers && /* @__PURE__ */ jsx3(
        "button",
        {
          onClick: onReviewWrongAnswers,
          className: "bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
          children: "\u56DE\u9867\u932F\u984C"
        }
      )
    ] })
  ] }) });
};
var GameOverScreen_default = GameOverScreen;

// components/ReviewModal.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var ReviewModal = ({ isOpen, onClose, wrongAnswers }) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx4("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxs4("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex justify-between items-center p-4 md:p-6 border-b border-gray-200", children: [
      /* @__PURE__ */ jsx4("h2", { className: "text-xl md:text-2xl font-bold text-slate-700", children: "\u56DE\u9867\u932F\u984C" }),
      /* @__PURE__ */ jsx4(
        "button",
        {
          onClick: onClose,
          className: "text-gray-500 hover:text-gray-700 text-2xl",
          "aria-label": "\u95DC\u9589\u5F48\u7A97",
          children: "\xD7"
        }
      )
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "p-4 md:p-6 overflow-y-auto custom-scrollbar flex-grow", children: wrongAnswers.length === 0 ? /* @__PURE__ */ jsx4("p", { className: "text-slate-600 text-center", children: "\u6C92\u6709\u932F\u984C\u53EF\u4EE5\u56DE\u9867\uFF0C\u505A\u5F97\u597D\uFF01" }) : /* @__PURE__ */ jsx4("ul", { className: "space-y-6", children: wrongAnswers.map((item, index) => /* @__PURE__ */ jsxs4("li", { className: "bg-slate-50 p-4 rounded-md shadow-sm", children: [
      /* @__PURE__ */ jsxs4("p", { className: "text-sm font-semibold text-slate-500 mb-1", children: [
        "\u932F\u984C #",
        index + 1
      ] }),
      /* @__PURE__ */ jsxs4("p", { className: "text-base md:text-lg font-medium text-slate-800 mb-2", children: [
        /* @__PURE__ */ jsx4("span", { className: "font-semibold", children: "\u554F:" }),
        " ",
        item.question
      ] }),
      /* @__PURE__ */ jsxs4("p", { className: "text-base text-green-600 font-semibold", children: [
        /* @__PURE__ */ jsx4("span", { className: "font-semibold text-green-700", children: "\u7B54:" }),
        " ",
        item.correct_answer
      ] })
    ] }, item.id || index)) }) }),
    /* @__PURE__ */ jsx4("div", { className: "p-4 md:p-6 border-t border-gray-200 text-right", children: /* @__PURE__ */ jsx4(
      "button",
      {
        onClick: onClose,
        className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition-colors",
        children: "\u95DC\u9589"
      }
    ) })
  ] }) });
};
var ReviewModal_default = ReviewModal;

// App.tsx
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
var App = () => {
  const [currentScreen, setCurrentScreen] = useState2("start");
  const [gameMode, setGameMode] = useState2("single" /* SINGLE */);
  const [targetQuestions, setTargetQuestions] = useState2(10);
  const [questionsAnsweredTotal, setQuestionsAnsweredTotal] = useState2(0);
  const [roundQuestions, setRoundQuestions] = useState2([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState2(0);
  const [playerScore, setPlayerScore] = useState2(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState2(0);
  const [player1Score, setPlayer1Score] = useState2(0);
  const [player2Score, setPlayer2Score] = useState2(0);
  const [player1Answered, setPlayer1Answered] = useState2(false);
  const [player2Answered, setPlayer2Answered] = useState2(false);
  const [player1Choice, setPlayer1Choice] = useState2(null);
  const [player2Choice, setPlayer2Choice] = useState2(null);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState2(ROUND_TIME_LIMIT_SECONDS);
  const [roundFirstAnswerBy, setRoundFirstAnswerBy] = useState2(null);
  const [activeTimerForPlayer, setActiveTimerForPlayer] = useState2(null);
  const [wrongAnswersList, setWrongAnswersList] = useState2([]);
  const [isRoundEvaluated, setIsRoundEvaluated] = useState2(false);
  const [isSinglePlayerButtonsEnabled, setIsSinglePlayerButtonsEnabled] = useState2(true);
  const [feedbackMessage, setFeedbackMessage] = useState2("");
  const [p1Feedback, setP1Feedback] = useState2("");
  const [p2Feedback, setP2Feedback] = useState2("");
  const [showReviewModal, setShowReviewModal] = useState2(false);
  const timerRef = useRef2(null);
  const currentQuestionData = roundQuestions[currentQuestionIndex] || null;
  const currentQuestionForDisplay = useMemo(() => {
    if (!currentQuestionData) {
      return null;
    }
    const shuffledOptions = shuffleArray([...currentQuestionData.options]);
    return {
      ...currentQuestionData,
      options: shuffledOptions
    };
  }, [currentQuestionData]);
  const resetGameState = useCallback(() => {
    setQuestionsAnsweredTotal(0);
    setCurrentQuestionIndex(0);
    setPlayerScore(0);
    setWrongAnswerCount(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setPlayer1Answered(false);
    setPlayer2Answered(false);
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setTimerSecondsLeft(ROUND_TIME_LIMIT_SECONDS);
    setRoundFirstAnswerBy(null);
    setActiveTimerForPlayer(null);
    setWrongAnswersList([]);
    setIsRoundEvaluated(false);
    setIsSinglePlayerButtonsEnabled(true);
    setFeedbackMessage("");
    setP1Feedback("");
    setP2Feedback("");
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);
  const handleGoToHome = useCallback(() => {
    resetGameState();
    setCurrentScreen("start");
  }, [resetGameState]);
  const handleStartGame = useCallback((mode, numQuestions) => {
    resetGameState();
    setGameMode(mode);
    setTargetQuestions(numQuestions);
    const allQuestionIndices = Array.from({ length: TOTAL_QUESTIONS_AVAILABLE }, (_, i) => i);
    const shuffledIndices = shuffleArray(allQuestionIndices);
    const selectedIndices = shuffledIndices.slice(0, numQuestions);
    setRoundQuestions(selectedIndices.map((index) => QUESTIONS_BANK[index]));
    setCurrentScreen("game");
  }, [resetGameState]);
  const loadNextQuestion = useCallback(() => {
    if (questionsAnsweredTotal < targetQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setPlayer1Answered(false);
      setPlayer2Answered(false);
      setPlayer1Choice(null);
      setPlayer2Choice(null);
      setIsRoundEvaluated(false);
      setIsSinglePlayerButtonsEnabled(true);
      setRoundFirstAnswerBy(null);
      setActiveTimerForPlayer(null);
      setFeedbackMessage("");
      setP1Feedback("");
      setP2Feedback("");
      setTimerSecondsLeft(ROUND_TIME_LIMIT_SECONDS);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setCurrentScreen("gameOver");
    }
  }, [questionsAnsweredTotal, targetQuestions]);
  const cancelRoundTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const evaluateVersusRound = useCallback((p1Ans, p2Ans) => {
    if (isRoundEvaluated || !currentQuestionData) return;
    setIsRoundEvaluated(true);
    cancelRoundTimer();
    const correctAnswer = currentQuestionData.correct_answer;
    const p1Correct = p1Ans === correctAnswer;
    const p2Correct = p2Ans === correctAnswer;
    if (p1Ans !== null) {
      setP1Feedback(p1Correct ? "\u73A9\u5BB61 \u6B63\u78BA\uFF01" : "\u73A9\u5BB61 \u7B54\u932F\uFF01");
    } else if (!p1Feedback.includes("\u8D85\u6642")) {
      setP1Feedback("\u73A9\u5BB61 \u8D85\u6642");
    }
    if (p2Ans !== null) {
      setP2Feedback(p2Correct ? "\u73A9\u5BB62 \u6B63\u78BA\uFF01" : "\u73A9\u5BB62 \u7B54\u932F\uFF01");
    } else if (!p2Feedback.includes("\u8D85\u6642")) {
      setP2Feedback("\u73A9\u5BB62 \u8D85\u6642");
    }
    setFeedbackMessage(`\u6B63\u78BA\u7B54\u6848: ${correctAnswer}`);
    if (p1Correct) setPlayer1Score((s) => s + 1);
    if (p2Correct) setPlayer2Score((s) => s + 1);
    setQuestionsAnsweredTotal((q) => q + 1);
    const delay = VERSUS_ANSWER_DISPLAY_DELAY_MS + VERSUS_EXTRA_DELAY_MS;
    setTimeout(loadNextQuestion, delay);
  }, [isRoundEvaluated, currentQuestionData, cancelRoundTimer, loadNextQuestion, p1Feedback, p2Feedback]);
  const startRoundTimer = useCallback((timingPlayer) => {
    cancelRoundTimer();
    if (!timingPlayer) return;
    setActiveTimerForPlayer(timingPlayer);
    setTimerSecondsLeft(ROUND_TIME_LIMIT_SECONDS);
    timerRef.current = setInterval(() => {
      setTimerSecondsLeft((prev) => {
        if (prev <= 1) {
          cancelRoundTimer();
          const currentP1Choice = player1Choice;
          const currentP2Choice = player2Choice;
          if (activeTimerForPlayer === "p1" /* PLAYER1 */) {
            setP1Feedback("\u73A9\u5BB61 \u8D85\u6642");
            setTimeout(() => evaluateVersusRound(null, currentP2Choice), 100);
          } else if (activeTimerForPlayer === "p2" /* PLAYER2 */) {
            setP2Feedback("\u73A9\u5BB62 \u8D85\u6642");
            setTimeout(() => evaluateVersusRound(currentP1Choice, null), 100);
          }
          setActiveTimerForPlayer(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
  }, [cancelRoundTimer, player1Choice, player2Choice, evaluateVersusRound, activeTimerForPlayer]);
  const handleAnswer = useCallback((selectedOption, player) => {
    if (!currentQuestionData || isRoundEvaluated) return;
    if (gameMode === "single" /* SINGLE */) {
      if (!isSinglePlayerButtonsEnabled) return;
      setIsRoundEvaluated(true);
      setIsSinglePlayerButtonsEnabled(false);
      setPlayer1Choice(selectedOption);
      const isCorrect = selectedOption === currentQuestionData.correct_answer;
      if (isCorrect) {
        setPlayerScore((s) => s + 1);
        setFeedbackMessage("\u2705 \u6B63\u78BA\uFF01");
      } else {
        setWrongAnswerCount((c) => c + 1);
        setFeedbackMessage(`\u274C \u7B54\u932F\uFF01\u6B63\u78BA: ${currentQuestionData.correct_answer}`);
        setWrongAnswersList((prev) => [...prev, { ...currentQuestionData }]);
      }
      setQuestionsAnsweredTotal((q) => q + 1);
      setTimeout(loadNextQuestion, SINGLE_PLAYER_DELAY_MS);
    } else if (gameMode === "versus_desktop" /* VERSUS_DESKTOP */ || gameMode === "versus_mobile" /* VERSUS_MOBILE */) {
      if (!player1Answered && !player2Answered) {
        if (player === "p1" /* PLAYER1 */) {
          setPlayer1Answered(true);
          setPlayer1Choice(selectedOption);
          setP1Feedback("\u73A9\u5BB61 \u5DF2\u4F5C\u7B54");
          setFeedbackMessage("\u7B49\u5F85 \u73A9\u5BB62...");
          startRoundTimer("p2" /* PLAYER2 */);
        } else if (player === "p2" /* PLAYER2 */) {
          setPlayer2Answered(true);
          setPlayer2Choice(selectedOption);
          setP2Feedback("\u73A9\u5BB62 \u5DF2\u4F5C\u7B54");
          setFeedbackMessage("\u7B49\u5F85 \u73A9\u5BB61...");
          startRoundTimer("p1" /* PLAYER1 */);
        }
      } else {
        if (player === "p1" /* PLAYER1 */ && !player1Answered && player2Answered) {
          setPlayer1Answered(true);
          setPlayer1Choice(selectedOption);
          setP1Feedback("\u73A9\u5BB61 \u5DF2\u4F5C\u7B54");
          cancelRoundTimer();
          setFeedbackMessage("\u8655\u7406\u7D50\u679C\u4E2D...");
          setTimeout(() => evaluateVersusRound(selectedOption, player2Choice), 100);
        } else if (player === "p2" /* PLAYER2 */ && !player2Answered && player1Answered) {
          setPlayer2Answered(true);
          setPlayer2Choice(selectedOption);
          setP2Feedback("\u73A9\u5BB62 \u5DF2\u4F5C\u7B54");
          cancelRoundTimer();
          setFeedbackMessage("\u8655\u7406\u7D50\u679C\u4E2D...");
          setTimeout(() => evaluateVersusRound(player1Choice, selectedOption), 100);
        }
      }
    } else if (gameMode === "versus_speed_desktop" /* VERSUS_SPEED_DESKTOP */ || gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */) {
      if (roundFirstAnswerBy) return;
      setIsRoundEvaluated(true);
      setRoundFirstAnswerBy(player);
      const isCorrect = selectedOption === currentQuestionData.correct_answer;
      let feedback = "";
      let scoreChange = 0;
      if (isCorrect) {
        feedback = `${player === "p1" /* PLAYER1 */ ? "\u73A9\u5BB61" : "\u73A9\u5BB62"} \u6B63\u78BA (+1)\uFF01`;
        scoreChange = 1;
      } else {
        feedback = `${player === "p1" /* PLAYER1 */ ? "\u73A9\u5BB61" : "\u73A9\u5BB62"} \u7B54\u932F (-1)\uFF01`;
        scoreChange = -1;
        setWrongAnswersList((prev) => [...prev, { ...currentQuestionData }]);
      }
      if (player === "p1" /* PLAYER1 */) {
        setPlayer1Score((s) => s + scoreChange);
        setP1Feedback(feedback);
        setPlayer1Choice(selectedOption);
      } else {
        setPlayer2Score((s) => s + scoreChange);
        setP2Feedback(feedback);
        setPlayer2Choice(selectedOption);
      }
      setFeedbackMessage(`\u6B63\u78BA\u7B54\u6848: ${currentQuestionData.correct_answer}`);
      setQuestionsAnsweredTotal((q) => q + 1);
      setTimeout(loadNextQuestion, VERSUS_SPEED_RESULT_DELAY_MS);
    }
  }, [
    currentQuestionData,
    gameMode,
    isRoundEvaluated,
    isSinglePlayerButtonsEnabled,
    player1Answered,
    player2Answered,
    roundFirstAnswerBy,
    player1Choice,
    player2Choice,
    loadNextQuestion,
    startRoundTimer,
    cancelRoundTimer,
    evaluateVersusRound,
    activeTimerForPlayer
  ]);
  const handleKeyPress = useCallback((event) => {
    if (currentScreen !== "game" || !currentQuestionForDisplay || !currentQuestionData || gameMode === "versus_mobile" /* VERSUS_MOBILE */ || gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */) {
      return;
    }
    if (isRoundEvaluated && gameMode !== "single" /* SINGLE */) return;
    if (gameMode === "single" /* SINGLE */ && !isSinglePlayerButtonsEnabled) return;
    const key = event.key.toLowerCase();
    let determinedOptionIndex = -1;
    let player = void 0;
    const p1Keys = ["q", "w", "e", "a", "s"];
    const p2Keys = ["1", "2", "3", "4", "5"];
    if (p1Keys.includes(key)) {
      determinedOptionIndex = p1Keys.indexOf(key);
      player = "p1" /* PLAYER1 */;
    } else if (p2Keys.includes(key)) {
      determinedOptionIndex = p2Keys.indexOf(key);
      player = "p2" /* PLAYER2 */;
    }
    if (determinedOptionIndex !== -1 && determinedOptionIndex < currentQuestionForDisplay.options.length) {
      const selectedOption = currentQuestionForDisplay.options[determinedOptionIndex];
      if (gameMode === "single" /* SINGLE */) {
        handleAnswer(selectedOption);
      } else if (gameMode === "versus_desktop" /* VERSUS_DESKTOP */) {
        if (player === "p1" /* PLAYER1 */ && !player1Answered) {
          handleAnswer(selectedOption, "p1" /* PLAYER1 */);
        } else if (player === "p2" /* PLAYER2 */ && !player2Answered) {
          handleAnswer(selectedOption, "p2" /* PLAYER2 */);
        }
      } else if (gameMode === "versus_speed_desktop" /* VERSUS_SPEED_DESKTOP */) {
        if (!roundFirstAnswerBy) handleAnswer(selectedOption, player);
      }
    }
  }, [currentScreen, currentQuestionData, currentQuestionForDisplay, gameMode, isRoundEvaluated, isSinglePlayerButtonsEnabled, player1Answered, player2Answered, roundFirstAnswerBy, handleAnswer]);
  useEffect2(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  useEffect2(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  const handleRestart = () => {
    resetGameState();
    setCurrentScreen("start");
  };
  const handleReviewWrongAnswers = () => {
    setShowReviewModal(true);
  };
  if (currentScreen === "start") {
    return /* @__PURE__ */ jsx5(StartScreen_default, { onStartGame: handleStartGame, totalAvailableQuestions: TOTAL_QUESTIONS_AVAILABLE });
  }
  if (currentScreen === "gameOver") {
    const canReview = (gameMode === "single" /* SINGLE */ || gameMode === "versus_speed_desktop" /* VERSUS_SPEED_DESKTOP */ || gameMode === "versus_speed_mobile" /* VERSUS_SPEED_MOBILE */) && wrongAnswersList.length > 0;
    return /* @__PURE__ */ jsxs5(Fragment2, { children: [
      /* @__PURE__ */ jsx5(
        GameOverScreen_default,
        {
          gameMode,
          player1Score,
          player2Score,
          singlePlayerScore: playerScore,
          wrongAnswerCount,
          totalQuestionsAnswered: questionsAnsweredTotal,
          targetQuestions,
          onRestart: handleRestart,
          onReviewWrongAnswers: canReview ? handleReviewWrongAnswers : void 0,
          canReview
        }
      ),
      canReview && /* @__PURE__ */ jsx5(ReviewModal_default, { isOpen: showReviewModal, onClose: () => setShowReviewModal(false), wrongAnswers: wrongAnswersList })
    ] });
  }
  return currentQuestionForDisplay ? /* @__PURE__ */ jsx5(Fragment2, { children: /* @__PURE__ */ jsx5(
    GameScreen_default,
    {
      gameMode,
      currentQuestion: currentQuestionForDisplay,
      questionNumber: currentQuestionIndex + 1,
      totalQuestions: targetQuestions,
      player1Score,
      player2Score,
      singlePlayerScore: playerScore,
      wrongAnswersCount: wrongAnswerCount,
      onAnswer: handleAnswer,
      timerSecondsLeft,
      feedbackMessage,
      p1Feedback,
      p2Feedback,
      player1Choice,
      player2Choice,
      isRoundEvaluated,
      isSinglePlayerButtonsEnabled,
      player1Answered,
      player2Answered,
      roundFirstAnswerBy,
      onGoToHome: handleGoToHome
    }
  ) }) : /* @__PURE__ */ jsx5("div", { className: "flex items-center justify-center h-screen text-xl", children: "\u6E96\u5099\u984C\u76EE\u4E2D..." });
};
var App_default = App;

// index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
var root = ReactDOM.createRoot(rootElement);
root.render(
  /* @__PURE__ */ jsx6(React3.StrictMode, { children: /* @__PURE__ */ jsx6(App_default, {}) })
);
