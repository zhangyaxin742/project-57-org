import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/547a147a-e3fa-42bc-bc39-35e32865f4fc.png" 
                alt="Project 57" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Project 57</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Un-cooking financial futures, one student at a time. <br /> <br />
              <span className = "text-sm font-mono text-grey"> 
                            © 2025 PROJECT 57. ALL RIGHTS RESERVED. </span>
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Work</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/legislative" className="hover:text-brand-orange transition-colors">Advocacy</a></li>
              <li><a href="/curriculum" className="hover:text-brand-orange transition-colors">Curriculum</a></li>
              <li><a href="/enterprise" className="hover:text-brand-orange transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-white font-semibold mb-4">Organization</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-brand-orange transition-colors">About</a></li>
              <li><a href="/get-involved" className="hover:text-brand-orange transition-colors">Get Involved</a></li>
              <li><a href="/get-involved" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;