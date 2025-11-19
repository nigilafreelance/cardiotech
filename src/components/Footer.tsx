import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="text-primary h-6 w-6" />
              <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
                Cardio<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Reliable, accurate, and 24/7 cardiac data support. Empowering healthcare providers with precision analytics and rapid turnaround times.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['ECG Processing', 'Holter Analysis', 'Remote Monitoring', 'Data Validation'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm">
                  123 Innovation Drive, Tech Park,<br />Mumbai, India 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary h-5 w-5 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary h-5 w-5 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm">support@cardiotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Cardiotech Data Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-primary text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
