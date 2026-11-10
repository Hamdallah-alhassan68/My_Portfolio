import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  PanelsTopLeft,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const github = "https://github.com/Hamdallah-alhassan68";
const linkedin = "https://www.linkedin.com/in/hamdallahalhassan/";
const contactEmail = "hamdallahalhassan68@gmail.com";

const projects = [
  {
    id: "momo",
    title: "MoMo Sentinel",
    subtitle: "Mobile money · Fraud monitoring",
    category: "AI & ML",
    label: "Applied AI",
    image: "/images/momo-sentinel.jpg",
    imageLabel: "MoMo Sentinel project image",
    alt: "Photo supplied for the MoMo Sentinel project",
    repo: `${github}/momo-fraud-detection`,
    status: "Project",
    summary:
      "A simulated Ghanaian mobile-money platform with behavioral anomaly detection, rule-based risk scoring, and a fraud-monitoring dashboard.",
    overview:
      "MoMo Sentinel explores how transaction behavior can surface suspicious activity and support risk-based review in a simulated mobile-money service.",
    problem:
      "A single transaction can look ordinary in isolation. Monitoring behavior over time can help flag activity that may need closer review.",
    objectives: [
      "Explore behavioral analysis on simulated transaction activity.",
      "Combine anomaly detection with explainable risk rules.",
      "Present alerts and transaction context in a monitoring interface.",
    ],
    contribution:
      "Built a prototype workflow spanning transaction simulation, risk assessment, anomaly reporting, and dashboard review.",
    tools: ["Python", "Flask", "React", "Isolation Forest", "XAMPP"],
    implementation:
      "A post-authorization monitoring and risk-control layer evaluates transaction behavior and produces review signals. It does not replace PINs or OTPs.",
    results:
      "The repository describes a simulated wallet, risk scoring, fraud alerts, transaction monitoring, and an admin investigation dashboard. No validated performance metric is published.",
    learning:
      "Risk systems need to balance suspicious-activity detection with useful context for human review.",
    visual: "visual-momo",
    featured: true,
  },
  {
    id: "aiops",
    title: "AIOps Network Monitoring",
    subtitle: "Network operations · Anomaly detection",
    category: "Networks",
    label: "Networks + ML",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    alt: "Illuminated network server racks",
    repo: `${github}/AIOPs`,
    status: "Project",
    summary:
      "A NOC-style prototype applying machine learning to network telemetry, anomaly detection, incident triage, and operational recommendations.",
    overview:
      "AIOps explores how network telemetry and machine learning can support faster, more informed network operations.",
    problem:
      "Network teams can face noisy telemetry and a high volume of alerts, making it harder to distinguish unusual events from routine behavior.",
    objectives: [
      "Prepare and analyze network monitoring data.",
      "Explore Isolation Forest for unusual-activity detection.",
      "Connect detected events with incident triage and suggested actions.",
    ],
    contribution:
      "Developed a network monitoring and incident-management project focused on telemetry processing, anomaly analysis, and operational visibility.",
    tools: ["Python", "pandas", "scikit-learn", "Isolation Forest", "React"],
    implementation:
      "The repository describes a NOC-style console with telemetry collection, anomaly detection, event correlation, incident creation, and simulated reroutes.",
    results:
      "The project demonstrates a monitoring workflow; published evaluation metrics are not provided.",
    learning:
      "Alert usefulness depends on context and prioritization, not detection alone.",
    visual: "visual-network",
    featured: true,
  },
  {
    id: "credit",
    title: "ABC Bank Credit Intelligence",
    subtitle: "Credit risk · Predictive modelling",
    category: "AI & ML",
    label: "Responsible modelling",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    alt: "Financial documents and a calculator on a desk",
    repo: `${github}/CreaditRisk`,
    demo: "https://creaditrisk-hjlp.onrender.com",
    status: "Project",
    summary:
      "A creditworthiness assessment prototype using applicant data and a Random Forest model to explore data-supported decisions in finance.",
    overview:
      "A web application that demonstrates a machine-learning workflow for creditworthiness assessment. This is an academic prototype, not a system deployed by a bank.",
    problem:
      "Credit assessment offers a practical case for studying how applicant information can be processed and model outputs evaluated.",
    objectives: [
      "Prepare applicant data for a classification workflow.",
      "Train and evaluate a Random Forest classifier.",
      "Expose model predictions through a web interface.",
    ],
    contribution:
      "Worked across data preparation, model evaluation, and the Flask application used to present predictions.",
    tools: ["Python", "Flask", "SQLite", "SQLAlchemy", "Random Forest", "joblib"],
    implementation:
      "The application connects an applicant-data form with a trained model and a results view.",
    results:
      "Reported model ROC-AUC: approximately 0.936–0.937. Minority-class recall improved to approximately 0.80 in the improved model.",
    learning:
      "Model quality is not captured by a single score; performance on the minority class also matters.",
    visual: "visual-credit",
    featured: true,
  },
  {
    id: "sales",
    title: "Sales Trends & KPI Dashboard",
    subtitle: "Business intelligence · Retail",
    category: "Data & BI",
    label: "Power BI",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    alt: "Analytics charts on a computer display",
    repo: `${github}/-Sales-Trends_KPI-`,
    demo:
      "https://app.powerbi.com/groups/me/reports/90d1e9c1-6d08-4ff4-9477-99ab47c2ec4d?ctid=16d83ee6-254a-469d-a6cc-54e2ca2313e7&pbi_source=linkShare",
    report: "/reports/sales-trends-kpis.pdf",
    status: "Project",
    summary:
      "An interactive retail dashboard for exploring sales, profit, product performance, regional patterns, and time-based trends.",
    overview:
      "A business-intelligence project that turns Superstore retail data into an interactive Power BI report.",
    problem:
      "Reviewing raw sales tables makes it difficult to compare performance across products, regions, and time periods.",
    objectives: [
      "Prepare and standardize retail data for reporting.",
      "Create sales and profitability KPIs.",
      "Provide interactive filters for product, region, and time analysis.",
    ],
    contribution:
      "Cleaned and modeled the dataset, created dashboard measures, and designed interactive visuals and filters.",
    tools: ["Microsoft Excel", "Power BI", "Superstore dataset"],
    implementation:
      "An Excel preparation workflow feeds a Power BI model with measures, calculated fields, visuals, and slicers.",
    results:
      "The dashboard surfaces category, regional, and seasonal patterns. No independently verified business outcome is claimed here.",
    learning:
      "A useful dashboard pairs clear visual hierarchy with questions a stakeholder can act on.",
    visual: "visual-sales",
  },
  {
    id: "marketing",
    title: "Marketing Campaign Performance",
    subtitle: "Business intelligence · Customer behaviour",
    category: "Data & BI",
    label: "Power BI",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    alt: "Team collaborating around a table",
    repo: `${github}/Marketing_Campaign`,
    demo:
      "https://app.powerbi.com/links/FPjyHraXbI?ctid=16d83ee6-254a-469d-a6cc-54e2ca2313e7&pbi_source=linkShare",
    status: "Project",
    summary:
      "An interactive dashboard exploring campaign response, customer segments, conversion patterns, and marketing performance.",
    overview:
      "A Power BI project that organizes campaign and customer data into a filterable performance report.",
    problem:
      "Campaign data can be difficult to compare across customer groups, channels, and time without a shared view of performance.",
    objectives: [
      "Prepare campaign data for analysis.",
      "Compare campaign and customer-segment patterns.",
      "Make performance trends easier to explore with interactive filters.",
    ],
    contribution:
      "Prepared campaign data, modeled reporting measures, and assembled an interactive dashboard.",
    tools: ["Microsoft Excel", "Power BI", "CSV data"],
    implementation:
      "A cleaned dataset feeds campaign KPIs, customer-segment analysis, comparisons, and interactive slicers.",
    results:
      "The report highlights patterns in customer responses and campaign performance; no independently verified business outcome is claimed here.",
    learning:
      "Segmenting results gives more useful context than treating every campaign audience as one group.",
    visual: "visual-marketing",
  },
  {
    id: "social-media",
    title: "Social Media Campaign Performance",
    subtitle: "Social media · Campaign analytics",
    category: "Data & BI",
    label: "Power BI",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
    alt: "Social media campaign analysis workspace",
    demo:
      "https://app.powerbi.com/groups/me/reports/38b78b62-4190-4c4b-99c3-66fb6dd1d753?ctid=16d83ee6-254a-469d-a6cc-54e2ca2313e7&pbi_source=linkShare",
    report: "/reports/social-media-analysis.pdf",
    status: "Project",
    summary:
      "An interactive Power BI dashboard for analysing social media campaign performance, including impressions, click-through rates, approved conversations, audience interests, demographic patterns, and campaign spending.",
    overview:
      "This project uses Microsoft Power BI to bring together campaign performance and audience information in an interactive reporting dashboard. It provides a consolidated view of campaign activity, audience characteristics, and spending measures.",
    problem:
      "Social media campaign performance involves multiple measures that can be difficult to interpret when viewed separately. A dashboard makes it easier to compare campaign reach, audience engagement, and spending.",
    objectives: [
      "Organize campaign data for reporting.",
      "Monitor impressions and click-through rates.",
      "Examine approved conversations.",
      "Explore audience interests and demographic patterns.",
      "Compare campaign spending.",
      "Present findings through interactive visualizations.",
    ],
    contribution:
      "Developed an interactive Power BI report to organize and present social media campaign data. Worked on arranging campaign metrics, audience breakdowns, and spending information into visual reports that support easier performance analysis.",
    tools: ["Microsoft Power BI", "Social media campaign data"],
    implementation:
      "The dashboard uses Power BI visualizations to present impressions, click-through rates, approved conversations, audience interests, age and gender breakdowns, campaign identifiers, and campaign spending.",
    results:
      "The dashboard provides an interactive overview of campaign activity and audience characteristics, allowing users to explore performance measures and compare campaign information.",
    learning:
      "Strengthened skills in business intelligence, data visualization, dashboard development, and communicating campaign performance through analytical reports.",
    visual: "visual-social-media",
  },
  {
    id: "nexo",
    title: "Nexo Girls Website",
    subtitle: "Web development · Community",
    category: "Product & Web",
    label: "Volunteer · Web Design Lead",
    image: "/images/nexo-girls-banner.png",
    imageLabel: "Nexo Girls website banner",
    alt: "Nexo Girls Metaverse banner featuring young women",
    repo: `${github}/Nexo-Girls`,
    demo: "https://nexo-girls.vercel.app/",
    status: "Volunteer project",
    summary:
      "A responsive React website supporting Nexo Girls’ digital presence, with reusable pages, navigation, and programme information.",
    overview:
      "A multi-page website for a girls-focused organization, designed to make its programmes and ways to get involved easier to explore.",
    problem:
      "The organization needed a welcoming digital home for its mission, programmes, milestones, and community participation.",
    objectives: [
      "Create responsive page layouts and reusable components.",
      "Make navigation and dropdown menus easy to use.",
      "Support key sections including programmes, volunteering, and donations.",
    ],
    contribution:
      "Web Design Lead / Volunteer Developer. Contributed to React website development and responsive components, and supported a separate machine-learning training initiative for girls.",
    tools: ["React", "JavaScript", "CSS", "Vite"],
    implementation:
      "A React single-page website with shared navigation and footer components, page routes, and responsive styling.",
    results:
      "The repository includes routes for the home page, programmes, milestones, team, volunteering, partnerships, and donations.",
    learning:
      "Community-facing websites work best when their information architecture makes the next step clear.",
    visual: "visual-nexo",
  },
  {
    id: "feedback",
    title: "College Event Feedback Analysis",
    subtitle: "Data analysis · Education",
    category: "Data & BI",
    label: "Research & insights",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    alt: "Students collaborating at a desk",
    repo: `${github}/College_Event_Feedback_Analysis`,
    status: "Project",
    summary:
      "An internship project focused on analysing student feedback to identify recurring themes, understand student experiences, and generate insights that can support improvements in college events and academic support services.",
    overview:
      "This project involved organizing and analysing student feedback to better understand participants' experiences and identify areas that may require attention. It demonstrates the use of data analysis to turn collected responses into useful information for decision-making.",
    problem:
      "Student feedback can contain valuable information about the quality of events and academic support. However, collecting responses alone is not enough; the information needs to be organized and examined to identify patterns and areas for improvement.",
    objectives: [
      "Organize collected student feedback for analysis.",
      "Identify recurring responses, concerns, and themes.",
      "Examine feedback patterns to understand student experiences.",
      "Present findings that can inform future programme and event improvements.",
    ],
    contribution:
      "Contributed to an internship project involving the analysis of student feedback. The work focused on examining responses and presenting information that could help stakeholders better understand student experiences.",
    tools: ["Microsoft Excel", "Python", "pandas", "Matplotlib"],
    implementation:
      "The project involves working with collected feedback, organizing responses, examining patterns, and presenting relevant findings. Specific tools and analytical techniques should only be included after verifying the project files.",
    results:
      "The project provides a structured approach to understanding student feedback and identifying areas that may benefit from improvement. Do not include numerical outcomes unless they are available in the original project.",
    learning:
      "Developed an appreciation for how structured data analysis can help organizations understand feedback and make more informed decisions.",
    visual: "visual-feedback",
  },
  {
    id: "pcc-finance",
    title: "PCC Finance",
    subtitle: "Finance · Web application",
    category: "Product & Web",
    label: "Final review",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85",
    alt: "Calculator and financial paperwork",
    status: "Project",
    summary:
      "A finance-focused web application developed as a practical software project, demonstrating the use of web technologies to support finance-related activities.",
    overview:
      "PCC Finance is a web application project focused on building a digital platform for finance-related operations. The project provides an opportunity to apply web development concepts to a practical financial application.",
    problem:
      "Finance-related activities can involve information that needs to be organized and managed efficiently. This project explores how a web application can provide a structured digital environment for handling finance-related tasks.",
    objectives: [
      "Develop a web-based finance application.",
      "Apply practical frontend and backend development concepts.",
      "Organize finance-related information through a digital interface.",
      "Build and test application functionality.",
    ],
    contribution:
      "Worked on the development of the PCC Finance application, applying web development concepts and working with the project's implementation.",
    tools: ["Web technologies available in the project repository"],
    implementation:
      "Developed as a web application using the technologies available in the project repository. Specific features, database functionality, and implementation details should be documented after inspecting the actual source code.",
    results:
      "A finance-focused application prototype demonstrating the application of software development concepts to a practical project.",
    learning:
      "Strengthened practical web development skills and gained experience applying programming concepts to a finance-related application.",
    visual: "visual-pcc",
    needsReview: true,
    reviewStatus: "Final review required",
    reviewNote:
      "Provisional content. Confirm the project implementation and final details before publishing as a verified portfolio entry.",
  },
  {
    id: "signup",
    title: "Full-Stack Signup Application",
    subtitle: "Full-stack development · Authentication",
    category: "Product & Web",
    label: "Academic project",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    alt: "Code editor on a desktop screen",
    status: "Project",
    summary:
      "A full-stack user registration application built with React, Node.js, Express.js, and MongoDB, demonstrating form handling, backend API integration, input validation, and secure password storage.",
    overview:
      "This academic project demonstrates how a frontend registration interface communicates with a backend server and database to create user accounts. It combines React for the user interface, Express.js for backend routing, and MongoDB for storing registration information.",
    problem:
      "User registration requires more than collecting information through a form. Applications must validate submitted data, communicate reliably with the server, store user information correctly, and protect passwords.",
    objectives: [
      "Build a registration form using React.",
      "Manage form values using React state and controlled inputs.",
      "Handle form submission and HTTP requests.",
      "Develop backend routes using Express.js.",
      "Connect the backend to MongoDB.",
      "Validate submitted information.",
      "Hash passwords using bcrypt before storing them.",
      "Implement error handling and appropriate HTTP responses.",
    ],
    contribution:
      "Developed the registration application, working on the React frontend, form state management, backend API integration, and database operations. Implemented the registration workflow using Express.js and MongoDB, including password hashing with bcrypt.",
    tools: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "bcrypt"],
    implementation:
      "The React frontend uses controlled inputs and state management to collect registration details. When the form is submitted, an HTTP request sends the information to the Express.js backend. The backend validates the request, hashes the password using bcrypt, and stores the user information in MongoDB. Error handling and HTTP status codes are used to manage the communication between the frontend and backend.",
    results:
      "A functional academic prototype demonstrating the complete user-registration workflow, from frontend data collection to backend processing and database storage.",
    learning:
      "Developed practical understanding of full-stack application architecture, REST API communication, database integration, form validation, and secure password handling.",
    visual: "visual-code",
  },
  {
    id: "animation",
    title: "Video Animation Projects",
    subtitle: "Animation · Creative digital media",
    category: "Creative & Animation",
    label: "Animation",
    image: "/images/animation-sample.png",
    imageLabel: "Animation video still",
    alt: "Frame from an animated video featuring a child and toys in a living room",
    repo: `${github}/Video-animation`,
    relatedRepo: `${github}/Group-7-video-animation`,
    demo: "https://www.youtube.com/watch?v=p-NZdL_9wzE&t=10s",
    demoLabel: "Watch on YouTube",
    status: "Creative work",
    summary:
      "A collection of individual and collaborative video-animation projects demonstrating creative storytelling, visual communication, and digital content production.",
    overview:
      "This collection showcases video-animation work completed through individual and group projects. The projects provided opportunities to explore visual storytelling and communicate ideas through animated content.",
    problem:
      "Visual communication provides an alternative way to explain ideas and engage audiences. Animation projects require planning, creativity, and collaboration to translate concepts into visual stories.",
    objectives: [
      "Explore digital animation and visual storytelling.",
      "Communicate ideas through animated video content.",
      "Develop creative and technical skills through practical projects.",
      "Gain experience working on individual and collaborative creative assignments.",
    ],
    contribution:
      "Participated in individual and group video-animation projects, contributing to the creation of animated content and collaborative creative work.",
    tools: ["Animation and editing tools"],
    implementation:
      "The work involves planning and developing animated video content. Specific animation software, production techniques, and individual responsibilities should be added only after reviewing the available video samples.",
    results:
      "A collection of completed animation work, including an individual project and a group project. The available YouTube sample should remain linked for visitors to view.",
    learning:
      "Developed creative problem-solving, visual communication, and collaboration skills through practical animation work.",
    visual: "visual-animation",
  },
  {
    id: "secure-student-portal",
    title: "Secure Student Portal",
    subtitle: "Secure network programming · Academic portal",
    category: "Networks",
    label: "Java · Network security",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt: "University students walking across a campus",
    repo: `${github}/NET4030-Secure-Student-Portal`,
    status: "Academic project",
    summary:
      "A Java-based student and teacher portal developed as an academic secure network programming project, featuring role-based access, authentication, assignment submission, and grade management.",
    overview:
      "The Secure Student Portal is an academic application designed to support interactions between students and teachers through separate user workflows. It provides a structured environment for managing coursework, submitting assignments, and reviewing academic information.",
    problem:
      "Managing assignments and academic records requires a system that allows students and teachers to access relevant information while maintaining appropriate access restrictions.",
    objectives: [
      "Develop separate student and teacher workflows.",
      "Support assignment submission.",
      "Enable grade management and review.",
      "Implement user authentication.",
      "Apply session management and role-based access control.",
      "Include input validation and secure programming practices.",
    ],
    contribution:
      "Worked on the development of a Java-based student portal as part of a Secure Network Programming academic project. The project involved applying authentication, access control, and application security concepts.",
    tools: ["Java", "Relevant technologies confirmed in the repository"],
    implementation:
      "The application uses Java to support student and teacher workflows. Authentication and session management support user access, while role-based access control separates the functions available to students and teachers.",
    results:
      "The project demonstrates an academic portal with student and teacher workflows, assignment management, grade-related functionality, and security-focused application design.",
    learning:
      "Developed practical understanding of authentication, session management, role-based access control, input validation, and secure application development.",
    visual: "visual-portal",
  },
  {
    id: "blockchain-certificates",
    title: "Blockchain Certificate Verification",
    subtitle: "Certificate verification · Applied cryptography",
    category: "Networks",
    label: "Blockchain & security",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=85",
    alt: "Abstract digital network connections",
    repo: `${github}/Blockchain`,
    demo: "https://blockchain-3-zij6.onrender.com/",
    status: "Project",
    summary:
      "A certificate-verification web application exploring cryptographic hashing, encrypted records, and role-based workflows.",
    overview:
      "A Flask web application designed to explore digital certificate verification through cryptographic record checks and a web-based upload and validation flow.",
    problem:
      "Manual certificate checks can take time and make it harder to quickly confirm whether a record has changed.",
    objectives: [
      "Create a web flow for submitting and verifying certificate records.",
      "Explore hashing and encryption for protecting record integrity.",
      "Support different user roles in the verification workflow.",
    ],
    contribution:
      "Built a certificate-verification project that connects a web interface with record processing and verification.",
    tools: ["Python", "Flask", "RSA encryption", "SHA-256", "HTML", "CSS", "JavaScript"],
    implementation:
      "The project describes a Flask application that processes certificate data, creates integrity hashes, stores records, and checks submitted records during verification.",
    results:
      "The repository includes a live demo and describes an end-to-end verification workflow. Performance figures in the README have not been independently verified.",
    learning:
      "A verification workflow depends on both sound data handling and a clear process for reviewing verification results.",
    visual: "visual-blockchain",
  },
  {
    id: "school-timetable",
    title: "School Timetable Generator",
    subtitle: "Scheduling · Web application",
    category: "Product & Web",
    label: "Node.js · Scheduling",
    image: "/images/school-timetable-generator.png",
    imageLabel: "Generated school timetable screenshot",
    alt: "Generated weekly school timetable with weekday columns, scheduled lessons, and a tea break",
    repo: `${github}/timetablegenerator`,
    status: "Project",
    summary:
      "A web application for generating school timetables from subjects, teachers, rooms, and available time slots.",
    overview:
      "A school timetable project that applies scheduling constraints to organize teaching periods and resources.",
    problem:
      "Planning classes manually can create overlapping room and teacher schedules that are difficult to spot and correct.",
    objectives: [
      "Collect schedule inputs such as subjects, teachers, and rooms.",
      "Generate and validate timetables against scheduling constraints.",
      "Allow schedules to be viewed and adjusted through a web interface.",
    ],
    contribution:
      "Developed a timetable-generation application with a browser interface and server-side scheduling workflow.",
    tools: ["Node.js", "Express.js", "Handlebars", "HTML", "CSS", "JSON"],
    implementation:
      "An Express application accepts schedule inputs, applies scheduling rules, and presents generated timetable views.",
    results:
      "The repository describes conflict checks for teacher and room assignments. No independently measured time-saving claim is made here.",
    learning:
      "Making constraints explicit is essential when automating a scheduling problem.",
    visual: "visual-timetable",
  },
  {
    id: "local-store",
    title: "Local Store E-commerce Platform",
    subtitle: "E-commerce · Full-stack web application",
    category: "Product & Web",
    label: "Online shopping",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=85",
    alt: "A shopper browsing a clothing store",
    repo: `${github}/Local-Store-E-commerce-Platform`,
    status: "Project",
    summary:
      "A full-stack e-commerce application designed to provide an online shopping experience through product browsing, search, filtering, and shopping-cart functionality.",
    overview:
      "The Local Store E-commerce Platform is a web application designed to help customers explore products and interact with an online storefront. It combines a frontend shopping interface with backend functionality for handling application data.",
    problem:
      "Small businesses can benefit from an online platform that allows customers to discover products and manage their shopping activities without relying entirely on physical store visits.",
    objectives: [
      "Create an online product catalogue.",
      "Enable product browsing and discovery.",
      "Support product search and filtering.",
      "Implement shopping-cart functionality.",
      "Develop a responsive user interface.",
      "Connect the frontend to backend services and a database.",
    ],
    contribution:
      "Contributed to developing a full-stack e-commerce application, working with the web interface and application functionality.",
    tools: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"],
    implementation:
      "The project uses a React frontend and a Node.js/Express.js backend connected to MongoDB. The application is structured around product information and shopping interactions.",
    results:
      "The project demonstrates an online storefront with product listings and shopping-related functionality. Additional features such as order tracking and customer reviews should only be described as implemented if they are present in the actual source code.",
    learning:
      "Developed practical understanding of full-stack web development, frontend and backend integration, database connectivity, and designing user-friendly shopping workflows.",
    visual: "visual-store",
  },
  {
    id: "dairy-me",
    title: "Dairy Me",
    subtitle: "Personal journaling · Web application",
    category: "Product & Web",
    label: "Flask · SQLite",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    alt: "An open journal and pen on a desk",
    repo: `${github}/Dairy_me`,
    status: "Project",
    summary:
      "A personal journaling site for writing and revisiting daily entries in an account-based web application.",
    overview:
      "A journaling project that lets users create accounts and write personal diary entries through a web interface.",
    problem:
      "People need a straightforward place to record personal reflections and return to them later.",
    objectives: [
      "Create user registration and sign-in flows.",
      "Allow users to write and view diary entries.",
      "Associate saved entries with their author.",
    ],
    contribution:
      "Developed the journal application and its user and diary-entry workflows.",
    tools: ["Python", "Flask", "Flask-SQLAlchemy", "SQLite", "HTML", "CSS"],
    implementation:
      "The repository uses Flask routes and SQLAlchemy models for users and timestamped diary entries.",
    results:
      "The project includes registration, sign-in, a dashboard, and saved diary entries. No deployment details are supplied.",
    learning:
      "Even a small personal application needs clear handling of accounts and user-specific records.",
    visual: "visual-dairy",
  },
  {
    id: "asa-menu",
    title: "ASA Menu Voting App",
    subtitle: "School food preferences · Desktop application",
    category: "Product & Web",
    label: "Python · MySQL",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
    alt: "A freshly prepared meal on a table",
    repo: `${github}/AsaMenu`,
    status: "Project",
    summary:
      "A school menu application for collecting meal selections through a desktop interface and database workflow.",
    overview:
      "A Python desktop project for selecting school food options and submitting the selected choices to a MySQL database.",
    problem:
      "Collecting meal preferences through a manual process can make it harder to organize choices for a school community.",
    objectives: [
      "Present meal options through a desktop interface.",
      "Collect selections for the available meal periods.",
      "Store submitted selections in a database.",
    ],
    contribution:
      "Built a school menu-selection project using a graphical interface connected to MySQL.",
    tools: ["Python", "Tkinter", "MySQL"],
    implementation:
      "The repository contains a Tkinter application that reads food selections from the interface and submits them to a MySQL database.",
    results:
      "The project demonstrates a desktop form and database-backed menu-selection workflow.",
    learning:
      "A simple interface can make a repetitive information-collection task easier to organize.",
    visual: "visual-menu",
  },
  {
    id: "get-impeccable",
    title: "Get Impeccable Website & Forms",
    subtitle: "Community organization · Digital presence",
    category: "Product & Web",
    label: "React · PHP · MySQL",
    image: "/images/get-impeccable-homepage.png",
    alt: "Get Impeccable website homepage, featuring its organization navigation and Become Impeccable hero section",
    repo: `${github}/Get-Impeccable`,
    status: "Volunteer project",
    summary:
      "A community organization website with React pages and forms backed by a PHP and MySQL submission service.",
    overview:
      "A digital-presence project for Get Impeccable that connects a React website and its forms to a database-backed PHP API.",
    problem:
      "An organization needs a clear online presence and a practical way to receive contact, partnership, programme, and newsletter submissions.",
    objectives: [
      "Present organizational information through a React web interface.",
      "Collect form and newsletter submissions.",
      "Connect submitted information to a PHP and MySQL backend.",
    ],
    contribution:
      "Contributing as Operations Manager and volunteer on the organization’s digital presence. Add specific implementation responsibilities after confirming the work completed.",
    tools: ["React", "Vite", "PHP", "MySQL"],
    implementation:
      "The repository describes a React frontend that sends form submissions to a PHP API, with MySQL storage for supported form types.",
    results:
      "The repository documents forms for contact, newsletter, partnerships, donations, classes, and opportunities.",
    learning:
      "A useful organization website should connect clear programme information with practical ways to get involved.",
    visual: "visual-impeccable",
    needsReview: true,
    reviewStatus: "Contribution to clarify",
  },
];

