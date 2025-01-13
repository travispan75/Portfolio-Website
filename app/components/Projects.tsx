"use client"

import { projectsInfo } from "@/Data/data";
import FadeUp from "./FadeUp";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="mb-[150px]">
            <FadeUp>
                <div className="flex justify-center items-center h-full mb-[70px]">
                    <h2 className="text-white text-center text-3xl font-bold">PROJECTS</h2>
                </div>
            </FadeUp>
            <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-[800px] overflow-hidden text-white">
                {projectsInfo.map((project, index) => (
                    <FadeUp key={index} delay={index % 2 === 0 ? 0.3 : 0.6}>
                        <ProjectCard 
                            name={project.name} 
                            img_src={project.img_src} 
                            link={project.link} 
                            desc={project.desc} 
                            icon={project.icon} 
                        />
                    </FadeUp>
                ))}
            </div>
        </div>
    );
}

export default Projects;