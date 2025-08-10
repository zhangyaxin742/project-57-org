import { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const location = useLocation();

  type DropdownItem = { name: string; path: string };
  type NavItem = { name: string; path: string; dropdown?: DropdownItem[] };

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Our Work',path: '/ourwork',
      dropdown: [ 
      { name: 'About',        path: '/ourwork#about' }]
    },
    { name: 'Get Involved', path: '/get-involved', 
    dropdown: [
      { name: 'Contact', path: '/contact'}]
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/transparent-logo.png" 
              alt="Project 57" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold bg-sunset-gradient bg-clip-text text-transparent">
              Project 57
            </span>
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className = "relative group"
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen('')}
                  >
                     <HashLink
    smooth
    to="/ourwork#top" // make sure you have <section id="top" /> at the top of OurWork
    className="flex items-center space-x-1 text-white hover:text-sunset-pink transition-colors"
    onClick={() => setDropdownOpen('')} // optional: close dropdown on click
  >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </HashLink>
                    {dropdownOpen === item.name && (
                   <div
          className="
            absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md 
            rounded-lg border border-white/10 shadow-lg animate-fade-in
            before:content-[''] before:absolute before:top-[-8px] before:left-0 before:w-full before:h-8
          "
        >
                        {item.dropdown.map(subItem => (
                          <HashLink
                            key={subItem.name}
                            smooth
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-white hover:text-sunset-pink hover:bg-white/5 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {subItem.name}
                          </HashLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <RouterLink
                    to={item.path}
                    className={`text-white hover:text-sunset-pink transition-colors ${
                      location.pathname === item.path ? 'text-sunset-pink' : ''
                    }`}
                  >
                    {item.name}
                  </RouterLink>
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
              {navItems.map(item => (
                <div key={item.name} className = "relative">
                  {item.dropdown ? (
                    <>
 <HashLink
    smooth
    to="/ourwork#top" // make sure you have <section id="top" /> at the top of OurWork
    className="flex items-center space-x-1 text-white hover:text-sunset-pink transition-colors"
    onClick={() => setDropdownOpen('')} // optional: close dropdown on click
  >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            dropdownOpen === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </HashLink>
                      {dropdownOpen === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map(subItem => (
                            <HashLink
                              key={subItem.name}
                              smooth
                              to={subItem.path}
                              className="block px-3 py-2 text-sm text-white hover:text-sunset-pink transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </HashLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <RouterLink
                      to={item.path}
                      className={`block px-3 py-2 text-white hover:text-sunset-pink transition-colors ${
                        location.pathname === item.path ? 'text-sunset-pink' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </RouterLink>
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