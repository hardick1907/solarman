import design from "../assets/services/design.png";
import cms from "../assets/services/cms.png";
import webdev from "../assets/services/webdev.png";
import mobile from "../assets/services/mobile.png";
import digital from "../assets/services/digital.png";
import design1 from "../assets/services/icons/webdesigning/1.png";
import design2 from "../assets/services/icons/webdesigning/2.png";
import design3 from "../assets/services/icons/webdesigning/3.png";
import design4 from "../assets/services/icons/webdesigning/4.png";
import design5 from "../assets/services/icons/webdesigning/5.png";
import design6 from "../assets/services/icons/webdesigning/6.png";
import design7 from "../assets/services/icons/webdesigning/7.png";
import design8 from "../assets/services/icons/webdesigning/8.png";
import design9 from "../assets/services/icons/webdesigning/9.png";
import design10 from "../assets/services/icons/webdesigning/10.png";
import design11 from "../assets/services/icons/webdesigning/11.png";
import design12 from "../assets/services/icons/webdesigning/12.png";
import design13 from "../assets/services/icons/webdesigning/13.png";
import dev1 from "../assets/services/icons/webdevelopment/1.png";
import dev2 from "../assets/services/icons/webdevelopment/2.png";
import dev3 from "../assets/services/icons/webdevelopment/3.png";
import dev4 from "../assets/services/icons/webdevelopment/4.png";
import dev5 from "../assets/services/icons/webdevelopment/5.png";
import dev6 from "../assets/services/icons/webdevelopment/6.png";
import dev7 from "../assets/services/icons/webdevelopment/7.png";
import app1 from "../assets/services/icons/appdevelopment/1.png";
import app2 from "../assets/services/icons/appdevelopment/2.png";
import app3 from "../assets/services/icons/appdevelopment/3.png";
import app4 from "../assets/services/icons/appdevelopment/4.png";
import app5 from "../assets/services/icons/appdevelopment/5.png";
import cms1 from "../assets/services/icons/cms/1.png";
import cms2 from "../assets/services/icons/cms/2.png";
import cms3 from "../assets/services/icons/cms/3.png";
import cms4 from "../assets/services/icons/cms/4.png";
import cms5 from "../assets/services/icons/cms/5.png";
import dm1 from "../assets/services/icons/digitalmarketing/1.png";
import dm2 from "../assets/services/icons/digitalmarketing/2.png";
import dm3 from "../assets/services/icons/digitalmarketing/3.png";
import dm4 from "../assets/services/icons/digitalmarketing/4.png";
import dm5 from "../assets/services/icons/digitalmarketing/5.png";
import dm6 from "../assets/services/icons/digitalmarketing/6.png";
import dm7 from "../assets/services/icons/digitalmarketing/7.png";
import dm8 from "../assets/services/icons/digitalmarketing/8.png";
import dm9 from "../assets/services/icons/digitalmarketing/9.png";
import dm10 from "../assets/services/icons/digitalmarketing/10.png";
import dm11 from "../assets/services/icons/digitalmarketing/11.png";

