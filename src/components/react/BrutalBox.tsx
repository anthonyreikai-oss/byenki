import React from 'react';

interface BrutalBoxProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function BrutalBox({ children, className = '', id }: BrutalBoxProps) {
  return (
    <div id={id} className={`relative border border-dashed border-dashed-cream bg-w-void ${className}`}>
      {/* Corner Plus symbols */}
      <span className="absolute -top-[11px] -left-[6px] text-w-orange font-mono text-[18px] leading-none select-none z-10">+</span>
      <span className="absolute -top-[11px] -right-[6px] text-w-orange font-mono text-[18px] leading-none select-none z-10">+</span>
      <span className="absolute -bottom-[11px] -left-[6px] text-w-orange font-mono text-[18px] leading-none select-none z-10">+</span>
      <span className="absolute -bottom-[11px] -right-[6px] text-w-orange font-mono text-[18px] leading-none select-none z-10">+</span>
      
      {children}
    </div>
  );
}
