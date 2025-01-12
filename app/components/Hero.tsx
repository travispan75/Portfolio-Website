import FadeUp from "./FadeUp";

const Hero = () => {
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-center mb-[250px] ml-40">
            <FadeUp>
                <div className="text-center lg:text-left max-w-lg lg:mr-8 mb-8 lg:mb-0">
                    <h1 className="text-4xl font-bold text-yellow-500">Travis Pan</h1>
                    <h2 className="text-6xl lg:text-8xl font-bold mt-3 text-white">SOFTWARE</h2>
                    <h2 className="text-6xl lg:text-8xl font-bold text-gray-700" style={{ color: "rgba(70, 71, 74, 0.9)" }}>ENGINEER</h2>
                    <p className="text-lg text-gray-300 mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </FadeUp>
            <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
                <img src="/images/placeholder.png" alt="Profile Image" className="object-contain w-full h-full" />
            </div>
        </section>
    );
};

export default Hero;