const experience = [
  {
    role: "IT Support & Systems Data Assistant",
    organization: "Pinnacle Construction Co. Ltd. (PCC)",
    date: "Sep 2026 – Present · Accra, Ghana",
    description:
      "Supporting IT operations and systems data integrity across department functions.",
    highlights: [
      "Maintained 100% operational data integrity through structured data analysis and technical documentation for IT infrastructure systems.",
      "Delivered daily system administration reports and real-time infrastructure performance metrics, contributing to a reported 20% improvement in executive decision-making speed.",
    ],
    icon: PanelsTopLeft,
  },
  {
    role: "Volunteer",
    organization: "Angaza Technology Center",
    date: "May 2026 – Sep 2026 · Kenya",
    description:
      "Mentored high school students through remote digital literacy and STEM learning sessions.",
    highlights: [
      "Mentored 45+ students through virtual sessions focused on digital literacy and STEM.",
      "Designed interactive modules introducing coding, data analysis, and digital problem-solving.",
      "Guided participants in applying STEM concepts to real-world challenges and building career readiness.",
    ],
    icon: HeartHandshake,
  },
  {
    role: "Data Analytics Intern",
    organization: "Future Intern",
    date: "Jun 2025 – Aug 2025 · Remote",
    description:
      "Built reporting workflows and analyzed digital engagement data to support stakeholder reporting.",
    highlights: [
      "Built Power BI and Excel analytics pipelines, contributing to a reported 30% increase in departmental reporting efficiency.",
      "Used Python to analyze digital engagement metrics and support accurate performance tracking and stakeholder reports.",
    ],
    icon: PanelsTopLeft,
  },
  {
    role: "Campus Director · Cohort B",
    organization: "Millennium Campus Network (MCN) · USIU-A",
    date: "Class of 2025",
    description:
      "Led 26 fellows, coordinated six sessions, and supported learning and leadership activities.",
    icon: BriefcaseBusiness,
  },
  {
    role: "Web Design Lead · Volunteer Developer",
    organization: "Nexo Girls",
    date: "Dates to confirm",
    description:
      "Contributing to the organization’s React website, responsive components, and digital presence; separately supporting girls’ exposure to machine learning.",
    icon: Code2,
  },
  {
    role: "Operations Manager · Volunteer",
    organization: "Get Impeccable",
    date: "Dates to confirm",
    description:
      "Supporting organizational operations, coordinating activities, and participating in youth-development work.",
    icon: HeartHandshake,
  },
  {
    role: "Digital Skills Volunteer",
    organization: "Good Samaritan",
    date: "Dates to confirm",
    description:
      "Supported practical digital-skills learning in computer literacy, Excel, Canva, PowerPoint, HTML, CSS, Python fundamentals, C#, and soft skills.",
    icon: GraduationCap,
  },
  {
    role: "Ambassador · YMAU VI",
    organization: "YALI Model at USIU-Africa",
    date: "Dates to confirm",
    description:
      "Participating in youth leadership and ambassador activities.",
    icon: Sparkles,
  },
  {
    role: "Scholar · Transformative Leadership",
    organization: "Mastercard Foundation Scholars Program",
    date: "Dates to confirm",
    description:
      "Scholarship recipient and participant in leadership development and community engagement, including the Fountain of Grace community challenge.",
    icon: BadgeCheck,
  },
  {
    role: "Inventory & Financial Data Operations Manager",
    organization: "Baby Koko Restaurant",
    date: "Aug 2018 – Jul 2022",
    description:
      "Managed inventory and financial data operations, including procurement tracking and daily performance monitoring.",
    highlights: [
      "Developed inventory tracking and procurement workflows, contributing to a reported 15% reduction in resource waste and food spoilage.",
      "Tracked profit and loss, revenue, food-preparation targets, and customer feedback to support daily operational decisions.",
    ],
    icon: BriefcaseBusiness,
  },
];

