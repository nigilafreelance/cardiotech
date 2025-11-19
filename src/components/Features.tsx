import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Database, Cloud, Shield, Zap, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Activity,
    title: 'ECG Analysis',
    description: 'Advanced algorithms for precise arrhythmia detection and interval measurements.',
  },
  {
    icon: Database,
    title: 'Holter Management',
    description: 'Comprehensive 24/48h Holter data processing with detailed reporting.',
  },
  {
    icon: Cloud,
    title: 'Cloud Sync',
    description: 'Secure, real-time data synchronization across all your devices and locations.',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'HIPAA-compliant encryption ensuring patient data remains confidential and secure.',
  },
  {
    icon: Zap,
    title: 'Rapid Turnaround',
    description: 'Get verified reports within 24 hours with our efficient workflow.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert technical team available round the clock for immediate assistance.',
  },
];

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose <span className="text-primary">CardioTech</span>?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We combine cutting-edge technology with medical expertise to deliver superior cardiac data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
