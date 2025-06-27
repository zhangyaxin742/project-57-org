
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Our Work',
      dropdown: [
        { name: 'Curriculum', path: '/curriculum' },
        { name: 'Enterprise', path: '/enterprise' },
        { name: 'Advocacy', path: '/advocacy' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Get Involved', path: '/get-involved' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/547a147a-e3fa-42bc-bc39-35e32865f4fc.png" 
              alt="PROJECT 57" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold bg-sunset-gradient bg-clip-text text-transparent">
              Project 57
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen('')}
                  >
                    <button className="flex items-center space-x-1 text-white hover:text-sunset-pink transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {dropdownOpen === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg border border-white/10 shadow-lg animate-fade-in">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-white hover:text-sunset-pink hover:bg-white/5 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white hover:text-sunset-pink transition-colors ${
                      location.pathname === item.path ? 'text-sunset-pink' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-sunset-pink transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(dropdownOpen === item.name ? '' : item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-white hover:text-sunset-pink transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {dropdownOpen === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-3 py-2 text-sm text-white hover:text-sunset-pink transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 text-white hover:text-sunset-pink transition-colors ${
                        location.pathname === item.path ? 'text-sunset-pink' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
