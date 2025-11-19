import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeartbeatAnimation from './HeartbeatAnimation';
import { ArrowRight, Activity, ShieldCheck, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(".hero-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.5"
    );

  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div ref={textRef} className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">24/7 Cardiac Data Support</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
              Reliable. <br />
              <span className="text-gradient">Accurate.</span> <br />
              Life-Saving.
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Advanced ECG & Holter data processing solutions powered by AI and expert analysis. We ensure precision in every heartbeat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Animation/Visuals */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-2 relative z-10">
              <HeartbeatAnimation />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 hero-card hidden md:block">
                <div className="glass p-4 rounded-xl flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <ShieldCheck className="text-green-600 dark:text-green-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Accuracy Rate</p>
                    <p className="text-lg font-bold text-slate-800 dark:text-white">99.9%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 hero-card hidden md:block">
                <div className="glass p-4 rounded-xl flex items-center space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Clock className="text-blue-600 dark:text-blue-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Turnaround</p>
                    <p className="text-lg font-bold text-slate-800 dark:text-white">&lt; 24 Hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
