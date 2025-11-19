import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Activity, Clock, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: FileText, label: 'ECG Files Processed', value: 50000, suffix: '+' },
  { icon: Activity, label: 'Holter Reports', value: 12000, suffix: '+' },
  { icon: Clock, label: 'Uptime', value: 99.9, suffix: '%' },
  { icon: Users, label: 'Happy Clients', value: 150, suffix: '+' },
];

const Stats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card text-center p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