const education = [
  {
    school: "United States International University-Africa",
    qualification: "Bachelor of Applied Computer Technology",
    detail: "Computer Networking · Fourth year",
    note: "Mastercard Foundation Scholar",
    year: "Current",
  },
  {
    school: "African Science Academy",
    qualification: "A-level STEM education",
    detail:
      "Mathematics, Physics, Further Mathematics, Computer Programming, and Robotics",
    note: "Scholarship recipient · Class of 2023",
    year: "2023",
  },
];

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "C++", "C#"],
  },
  {
    title: "Data & analytics",
    icon: PanelsTopLeft,
    skills: ["SQL", "Excel", "Power BI", "Tableau", "R", "pandas"],
  },
  {
    title: "Machine learning",
    icon: BrainCircuit,
    skills: ["scikit-learn", "Data preprocessing", "Predictive modelling", "Anomaly detection"],
  },
  {
    title: "Web development",
    icon: Code2,
    skills: ["React", "Flask", "HTML", "CSS", "Node.js", "Express.js"],
  },
  {
    title: "Networking & systems",
    icon: Network,
    skills: ["Computer networking", "Cisco Packet Tracer", "Network monitoring", "XAMPP"],
  },
  {
    title: "Tools & databases",
    icon: PanelsTopLeft,
    skills: ["Git", "GitHub", "VS Code", "MongoDB", "SQLite", "Arduino", "Robotics"],
  },
  {
    title: "Creative & animation",
    icon: Sparkles,
    skills: ["Animation", "Video animation"],
  },
];

