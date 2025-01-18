import FadeUp from "./FadeUp";
import Scene from "./TechStack";

const Hero = () => {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center mb-[250px] px-8 lg:pr-0 lg:pl-24 overflow-hidden gap-12">
            <FadeUp>
                <div className="text-center lg:text-left max-w-lg lg:mr-8 mb-8 lg:mb-0">
                    <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500">Travis Pan</h1>
                    <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold mt-3 text-white">SOFTWARE</h2>
                    <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-700" style={{ color: "rgba(70, 71, 74, 0.9)" }}>ENGINEER</h2>
                    <p className="text-base sm:text-lg text-gray-300 mt-5">
                        Software engineer currently studying a double major of computer science and finance at the University of Waterloo. 
                    </p>
                </div>
            </FadeUp>
            <div className="hidden lg:w-[38%] lg:h-[520px] lg:block">
                <Scene />
            </div>
        </div>
    );
};

export default Hero;
