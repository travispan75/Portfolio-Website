import { motion } from "framer-motion";

interface FadeUpProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    distance?: number;
}

const FadeUp: React.FC<FadeUpProps> = ({children, duration = 0.6, delay = 0, distance = 20}) => {
    return (
        <motion.div
        initial={{ opacity: 0, transform: `translateY(${distance}px)` }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration, delay, ease: "easeOut" }}
        style={{ visibility: 'visible' }} // This ensures the element maintains its space
        >
            {children}
        </motion.div>
    );
};

export default FadeUp;