const certificates = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    date: "Issued August 16, 2025",
    file: "/certificates/google-data-analytics.pdf",
    preview: "/certificates/google-data-analytics-preview.png",
    verify: "https://coursera.org/verify/professional-cert/CP5NMWG2FPKL",
  },
  {
    name: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "Completed May 4, 2025",
    file: "/certificates/introduction-to-data-science.pdf",
    preview: "/certificates/introduction-to-data-science-preview.png",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Completed November 9, 2026",
    file: "/certificates/networking-basics.pdf",
    preview: "/certificates/networking-basics-preview.png",
  },
  {
    name: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "Completed November 9, 2026",
    file: "/certificates/getting-started-with-cisco-packet-tracer.pdf",
    preview: "/certificates/getting-started-with-cisco-packet-tracer-preview.png",
  },
  {
    name: "Transformative Leadership Training",
    issuer: "Mastercard Foundation Scholars Program",
  },
];

const interests = [
  {
    number: "01",
    title: "Chess",
    copy: "Chess challenges me to think strategically, anticipate possibilities, and consider my decisions carefully.",
    icon: "♞",
  },
  {
    number: "02",
    title: "Badminton",
    copy: "I enjoy staying active and building focus, discipline, and coordination on the court.",
    icon: "◉",
  },
  {
    number: "03",
    title: "Technology & learning",
    copy: "I like exploring new technologies, experimenting with ideas, and learning how different systems work.",
    icon: "⌘",
  },
  {
    number: "04",
    title: "Community & collaboration",
    copy: "I value exchanging ideas, working with others, and contributing to initiatives that open up opportunity.",
    icon: "↗",
  },
];

