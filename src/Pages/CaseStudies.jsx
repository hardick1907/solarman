import first from "../assets/case/1.jpg";
import second from "../assets/case/2.jpg";
import third from "../assets/case/3.jpg";
import fourth from "../assets/case/4.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      category: "PRODUCT DESIGN",
      title:
        "Empowering Access to Fresh Produce: Building a Mobile App for Source.ag",
      description:
        "Source.ag is a farming technology platform that is revolutionizing access to fresh produce using cutting-edge AI-powered greenhouses...",
      image: first,
      textColor: "text-green-600",
    },
    {
      id: 2,
      category: "PRODUCT DESIGN",
      title: "Streamline remote hiring with Pangea.ai's marketplace",
      description:
        "Struggling to find the perfect software development partner? Pangea.ai connects businesses with elite development firms...",
      image: second,
      textColor: "text-blue-600",
    },
    {
      id: 3,
      category: "UI/UX DESIGN",
      title: "Enhancing E-commerce Experience for ShopFlow",
      description:
        "ShopFlow is an AI-driven e-commerce platform optimizing online shopping journeys through intuitive design and seamless navigation...",
      image: third,
      textColor: "text-purple-600",
    },
    {
      id: 4,
      category: "MOBILE DEVELOPMENT",
      title: "Revolutionizing Fitness Tracking with FitSync",
      description:
        "FitSync is a next-gen fitness app that syncs with multiple health devices, providing users with real-time health insights...",
      image: fourth,
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mt-7">
      <div className="flex flex-wrap gap-1 items-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Case </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-center text-[#f5496c] relative">
          studies
          <span className="absolute -bottom-2 left-2 w-[88%] h-1 bg-[#f5496c] rounded-full"></span>
          <span className="text-black">.</span>
        </h1>
      </div>

      {caseStudies.map((study, index) => (
        <div key={study.id} className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className={`${index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}`}>
            {index % 2 === 0 ? (
              <img
                src={study.image || "/api/placeholder/400/320"}
                alt={study.title}
                className="w-full h-64 object-cover rounded-md"
              />
            ) : (
              <div className="p-4 h-full flex flex-col justify-center">
                <div
                  className={`inline-block px-3 py-1 ${study.textColor} bg-opacity-90 rounded-md text-xs font-semibold mb-3 text-white`}
                >
                  {study.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-sm mb-4">{study.description}</p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className={`flex items-center text-xs font-semibold ${study.textColor}`}
                  >
                    READ MORE
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className={`${index % 2 === 0 ? "order-2" : "order-1 lg:order-2"}`}>
            {index % 2 === 0 ? (
              <div className="p-4 h-full flex flex-col justify-center">
                <div
                  className={`inline-block px-3 py-1 ${study.textColor} bg-opacity-90 rounded-md text-xs font-semibold mb-3 text-white`}
                >
                  {study.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-sm mb-4">{study.description}</p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className={`flex items-center text-xs font-semibold ${study.textColor}`}
                  >
                    READ MORE
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ) : (
              <img
                src={study.image || "/api/placeholder/400/320"}
                alt={study.title}
                className="w-full h-64 object-cover rounded-md"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudies;
