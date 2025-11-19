import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

const timeline = [
  { year: '2018', title: 'Inception', description: 'Founded with a vision to revolutionize cardiac data processing.' },
  { year: '2019', title: 'AI Integration', description: 'Launched our first AI-assisted ECG analysis platform.' },
  { year: '2021', title: 'Global Expansion', description: 'Expanded operations to serve clients in 15+ countries.' },
  { year: '2023', title: 'Innovation Award', description: 'Recognized for excellence in medical data technology.' },
];

const team = [
  { name: 'Dr. Sarah Chen', role: 'Chief Medical Officer', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'James Wilson', role: 'CTO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'Anita Patel', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300' },
];

const About = () => {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-slate-900">
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="text-gradient">CardioTech</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We are dedicated to saving lives through precision data analysis and innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To provide the most accurate and timely cardiac data analysis globally.' },
            { icon: Heart, title: 'Our Vision', desc: 'A world where cardiac care is proactive, precise, and accessible to all.' },
            { icon: Award, title: 'Our Values', desc: 'Integrity, Innovation, Precision, and Patient-First approach.' }
          ].map((item, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-slate-50 dark:bg-slate-800/30 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Our Journey</h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900 mb-4 md:mb-0">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-full md:w-5/12 text-center md:text-left glass-card p-6 rounded-xl">
                    <span className="text-primary font-bold text-lg block mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