const communityProjects = [
  {
    title: "Technology access & machine learning",
    place: "Ejisu Presbyterian School",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt: "Students learning together in a classroom",
    description:
      "Helped provide students with computers and internet access, introduced machine-learning concepts, and encouraged learners—especially girls—to explore STEM and technology careers.",
    tags: ["Digital inclusion", "Machine learning", "Girls in STEM"],
    visual: "community-ejisu",
  },
  {
    title: "Digital literacy & introduction to programming",
    place: "Good Samaritan",
    image: "/images/good-samaritan.png",
    imageLabel: "Digital skills training photo",
    alt: "Photograph from the Good Samaritan digital literacy and coding training",
    description:
      "Tutored learners in computer use and basic digital literacy, then introduced HTML, CSS, C#, and practical programming exercises.",
    tags: ["Computer literacy", "HTML & CSS", "C#"],
    visual: "community-literacy",
  },
  {
    title: "Community skills through tote-bag training",
    place: "Fountain of Grace",
    image: "/images/fountain-of-grace.png",
    imageLabel: "Fountain of Grace project photo",
    alt: "Young people displaying finished tote bags at a community sewing workshop",
    description:
      "Joined a community challenge involving practical tote-bag training. I supported the activity and learned sewing alongside the community—a reminder that service can also be mutual learning.",
    tags: ["Practical skills", "Collaboration", "Mutual learning"],
    visual: "community-grace",
  },
];

