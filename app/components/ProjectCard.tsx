"use client"

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import FadeUp from "./FadeUp";
import FadeDown from "./FadeDown";

interface ProjectCardProps {
  name: string;
  img_src: string;
  link: string;
  desc: string;
  icon: React.ComponentType<{ className: string }>;
}

const ProjectCard = ({ name, img_src, link, desc, icon }: ProjectCardProps) => {
  return <TiltCard name={name} img_src={img_src} link={link} desc={desc} icon={icon} />;
};

interface TiltCardProps {
  name: string;
  img_src: string;
  link: string;
  desc: string;
  icon: React.ComponentType<{ className: string }>;
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ name, img_src, link, desc, icon }: TiltCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const IconComponent = icon;
  
  return (
    <motion.div
    ref={ref}
    onMouseMove={handleMouseMove}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      transformStyle: "preserve-3d",
      transform,
    }}
    className="relative h-[300px] w-[300px] custom2:h-96 custom2:w-96  rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
      <a
      href={link} target="_blank" rel="noopener noreferrer"
      style={{
        transform: "translateZ(75px)",
        transformStyle: "preserve-3d",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img_src})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg px-8">
          <div style={{ transform: "translateZ(75px)" }}>
            <motion.p
            className="relative text-center text-2xl font-bold"
            animate={{ y: isHovered ? -70 : 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}>
              <IconComponent className="mx-auto text-4xl" />
            </motion.p>
          </div>
          <div style={{ transform: "translateZ(50px)" }}>
            <motion.p 
            className="relative text-center text-2xl font-bold"
            animate={{ y: isHovered ? -70 : 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}>
              {name}
            </motion.p>
          </div>
          {isHovered ? 
            <div style={{ transform: "translateZ(25px)" }}>
              <FadeUp duration={0.3} inView={false}>
                <h1>{desc}</h1> 
              </FadeUp>
            </div>
          :
            <div style={{ transform: "translateZ(25px)" }}>
              <FadeDown duration={0.3} inView={false}>
                <h1>{desc}</h1> 
              </FadeDown>
            </div>
          }
      </a>
    </motion.div>
  );
};

export default ProjectCard;