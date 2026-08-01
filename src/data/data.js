import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiGlobe,
  FiCode,
} from "react-icons/fi";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss as SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiJsonwebtokens,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman,
  SiIntellijidea,
  SiApachemaven,
} from "react-icons/si";

import { FaJava, FaServer } from "react-icons/fa";

export const personal = {
  name: "Akash R.",
  firstName: "Akash",
  role: "Java Full Stack Developer",
  tagline:
      "I build secure, scalable and user-friendly web applications using Java, Spring Boot and React.",
  email: "aksuperhuman2603@gmail.com",
  phone: "+91 8778743353",
  location: "Tamil Nadu, India",
  experience: "Ready to Start",
  availability: "Open to Opportunities",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  {
    label: "GitHub",
    icon: FiGithub,
    href: "https://github.com/aksuperhuman",
  },
  {
    label: "LinkedIn",
    icon: FiLinkedin,
    href: "https://linkedin.com/in/aksuperhuman",
  },
  {
    label: "Email",
    icon: FiMail,
    href: `mailto:${personal.email}`,
  },
  {
    label: "Portfolio",
    icon: FiGlobe,
    href: "#home",
  },
  {
    label: "Instagram",
    icon: FiInstagram,
    href: "https://instagram.com/ak_superhuman_",
  }
];

export const stats = [
  { value: 12, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 20, suffix: "+", label: "GitHub Repositories" },
  { value: null, suffix: "", label: "Status", display: "Ready to Start" },
];

export const aboutInfo = [
  { label: "Name", value: personal.name },
  { label: "Email", value: personal.email },
  { label: "Phone", value: personal.phone },
  { label: "Location", value: personal.location },
  { label: "Experience", value: personal.experience },
  { label: "Availability", value: personal.availability },
];

export const skillTabs = ["Frontend", "Backend", "Database", "Tools"];

export const skills = {
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
  ],

  Backend: [
    { name: "Java", icon: FaJava },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Spring Security", icon: SiSpringsecurity },
    { name: "Hibernate", icon: SiHibernate },
    { name: "REST API", icon: FaServer },
    { name: "JWT", icon: SiJsonwebtokens },
  ],

  Database: [
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
  ],

  Tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
    { name: "VS Code", icon: FiCode },
    { name: "IntelliJ IDEA", icon: SiIntellijidea },
    { name: "Maven", icon: SiApachemaven },
  ],
};

export const projects = [
  {
    id: "smart-wallet",
    title: "Smart Wallet System",
    description:
        "Secure digital wallet with authentication, fund management, transaction history and admin dashboard.",
    tech: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    demo: "https://smart-wallet-system.vercel.app",
    github: "https://github.com/aksuperhuman/smart-wallet-system",
  },
  {
    id: "hotel-reservation",
    title: "Hotel Reservation System",
    description:
        "Hotel booking platform with room search, reservation, payment integration and admin dashboard.",
    tech: ["Spring Boot", "React", "MySQL", "Redis"],
    demo: "https://new-hotel-servation-1.onrender.com",
    github: "https://github.com/aksuperhuman/hotel-reservation-system",
  },
];

export const education = [
  {
    degree: "M.Sc Computer Science",
    school: "St. Joseph's College, Trichy",
    period: "2020 - 2022",
  },

  {
    degree: "B.Sc Computer Science",
    school: "St. Joseph's College, Trichy",
    period: "2017 - 2020",
  },
];