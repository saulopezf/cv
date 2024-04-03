import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const RESUME_EN = {
  name: "Saúl López Fernández",
  initials: "SL",
  location: "Avilés, Asturias, España",
  about:
    "Backend Developer",
  summary:
    `I'm a young programmer who started developing full-stack web applications using PHP, JavaScript and SQL.
    In my first years of experience, I learned many technologies currently used in the world of web development. Here I realized that what I liked most was back-end development, software architecture and clean code.
    I currently develop APIs and microservices in NodeJS with different technologies (TypeScript, NestJS...).
    I have personal projects related to video games development and graphics engines to gain experience in C++ and low-level languages.`,
  avatarUrl: "https://media.licdn.com/dms/image/C4E03AQFAD7AQy76UKQ/profile-displayphoto-shrink_800_800/0/1611520255158?e=1717632000&v=beta&t=uYqNdMZZDF10BrnezP7yfKvC0LZuAki-3lMEsN9uwXM",
  contact: {
    email: "saul.lopezfdez@gmail.com",
    tel: "+34606089191",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/saulopezf",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saulopezf/",
        icon: LinkedInIcon
      },
    ],
  },
  education: [
    {
      school: "CIFP Avilés",
      degree: "Higher degree in Web Application Development",
      start: "2019",
      end: "2021",
    },
    {
      school: "IES Nº5, Avilés",
      degree: "Technological Bachelor's degree",
      start: "2017",
      end: "2019",
    },
    {
      school: "San Fernando School, Avilés",
      degree: "Bilingual secondary education (English)",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "GRUPO IMPULTEC S.L",
      link: "https://www.grupoimpultec.com",
      badges: ["Remote"],
      title: "Junior Backend Developer → Senior Backend Developer", 
      start: "02-2022",
      end: "now",
      description:
        `After 3 months working in this company I joined the main team to migrate our legacy Genei.es (https://genei.es) website to a modern version using Vue.js (frontend) and Node.js (backend).
        We used a microservice architecture to develop the new API, using different databases, relational and non-relational depending of the needs of the microservice.
        
        Since we were a small team I quikly took charge of many big projects such as payment services, web services, API security, etc. I also took DevOps tasks, where I learned a lot about Docker and production deployment. Here I started to be seen as a Senior Backend Developer.
        
        After having a solid backend, we began to implement it throughout the company's ecosystem and different websites: Genei.es, Sendiroo.es, Sendiroo.it, etc.`,
    },
    {
      company: "GRUPO IMPULTEC S.L",
      link: "https://www.grupoimpultec.com",
      badges: ["Presential"],
      title: "Full-stack Junior Developer", 
      start: "10-2021",
      end: "02-2022",
      description:
        `Developint and maintaining a legacy Codeigniter application for the old Genei.es and Sendiroo's websites. Using SQL database and jQuery for frontend development.`,
    },
    {
      company: "Arcelor Mittal",
      link: "https://spain.arcelormittal.com",
      badges: ["Hybrid"],
      title: "Software Developer Internship",
      start: "04-2021",
      end: "07-2021",
      description:
        "Internships after finishing the Web Application Development Degree. Developed a desktop application using WPF and C#. Learning about MVVM architecture for clean and decoupled code.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "C++",
    "Docker",
    "Docker Swarm",
    "SQL",
    "MongoDB",
    "NestJS",
    "RabbitMQ",
    "Jest",
    "Jenkins",
    "PHP",
    "C#",
    "WPF",
    "Python",
    "Microservices",
    "Codeigniter"
  ],
  projects: [
    {
      title: "nest-shop",
      techStack: [
        "Side Project",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Docker",
      ],
      description: "Basic and simple shop API",
      link: {
        label: "https://github.com/saulopezf/nest-shop",
        href: "https://github.com/saulopezf/nest-shop",
      },
    },
    {
      title: "DummyGame2D",
      techStack: [
        "Side Project",
        "C++",
        "Videogames",
        "2D",
      ],
      description: "A dummy video game to experiment with 2D",
      link: {
        label: "https://github.com/saulopezf/DummyGame2D",
        href: "https://github.com/saulopezf/DummyGame2D",
      },
    },
    {
      title: "Engine3D",
      techStack: [
        "Side Project",
        "C++",
        "Videogames",
        "3D",
        "Math"
      ],
      description: `3D graphics engine using "olcEngine3D" library`,
      link: {
        label: "https://github.com/saulopezf/Engine3D",
        href: "https://github.com/saulopezf/Engine3D",
      },
    },
    {
      title: "project-s",
      techStack: [
        "Side Project",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "RabbitMQ"
      ],
      description: "Large secret full-stack project",
    },
  ],
}

export const RESUME_DATA = RESUME_EN;
