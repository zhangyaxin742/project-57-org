import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/6faafe94-407c-4025-ad41-50e45f58bce3.png" 
                alt="Project 57 Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">PROJECT 57</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering Massachusetts youth with financial literacy education, 
              entrepreneurship skills, and advocacy training for a more financially inclusive future.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Project 57. All rights reserved.
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/legislative" className="hover:text-brand-orange transition-colors">Legislative Advocacy</a></li>
              <li><a href="/curriculum" className="hover:text-brand-orange transition-colors">PFin Curriculum</a></li>
              <li><a href="/enterprise" className="hover:text-brand-orange transition-colors">Youth Enterprise</a></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-white font-semibold mb-4">Organization</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="/get-involved" className="hover:text-brand-orange transition-colors">Get Involved</a></li>
              <li><a href="/contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Building financial futures, one student at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;