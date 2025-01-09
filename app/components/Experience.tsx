import Image from "next/image";
import { experienceInfo } from "@/Data/data";
import FadeUp from "./FadeUp";

const Experience = () => {
    return (
        <div className="mb-[150px]">
            <FadeUp>
                <div className="flex justify-center items-center h-full mb-[70px]">
                    <h2 className="text-white text-center text-3xl font-bold">EXPERIENCE</h2>
                </div>
            </FadeUp>
            <FadeUp delay={0.3}>
                <section id="experience" className="py-16 w-full mx-auto px-4 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-yellow-400 via-red-500 via-purple-500 to-blue-500"></div>
                    <div className="max-w-[1200px] mx-auto">
                        {experienceInfo.map((exp, index) => (
                            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start pr-[120px]' : 'justify-end pl-[120px]'}`}>
                                <div className={`w-1/2 py-[10px] ${index % 2 === 0 ? 'pl-[80px]' : 'pr-[80px] text-right'} rounded-lg text-white`}>
                                    <div className="relative px-[30px] py-[30px] rounded-lg" style={{ backgroundColor: 'rgb(33, 33, 33)' }}>
                                        <div
                                            className={index % 2 === 0
                                                ? "absolute w-[55px] h-[55px] rounded-full bg-white flex items-center justify-center right-[-88px] top-[13px]"
                                                : "absolute w-[55px] h-[55px] rounded-full bg-white flex items-center justify-center left-[-88px] top-[13px]"
                                            }>
                                            <Image
                                                src={exp.img_src}
                                                alt={exp.img_src}
                                                width={55}
                                                height={55}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <h2 className="text-2xl font-bold">{exp.company}</h2>
                                        <small className="block mt-2 text-lg">{exp.date}</small>
                                        <p className="mt-4 text-xl">{exp.title}</p>
                                        <span className={index % 2 === 0 ?
                                            `h-0 w-0 absolute top-[28px] z-[1] border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent right-[-14px]`
                                            : `h-0 w-0 absolute top-[28px] z-[1] border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent left-[-14px]`}
                                            style={{
                                                borderLeft: index % 2 === 0 ? '15px solid rgb(33, 33, 33)' : undefined,
                                                borderRight: index % 2 !== 0 ? '15px solid rgb(33, 33, 33)' : undefined
                                            }}
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