const filters = ["All work", "AI & ML", "Data & BI", "Networks", "Product & Web", "Creative & Animation"];

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function ProjectCard({ project, onOpen, compact = false }) {
  return (
    <article className={`project-card${compact ? " project-card-featured" : ""}`}>
      <button
        className={`project-image ${project.visual}`}
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View details for ${project.title}`}
      >
        <img src={project.image} alt={project.alt} loading="lazy" />
        <span className="image-shade" />
        <span className="image-placeholder-tag">{project.imageLabel || "Stock image · replace with project media"}</span>
        <span className="image-category">{project.label}</span>
        <span className="image-open" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </button>
      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-status">
            {project.needsReview ? project.reviewStatus || "Details to verify" : project.status}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-summary">{project.summary}</p>
        <div className="project-access-links" aria-label={`${project.title} project links`}>
          {project.repo ? (
            <a className="project-access-link" href={project.repo} target="_blank" rel="noreferrer">
              <Github size={14} /> GitHub <ExternalLink size={12} />
            </a>
          ) : (
            <span className="repo-pending">Repository to add</span>
          )}
          {project.demo && (
            <a className="project-access-link project-demo-link" href={project.demo} target="_blank" rel="noreferrer">
              {project.demoLabel || "Live demo"} <ExternalLink size={12} />
            </a>
          )}
          {project.report && (
            <a className="project-access-link" href={project.report} target="_blank" rel="noreferrer">
              View report <FileText size={12} />
            </a>
          )}
          {project.relatedRepo && (
            <a className="project-access-link" href={project.relatedRepo} target="_blank" rel="noreferrer">
              Group repo <ExternalLink size={12} />
            </a>
          )}
        </div>
        <div className="project-card-footer">
          <button className="text-link" type="button" onClick={() => onOpen(project)}>
            Explore project <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectDialog({ project, onClose, dialogRef }) {
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
    return undefined;
  }, [dialogRef, project]);

  if (!project) {
    return <dialog className="project-dialog" ref={dialogRef} onClose={onClose} />;
  }

  const detailSections = [
    ["The opportunity", project.problem],
    ["What I set out to do", project.objectives],
    ["My contribution", project.contribution],
    ["Approach & implementation", project.implementation],
    ["Tools & technologies", project.tools],
    ["Outcomes", project.results],
    ["What I learned", project.learning],
  ];

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="dialog-title"
    >
      <div className="dialog-top">
        <span className="dialog-category">{project.category} / {project.status}</span>
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close project details">
          <X size={20} />
        </button>
      </div>
      <div className={`dialog-image ${project.visual}`}>
        <img src={project.image} alt={project.alt} />
        <span className="image-shade" />
        <span className="image-placeholder-tag">{project.imageLabel || "Stock image · replace with project media"}</span>
      </div>
      <div className="dialog-content">
        {project.needsReview && (
          <div className="review-note">
            <Sparkles size={16} />
            {project.reviewNote || "Draft entry — update the repository, role, and project specifics before publishing."}
          </div>
        )}
        <p className="eyebrow">{project.subtitle}</p>
        <h2 id="dialog-title">{project.title}</h2>
        <p className="dialog-overview">{project.overview}</p>
        <div className="detail-grid">
          {detailSections.map(([heading, content]) => (
            <section className="detail-block" key={heading}>
              <h3>{heading}</h3>
              {Array.isArray(content) ? (
                heading === "Tools & technologies" ? (
                  <div className="tag-list">
                    {content.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
                  </div>
                ) : (
                  <ul>{content.map((item) => <li key={item}>{item}</li>)}</ul>
                )
              ) : (
                <p>{content}</p>
              )}
            </section>
          ))}
        </div>
        <div className="dialog-actions">
          {project.repo && (
            <a className="button button-dark" href={project.repo} target="_blank" rel="noreferrer">
              <Github size={17} /> View on GitHub <ExternalLink size={15} />
            </a>
          )}
          {project.demo && (
            <a className="button button-outline" href={project.demo} target="_blank" rel="noreferrer">
              {project.demoLabel || "Visit live project"} <ExternalLink size={15} />
            </a>
          )}
          {project.report && (
            <a className="button button-outline" href={project.report} target="_blank" rel="noreferrer">
              <FileText size={15} /> View report PDF <ExternalLink size={15} />
            </a>
          )}
          {project.relatedRepo && (
            <a className="button button-outline" href={project.relatedRepo} target="_blank" rel="noreferrer">
              View group project repository <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [messageState, setMessageState] = useState("");
  const [isSending, setIsSending] = useState(false);
  const dialogRef = useRef(null);

  const visibleProjects = projects.filter(
    (project) => activeFilter === "All work" || project.category === activeFilter,
  );
  const featuredProjects = projects.filter((project) => project.featured);

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  async function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setMessageState("Please complete each field with a valid email address.");
      return;
    }

    setIsSending(true);
    setMessageState("");

    const formData = new FormData(form);
    const subject = formData.get("subject");
    formData.set("_subject", `Portfolio inquiry: ${subject}`);
    formData.set("_template", "table");

    try {
      let response;
      try {
        response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
      } catch {
        setMessageState("We couldn’t connect to the email service. Please email me directly instead.");
        return;
      }

      let result;
      try {
        result = await response.json();
      } catch {
        setMessageState("The email service returned an unexpected response. Please email me directly instead.");
        return;
      }

      const succeeded =
        result &&
        typeof result === "object" &&
        [true, "true"].includes(result.success);
      if (!response.ok || !succeeded) {
        const serviceMessage =
          result && typeof result === "object" && result.message;
        if (
          typeof serviceMessage === "string" &&
          serviceMessage.toLowerCase().includes("confirm your email")
        ) {
          setMessageState(
            `FormSubmit has not activated delivery to ${contactEmail} yet. Check that inbox, including spam, for FormSubmit’s activation email and click its confirmation link. Then submit your inquiry again.`,
          );
          return;
        }
        setMessageState(
          serviceMessage ||
            "Your message could not be sent. Please email me directly instead.",
        );
        return;
      }

      setMessageState("Thanks — your message was sent. I’ll get back to you by email.");
      form.reset();
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Hamdallah Alhassan, home">
          <span className="brand-mark">HA</span>
          <span className="brand-name">Hamdallah Alhassan<span>.</span></span>
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav${mobileMenuOpen ? " main-nav-open" : ""}`} aria-label="Main navigation">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Certificates", "#certificates"],
            ["Community", "#community"],
            ["Experience", "#experience"],
            ["Education", "#education"],
            ["Skills", "#skills"],
            ["Interests", "#interests"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Portfolio · Nairobi, Kenya</p>
            <h1>Building with technology.<br /><em>Thinking with data.</em><br />Creating impact.</h1>
            <p className="hero-intro">
              I explore the intersection of technology, data, and innovation to build practical solutions to real-world problems.
            </p>
            <div className="hero-role-row">
              <span>Computer Networking</span><i />
              <span>Data Analytics</span><i />
              <span>AI &amp; Technology</span>
            </div>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowDown size={16} /></a>
              <a className="button button-text" href="#contact">Contact me <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
              <span><MapPin size={15} /> Nairobi, Kenya</span>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-orbit portrait-orbit-one" />
            <div className="portrait-orbit portrait-orbit-two" />
            <div className="portrait-frame">
              <img src="/images/hamdallah.webp" alt="Hamdallah Alhassan" />
            </div>
            <div className="portrait-label">
              <span className="portrait-label-dot" />
              <span>Curious by nature.<br /><strong>Building with purpose.</strong></span>
            </div>
            <div className="portrait-caption">GHANA <span>↗</span> KENYA</div>
          </div>
          <div className="hero-index"><span>01</span> / 08</div>
        </section>

        <section className="intro-strip" aria-label="Professional focus">
          <div className="intro-strip-inner">
            <span>Curiosity</span><i />
            <span>Practical thinking</span><i />
            <span>Technology for people</span><i />
            <span>Always learning</span>
          </div>
        </section>

        <section className="about-section section-shell section-space" id="about">
          <div className="about-aside">
            <p className="eyebrow">01 / A little about me</p>
            <div className="about-aside-note">
              <span className="note-number">01</span>
              <span>From Ghana<br />to Kenya</span>
            </div>
            <div className="about-mini-card">
              <span className="mini-icon"><GraduationCap size={19} /></span>
              <span>Learning at<br /><strong>USIU-Africa</strong></span>
            </div>
          </div>
          <div className="about-content">
            <SectionHeading
              eyebrow="The person behind the projects"
              title={<>A network-minded thinker<br />with a curiosity for <em>what’s next.</em></>}
            />
            <div className="about-body">
              <p className="about-lead">
                I’m Hamdallah, a fourth-year Computer Networking student at USIU-Africa, originally from Ghana and currently based in Nairobi.
              </p>
              <p>
                My journey began at African Science Academy, where studying mathematics, physics, further mathematics, programming, and robotics gave me a strong foundation—and the confidence to keep asking how things work.
              </p>
              <p>
                Today, as a Mastercard Foundation Scholar, I’m exploring the connections between networks, data analytics, artificial intelligence, and software. I enjoy turning new ideas into practical projects, whether that means investigating a pattern in data or building an interface that makes a system easier to use.
              </p>
              <p>
                Leadership and community work are an important part of that journey. I value collaboration, sharing what I learn, and helping more young people—especially girls—see a place for themselves in technology.
              </p>
            </div>
            <a className="text-link about-link" href="#experience">More about my journey <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="featured-section section-space" id="featured">
          <div className="section-shell">
            <div className="section-topline">
              <SectionHeading
                eyebrow="Selected work"
                title={<>Ideas shaped into<br /><em>working prototypes.</em></>}
                copy="A few projects that reflect how I think about networks, machine learning, and useful data."
              />
              <a className="text-link view-all-link" href="#projects">View all projects <ArrowRight size={16} /></a>
            </div>
            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <div className={`featured-project featured-project-${index + 1}`} key={project.id}>
                  <ProjectCard project={project} onOpen={setActiveProject} compact />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-space" id="projects">
          <div className="section-shell">
            <SectionHeading
              eyebrow="02 / The work"
              title={<>Selected projects, across<br /><em>different disciplines.</em></>}
              copy="I’ve kept the list focused: related credit-scoring repositories are consolidated, while smaller exercises are left out."
            />
            <div className="project-filter-row" aria-label="Filter projects">
              <span className="filter-label">Browse by field</span>
              <div className="filter-list">
                {filters.map((filter) => (
                  <button
                    className={`filter-button${activeFilter === filter ? " filter-active" : ""}`}
                    key={filter}
                    type="button"
                    aria-pressed={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <span className="project-count">{visibleProjects.length.toString().padStart(2, "0")} projects</span>
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <ProjectCard project={project} onOpen={setActiveProject} key={project.id} />
              ))}
            </div>
            <p className="project-footnote">
              Some project details are based on repository descriptions. Draft entries are clearly marked for review before publication.
            </p>
          </div>
        </section>

        <section className="community-section section-space" id="community">
          <div className="section-shell">
            <div className="community-heading">
              <SectionHeading
                eyebrow="03 / Beyond the screen"
                title={<>Community impact<br /><em>&amp; social innovation.</em></>}
                copy="I care about technology as a tool for education, inclusion, and opportunity—not only as a career."
                light
              />
              <div className="community-side-note">
                <HeartHandshake size={22} />
                <p>Sharing knowledge.<br /><strong>Learning together.</strong></p>
              </div>
            </div>
            <div className="community-grid">
              {communityProjects.map((project, index) => (
                <article className="community-card" key={project.title}>
                  <div className={`community-image ${project.visual}`}>
                    <img src={project.image} alt={project.alt} loading="lazy" />
                    <span className="community-image-index">0{index + 1}</span>
                    <span className="stock-label">{project.imageLabel || "Stock image · replace with project photo"}</span>
                  </div>
                  <div className="community-card-body">
                    <p className="community-place">{project.place}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => <span className="community-tag" key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="knowledge-band">
              <div className="knowledge-mark"><span>+</span><span>×</span></div>
              <div className="knowledge-copy">
                <p className="eyebrow">Sharing knowledge, creating opportunities</p>
                <h3>Technology makes more sense<br />when more people can take part.</h3>
              </div>
              <div className="knowledge-points">
                <span><Check size={15} /> Introducing students to machine learning</span>
                <span><Check size={15} /> Supporting access to computers &amp; internet</span>
                <span><Check size={15} /> Teaching digital skills and introductory coding</span>
                <span><Check size={15} /> Encouraging girls to explore STEM</span>
                <span><Check size={15} /> Learning practical skills together</span>
              </div>
            </div>
            <article className="nexo-impact-note">
              <div className="nexo-impact-icon"><Sparkles size={20} /></div>
              <div>
                <p className="eyebrow">Nexo Girls · two ways to contribute</p>
                <h3>Building the digital home. Supporting the next generation.</h3>
              </div>
              <p>
                My website role focuses on React development and responsive design. Separately, I’ve contributed to a machine-learning training initiative that gives girls exposure to emerging technologies.
              </p>
              <a className="text-link" href="#projects" onClick={() => setActiveFilter("Product & Web")}>Explore Nexo Girls <ArrowRight size={15} /></a>
            </article>
          </div>
        </section>

        <section className="experience-section section-space" id="experience">
          <div className="section-shell experience-layout">
            <div className="experience-aside">
              <p className="eyebrow">04 / Involvement</p>
              <SectionHeading
                eyebrow="Experience & leadership"
                title={<>Learning by<br /><em>showing up.</em></>}
                copy="Professional roles, analytics experience, technical volunteering, and community leadership."
              />
              <a className="text-link" href="#contact">Connect about my experience <ArrowRight size={16} /></a>
            </div>
            <div className="timeline">
              {experience.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="timeline-item" key={item.role}>
                    <div className="timeline-icon"><Icon size={17} /></div>
                    <div className="timeline-content">
                      <p className="timeline-date">{item.date}</p>
                      <h3>{item.role}</h3>
                      <p className="timeline-org">{item.organization}</p>
                      <p className="timeline-description">{item.description}</p>
                      {item.highlights && (
                        <ul className="timeline-highlights">
                          {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                        </ul>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="education-section section-space" id="education">
          <div className="section-shell">
            <div className="section-topline">
              <SectionHeading
                eyebrow="05 / Education"
                title={<>A foundation for<br /><em>lifelong learning.</em></>}
              />
              <div className="scholar-stamp"><span>MCF</span><small>Scholar<br />USIU-Africa</small></div>
            </div>
            <div className="education-list">
              {education.map((item, index) => (
                <article className="education-item" key={item.school}>
                  <div className="education-index">0{index + 1}</div>
                  <div className="education-main">
                    <h3>{item.school}</h3>
                    <p>{item.qualification}</p>
                    <span>{item.detail}</span>
                  </div>
                  <div className="education-note">{item.note}</div>
                  <div className="education-year">{item.year}</div>
                </article>
              ))}
            </div>
            <div className="recognition-line">
              <span className="recognition-icon"><Sparkles size={16} /></span>
              <p><strong>Recognitions</strong> African Science Academy scholarship · Mastercard Foundation scholarship · MCN USIU-A Campus Director selection</p>
            </div>
          </div>
        </section>

        <section className="certificates-section section-space" id="certificates">
          <div className="section-shell">
            <div className="section-topline">
              <SectionHeading
                eyebrow="06 / Certificates"
                title={<>Professional certificates<br /><em>&amp; training.</em></>}
                copy="The Google Data Analytics credential is available as a PDF with a verification link; image placeholders remain for other training."
              />
              <div className="certificate-seal"><BadgeCheck size={21} /><span>Credentials</span></div>
            </div>
            <div className="certificate-grid">
              {certificates.map((certificate, index) => (
                <article className="certificate-card" key={certificate.name}>
                  {certificate.preview ? (
                    <a className="certificate-preview-link" href={certificate.file} target="_blank" rel="noreferrer">
                      <img
                        className="certificate-preview"
                        src={certificate.preview}
                        alt={`${certificate.name} certificate`}
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <div className="certificate-image-placeholder" role="img" aria-label={`${certificate.name} certificate image placeholder`}>
                      <span className="certificate-image-index">0{index + 1}</span>
                      <BadgeCheck size={28} strokeWidth={1.3} />
                      <span>Certificate image to add</span>
                    </div>
                  )}
                  <div className="certificate-details">
                    <p className="eyebrow">{certificate.issuer}</p>
                    <h3>{certificate.name}</h3>
                    {certificate.date && <p className="certificate-date">{certificate.date}</p>}
                    <div className="certificate-links">
                      {certificate.file && (
                        <a href={certificate.file} target="_blank" rel="noreferrer">
                          <FileText size={14} /> View certificate
                        </a>
                      )}
                      {certificate.verify && (
                        <a href={certificate.verify} target="_blank" rel="noreferrer">
                          <BadgeCheck size={14} /> Verify credential
                        </a>
                      )}
                      {!certificate.file && (
                        <span className="certificate-pending"><span /> Image and credential link to add</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-space" id="skills">
          <div className="section-shell">
            <div className="section-topline skills-topline">
              <SectionHeading
                eyebrow="06 / Toolkit"
                title={<>A toolkit that keeps<br /><em>getting broader.</em></>}
                copy="Areas I’ve explored through coursework, community work, and projects."
              />
              <p className="skills-note">No proficiency scores—just an honest snapshot of the tools and concepts I work with.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-card-heading"><Icon size={19} /><h3>{group.title}</h3></div>
                    <div className="tag-list">{group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
                  </article>
                );
              })}
              <article className="skill-card soft-skills-card">
                <div className="skill-card-heading"><HeartHandshake size={19} /><h3>How I work</h3></div>
                <div className="tag-list">
                  {["Analytical thinking", "Problem-solving", "Communication", "Team collaboration", "Leadership", "Coordination", "Presentation", "Research"].map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="interests-section section-space" id="interests">
          <div className="section-shell interests-layout">
            <div className="interests-intro">
              <p className="eyebrow">08 / Outside the work</p>
              <h2>Curiosity has<br />a life <em>outside code.</em></h2>
              <p>Some of the things that keep me curious, present, and open to new perspectives.</p>
              <div className="interest-board" aria-label="Decorative chessboard pattern">
                {Array.from({ length: 16 }, (_, index) => <span key={index} className={(Math.floor(index / 4) + index) % 2 === 0 ? "square-dark" : ""} />)}
                <span className="board-piece">♞</span>
              </div>
            </div>
            <div className="interest-list">
              {interests.map((interest) => (
                <article className="interest-item" key={interest.title}>
                  <span className="interest-number">{interest.number}</span>
                  <span className="interest-symbol" aria-hidden="true">{interest.icon}</span>
                  <div><h3>{interest.title}</h3><p>{interest.copy}</p></div>
                  <ChevronDown size={16} className="interest-arrow" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-space" id="contact">
          <div className="section-shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">09 / Start a conversation</p>
              <h2>Always learning.<br />Always <em>building.</em></h2>
              <p className="contact-lead">I’m always open to opportunities to learn, collaborate, and make a meaningful impact through technology.</p>
              <div className="contact-social-links">
                <a href={github} target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub</span><ArrowUpRight size={15} /></a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn</span><ArrowUpRight size={15} /></a>
                <a href={`mailto:${contactEmail}`}><Mail size={17} /><span>{contactEmail}</span></a>
              </div>
              <a className="button button-outline cv-button" href="/Hamdallah-Alhassan-CV.pdf" download>
                <Download size={16} /> Download my CV
              </a>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-heading"><span>Have a project or opportunity in mind?</span><Send size={17} /></div>
              <p className="form-intro">Tell me what you have in mind. You can also request a call; no meeting is booked until we confirm it directly. Messages are sent securely through FormSubmit. The first submission requires confirming my email address with them.</p>
              <label>
                Your name
                <input name="name" type="text" autoComplete="name" placeholder="How should I address you?" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              </label>
              <label>
                What would you like to discuss?
                <select name="subject" defaultValue="" required>
                  <option value="" disabled>Select an inquiry type</option>
                  <option value="book-a-call">Request a call</option>
                  <option value="project">Project or collaboration</option>
                  <option value="opportunity">Career opportunity</option>
                  <option value="general">Something else</option>
                </select>
              </label>
              <div className="call-preferences">
                <label>
                  Preferred date <span className="optional-label">Optional</span>
                  <input name="preferred-date" type="date" min={new Date().toISOString().slice(0, 10)} />
                </label>
                <label>
                  Preferred time <span className="optional-label">Optional</span>
                  <select name="preferred-time" defaultValue="">
                    <option value="">Choose a time</option>
                    <option value="morning">Morning · 9:00–12:00</option>
                    <option value="afternoon">Afternoon · 12:00–16:00</option>
                    <option value="late-afternoon">Late afternoon · 16:00–18:00</option>
                  </select>
                </label>
              </div>
              <label>
                Time zone
                <select name="timezone" defaultValue="EAT">
                  <option value="EAT">East Africa Time (Nairobi, UTC+3)</option>
                  <option value="GMT">Greenwich Mean Time (UTC+0)</option>
                  <option value="other">Other — include it in your message</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="A little about what you have in mind..." required />
              </label>
              <button className="button button-dark form-submit" type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send inquiry"} <ArrowUpRight size={16} />
              </button>
              <p className={`form-status${messageState ? " form-status-visible" : ""}`} role="status" aria-live="polite">
                {messageState || "Your inquiry will be emailed to me. A call is only scheduled after we confirm it directly."}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">HA</span>
            <span className="brand-name">Hamdallah Alhassan<span>.</span></span>
          </a>
          <p>Technology, data, and a little curiosity.</p>
          <div className="footer-links">
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
          </div>
          <span className="footer-copyright">© {new Date().getFullYear()} Hamdallah Alhassan</span>
        </div>
      </footer>

      <ProjectDialog
        project={activeProject}
        onClose={() => setActiveProject(null)}
        dialogRef={dialogRef}
      />
    </>
  );
}

export default App;
