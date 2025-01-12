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
                <div className="flex flex-wrap justify-center gap-12 px-48">
                    {projectsInfo.map((project, index) => (
                        <div key={index} className="flex justify-center items-center w-1/2 lg:w-1/3" style={{ color: "white" }}>
                            <FadeUp delay={(index % 2 === 0) ? 0.3 : 0.6}>
                                <ProjectCard name={project.name} img_src={project.img_src} link={project.link} desc={project.desc} icon={project.icon}></ProjectCard>
                            </FadeUp>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Projects;