const Services = () => {
  const webDesigningIcons = [
    design1,
    design2,
    design3,
    design4,
    design5,
    design6,
    design7,
    design8,
    design9,
    design10,
    design11,
    design12,
    design13,
  ];

  const webDevelopmentIcons = [dev1, dev2, dev3, dev4, dev5, dev6, dev7];

  const appDevelopmentIcons = [app1, app2, app3, app4, app5];

  const cmsIcons = [cms1, cms2, cms3, cms4, cms5];

  const digitalMarketingIcons = [
    dm1,
    dm2,
    dm3,
    dm4,
    dm5,
    dm6,
    dm7,
    dm8,
    dm9,
    dm10,
    dm11,
  ];

  const servicesData = [
    {
      title: "Web Designing",
      description:
        "Our web designing services focus on creating visually appealing and user-friendly websites that enhance your brand's online presence. We specialize in custom designs, responsive layouts, and seamless user experiences.",
      services: [
        "Ecommerce Web Design",
        "Custom Web Design",
        "Responsive Web Design",
        "Dynamic Website Design",
        "Static Website Design",
        "Website Redesigning",
        "PSD to HTML Design",
        "Landing Page Design",
        "Multi Vendor eCommerce Web Design",
        "Business Website Design",
        "News Website Design",
        "MLM Website Design",
        "Wordpress Website Design",
      ],
      icons: webDesigningIcons,
      image: design, // Added image property
    },
    {
      title: "Web Development",
      description:
        "We provide robust and scalable web development solutions tailored to your business needs. Our team specializes in creating custom web applications, integrating third-party APIs, and developing web portals.",
      services: [
        "PHP Web Development",
        "Custom Web Development",
        "Web Portal Development",
        ".NET Web Development",
        "Laravel Web Development",
        "CMS Web Development",
        "3rd Party API Integration",
      ],
      icons: webDevelopmentIcons,
      image: webdev, // Added image property
    },
    {
      title: "Mobile App Development",
      description:
        "From native to cross-platform apps, we deliver high-quality mobile applications for iOS, Android, and beyond. Our developers use the latest technologies to build apps that are fast, reliable, and user-friendly.",
      services: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform App Development",
        "Flutter App Development",
        "Native App Development",
      ],
      icons: appDevelopmentIcons,
      image: mobile, // Added image property
    },
    {
      title: "CMS Development",
      description:
        "We offer expert CMS development services to help you manage your content efficiently. Whether it's WordPress, Shopify, or Magento, we build and customize CMS platforms to suit your business requirements.",
      services: [
        "WordPress Development",
        "Shopify Development",
        "Joomla Development",
        "Drupal Development",
        "Magento Development",
      ],
      icons: cmsIcons,
      image: cms, // Added image property
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with our comprehensive digital marketing services. From SEO and PPC to social media marketing, we help you reach your target audience and grow your business.",
      services: [
        "SEO Services",
        "Affiliate Marketing",
        "Content Writing Services",
        "Link Building Services",
        "PPC",
        "SMO Services",
        "ORM Service",
        "Instagram Marketing",
        "Facebook Marketing",
        "GMB Listing",
        "Google Promotion",
      ],
      icons: digitalMarketingIcons,
      image: digital, // Added image property
    },
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-wrap gap-1 justify-center items-center mb-6">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Our </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-center text-[#f5496c] relative">
          services
          <span className="absolute -bottom-2 left-2 w-[88%] h-1 bg-[#f5496c] rounded-full"></span>
          <span className="text-black">.</span>
        </h1>
      </div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
        Comprehensive digital solutions tailored to your business needs
      </p>

      {/* Services Sections */}
      {servicesData.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-16"
          >
            {isEven ? (
              <>
                {/* Text Content */}
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gray-800">
                    {service.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.services.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-[#5447a782] transition-shadow duration-300 flex items-center"
                      >
                        {service.icons && idx < service.icons.length && (
                          <img
                            src={service.icons[idx]}
                            alt={item}
                            className="w-8 h-8 mr-2"
                          />
                        )}
                        <p className="text-lg font-medium text-gray-800">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Image */}
                <div className="flex justify-center items-center">
                  <img
                    src={service.image} // Updated to use service.image
                    alt={service.title}
                    className= "w-auto h-auto max-w-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image */}
                <div className="flex justify-center items-center">
                  <img
                    src={service.image} // Updated to use service.image
                    alt={service.title}
                    className="w-full max-w-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Text Content */}
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gray-800">
                    {service.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.services.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-[#5447a782] transition-shadow duration-300 flex items-center"
                      >
                        {service.icons && idx < service.icons.length && (
                          <img
                            src={service.icons[idx]}
                            alt={item}
                            className="w-8 h-8 mr-2"
                          />
                        )}
                        <p className="text-lg font-medium text-gray-800">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Services;