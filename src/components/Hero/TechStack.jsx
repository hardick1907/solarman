import { useState, useEffect, useRef } from "react";
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import javascript from "../../assets/logo/javascript.png";
import ajax from "../../assets/logo/ajax.png";
import jquery from "../../assets/logo/jquery.png";
import bootstrap from "../../assets/logo/bootstrap.png";
import tailwind from "../../assets/logo/tailwind.png";
import react from "../../assets/logo/react.png";
import php from "../../assets/logo/php.png";
import laravel from "../../assets/logo/laravel.png";
import dotnet from "../../assets/logo/dotnet.png";
import codeigniter from "../../assets/logo/codeigniter.png";
import wordpress from "../../assets/logo/wordpress.png";
import magento from "../../assets/logo/magento.png";
import shopify from "../../assets/logo/shopify.png";
import drupal from "../../assets/logo/drupal.png";
import joomla from "../../assets/logo/joomla.png";
import android from "../../assets/logo/android.png";
import ios from "../../assets/logo/ios.png";
import flutter from "../../assets/logo/flutter.png";
import reactnative from "../../assets/logo/reactnative.png";
import aws from "../../assets/logo/aws.png";
import docker from "../../assets/logo/docker.png";
import kubernetes from "../../assets/logo/kubernetes.png";
import linux from "../../assets/logo/linux.png";
import git from "../../assets/logo/git.png";
import github from "../../assets/logo/github.png";
import jenkins from "../../assets/logo/jenkins.png";
import googlecloud from "../../assets/logo/googlecloud.png";
import vscode from "../../assets/logo/vscode.png";
import sublime from "../../assets/logo/sublime.png";
import postman from "../../assets/logo/postman.png";
import canva from "../../assets/logo/canva.png";
import figma from "../../assets/logo/figma.png";
import adobephotoshop from "../../assets/logo/adobephotoshop.png";
import adobexd from "../../assets/logo/adobexd.png";
import adobeillustrator from "../../assets/logo/adobeillustrator.png";
import aftereffects from "../../assets/logo/aftereffects.png";
import jira from "../../assets/logo/jira.png";
import trello from "../../assets/logo/trello.png";
import googleanalytics from "../../assets/logo/googleanalytics.png";
import googlesearchconsole from "../../assets/logo/googlesearchconsole.png";
import googletagmanager from "../../assets/logo/googletagmanager.png";
import ahref from "../../assets/logo/ahref.png";
import deepcrawl from "../../assets/logo/deepcrawl.png";
import semrush from "../../assets/logo/semrush.png";
import moz from "../../assets/logo/moz.png";
import searchmatrics from "../../assets/logo/searchmatrics.png";
import screamingfrog from "../../assets/logo/screamingfrog.png";
import ubersuggest from "../../assets/logo/ubersuggest.png";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('Front End');
  const sectionRef = useRef(null);
  
  const techData = {
    'Front End': [
      { name: 'HTML5', image: html },
      { name: 'CSS3', image: css },
      { name: 'JavaScript', image: javascript },
      { name: 'Ajax', image: ajax },
      { name: 'JQuery', image: jquery },
      { name: 'Bootstrap', image: bootstrap },
      { name: 'Tailwind CSS', image: tailwind },
      { name: 'React', image: react },
    ],
    'Back End': [
      { name: 'PHP', image: php },
      { name: 'Laravel', image: laravel },
      { name: '.NET', image: dotnet },
      { name: 'CodeIgniter', image: codeigniter },
    ],
    'CMS': [
      { name: 'Wordpress', image: wordpress },
      { name: 'Shopify', image: shopify },
      { name: 'Magento', image: magento },
      { name: 'Drupal', image: drupal },
      { name: 'Joomla', image: joomla },
    ],
    'Mobile App': [
      { name: 'Android', image: android },
      { name: 'iOS', image: ios },
      { name: 'Flutter', image: flutter },
      { name: 'React Native', image: reactnative },
    ],
    'DevOps/Cloud': [
      { name: 'AWS', image: aws },
      { name: 'Docker', image: docker },
      { name: 'Kubernetes', image: kubernetes },
      { name: 'Linux', image: linux },
      { name: 'Git', image: git },
      { name: 'GitHub', image: github },
      { name: 'Jenkins', image: jenkins },
      { name: 'Google Cloud', image: googlecloud },
    ],
    'Tools': [
      { name: 'VS Code', image: vscode },
      { name: 'Sublime', image: sublime },
      { name: 'Postman', image: postman },
      { name: 'Canva', image: canva },
      { name: 'Figma', image: figma },
      { name: 'Adobe PhotoShop', image: adobephotoshop },
      { name: 'Adobe XD', image: adobexd },
      { name: 'Adobe Illustrator', image: adobeillustrator },
      { name: 'After Effects', image: aftereffects },
      { name: 'Jira', image: jira },
      { name: 'Trello', image: trello },
      { name: 'Google Analytics', image: googleanalytics },
      { name: 'Google Search Console', image: googlesearchconsole },
      { name: 'Google Tag Manager', image: googletagmanager },
      { name: 'AHREF', image: ahref },
      { name: 'Deep Crawl', image: deepcrawl },
      { name: 'Moz', image: moz },
      { name: 'Search Matrics', image: searchmatrics },
      { name: 'Semrush', image: semrush },
      { name: 'Screaming Frog', image: screamingfrog },
      { name: 'Uber Suggest', image: ubersuggest },
    ]
  };

  return (
    <div ref={sectionRef} className="relative py-12 px-4 sm:px-6 lg:px-16" id="tech-stack">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Technology Stacks
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 mx-auto">
        {/* Sticky Sidebar (not fixed) */}
        <div className="w-full lg:w-80">
          <nav className="space-y-2 bg-white rounded-xl p-4 shadow-lg lg:sticky lg:top-8">
            {Object.keys(techData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full px-4 py-3 text-left rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-violet-700 to-violet-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-violet-50 hover:text-violet-700'
                } font-medium`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 mt-8 lg:mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {techData[selectedCategory].map((tech) => (
              <div
                key={tech.name}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-center text-sm md:text-base">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;