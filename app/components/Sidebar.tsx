'use client';

import { socialInfo } from '@/Data/data';
import * as Tooltip from '@radix-ui/react-tooltip';
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import SlideInFromLeft from './SlideInFromLeft';

const SCALE = 2.25;
const DISTANCE = 110;
const NUDGE = 40;
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

    const dockHeight = useTransform(topSpring, (top) => {
        return 260 + Math.abs(top) * 2.2;
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
                    height: dockHeight,
                    width: '70px',
                    overflow: 'visible',
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
    icon: Icon,
}: {
    mouseTop: MotionValue;
    children: ReactNode;
    action: string;
    icon: React.ComponentType<{ className: string }>;
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
            window.open(action, "_blank");
        } else if (action === "download resume") {
            const link = document.createElement("a");
            link.href = "/path/to/your/resume.pdf";
            link.download = "resume.pdf";
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
                            handleAction();
                        }}
                        className="aspect-square block w-10 rounded-full shadow origin-left flex justify-center items-center">
                        <Icon className="text-white" />
                    </motion.button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        side="right"
                        sideOffset={10}
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