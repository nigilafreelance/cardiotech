import React from 'react';
import { Activity, Database, Wifi, Users, Cloud, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'ECG File Processing',
    description: 'High-precision processing of 12-lead ECGs with automated interpretation support and cardiologist verification.',
    features: ['Arrhythmia detection', 'QT interval measurement', 'ST-segment analysis']
  },
  {
    icon: Database,
    title: 'Holter Data Management',
    description: 'End-to-end management of 24h to 14-day Holter monitoring data, including scanning and reporting.',
    features: ['Atrial Fibrillation burden', 'HRV analysis', 'Patient event correlation']
  },
  {
    icon: Wifi,
    title: 'Remote Monitoring Support',
    description: 'Real-time surveillance solutions for mobile cardiac telemetry (MCT) and event monitors.',
    features: ['24/7 alert monitoring', 'Immediate physician notification', 'Daily summary reports']
  },
  {
    icon: Users,
    title: '24/7 Technical Team',
    description: 'Dedicated support team available round-the-clock to assist with data transmission and system issues.',
    features: ['< 15 min response time', 'Multilingual support', 'Remote desktop assistance']
  },
  {
    icon: Cloud,
    title: 'Cloud Syncing & Backup',
    description: 'Secure cloud infrastructure ensuring your data is accessible anywhere, anytime, with redundant backups.',
    features: ['AES-256 encryption', 'Automated daily backups', 'Role-based access control']
  },
  {
    icon: CheckCircle,
    title: 'Data Validation',
    description: 'Rigorous quality control processes to ensure the highest accuracy in every report generated.',
    features: ['Multi-stage review', 'AI-assisted error detection', 'Clinical audit trails']
  }
];

const Services = () => {
  return (
    <div className="pt-20 pb-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive cardiac data solutions tailored to meet the needs of modern healthcare providers and diagnostic centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
