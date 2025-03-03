import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import mapImage from '../assets/worldmap.svg';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedServices: [],
    budget: ''
  });

  const services = ["WEB-DESIGN", "WEB-DEVELOPMENT", "BRANDING", "MARKETING", "OTHER"];
  const budgetOptions = ["<5K", "5-10K", "10-20K", ">20K", "I DON'T KNOW YET"];

  const handleServiceClick = (service) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(item => item !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <footer className="bg-gradient-to-br from-[#2f0043] to-[#1a0026] text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-1 container mx-auto px-4 md:px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="SOLARMAN logo" className="w-32 h-auto" />
              <div className="h-12 w-[1px] bg-gray-700"></div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Transforming ideas into<br />digital excellence
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-lg font-medium mb-6">Start Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Services You're Interested In*</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceClick(service)}
                        className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                          formData.selectedServices.includes(service)
                            ? "bg-white text-[#2f0043] border-white"
                            : "bg-white/5 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Your Budget in EUR*</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, budget: amount }))}
                        className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                          formData.budget === amount
                            ? "bg-white text-[#2f0043] border-white"
                            : "bg-white/5 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[#2f0043] py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                >
                  Start Your Journey
                </button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Global Presence */}
            <div>
              <h3 className="text-2xl font-light mb-3">Global Presence</h3>
              <p className="text-gray-400">Our projects span across continents, delivering excellence worldwide</p>
              <div className="mt-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f0043] via-transparent to-transparent"></div>
                <img src={mapImage} alt="World Map" className="w-full h-auto opacity-60" />
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {/* Company Links */}
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4">Company</h4>
                <nav className="flex flex-col space-y-3">
                  {['About Us', 'Services', 'Blogs', 'Portfolio', 'Sitemap', 'Contact'].map(item => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Services Links */}
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4">Services</h4>
                <nav className="flex flex-col space-y-3">
                  {[
                    'Web Development',
                    'Software Development',
                    'Mobile Development',
                    'SEO Services',
                    'System Integration',
                    'Social Media'
                  ].map(item => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
                <div className="space-y-4 text-sm text-gray-300">
                  <p className="leading-relaxed">
                    6/14, Industrial Area,<br />
                    Kirti Nagar, New Delhi-110015,<br />
                    India
                  </p>
                  <p>
                    <a href="mailto:info@solarmantech.in" className="hover:text-white transition-colors">
                      info@solarmantech.in
                    </a>
                  </p>
                  <p className="space-y-1">
                    <a href="tel:+917428086779" className="block hover:text-white transition-colors">+91 7428086779</a>
                    <a href="tel:+919654916779" className="block hover:text-white transition-colors">+91 9654916779</a>
                    <a href="tel:01147022785" className="block hover:text-white transition-colors">011-47022785</a>
                  </p>
                  <p>GST: 07AAECB2278A1Z3</p>
                  <p>CIN: U72900DL2010PTC199476</p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} SOLARMAN. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;