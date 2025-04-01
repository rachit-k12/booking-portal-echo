
import React from 'react';
import { Globe, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerLinks = [
    [
      { name: "Privacy", url: "#" },
      { name: "Terms", url: "#" },
      { name: "Sitemap", url: "#" },
      { name: "Destinations", url: "#" },
    ],
    [
      { name: "English (US)", url: "#" },
      { name: "₹ INR", url: "#" },
      { name: "Support & resources", url: "#" },
    ]
  ];
  
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks[0].map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                className="text-sm hover:underline transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            <a href="#" className="flex items-center text-sm font-medium transition-colors duration-200 hover:text-gray-800">
              <Globe className="h-4 w-4 mr-2" />
              English (US)
            </a>
            <a href="#" className="text-sm font-medium transition-colors duration-200 hover:text-gray-800">
              ₹ INR
            </a>
            <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium group">
              <span className="group-hover:underline transition-colors duration-200">Made with</span>
              <Heart className="h-3 w-3 mx-1 text-airbnb-red fill-airbnb-red" />
              <span className="group-hover:underline transition-colors duration-200">by Airbnb</span>
            </a>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Airbnb, Inc. ·
          <span className="text-xs ml-1">Clone created for demonstration purposes only</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
