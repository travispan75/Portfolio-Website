'use client';

import { socialInfo } from '@/Data/data';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  MotionValue,
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ReactNode, useRef } from 'react';
import SlideInFromLeft from './SlideInLeft';

const SCALE = 2.25; // max scale factor of an icon
const DISTANCE = 110; // pixels before mouse affects an icon
const NUDGE = 40; // pixels icons are moved away from mouse
const SPRING = {
  mass: 0.1,
  stiffness: 170,
  damping: 12,
};
const APPS = socialInfo

export default function Dock() {
  const mouseTop = useMotionValue(-Infinity);
  const mouseBottom = useMotionValue(-Infinity);

  const top = useTransform(mouseTop, [0, 40], [0, -40]);
  const bottom = useTransform(mouseBottom, [0, 40], [0, -40]);

  const topSpring = useSpring(top, SPRING);
  const bottomSpring = useSpring(bottom, SPRING);

  // Set base height to 200 (or any value you prefer)
  const dockHeight = useTransform(topSpring, (top) => {
    return 260 + Math.abs(top)*2.2; // Adjust the base height here
  });

  return (
    <SlideInFromLeft>
    <motion.div
      onMouseMove={(e) => {
        const { top, bottom } = e.currentTarget.getBoundingClientRect();
        const offsetTop = e.clientY - top;
        const offsetBottom = bottom - e.clientY;
        mouseTop.set(offsetTop);
        mouseBottom.set(offsetBottom);
      }}
      onMouseLeave={() => {
        mouseTop.set(-Infinity);
        mouseBottom.set(-Infinity);
      }}
      className="fixed top-1/2 left-0 transform -translate-y-1/2 ml-12 z-10 flex flex-col justify-center items-center gap-4 px-4 py-4 rounded-2xl"
      style={{
        height: dockHeight, // Dynamic height based on the stretching of the icons
        width: '70px',
        overflow: 'visible', // Allow overflow for the stretched icons
        backgroundColor: 'rgb(33, 33, 33)',
      }}
    >
      <motion.div
        className="absolute rounded-2xl inset-x-0 -z-10"
        style={{ top: topSpring, bottom: bottomSpring }}
      />

      {APPS.map((app, i) => (
        <AppIcon key={i} mouseTop={mouseTop} action={app.action} icon={app.icon}>
          {app.name}
        </AppIcon>
      ))}
    </motion.div>
    </SlideInFromLeft>
  );
}

function AppIcon({
    mouseTop,
    children,
    action,
    icon: Icon, // Accepting icon as a prop
  }: {
    mouseTop: MotionValue;
    children: ReactNode;
    action: string; // Action (URL or file download path)
    icon: React.ComponentType; // Type for React icon component
  }) {
    const ref = useRef<HTMLButtonElement>(null);
  
    const distance = useTransform(() => {
      const bounds = ref.current
        ? { y: ref.current.offsetTop, height: ref.current.offsetHeight }
        : { y: 0, height: 0 };
  
      return mouseTop.get() - bounds.y - bounds.height / 2;
    });
  
    const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);
    const y = useTransform(() => {
      const d = distance.get();
      if (d === -Infinity) {
        return 0;
      } else if (d < -DISTANCE || d > DISTANCE) {
        return Math.sign(d) * -1 * NUDGE;
      } else {
        return (-d / DISTANCE) * NUDGE * scale.get();
      }
    });
  
    const scaleSpring = useSpring(scale, SPRING);
    const ySpring = useSpring(y, SPRING);
  
    const handleAction = () => {
      if (action.startsWith("http")) {
        // If the action is a URL (link), open it in a new tab
        window.open(action, "_blank");
      } else if (action === "download resume") {
        // If the action is "download resume", trigger the download
        const link = document.createElement("a");
        link.href = "/path/to/your/resume.pdf"; // Replace with your actual resume path
        link.download = "resume.pdf"; // Name the file when downloaded
        link.click();
      }
    };
  
    return (
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <motion.button
              ref={ref}
              style={{
                y: ySpring,
                scale: scaleSpring,
                backgroundColor: "rgb(60, 60, 60)",
              }}
              onClick={() => {
                handleAction(); // Perform the action without animation
              }}
              className="aspect-square block w-10 rounded-full shadow origin-left flex justify-center items-center" // Add flex for centering
            >
              <Icon className="text-white" /> {/* Render the icon here */}
            </motion.button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right" // Position the tooltip to the right of the icon
              sideOffset={10} // Adjust the offset to position it further right if needed
              className="bg-gray-700 px-2 py-1.5 text-sm rounded text-white font-medium"
              style={{ backgroundColor: "rgb(60, 60, 60)", borderColor: "rgb(60, 60, 60)" }}
            >
              {children}
              <Tooltip.Arrow style={{ fill: "rgb(60, 60, 60)" }} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }
