import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import AnalyticsChart from '../components/AnalyticsChart';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <Features />
      
      {/* Analytics Preview Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Real-time <span className="text-gradient">Analytics Dashboard</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Monitor your facility's performance with our comprehensive analytics suite. Track processing volumes, turnaround times, and anomaly detection rates in real-time.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Daily processing volume tracking',
                  'Automated anomaly detection alerts',
                  'Turnaround time performance metrics',
                  'Customizable reporting periods'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                <span>Explore Analytics Features</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <AnalyticsChart />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Cardiac Data Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join leading healthcare providers who trust CardioTech for accurate, timely, and secure data solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
