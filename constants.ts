
import { Question } from './types';

export const ROUND_TIME_LIMIT_SECONDS = 10; // For Versus mode (Player 2)
export const VERSUS_ANSWER_DISPLAY_DELAY_MS = 2500;
export const VERSUS_EXTRA_DELAY_MS = 3000;
export const VERSUS_SPEED_RESULT_DELAY_MS = 2000;
export const SINGLE_PLAYER_DELAY_MS = 1800;

export const QUESTIONS_BANK: Question[] = [
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_7",
        question: "Six Sigma describes the measurement of quality as 60 defects per million.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_15",
        question: "Test plans require input from both end users and information systems specialists.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_21",
        // Fix: Changed question": to question:
        question: "Structured methods handle the modeling of data better than the modeling of processes.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_22",
        // Fix: Changed question": to question:
        question: "Structured methods treat data and processes as logically separate entities.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_23",
        // Fix: Changed question": to question:
        question: "Which of the following statements about the traditional systems life cycle is not true?",
        options: [
            "the systems life cycle is predominantly a \"waterfall\" approach.",
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_32",
        // Fix: Changed question": to question:
        question: "A prototype is a working version of an information system that serves as the final version.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_33",
        // Fix: Changed question": to question:
        question: "Firms generally do not outsource the conception, systems analysis, and design of IT systems to offshore firms.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_34",
        // Fix: Changed question": to question:
        question: "Cloud computing is a form of outsourcing.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
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
        question: "A \"responsive design\" for mobile applications is a design that responds to a user's:",
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_43",
        // Fix: Changed question": to question:
        question: "DevOps helps developers at Netflix make hundreds of software changes every day.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_59",
        // Fix: Changed question": to question:
        question: "An information systems plan focuses solely on the technology needed to implement the proposed new information system.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_60",
        // Fix: Changed question": to question:
        question: "Transaction and clerical systems that displace labor and save space typically produce less tangible benefits than management information systems.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_61",
        // Fix: Changed question": to question:
        question: "Intangible benefits may lead to quantifiable gains in the long run.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_62",
        // Fix: Changed question": to question:
        question: "A benefit of using TCO analysis to evaluate an information technology investment is that it is able to incorporate intangible and \"soft\" factors such as benefits and complexity costs.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_63",
        // Fix: Changed question": to question:
        question: "More timely information is an intangible benefit of information systems.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_68",
        // Fix: Changed question": to question:
        question: "Project management refers to the application of knowledge, skills, tools, and techniques to achieve specific targets within specified budget and time constraints.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_69",
        // Fix: Changed question": to question:
        question: "Risk is an important variable that project management must deal with.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_78",
        // Fix: Changed question": to question:
        question: "User concerns and designer concerns are usually the same at the beginning of the project but may diverge later as the system is built.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
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
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    },
    {
        id: "q_new_87",
        // Fix: Changed question": to question:
        question: "Increased error rates may be a sign of user resistance to a new system.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_88",
        // Fix: Changed question": to question:
        question: "The design of jobs, health issues, and the end-user interface of information systems are all considerations in the field of ergonomics.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "是"
    },
    {
        id: "q_new_89",
        // Fix: Changed question": to question:
        question: "The goal of sociotechnical design is to create systems where the organization changes to fit the requirements of the technology.",
        options: ["是", "非"],
        // Fix: Changed correct_answer": to correct_answer:
        correct_answer: "非"
    }
];

export const TOTAL_QUESTIONS_AVAILABLE = QUESTIONS_BANK.length;

export const PLAYER_COLORS = {
  p1: "text-blue-600",
  p2: "text-orange-600",
  default: "text-gray-700",
};

export const FEEDBACK_COLORS = {
  correct: "text-green-600",
  wrong: "text-red-600",
  timer: "text-gray-500",
  timeout: "text-amber-600",
};

export const BUTTON_COLORS = {
  default: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  correct: "bg-green-500 hover:bg-green-600 text-white",
  wrong: "bg-red-500 hover:bg-red-600 text-white",
  highlightCorrect: "bg-lime-300 text-black",
};