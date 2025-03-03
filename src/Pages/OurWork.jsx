import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OurWork = () => {
  // Categories for filtering
  const categories = ['All', 'Design', 'Development', 'SEO', 'Digital Marketing', 'Graphics', 'CMS'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample portfolio items - replace with your actual data and website links
  const portfolioItems = [
    { 
      id: 1, 
      title: 'E-commerce Website', 
      category: 'Development', 
      image: '/api/placeholder/400/300', 
      client: 'Fashion Brand',
      websiteUrl: 'https://fashion-ecommerce-example.com' 
    },
    { 
      id: 2, 
      title: 'Brand Identity', 
      category: 'Design', 
      image: '/api/placeholder/400/300', 
      client: 'Tech Startup',
      websiteUrl: 'https://tech-startup-example.com' 
    },
    { 
      id: 3, 
      title: 'SEO Optimization', 
      category: 'SEO', 
      image: '/api/placeholder/400/300', 
      client: 'Local Business',
      websiteUrl: 'https://local-business-example.com' 
    },
    { 
      id: 4, 
      title: 'Social Media Campaign', 
      category: 'Digital Marketing', 
      image: '/api/placeholder/400/300', 
      client: 'Food Chain',
      websiteUrl: 'https://food-chain-example.com' 
    },
    { 
      id: 5, 
      title: 'Logo Design', 
      category: 'Graphics', 
      image: '/api/placeholder/400/300', 
      client: 'Finance Company',
      websiteUrl: 'https://finance-company-example.com' 
    },
    { 
      id: 6, 
      title: 'WordPress Website', 
      category: 'CMS', 
      image: '/api/placeholder/400/300', 
      client: 'Blog Platform',
      websiteUrl: 'https://blog-platform-example.com' 
    },
    { 
      id: 7, 
      title: 'Mobile App Design', 
      category: 'Design', 
      image: '/api/placeholder/400/300', 
      client: 'Health Startup',
      websiteUrl: 'https://health-startup-example.com' 
    },
    { 
      id: 8, 
      title: 'React Dashboard', 
      category: 'Development', 
      image: '/api/placeholder/400/300', 
      client: 'Analytics Company',
      websiteUrl: 'https://analytics-dashboard-example.com' 
    },
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col justify-center items-center p-6 max-w-7xl mx-auto">
      {/* Heading with gradient effect */}
      <div className="flex flex-wrap gap-1 justify-center items-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Our </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-center text-[#f5496c] relative">
          work
          <span className="absolute -bottom-2 left-2 w-[88%] h-1 bg-[#f5496c] rounded-full"></span>
          <span className="text-black">.</span>
        </h1>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 md:gap-10 justify-center items-center mb-16">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${
              activeCategory === category
                ? 'bg-[#f5496c] text-white shadow-lg shadow-[#f5496c]/30'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <AnimatePresence mode="wait">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="px-3 py-1 bg-[#f5496c] text-white text-xs rounded-full">
                        {item.category}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">Client: {item.client}</p>
                <a 
                  href={item.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Go to Website
                  </motion.span>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
          <button
            onClick={() => setActiveCategory('All')}
            className="mt-4 px-6 py-2 bg-[#f5496c] text-white rounded-full hover:bg-[#d63d5c] transition-colors"
          >
            View All Projects
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default OurWork;