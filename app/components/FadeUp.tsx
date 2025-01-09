"use client"
import { motion } from "framer-motion";

interface FadeUpProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    distance?: number;
}

const FadeUp: React.FC<FadeUpProps> = ({children, duration = 0.5, delay = 0, distance = 20}) => {
    return (
        <motion.div
        initial={{ opacity: 0, translateY: distance }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration, delay, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}>
            {children}
        </motion.div>
    );
};

export default FadeUp;
