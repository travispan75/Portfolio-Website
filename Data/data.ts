import { FaRegFile } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdSatelliteAlt } from "react-icons/md";
import { RiStockLine } from "react-icons/ri";

export interface HeroInfo {
  name: string;
  position: string;
  description: string;
}

export const heroInfo: HeroInfo = {
  name: "Travis Pan",
  position: "Full Stack Software Developer",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro numquam ad, vero consequuntur aperiam cumque voluptatum pariatur veniam? Qui facilis est ipsam odio cum!"
};

export interface ExperienceInfo {
  company: string;
  title: string;
  date: string;
  img_src: string;
}

export const experienceInfo: ExperienceInfo[] = [
  { company: "University of Toronto COBWEB", title: "Junior Software Engineer", date: "Aug. 2022 - Apr. 2023", img_src: "/images/cobweb.jpg"},
  { company: "Financial Services Regulatory Authority of Ontario", title: "IT Systems Analyst", date: "May 2024 - Aug. 2024", img_src: "/images/fsra.png" },
  { company: "Government of Canada PSPC", title: "Software Developer", date: "Dec. 2024 - Present", img_src: "/images/govcan.jpg" }
];

export interface SocialInfo {
  name: string;
  icon: React.ComponentType<{ className: string }>;
  action: string;
}

export const socialInfo: SocialInfo[] = [
  { name: "Resume", icon: FaRegFile, action: "download resume"},
  { name: "Linkedin", icon: FaLinkedinIn, action: "https://www.linkedin.com/in/travispan75/"},
  { name: "Github", icon: FiGithub, action: "https://github.com/travispan75/"},
  { name: "Instagram", icon: FaInstagram, action: "https://www.instagram.com/travispan75/" },
];

export interface ProjectsInfo {
  name: string;
  img_src: string;
  link: string;
  desc: string;
  icon: React.ComponentType<{ className: string }>;
}

export const projectsInfo: ProjectsInfo[] = [
  { name: "PokeMetrics", icon: TbPokeball, img_src: "/images/showdown.png", link: "https://github.com/travispan75/Video-Game-Stats-Analyzer", desc: "Player statistics analyzer and visualizer for Pokemon Showdown." },
  { name: "Memory Melody", icon: IoIosMusicalNotes, img_src: "/images/memory-melody.png", link: "https://github.com/travispan75/Memory-Melody", desc: "Nostalgia playlist generator for Spotify" },
  { name: "UW Orbital Design Team", icon: MdSatelliteAlt, img_src: "/images/uw-orbital.png", link: "https://github.com/travispan75/OBC-Firmware-Onboarding", desc: "Temperature override firmware for UW Orbital satellite" },
  { name: "Safe Portfolio Generator", icon: RiStockLine, img_src: "/images/safe-portfolio.png", link: "https://github.com/travispan75/Video-Game-Stats-Analyzer", desc: "Safe portfolio generator" }
];

export interface techStackInfo {
  img_src: string;
}

export const techStackInfo: techStackInfo[] = [
  { img_src: "images/graphql.png" },
  { img_src: "images/mongodb.png" },
  { img_src: "images/mysql.svg" },
  { img_src: "images/express-logo.svg" },
  { img_src: "images/nodejs.svg" },
  { img_src: "images/atom.png" },
  { img_src: "images/nextjs.svg" },
  { img_src: "images/typescript.png" },
  { img_src: "images/aws-logo.svg" },
  { img_src: "images/git-logo.png" },
  { img_src: "images/python.png" }
]
