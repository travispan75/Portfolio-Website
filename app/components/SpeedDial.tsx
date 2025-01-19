"use client";

import React, { useEffect, useState } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { socialInfo } from '../../Data/data';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import FadeUp from './FadeUp';

const MiniBar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAction = (action: string) => {
    if (action === 'download resume') {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'travis-pan-resume.pdf';
      console.log("YEET");
      link.click();
    } else {
      window.open(action, '_blank');
    }
  };

  const items = socialInfo.slice().reverse().map((info) => ({
    label: info.name,
    icon: <info.icon className="text-xl" />,
    command: () => handleAction(info.action),
    style: { backgroundColor: 'rgb(33, 33, 33)', color: 'white' }
  }));

  if (!isMounted) return null;

  return (
    <div className="fixed right-[100px] bottom-[360px] z-[9999]">
        <FadeUp delay={0.3}>
            <SpeedDial
                model={items}
                radius={200}
                direction="up"
                buttonClassName="w-12 h-12 p-button-rounded text-white shadow-lg"
                buttonStyle={{ backgroundColor: 'rgb(33, 33, 33)' }}
                showIcon="pi pi-plus"
                hideIcon="pi pi-times"
            />
        </FadeUp>
    </div>
  );
};

export default MiniBar;
