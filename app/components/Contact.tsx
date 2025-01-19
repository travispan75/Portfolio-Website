import FadeUp from "./FadeUp";
import { PiEnvelope } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
    return (
        <div className="mb-[150px]">
            <FadeUp>
                <div className="flex justify-center items-center h-full mb-[70px]">
                    <h2 className="text-white text-center text-3xl font-bold">CONTACT INFO</h2>
                </div>
            </FadeUp>
            <div className="text-white flex gap-24 justify-center items-center">
                <div className="flex items-center space-x-2">
                    <PiEnvelope />
                    <a href="mailto:travispan75@gmail.com" className="text-white">
                        <h3>travispan75@gmail.com</h3>
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <FiPhone />
                    <a href="tel:+16472978886" className="text-white">
                        <h3>647-297-8886</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;