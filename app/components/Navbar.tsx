import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="fixed w-full h-[12vh] z-10 bg-black bg-opacity-50 backdrop-blur-lg max-w-full">
			<div className="flex items-center justify-between h-full max-w-[95%] mx-auto px-4 sm:max-w-[90%] xl:max-w-[80%]">
				<Link href="#top" className="border border-2 w-10 h-10 border-yellow-500 flex items-center justify-center">
					<h2 className="select-none font-bold text-xl sm:text-2xl text-yellow-500">TP</h2>
				</Link>
				<div className="flex space-x-4 sm:space-x-6 lg:space-x-10 text-white">
					<Link href="#experience" className="text-sm sm:text-base lg:text-lg">Experience</Link>
					<Link href="#projects" className="text-sm sm:text-base lg:text-lg">Projects</Link>
					<Link href="#contact" className="text-sm sm:text-base lg:text-lg">Contact</Link>
				</div>
			</div>
		</div>

	);
};

export default Navbar;
