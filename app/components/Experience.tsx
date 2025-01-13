import Image from "next/image";
import { experienceInfo } from "@/Data/data";
import FadeUp from "./FadeUp";

const Experience = () => {
    return (
        <div className="justify-center mb-[150px] overflow-hidden">
            <FadeUp>
                <div className="flex justify-center items-center h-full mb-[70px]">
                    <h2 className="text-white text-center text-3xl font-bold">EXPERIENCE</h2>
                </div>
            </FadeUp>
            <FadeUp delay={0.3}>
                <section id="experience" className="py-16 w-full mx-auto relative max-w-[700px] lg:max-w-[920px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-yellow-400 via-red-500 via-purple-500 to-blue-500"></div>
                    <div className="mx-auto px-4">
                        {experienceInfo.map((exp, index) => (
                            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start pr-8 sm:pr-24' : 'justify-end pl-8 sm:pl-24'}`}>
                                <div className={`w-1/2 py-4 ${index % 2 === 0 ? '' : 'text-right'} rounded-lg text-white`}>
                                    <div className="relative p-4 sm:p-8 rounded-lg bg-neutral-900">
                                        <div className={`absolute rounded-full top-0 ${index % 2 === 0 ? 'right-[-80px] sm:right-[-75px]' : 'left-[-80px] sm:left-[-75px]'}`}>
                                            <Image
                                                src={exp.img_src}
                                                alt={exp.img_src}
                                                width={54}
                                                height={54}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <h2 className="text-[clamp(0.75rem,1.5vw,1.75rem)] font-bold">{exp.company}</h2>
                                        <small className="block mt-2 text-[clamp(0.65rem,1.2vw,1rem)]">{exp.date}</small>
                                        <p className="mt-4 text-[clamp(0.6rem,1.2vw,1rem)]">{exp.title}</p>
                                        <span
                                            className={`absolute top-[20px] z-[1] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${index % 2 === 0
                                                    ? 'right-[-10px] border-l-[10px] border-l-neutral-900'
                                                    : 'left-[-10px] border-r-[10px] border-r-neutral-900'
                                                }`}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeUp>
        </div>
    );
}

export default Experience;