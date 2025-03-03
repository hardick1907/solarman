import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'About Us',
      hasDropdown: false,
      url: '/about',
    },
    {
      title: 'Services',
      hasDropdown: true,
      dropdownType: 'full',
      url: null,
      dropdown: [
        {
          title: 'Web Designing',
          items: [
            { name: 'Ecommerce Web Design', url: '/webdesigning/ecommerce' },
            { name: 'Custom Web Design', url: '/webdesigning/custom' },
            { name: 'Responsive Web Design', url: '/webdesigning/responsive' },
            { name: 'Dynamic Website Design', url: '/webdesigning/dynamic' },
            { name: 'Static Website Design', url: '/webdesigning/static' },
            { name: 'Website Redesigning', url: '/webdesigning/redesign' },
            { name: 'PSD to HTML Design', url: '/webdesigning/psd' },
            { name: 'Landing Page Design', url: '/webdesigning/landing' },
            { name: 'Multi Vendor eCommerce Web Design', url: '/webdesigning/multivendor' },
            { name: 'Business Website Design', url: '/webdesigning/business' },
            { name: 'News Website Design', url: '/webdesigning/news' },
            { name: 'MLM Website Design', url: '/webdesigning/mlm' },
            { name: 'Wordpress Website Design', url: '/webdesigning/wordpress' },
          ],
        },
        {
          title: 'Web Development',
          items: [
            { name: 'PHP Web Development', url: '/webdevelopment/php' },
            { name: 'Custom Web Development', url: '/webdevelopment/custom' },
            { name: 'Web Portal Development', url: '/webdevelopment/portal' },
            { name: '.NET Web Development', url: '/webdevelopment/.net' },
            { name: 'Laravel Web Development', url: '/webdevelopment/laravel' },
            { name: 'CMS Web Development', url: '/webdevelopment/cms' },
            { name: '3rd Party API Integration', url: '/webdevelopment/api' },
          ],
        },
        {
          title: 'Mobile App Development',
          items: [
            { name: 'iOS App Development', url: '/mobileappdevelopment/ios' },
            { name: 'Android App Development', url: '/mobileappdevelopment/android' },
            { name: 'Cross-Platform App Development', url: '/mobileappdevelopment/cross' },
            { name: 'Flutter App Development', url: '/mobileappdevelopment/flutter' },
            { name: 'Native App Development', url: '/mobileappdevelopment/react' },
          ],
        },
        {
          title: 'CMS Development',
          items: [
            { name: 'WordPress Development', url: '/cmsdevelopment/wordpress' },
            { name: 'Shopify Development', url: '/cmsdevelopment/shopify' },
            { name: 'Joomla Development', url: '/cmsdevelopment/joomla' },
            { name: 'Drupal Development', url: '/cmsdevelopment/drupal' },
            { name: 'Magento Development', url: '/cmsdevelopment/magento' },
          ],
        },
        {
          title: 'Digital Marketing',
          items: [
            { name: 'SEO Services', url: '/digitalmarketing/seo' },
            { name: 'Affiliate Marketing', url: '/digitalmarketing/affiliate' },
            { name: 'Content Writing Services', url: '/digitalmarketing/content' },
            { name: 'Link Building Services', url: '/digitalmarketing/link' },
            { name: 'PPC', url: '/digitalmarketing/ppc' },
            { name: 'SMO Services', url: '/digitalmarketing/smo' },
            { name: 'ORM Service', url: '/digitalmarketing/orm' },
            { name: 'Instagram Marketing', url: '/digitalmarketing/instagram' },
            { name: 'Facebook Marketing', url: '/digitalmarketing/facebook' },
            { name: 'GMB Listing', url: '/digitalmarketing/gmb' },
            { name: 'Google Promotion', url: '/digitalmarketing/google' },
          ],
        },
      ],
    },
    {
      title: 'Packages',
      hasDropdown: true,
      dropdownType: 'simple',
      url: '/packages',
      dropdown: [
        { name: 'Website Designing Packages', url: '/packages/custom' },
        { name: 'Digital Marketing Packages', url: '/packages/digital' },
        { name: 'SEO Packages', url: '/packages/seo' },
        { name: 'SMO Packages', url: '/packages/custom' },
        { name: 'SMM Packages', url: '/packages/social' },
        { name: 'PPC Packages', url: '/packages/ppc' },
        { name: 'Content Writing Packages', url: '/packages/custom' },
      ],
    },
    {
      title: 'Our Work',
      hasDropdown: false,
      url: '/ourwork',
    },
    {
      title: 'Sectors',
      hasDropdown: false,
      url: '/sectors',
    },
    {
      title: 'Case Studies',
      hasDropdown: false,
      url: '/casestudies',
    },
    {
      title: 'Blog',
      hasDropdown: false,
      url: '/blog',
    },
    {
      title: 'Contact Us',
      hasDropdown: false,
      url: '/contact',
    },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="relative z-10">
      {/* Desktop Navbar */}
      <div className="shadow-sm backdrop-blur-md bg-white/90 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img className="w-44" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button className="text-lg font-semibold px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-1 group">
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.url}
                      className="text-lg font-semibold px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 block"
                    >
                      {item.title}
                    </a>
                  )}
                  {item.hasDropdown && item.dropdownType === 'simple' && (
                    <div
                      className={`absolute right-0 w-64 bg-white rounded-lg shadow-lg mt-1 py-2 transition-all duration-300 ${
                        activeDropdown === item.title
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-3'
                      }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.url}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Dropdown Menus (Desktop) */}
      {navItems
        .filter((item) => item.hasDropdown && item.dropdownType === 'full')
        .map((item) => (
          <div
            key={item.title}
            className={`absolute left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transform transition-all duration-300 ease-in-out z-10 ${
              activeDropdown === item.title
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2'
            }`}
            onMouseEnter={() => setActiveDropdown(item.title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12">
                {item.dropdown.map((section) => (
                  <div key={section.title} className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.url}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              {subItem.name}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

      {/* Mobile Menu - Fixed to viewport with proper z-index */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="font-bold text-xl">Menu</div>
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="px-4 py-6 h-full">
            {navItems.map((item) => (
              <div key={item.title} className="mb-2">
                {item.hasDropdown ? (
                  <div className="w-full">
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                      onClick={() =>
                        setActiveMobileDropdown(activeMobileDropdown === item.title ? null : item.title)
                      }
                    >
                      <span className="text-lg font-medium">{item.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          activeMobileDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeMobileDropdown === item.title && (
                      <div className="pl-6 mt-2 space-y-4">
                        {item.dropdownType === 'simple' ? (
                          item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.url}
                              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))
                        ) : (
                          item.dropdown.map((section) => (
                            <div key={section.title} className="space-y-2 mb-4">
                              <h3 className="font-medium text-gray-900">{section.title}</h3>
                              <ul className="space-y-2 pl-4">
                                {section.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <a
                                      href={subItem.url}
                                      className="block py-1.5 text-gray-600 hover:text-blue-600"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.url}
                    className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;