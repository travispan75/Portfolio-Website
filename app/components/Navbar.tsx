import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed top-0 w-full h-[12vh] z-10 bg-black bg-opacity-50 backdrop-blur-lg">
			<div className="flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
				<Link href="/">
					<Image
						src="/images/logo.png"
						alt="Logo"
						width={60}
						height={60}
						className="cursor-pointer"
					/>
				</Link>
				<div className="flex space-x-10 text-white">
					<Link href="#about">Experience</Link>
					<Link href="#projects">Projects</Link>
					<Link href="#contact">Contact</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
