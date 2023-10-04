import { FaHtml5, FaCss3, FaJava, FaNodeJs, FaReact, FaAws, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaPython, FaJs, FaBootstrap, FaEnvelope, FaGitAlt, FaFacebook } from "react-icons/fa";
import work1 from "./assets/ccf_icon.jpg";
import work2 from "./assets/doctalk.jpg";
import work3 from "./assets/tsa.jpg";
import work4 from "./assets/unit-testing.png";
import work5 from "./assets/portfolio.png";
import work6 from "./assets/chatbot.jpg";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [

  {
    icon: <FaGithub />,
    link: "https://github.com/visheshpuri1708"
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/vpuri1708/"
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/VisheshPuri4"
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/sonia.puri.1004837/"
  },


]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name: ",
    value: "Vishesh Puri"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Contact: ",
    value: "+1(709)7289129"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email: ",
    value: "vpuri@mun.ca"
  },

]

export const icons = [<FaReact />, <FaHtml5 />, <FaCss3 />, <FaNodeJs />, <FaPython />, <FaJs />, <FaJava />, <FaAws />, <FaGitAlt />, <FaBootstrap />]

export const experiences = [
  {
    id: 1,
    year: "May 2023 - Present",
    position: "Full-Stack Software Developer",
    company: "Fonemed",
    responsibility: "Collaborating with the development team to design, develop, test, and deploy progressive web app solutions using React, DynamoDB, AWS for microservices and JIRA for agile development. Analyzing and debugging issues in software applications, troubleshoot problems, and propose effective solutions by following industry best practices and coding standards"
  },
  {
    id: 2,
    year: "May 2023 - August 2023",
    position: "UI/UX Developer",
    company: "Mxpert",
    responsibility: "Designed interactive UI/UX prototypes using Figma and Lucidchart to present user-friendly digital interfaces for the company's products and services, ensuring a seamless user experience. Implemented a comprehensive Google Analytics tracking system, utilizing event tracking to monitor and analyze user interactions and behaviour, providing valuable insights for the business"
  },
  {
    id: 3,
    year: "Jan 2023 - May 2023",
    position: "React Developer",
    company: "Orogen Tech",
    responsibility: "Managed and leveraged React components using IBMs Carbon Design Systems to ensure consistent UI/UX across all digital products and integrating the website with Spring-boot back-end. Maintained web applications using modern development frameworks and tools, such as Redux, webpack, Jest and fetching the information in a dashboard using RESTful API's"
  },
  {
    id: 4,
    year: "Jan 2023 - May 2023",
    position: "Data Science Research Assistant",
    company: "C-CORE",
    responsibility: "Coordinated with geotechnical team in comparing the different machine learning models including ExtraTreesRegressor and KNN Regressor on their prediction solutions. Utilized extensive pile driving internal database, totaling 48GB in size, to merge essential features, resulting in a substantial improvement in model accuracy, increasing it from 0.83 to 0.91"
  },
  {
    id: 5,
    year: "Jun 2020 - Jan 2022",
    position: "Jr. Web Developer",
    company: "HelloTripper",
    responsibility: "Designed a dynamic travel itinerary website from the ground up, utilizing JavaScript, PostgreSQL, Node.js, React.js, HTML, and CSS and server-side frameworks: Django and Express.JS. Actively participated with AI team to contribute to a ML model and increased its efficiency by brainstorming and implementing creative ideas into website's development"
  }
]

export const certifications = [
  {
    id: 1,
    year: "Sep 2022 - Sep 2023",
    name: "Dean's List, Faculty of Science",
    credential: "Memorial University of Newfoundland"
  },
  {
    id: 2,
    year: "Oct 2022 - Oct 2025",
    name: "AWS Security Speciality",
    credential: "1BTYLJG1R2B4Q1GK"
  },
  {
    di: 3,
    year: "Jul 2022 - Jul 2025",
    name: "AWS Cloud Practitioner",
    credential: "5DLTW3S1YJR41HCH"
  },
  {
    di: 4,
    year: "April 2020",
    name: "The Fundamentals of Digital Marketing - Google",
    credential: "CNE DBX DLM"
  }

]

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Credit Card Fraud Detection",
    category: "web",
    githubLink: "https://github.com/visheshpuri1708/CC_Fraud_detect",
    description: 'The notebook predicts a transaction as a normal or fraud transaction based on a series of values. Machine learning models are used for detection.'
  },
  {
    id: 2,
    img: work2,
    name: "DocTalk",
    category: "web",
    githubLink: "https://doctalk.herokuapp.com/",
    description: 'DocTalk is a virtual Doctor appointment booking MERN stack webapp built using ReactJS/NodeJS.'
  },
  {
    id: 3,
    img: work3,
    name: "Time Series Analysis",
    category: "web",
    githubLink: "https://github.com/visheshpuri1708/time-series-analysis",
    description: 'Time Series Analysis and performing predictions on sales data with linear regression models.'
  },
  {
    id: 6,
    img: work6,
    name: "ChatBot",
    category: "design",
    githubLink: "https://github.com/visheshpuri1708/chatbot_nltk",
    description: 'A Chatbot built using Natural Language Toolkit.'
  },

  {
    id: 5,
    img: work5,
    name: "Portfolio Website",
    category: 'app',
    githubLink: "https://visheshpuri.com/",
    description: 'My Portfolio website built using ReactJS.'
  },
  {
    id: 4,
    img: work4,
    name: "Mocha Chai REST API Unit Testing",
    category: "app",
    githubLink: "https://github.com/visheshpuri1708/Mocha-Chai-Unit-Testing",
    description: 'The REST API testing modules consist of tests related to handling of creating a user, deleting a user, getting information of all the users and updating users with complete and missing information too.'
  },

]

export const workImages1 = [
  {
    id: 1,
    img: work1,
    name: "Credit Card Fraud Detection",
    category: "web",
    githubLink: "https://github.com/visheshpuri1708/CC_Fraud_detect"
  },
  {
    id: 2,
    img: work2,
    name: "DocTalk",
    category: "web",
    githubLink: "https://doctalk.herokuapp.com/"
  },
  {
    id: 3,
    img: work3,
    name: "Time Series Analysis",
    category: "web",
    githubLink: "https://github.com/visheshpuri1708/time-series-analysis"
  },
  {
    id: 4,
    img: work4,
    name: "Mocha Chai REST API Unit Testing",
    category: "app",
    githubLink: "https://github.com/visheshpuri1708/Mocha-Chai-Unit-Testing"
  },
  {
    id: 5,
    img: work5,
    name: "Portfolio Website",
    category: 'app',
    githubLink: "https://github.com/visheshpuri1708"
  },
  {
    id: 6,
    img: work6,
    name: "ChatBot",
    category: "design",
    githubLink: "https://github.com/visheshpuri1708/chatbot_nltk"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "33, Plymouth Rd, St. Johns, NL, A1C 1K3"
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    infoText: "vpuri@mun.ca"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+1 (709) 728-9129"
  }
]
