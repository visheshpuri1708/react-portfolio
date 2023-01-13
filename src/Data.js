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
    year: "Jun 2020 - Jan 2022",
    position: "Web Developer (Intern)",
    company: "HelloTripper",
    responsibility: "Designed a travel itinerary website and got experienced with JavaScript, PHP, Python and SQL along with various server-side frameworks Django and Express.JS. Collaborated with AI team to create an AI model and increased its efficiency by 18% to build an itinerary for users to help them plan their journey. Developed object-oriented code in JavaScript with 100% accordance to industry and company standards."
  },
  {
    di: 2,
    year: "Jan 2020 - April 2020",
    position: "Relationship Manager (Intern)",
    company: "UDAAN",
    responsibility: "Connected with potential clients, estimating contracts and presenting various addon services increasing client satisfaction by 32%. Utilized sales data to predict peak season demand, increasing popular item availability by 31% and boosting revenue by 29%. Documenting information requested and the solutions provided, developing strategies to expand the client base."
  },
  {
    id: 3,
    year: "Sep 2021 - Sep 2022",
    position: "Customer Experience Associate",
    company: "Walmart Canada",
    responsibility: "Established processes for maintaining accurate work order files, resulting in a decrease of 8% of delayed or missed deliveries. Handled an average of 80 customer inquiries and complaints per day with a 96% customer satisfaction rate."
  },
  {
    id: 4,
    year: "May 2022 - Present",
    position: "Customer Service Associate",
    company: "Loblaws Inc. Canada",
    responsibility: "Process orders and make adjustments as needed to ensure customers' issues are resolved and needs met. Multi-tasking to monitor and control concurrent tasks simultaneously."
  }
]

export const certifications = [
  {
    id: 1,
    year: "Oct 2022 - Oct 2025",
    name: "AWS Security Speciality",
    credential: "1BTYLJG1R2B4Q1GK"
  },
  {
    di: 2,
    year: "Jul 2022 - Jul 2025",
    name: "AWS Cloud Practitioner",
    credential: "5DLTW3S1YJR41HCH"
  },
  {
    di: 3,
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
