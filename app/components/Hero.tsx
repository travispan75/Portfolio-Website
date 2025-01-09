import FadeUp from "./FadeUp";

const Hero = () => {
	return (
        <section className="flex items-center justify-between h-screen w-full text-white mb-[60px]" style={{ position: "relative", paddingRight: '300px', paddingLeft: '360px' }}>
            <FadeUp> 
                <div className="text-left max-w-lg mr-8">
                        <h1 className="text-4xl font-bold" style={{ color: 'rgb(221, 181, 81)' }}>Travis Pan</h1>
                        <h2 className="text-8xl font-bold mt-3" style={{ color: 'rgb(255, 255, 255)' }}>SOFTWARE</h2>
                        <h2 className="text-8xl font-bold" style={{ color: 'rgb(83, 83, 83)' }}>ENGINEER</h2>
                        <p className="text-lg text-gray-300 mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                </div>
            </FadeUp>
            <div className="relative w-[400px] h-[400px]">
                <img src="/images/placeholder.png" alt="" />
            </div>
        </section>
	);
};

export default Hero;
