import { FaRegFile } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: 'rgb(33, 33, 33)' }} className="fixed top-1/2 left-0 transform -translate-y-1/2 pl-3 pr-3 pt-4 pb-4 ml-12 z-10 rounded-3xl">
        <div className="flex flex-col space-y-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full p-3" style={{ backgroundColor: 'rgb(60, 60, 60)' }}>
                <FaRegFile className="text-3xl text-white"/>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full p-3" style={{ backgroundColor: 'rgb(60, 60, 60)' }}>
                <FaLinkedinIn className="text-3xl text-white"/>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full p-3" style={{ backgroundColor: 'rgb(60, 60, 60)' }}>
                <FiGithub className="text-3xl text-white"/>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full p-3" style={{ backgroundColor: 'rgb(60, 60, 60)' }}>
                <FaInstagram className="text-3xl text-white"/>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
