'use client';

import { motion } from 'framer-motion';

interface SlideInFromLeftProps {
  children: React.ReactNode;
}

const SlideInFromLeft: React.FC<SlideInFromLeftProps> = ({ children }) => (
  <motion.div
  initial = {{ x: '-100vw', y: 0 }}
  animate = {{ x: 12, y: 0 }}
  exit = {{ x: '-100vw' }}
  transition = {{
  type: 'spring',
  stiffness: 100,
  damping: 25,
  mass: 1,
  duration: 0.15
  }}
  style ={{ position: 'fixed', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 10 }}>
    {children}
  </motion.div>
);

export default SlideInFromLeft;
