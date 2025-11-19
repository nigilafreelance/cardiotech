import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeartbeatAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;

    const length = path.getTotalLength();
    
    // Set initial styles
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0.5
    });
    
    gsap.set(dot, { opacity: 0 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Heartbeat animation
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut",
      opacity: 1
    })
    .to(path, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    }, "-=0.2");

    // Pulse effect on the dot
    gsap.to(dot, {
      opacity: 1,
      scale: 1.5,
      duration: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 500 200"
        className="w-full h-full text-primary drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid Background */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200 dark:text-slate-800 opacity-20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* ECG Path */}
        <path
          ref={pathRef}
          d="M0,100 L50,100 L60,100 L70,90 L80,110 L90,100 L130,100 L140,80 L150,140 L160,40 L170,160 L180,100 L220,100 L230,90 L240,110 L250,100 L300,100 L310,80 L320,140 L330,40 L340,160 L350,100 L400,100 L410,90 L420,110 L430,100 L500,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Moving Dot */}
        <circle ref={dotRef} cx="0" cy="0" r="4" fill="currentColor" className="text-accent">
          <animateMotion
            dur="1.5s"
            repeatCount="indefinite"
            path="M0,100 L50,100 L60,100 L70,90 L80,110 L90,100 L130,100 L140,80 L150,140 L160,40 L170,160 L180,100 L220,100 L230,90 L240,110 L250,100 L300,100 L310,80 L320,140 L330,40 L340,160 L350,100 L400,100 L410,90 L420,110 L430,100 L500,100"
          />
        </circle>
      </svg>
    </div>
  );
};

export default HeartbeatAnimation;
