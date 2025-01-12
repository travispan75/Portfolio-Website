"use client"
import { motion } from "framer-motion";

interface FadeDownProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    distance?: number;
    inView?: boolean;
}

const FadeDown: React.FC<FadeDownProps> = ({ children, duration = 0.5, delay = 0, distance = 20, inView = true }) => {
    return (
        <motion.div
            initial={{ opacity: 1, translateY: -distance }}
            animate={inView ? undefined : { opacity: 0, translateY: distance }}
            whileInView={inView ? { opacity: 0, translateY: distance } : undefined}
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}>
            {children}
        </motion.div>
    );
};

export default FadeDown;
