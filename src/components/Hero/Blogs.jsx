import React, { useState } from 'react';
import first from "../../assets/Links/blog1.jpg";
import second from "../../assets/Links/2.png";
import third from "../../assets/Links/3.png";
import fourth from "../../assets/Links/4.png";
import fifth from "../../assets/Links/5.png";
import sixth from "../../assets/Links/6.png";

const BlogSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const blogSlides = [
    [
      {
        id: 1,
        title: 'Top 10 website designing company in Delhi NCR',
        excerpt: 'As a user what do you want in an application,...',
        image: first,
        linkText: 'Read More'
      },
      {
        id: 2,
        title: 'Code Splitting in React: A Guide for Smooth Development',
        excerpt: 'The digital landscape of todays fast-paced world makes web performance...',
        image: second,
        linkText: 'Read More'
      },
      {
        id: 3,
        title: 'Explore the React Semantic UI for Your Next Business Application',
        excerpt: 'Mobile applications are not just about the front end and back...',
        image: third,
        linkText: 'Read More'
      }
    ],
    [
      {
        id: 4,
        title: 'React Hooks: A Complete Guide for Beginners',
        excerpt: 'Modern React development has been transformed by the introduction of hooks...',
        image: fourth,
        linkText: 'Read More'
      },
      {
        id: 5,
        title: 'Building Responsive Layouts with Tailwind CSS',
        excerpt: 'Creating mobile-friendly interfaces has never been easier than with...',
        image: fifth,
        linkText: 'Read More'
      },
      {
        id: 6,
        title: 'State Management Solutions for React Applications',
        excerpt: 'As your application grows, managing state becomes increasingly complex...',
        image: sixth,
        linkText: 'Read More'
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === blogSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? blogSlides.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
        Our Latest Blog
      </h2>

      <div className="relative group">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {blogSlides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
                  {slide.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2sxl transition-shadow duration-300 border-1 border-gray-300"
                    >
                      <div className="p-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 mb-2"
                      />
                        <h3 className="text-xl font-bold mb-4 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <a
                          href="#"
                          className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          {post.linkText} →
                        </a>
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {blogSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;