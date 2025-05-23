
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
        correct_answer: "paradigm shift"
    },
    {
        id: "q_new_6",
        question: "Business process redesign involves a radical rethinking of the business model.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_7",
        question: "Six Sigma describes the measurement of quality as 60 defects per million.",
        options: ["是", "非"],
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
        correct_answer: "User information requirements"
    },
    {
        id: "q_new_14",
        question: "A phased approach conversion strategy introduces a new system in stages, either by functions or organizational units.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_15",
        question: "Test plans require input from both end users and information systems specialists.",
        options: ["是", "非"],
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
        correct_answer: "Degree is a superclass to Mathematics and Physics."
    },
    {
        id: "q_new_18",
        question: "Which of the following statements about objects is not true?",
        options: [
            "Objects belonging to a certain class have the features of that class.",
            "Classes of objects inherit all the structure and behaviors of a more general class.",
            "An object combines data and the specifications of processes that operate on those data.",
            "Programs pass data to procedures which then send a message to the object.",
            "New classes of objects are created by choosing an existing class and specifying how the new class differs from the existing class."
        ],
        correct_answer: "Programs pass data to procedures which then send a message to the object."
    },
    {
        id: "q_new_19",
        question: "________ describe the transformation occurring within the lowest level of the data flow diagrams.",
        options: [
            "Design requirements",
            "Information requirements",
            "Technology design plans",
            "Object-oriented frameworks",
            "Process specifications"
        ],
        correct_answer: "Process specifications"
    },
    {
        id: "q_new_20",
        question: "Objects are grouped into hierarchies, and hierarchies into classes.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_21",
        question: "Structured methods handle the modeling of data better than the modeling of processes.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_22",
        question: "Structured methods treat data and processes as logically separate entities.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_23",
        question: "Which of the following statements about the traditional systems life cycle is not true?",
        options: [
            "the systems life cycle is predominantly a \"waterfall\" approach.",
            "The systems life cycle is still used for building large, complex systems.",
            "The systems life cycle approach is suitable for small desktop systems, which tend to be less structured and more individualized.",
            "The systems life cycle approach can be costly, time-consuming, and inflexible.",
            "The systems life cycle methodology is a phased approach to building a system."
        ],
        correct_answer: "The systems life cycle approach is suitable for small desktop systems, which tend to be less structured and more individualized."
    },
    {
        id: "q_new_24",
        question: "Commercial software packages often include ________ features that allow the software to be modified to meet organizational requirements.",
        options: [
            "automation",
            "object-oriented",
            "programming",
            "design",
            "customization"
        ],
        correct_answer: "customization"
    },
    {
        id: "q_new_25",
        question: "The oldest method for building information systems is",
        options: [
            "agile development.",
            "prototyping.",
            "object-oriented development.",
            "the systems life cycle.",
            "rapid application development."
        ],
        correct_answer: "the systems life cycle."
    },
    {
        id: "q_new_26",
        question: "In which type of systems building are the development stages organized so that tasks in one stage are completed before the tasks in the next stage begin?",
        options: [
            "Systems life cycle",
            "Prototyping",
            "RAD",
            "JAD",
            "Object-oriented development"
        ],
        correct_answer: "Systems life cycle"
    },
    {
        id: "q_new_27",
        question: "Which of the following statements about prototyping is not true?",
        options: [
            "Prototyping is least useful when there is some uncertainty about requirements or design solutions.",
            "Prototyping replaces unplanned rework with planned iteration, with each version more accurately reflecting users' requirements.",
            "The process of developing a prototype can be broken down into four steps.",
            "Sometimes a prototype is adopted as the production version of a system.",
            "Prototyping is often used for designing an information system's end-user interface."
        ],
        correct_answer: "Prototyping is least useful when there is some uncertainty about requirements or design solutions."
    },
    {
        id: "q_new_28",
        question: "Which of the following statements about outsourcing is not true?",
        options: [
            "Domestic outsourcing is much more cost-driven than offshore outsourcing.",
            "Many offshore outsourcing firms offer world-class technology assets and skills",
            "Wage inflation outside the United States has recently eroded some of the advantages of offshore outsourcing.",
            "Firms often outsource daily operation of IT systems.",
            "Hidden costs can increase the total cost of an offshore outsourcing project by an extra 15 to 57 percent."
        ],
        correct_answer: "Domestic outsourcing is much more cost-driven than offshore outsourcing."
    },
    {
        id: "q_new_29",
        question: "A software package evaluation process is often based on a series of detailed questions sent to vendors, called a(n):",
        options: [
            "systems design document.",
            "strategic planning document.",
            "information systems management plan.",
            "RFP.",
            "logical design document."
        ],
        correct_answer: "RFP."
    },
    {
        id: "q_new_30",
        question: "As a technical project manager, you have decided to propose implementing a prototyping methodology for a small web-based design project. What is the order of steps you will follow in this project?",
        options: [
            "Develop the prototype; use the prototype; revise and enhance the prototype.",
            "Identify basic requirements, develop the prototype, use the prototype, revise and enhance the prototype.",
            "Define the requirements, develop solutions, select the best prototype, and implement the prototype.",
            "Define the requirements, develop the prototype, revise and enhance the prototype.",
            "Select the best prototype, define the requirements, and implement the prototype."
        ],
        correct_answer: "Identify basic requirements, develop the prototype, use the prototype, revise and enhance the prototype."
    },
    {
        id: "q_new_31",
        question: "The systems life cycle methodology maintains a formal division of labor between end users and information systems specialists.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_32",
        question: "A prototype is a working version of an information system that serves as the final version.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_33",
        question: "Firms generally do not outsource the conception, systems analysis, and design of IT systems to offshore firms.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_34",
        question: "Cloud computing is a form of outsourcing.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_35",
        question: "A native mobile app is:",
        options: [
            "a mobile website.",
            "a mobile web app.",
            "a standalone application that does not use a browser.",
            "a responsive mobile app.",
            "one that can operate on all platforms and devices."
        ],
        correct_answer: "a standalone application that does not use a browser."
    },
    {
        id: "q_new_36",
        question: "A \"responsive design\" for mobile applications is a design that responds to a user's:",
        options: [
            "needs.",
            "location.",
            "voice commands.",
            "digital device and screen resolution.",
            "gestures."
        ],
        correct_answer: "digital device and screen resolution."
    },
    {
        id: "q_new_37",
        question: "Which of the following is not a true statement about native mobile apps?",
        options: [
            "A native app is installed directly on a mobile device.",
            "Native apps can only operate if they are connected to the Internet",
            "Native mobile apps provide fast performance.",
            "Native mobile apps provide a high degree of reliability.",
            "The Kindle e-reading app is an example of a native mobile app."
        ],
        correct_answer: "Native apps can only operate if they are connected to the Internet"
    },
    {
        id: "q_new_38",
        question: "________ development focuses on rapid delivery of working software by breaking a large project into a series of small subprojects that are completed in short periods of time using iteration, continuous feedback and ongoing user development.",
        options: [
            "Agile",
            "No-code",
            "Low-code",
            "Traditional systems life cycle",
            "DevOps"
        ],
        correct_answer: "Agile"
    },
    {
        id: "q_new_39",
        question: "The process of creating workable information systems in a very short period of time with some flexibility to adapt as a project evolves is called:",
        options: [
            "RAD.",
            "JAD.",
            "object-oriented development.",
            "systems analysis and design.",
            "No-code development."
        ],
        correct_answer: "RAD."
    },
    {
        id: "q_new_40",
        question: "Which of the following is not a feature of agile development?",
        options: [
            "Sprints",
            "Waterfall approach",
            "Continuous integration",
            "Cross-functional teams",
            "Early testing"
        ],
        correct_answer: "Waterfall approach"
    },
    {
        id: "q_new_41",
        question: "Which of the following statements about mobile web apps is true?",
        options: [
            "Users access mobile web apps through their mobile device's web browser.",
            "A mobile web app resides on the user's device.",
            "A mobile web app only works on certain mobile platforms.",
            "A mobile web app requires the user to sign onto a web page.",
            "A mobile web app requires the user to login to a web service."
        ],
        correct_answer: "Users access mobile web apps through their mobile device's web browser."
    },
    {
        id: "q_new_42",
        question: "Many no-code applications have very limited functionality.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_43",
        question: "DevOps helps developers at Netflix make hundreds of software changes every day.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_44",
        question: "Which of the following best describes the central method used in a portfolio analysis?",
        options: [
            "Performing an inventory of all of the organization's information systems projects and assets",
            "Performing a weighted comparison of the criteria used to evaluate a system",
            "Surveying a large sample of managers on their objectives, decision-making process, and uses and needs for data and information",
            "Interviewing a small number of top managers to identify their goals and criteria for achieving success",
            "Scoring proposed systems on a number of dimensions, and selecting the one with the highest score"
        ],
        correct_answer: "Performing an inventory of all of the organization's information systems projects and assets"
    },
    {
        id: "q_new_45",
        question: "A firm in the finance industry should do which of the following to ensure that it stays current with technology?",
        options: [
            "Select only low-cost, low risk projects",
            "Limit work to those projects with great rewards",
            "Select only low-risk, high-reward projects",
            "Have a few high-risk, high-benefit projects",
            "Avoid projects that are very costly"
        ],
        correct_answer: "Have a few high-risk, high-benefit projects"
    },
    {
        id: "q_new_46",
        question: "Which of the following best describes the central method used in a scoring model?",
        options: [
            "Performing an inventory of all of the organization's information systems projects and assets",
            "Performing a weighted comparison of the criteria used to evaluate a system",
            "Surveying a large sample of managers on their objectives, decision-making process, and uses and needs for data and information",
            "Interviewing a small number of top managers to identify their goals and criteria for achieving success",
            "Calculating the return on investment for each system, and choosing the system with the best return"
        ],
        correct_answer: "Performing a weighted comparison of the criteria used to evaluate a system"
    },
    {
        id: "q_new_47",
        question: "Which method is used to assign weights to various features of a system?",
        options: [
            "Information systems plan",
            "Scoring model",
            "Portfolio analysis",
            "TCO analysis",
            "Capital budget"
        ],
        correct_answer: "Scoring model"
    },
    {
        id: "q_new_48",
        question: "Which of the following statements about scoring models is not true?",
        options: [
            "There are many qualitative judgments involved in using a scoring model.",
            "A scoring model is useful for selecting projects where many criteria must be considered.",
            "The most important outcome of a scoring model is the score.",
            "Agreement on the criteria used in a scoring model often requires lengthy discussions among the decision-making group.",
            "Weights assigned in a scoring model indicate which criteria are considered the most important by the decision-making group."
        ],
        correct_answer: "The most important outcome of a scoring model is the score."
    },
    {
        id: "q_new_49",
        question: "Which of the following strategies represents the proper approach to a low risk, high reward project?",
        options: [
            "Identify and develop",
            "Avoid",
            "Treat as a routine project",
            "Pursue after all other projects are complete",
            "Cautiously examine"
        ],
        correct_answer: "Identify and develop"
    },
    {
        id: "q_new_50",
        question: "The value of systems from a financial perspective essentially revolves around the issue of:",
        options: [
            "total cost of ownership.",
            "adherence to information requirements.",
            "asset utilization.",
            "return on invested capital.",
            "the cost of computing equipment."
        ],
        correct_answer: "return on invested capital."
    },
    {
        id: "q_new_51",
        question: "Which of the following is not a tangible benefit of information systems?",
        options: [
            "Reduced rate of growth in expenses",
            "Lower computer expenses",
            "Improved resource control",
            "Increased productivity",
            "Reduced facility costs"
        ],
        correct_answer: "Improved resource control"
    },
    {
        id: "q_new_52",
        question: "The principal capital budgeting models for evaluating information technology projects are the payback method, the accounting rate of return on investment (ROI), net present value, and the:",
        options: [
            "future present value.",
            "internal rate of return.",
            "external rate of return.",
            "ROPM (real options pricing model).",
            "present value of future cash flows."
        ],
        correct_answer: "internal rate of return."
    },
    {
        id: "q_new_53",
        question: "Enhanced employee goodwill falls under what category of costs and benefits of information systems?",
        options: [
            "Costs",
            "Tangible benefits",
            "Cost savings",
            "Intangible costs",
            "Intangible benefits"
        ],
        correct_answer: "Intangible benefits"
    },
    {
        id: "q_new_54",
        question: "Which of the following is a limitation of using a financial approach to evaluate information systems?",
        options: [
            "Inability to measure ROI",
            "Inability to control vendor costs",
            "Inability to assess risk",
            "Inability to assess costs from organizational disruption",
            "Inability to assess the cost of technology"
        ],
        correct_answer: "Inability to assess costs from organizational disruption"
    },
    {
        id: "q_new_55",
        question: "________ methods rely on measures of cash flows into and out of the firm.",
        options: [
            "Scoring model",
            "Portfolio analysis",
            "Real options pricing",
            "Capital budgeting",
            "Risk profiling"
        ],
        correct_answer: "Capital budgeting"
    },
    {
        id: "q_new_56",
        question: "Which of the following is not one of the seven major factors that should be addressed when making the business case for a specific new information system?",
        options: [
            "Improved decision making",
            "Survival",
            "Results of a portfolio analysis of alternative solutions",
            "Customer and supplier relationships",
            "New products and services"
        ],
        correct_answer: "Results of a portfolio analysis of alternative solutions"
    },
    {
        id: "q_new_57",
        question: "A business case does all of the following except:",
        options: [
            "describe the rationale for proceeding with an investment.",
            "show how the investment supports the firm's strategic goals.",
            "detail the specific hardware and software needed to implement the investment.",
            "explain how the investment will provide value for the business.",
            "identify any risks that could negatively affect outcomes."
        ],
        correct_answer: "detail the specific hardware and software needed to implement the investment."
    },
    {
        id: "q_new_58",
        question: "An information systems plan contains a statement of corporate goals and specifies how information technology will support the attainment of those goals.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_59",
        question: "An information systems plan focuses solely on the technology needed to implement the proposed new information system.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_60",
        question: "Transaction and clerical systems that displace labor and save space typically produce less tangible benefits than management information systems.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_61",
        question: "Intangible benefits may lead to quantifiable gains in the long run.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_62",
        question: "A benefit of using TCO analysis to evaluate an information technology investment is that it is able to incorporate intangible and \"soft\" factors such as benefits and complexity costs.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_63",
        question: "More timely information is an intangible benefit of information systems.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_64",
        question: "As discussed in the chapter, which of the following is not one of the immediate consequences of inadequate software project management?",
        options: [
            "Cost overruns",
            "Reduced workforce",
            "Time slippage",
            "Technical shortfalls",
            "Failure to obtain anticipated benefits"
        ],
        correct_answer: "Reduced workforce"
    },
    {
        id: "q_new_65",
        question: "All of the following are indications of a failed information systems project except:",
        options: [
            "employees are refusing to switch to the new system.",
            "employees have created a spreadsheet solution to manipulate the data generated by the system.",
            "a redesigned website has fewer visits to the customer support pages.",
            "employees require training to properly use the system.",
            "the system is not being used by anyone."
        ],
        correct_answer: "employees require training to properly use the system."
    },
    {
        id: "q_new_66",
        question: "As described in the text, which of the following statements about runaway or failed IT projects is not true?",
        options: [
            "Large software projects on average run 33 percent over schedule.",
            "Large software projects on average run 66 percent over budget.",
            "50% of businesses have experienced IT project failure in the last year.",
            "IT projects often fail because they lack sufficient computing capacity.",
            "One study found that private sector projects underestimate costs and time required by half."
        ],
        correct_answer: "IT projects often fail because they lack sufficient computing capacity."
    },
    {
        id: "q_new_67",
        question: "The cost of a project is based solely on the time to complete a project multiplied by the cost of computer resources required to complete the project.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_68",
        question: "Project management refers to the application of knowledge, skills, tools, and techniques to achieve specific targets within specified budget and time constraints.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_69",
        question: "Risk is an important variable that project management must deal with.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_70",
        question: "Successful system building requires careful ________ management to minimize organizational resistance.",
        options: [
            "cost",
            "technology",
            "change",
            "supply chain",
            "system application"
        ],
        correct_answer: "change"
    },
    {
        id: "q_new_71",
        question: "The differing background between users and information systems specialists is referred to as the:",
        options: [
            "user expertise gap.",
            "information system specialist inefficiency.",
            "user-designer paradigm.",
            "user-designer expertise gap.",
            "user-designer communications gap."
        ],
        correct_answer: "user-designer communications gap."
    },
    {
        id: "q_new_72",
        question: "While users are concerned about an information system delivering the information needed for work, designers might be concerned about:",
        options: [
            "accessing the data on iPhones and tablets.",
            "the procedures required to enter data into the system.",
            "how operation of the system will change their daily routines.",
            "what demands the system will place on the company servers.",
            "opening lines of communication with end users."
        ],
        correct_answer: "what demands the system will place on the company servers."
    },
    {
        id: "q_new_73",
        question: "Which of the following statements best describes the effect that project structure has on overall project risk?",
        options: [
            "Highly structured projects are more complex and run a higher risk of programmers and users misunderstanding the ultimate goals.",
            "Projects with relatively undefined goals are more likely to be subjected to users changing requirements and to run a higher risk of not satisfying project goals.",
            "Highly structured projects tend to be larger, affecting more organizational units, and run both the risk of out-of-control costs and becoming too difficult to control.",
            "Less structured projects pose less risk of running up unforeseen costs.",
            "The less structured a project, the higher the likelihood that its outputs and processes can be easily defined."
        ],
        correct_answer: "Projects with relatively undefined goals are more likely to be subjected to users changing requirements and to run a higher risk of not satisfying project goals."
    },
    {
        id: "q_new_74",
        question: "Which of the following statements about project risk is not true?",
        options: [
            "The more dollars spent on a project, the greater the risk.",
            "The higher the number of implementation staff on a project, the lower the risk.",
            "The higher the number of organizational units affected by a project, the greater the risk.",
            "Very large-scale systems project have a failure rate that is 50 to 75 percent higher than that for other projects.",
            "The organizational complexity of a system contributes to the complexity of large-scale systems projects."
        ],
        correct_answer: "The higher the number of implementation staff on a project, the lower the risk."
    },
    {
        id: "q_new_75",
        question: "Which of the following types of projects have a higher likelihood of failure?",
        options: [
            "Creating a spreadsheet-based payroll register.",
            "Upgrading a contact management system based on a software package to the most recent version",
            "Very large-scale or complex systems projects",
            "Redesigning a user interface to an online investment site",
            "Building a web-based interface to an existing system"
        ],
        correct_answer: "Very large-scale or complex systems projects"
    },
    {
        id: "q_new_76",
        question: "Which of the following is not a factor in the high failure rate of reengineering systems projects?",
        options: [
            "Employees' concerns about change",
            "Resistance by key managers",
            "Changes in career paths signaled by the new system",
            "Changes in job descriptions signaled by the new system",
            "Failures of the new technologies to perform according to plan"
        ],
        correct_answer: "Failures of the new technologies to perform according to plan"
    },
    {
        id: "q_new_77",
        question: "The relationship between users and information systems specialists has traditionally been a problem area for information systems implementation efforts.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_78",
        question: "User concerns and designer concerns are usually the same at the beginning of the project but may diverge later as the system is built.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_79",
        question: "Project management software typically has all of the following capabilities except:",
        options: [
            "identifying and quantifying project risk.",
            "assigning resources to tasks.",
            "tracking progress at both individual and team levels.",
            "establishing starting and ending dates for tasks.",
            "facilitating modifications to tasks and resources."
        ],
        correct_answer: "identifying and quantifying project risk."
    },
    {
        id: "q_new_80",
        question: "Which type of planning tool shows each task as a horizontal bar whose length is proportional to the time required to complete it?",
        options: [
            "PERT chart",
            "Gantt chart",
            "Both a PERT chart and a Gannt chart",
            "Scoring model",
            "Portfolio analysis"
        ],
        correct_answer: "Gantt chart"
    },
    {
        id: "q_new_81",
        question: "To review a project's tasks and their interrelationships, you would use which of the following?",
        options: [
            "PERT chart",
            "Gantt chart",
            "PERT chart or a Gantt chart",
            "Scoring model",
            "Portfolio analysis"
        ],
        correct_answer: "PERT chart"
    },
    {
        id: "q_new_82",
        question: "Which of the following helps project managers identify bottlenecks in project development?",
        options: [
            "Internal integration tools",
            "External integration tools",
            "Formal planning and control tools",
            "Both internal and external integration tools",
            "Portfolio analysis tools"
        ],
        correct_answer: "Formal planning and control tools"
    },
    {
        id: "q_new_83",
        question: "Which of the following is an example of using an external integration tool?",
        options: [
            "Creating a Gantt chart",
            "Including user representatives as active members of the project team",
            "Creating a PERT chart",
            "Using portfolio analysis",
            "Developing a scoring model"
        ],
        correct_answer: "Including user representatives as active members of the project team"
    },
    {
        id: "q_new_84",
        question: "You have been hired to implement an enterprise system that will automate much of the billing and accounting work for a statewide HVAC services company. Which of the following would you prepare to describe how the new system will affect a firm's structure and operations?",
        options: [
            "Information systems plan",
            "Internal integration report",
            "Sociotechnical design report",
            "Organizational impact analysis",
            "Strategic planning document"
        ],
        correct_answer: "Organizational impact analysis"
    },
    {
        id: "q_new_85",
        question: "Counterimplementation is best defined as:",
        options: [
            "multiple implementations that are run in parallel.",
            "deliberate attempts to thwart the implementation of a system.",
            "critiquing the implementation of a system constructively.",
            "all of the organizational challenges involved in implementing a system.",
            "strategies used to overcome user resistance to change."
        ],
        correct_answer: "deliberate attempts to thwart the implementation of a system."
    },
    {
        id: "q_new_86",
        question: "Mandatory use of a system is one effective way of overcoming user resistance to an information system.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_new_87",
        question: "Increased error rates may be a sign of user resistance to a new system.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_88",
        question: "The design of jobs, health issues, and the end-user interface of information systems are all considerations in the field of ergonomics.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_new_89",
        question: "The goal of sociotechnical design is to create systems where the organization changes to fit the requirements of the technology.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    // New questions from images start here
    {
        id: "q_img_1",
        question: "Much of the final assembly of Apple's iPhone occurs in which of the following locations?",
        options: ["United States", "Japan", "South Korea", "China", "Germany"],
        correct_answer: "China"
    },
    {
        id: "q_img_2",
        question: "Considering how to accomplish a division of labor across a global environment is an aspect of which of the following dimensions of developing an international systems architecture?",
        options: ["Global environment", "Corporate global strategy", "Technology platform", "Organization structure", "Management and business processes"],
        correct_answer: "Organization structure"
    },
    {
        id: "q_img_3",
        question: "New levels of global coordination of all of the major business functions permit the location of business activity according to:",
        options: ["comparative advantage.", "social norms and values.", "competitive threat.", "knowledge base.", "labor costs."],
        correct_answer: "comparative advantage."
    },
    {
        id: "q_img_4",
        question: "Which of the following industries is most affected by globalization?",
        options: ["Telecommunications", "Manufacturing", "Law", "Entertainment", "Transportation"],
        correct_answer: "Manufacturing"
    },
    {
        id: "q_img_5",
        question: "Which of the following is the best definition of the term transborder data flow?",
        options: [
            "The flow of information in international systems",
            "The ways in which a country's laws change the flow of data from one country to another",
            "The business of moving information from one country to another",
            "The movement of information across international boundaries in any form",
            "The business process of coordinating information from many different countries"
        ],
        correct_answer: "The movement of information across international boundaries in any form"
    },
    {
        id: "q_img_6",
        question: "All of the following present challenges to developing global business systems except:",
        options: [
            "foreign accounting practices.",
            "the growth of a global knowledge base.",
            "language differences.",
            "currency fluctuations.",
            "shortages of skilled consultants."
        ],
        correct_answer: "the growth of a global knowledge base."
    },
    {
        id: "q_img_7",
        question: "Most large companies with overseas operations have:",
        options: [
            "rationally developed international systems architectures.",
            "inherited patchwork international systems from the distant past.",
            "transaction-oriented reporting based at the home office for overseas business.",
            "global marketing systems developed domestically.",
            "enterprise systems developed by local firms."
        ],
        correct_answer: "inherited patchwork international systems from the distant past."
    },
    {
        id: "q_img_8",
        question: "The EU General Data Protection Regulation (GDPR):",
        options: [
            "requires that European companies meet U.S. data privacy standards.",
            "provides additional privacy protections for Americans doing business in Europe.",
            "provides additional privacy protection for European citizens and applies to all data produced by EU citizens or processed in Europe.",
            "prevents the transfer of private personal information among EU nations.",
            "allows European countries to adopt their own privacy legislation."
        ],
        correct_answer: "provides additional privacy protection for European citizens and applies to all data produced by EU citizens or processed in Europe."
    },
    {
        id: "q_img_9",
        question: "Consumers who only want to purchase products made in their own country are an example of:",
        options: [
            "cultural particularism.",
            "political culture.",
            "universal global attitudes.",
            "different laws in different countries.",
            "different business standards."
        ],
        correct_answer: "cultural particularism."
    },
    {
        id: "q_img_10",
        question: "Global business drivers can be divided into two groups: general cultural factors and specific business factors.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_img_11",
        question: "The coronavirus pandemic has called into question the dependence on global supply chains where sourcing is concentrated in a single country.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_img_12",
        question: "Micromarketing involves marketing to specific countries rather than global markets.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_img_13",
        question: "Particularism is a concept based on accepting a shared global culture and the penetration of domestic markets by foreign goods and services.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_img_14",
        question: "Language remains a significant challenge to the implementation of an international information system.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_img_15",
        question: "Global economies of scale are facilitated by global markets, production, and administration.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_img_16",
        question: "In a multinational business strategy, the finance/accounting function is:",
        options: ["centralized.", "dispersed.", "coordinated.", "mixed.", "performed by local divisions in different countries."],
        correct_answer: "centralized."
    },
    {
        id: "q_img_17",
        question: "A company that controls finances in the home country and decentralizes production, sales, and marketing operations to other countries is using which of the following strategies?",
        options: ["domestic exporter", "franchising", "transnational", "multinational", "conglomerate"],
        correct_answer: "multinational"
    },
    {
        id: "q_img_18",
        question: "Which of the following is the dominant pattern of governance used by transnational firms?",
        options: ["Centralized", "Duplicated", "Decentralized", "Federal structure", "Localized"],
        correct_answer: "Federal structure"
    },
    {
        id: "q_img_19",
        question: "In which of the following strategies are nearly all value-added activities managed from a global perspective without reference to national borders?",
        options: ["Domestic exporter", "Multinational", "Franchiser", "Transnational", "Domestic importer"],
        correct_answer: "Transnational"
    },
    {
        id: "q_img_20",
        question: "Which of the following statements about transnational firms is not true?",
        options: [
            "Transnational firms have many regional headquarters and perhaps a world headquarters.",
            "Transnational firms are stateless.",
            "Transnational firms view the entire globe as their management frame of reference.",
            "Transnational firms have no single headquarters.",
            "Many firms have attained transnational status."
        ],
        correct_answer: "Many firms have attained transnational status."
    },
    {
        id: "q_img_21",
        question: "Which of the following business functions is not centralized in the domestic exporter business strategy?",
        options: ["Production", "Finance/accounting", "Sales/marketing", "Human resources", "Strategic management"],
        correct_answer: "Sales/marketing"
    },
    {
        id: "q_img_22",
        question: "In decentralized systems:",
        options: [
            "development occurs at the home base and operations are handed over to autonomous units in foreign locations.",
            "each foreign unit designs its own unique solutions and systems.",
            "systems development and operations occur in an integrated and coordinated fashion across all units.",
            "foreign units design the solutions and systems used at the domestic home base.",
            "all systems are designed in domestic headquarters and then distributed to foreign units."
        ],
        correct_answer: "each foreign unit designs its own unique solutions and systems."
    },
    {
        id: "q_img_23",
        question: "In networked systems:",
        options: [
            "development occurs at the home base and operations are handed over to autonomous units in foreign locations.",
            "each foreign unit designs its own unique solutions and systems.",
            "systems development and operations occur in an integrated and coordinated fashion across all units.",
            "foreign units design the solutions and systems used at the domestic home base.",
            "development occurs at the home base but operations are handed over to autonomous units in foreign locations."
        ],
        correct_answer: "systems development and operations occur in an integrated and coordinated fashion across all units."
    },
    {
        id: "q_img_24",
        question: "Domestic exporters typically have highly ________ systems.",
        options: ["duplicated", "centralized", "networked", "decentralized", "autonomous"],
        correct_answer: "centralized"
    },
    {
        id: "q_img_25",
        question: "Which of the following is an emerging pattern of system configuration for multinational companies?",
        options: ["Duplicated", "Centralized", "Networked", "Decentralized", "Autonomous"],
        correct_answer: "Networked"
    },
    {
        id: "q_img_26",
        question: "Of the following, which is one of the central principles recommended in this chapter for a firm organizing itself for international business?",
        options: [
            "Organize value-adding activities along lines of comparative advantage.",
            "Establish multiple offices for international systems and a global CIO position.",
            "Disperse production and marketing to regional centers and establish a single center for world headquarters and strategic management.",
            "Develop and operate systems units at the international level first.",
            "Centralize production but decentralize marketing and sales to be close to the customer."
        ],
        correct_answer: "Organize value-adding activities along lines of comparative advantage."
    },
    {
        id: "q_img_27",
        question: "In a franchiser business strategy, strategic management and finance/accounting are coordinated and production, sales/marketing, and human resources are centralized.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_img_28",
        question: "Transnational systems units should handle telecommunications and systems development across national boundaries that take place within major geographic regions, such as Europe, Asia, and the Americas.",
        options: ["是", "非"],
        correct_answer: "非"
    },
    {
        id: "q_img_29",
        question: "Which of the following is not one of the principal management challenges in developing global systems?",
        options: [
            "Encouraging local users to support global systems",
            "Coordinating applications development",
            "Defining an acceptable test plan",
            "Agreeing on common user requirements",
            "Introducing changes in business processes"
        ],
        correct_answer: "Defining an acceptable test plan"
    },
    {
        id: "q_img_30",
        question: "Which of the following occurs as a firm moves from local option systems to regional and global systems?",
        options: [
            "Agency costs increase.",
            "Coordination costs decrease.",
            "Transaction costs increase.",
            "Both transaction and agency costs increase.",
            "All costs increase."
        ],
        correct_answer: "Agency costs increase."
    },
    {
        id: "q_img_31",
        question: "When developing a global system, bringing the opposition of local groups into the process of designing and implementing the solution without giving up control over the direction and nature of the change is called:",
        options: ["cooptation.", "change management.", "implementation.", "advocacy.", "cooperation."],
        correct_answer: "cooptation."
    },
    {
        id: "q_img_32",
        question: "Transnational centers of excellence do all of the following except:",
        options: [
            "perform initial identification and specification of business processes.",
            "define information requirements.",
            "perform business and systems analysis.",
            "accomplish all design and testing.",
            "implement the system throughout the world."
        ],
        correct_answer: "implement the system throughout the world."
    },
    {
        id: "q_img_33",
        question: "The chapter outlines four major steps in developing an effective global system solution. Which of the following is not one of these steps?",
        options: [
            "Identify which local systems need to be replaced.",
            "Identify the core systems to coordinate centrally.",
            "Choose a developmental approach.",
            "Make the benefits clear.",
            "Define the core business processes."
        ],
        correct_answer: "Identify which local systems need to be replaced."
    },
    {
        id: "q_img_34",
        question: "The way to identify core business processes is to conduct a:",
        options: [
            "cost-benefit analysis.",
            "work-flow analysis.",
            "business process analysis.",
            "feasibility analysis.",
            "systems analysis."
        ],
        correct_answer: "business process analysis."
    },
    {
        id: "q_img_35",
        question: "Global systems allow fixed costs to be amortized over a much larger customer base.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_img_36",
        question: "Success as a change agent depends on legitimacy, authority, and ability to involve users in the change design process.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_img_37",
        question: "Software localization is the process of:",
        options: [
            "developing a purely graphical user interface.",
            "converting software programming to run on a different platform.",
            "converting software to operate in a second language.",
            "modifying software so that it can be adopted in other countries without engineering changes.",
            "modifying software so executives can understand its command language."
        ],
        correct_answer: "converting software to operate in a second language."
    },
    {
        id: "q_img_38",
        question: "Which of the following is not an important technology issue to consider when developing an international information system?",
        options: [
            "Standardizing the global computing platform",
            "Developing a global knowledge base",
            "Finding specific software applications that are user friendly and enhance productivity",
            "Building sufficient connectivity",
            "Developing common data standards"
        ],
        correct_answer: "Developing a global knowledge base"
    },
    {
        id: "q_img_39",
        question: "Which of the following statements about connectivity in relation to global systems is not true?",
        options: [
            "Few global corporations trust the security of the Internet.",
            "The public Internet guarantees a basic level of service.",
            "Many global corporations use private networks to communicate sensitive data.",
            "Not all countries support basic Internet service.",
            "The Internet provides a powerful foundation for providing connectivity among the dispersed units of global firms."
        ],
        correct_answer: "The public Internet guarantees a basic level of service."
    },
    {
        id: "q_img_40",
        question: "Which of the following is not one of the challenges posed by international networks, including the Internet?",
        options: [
            "Quality of service",
            "Security",
            "Costs and tariffs",
            "Differences in Internet protocols",
            "Network management"
        ],
        correct_answer: "Differences in Internet protocols"
    },
    {
        id: "q_img_41",
        question: "In developing countries, use of the Internet is limited by all of the following except:",
        options: [
            "use of mobile telephones.",
            "high cost of Internet access.",
            "poor bandwidth capacity.",
            "unreliable power grids.",
            "claims of digital sovereignty."
        ],
        correct_answer: "use of mobile telephones."
    },
    {
        id: "q_img_42",
        question: "While private networks have guaranteed service levels and better security than the Internet, the Internet is the primary foundation for global corporate networks when lower security and service levels are acceptable.",
        options: ["是", "非"],
        correct_answer: "是"
    },
    {
        id: "q_img_43",
        question: "Internet-based VPNs provide the same level of quick and predictable response as private networks.",
        options: ["是", "非"],
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
