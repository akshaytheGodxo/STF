'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

interface HoverFlairButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const HoverFlairButton: React.FC<HoverFlairButtonProps> = ({
  label,
  onClick,
  className = '',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const scale = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const springScale = useSpring(scale, { stiffness: 260, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const posX = ((e.clientX - rect.left) / rect.width) * 100;
    const posY = ((e.clientY - rect.top) / rect.height) * 100;

    x.set(posX);
    y.set(posY);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    handleMouseMove(e);
    scale.set(1);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const posX = ((e.clientX - rect.left) / rect.width) * 100;
    const posY = ((e.clientY - rect.top) / rect.height) * 100;

    const exitX = posX > 90 ? posX + 20 : posX < 10 ? posX - 20 : posX;
    const exitY = posY > 90 ? posY + 20 : posY < 10 ? posY - 20 : posY;

    x.set(exitX);
    y.set(exitY);
    scale.set(0);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden rounded-full border-[2px] border-white px-6 py-3 text-white font-semibold bg-transparent ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Flair */}
      <motion.span
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
        style={{
          x: springX,
          y: springY,
          scale: springScale,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-[170%] aspect-square bg-white rounded-full" />
      </motion.span>

      {/* Label */}
      <span className="relative z-10">{label}</span>
    </button>
  );
};
