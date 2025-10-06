import { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ChevronDown, Menu, X } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle'; // <-- match actual filename/casing

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const location = useLocation();

  type DropdownItem = { name: string; path: string };
  type NavItem = { name: string; path: string; dropdown?: DropdownItem[] };

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Our Work', path: '/ourwork',
      dropdown: [
        { name: 'About', path: '/ourwork#about' },
        { name: 'Media', path: '/media' },
      ],
    },
    {
      name: 'Get Involved', path: '/get-involved',
      dropdown: [
        { name: 'Contact', path: '/contact' },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center space-x-3">
            <img src="/assets/transparent-logo.png" alt="Project 57" className="h-10 w-10" />
            <span className="bg-sunset-gradient bg-clip-text text-xl font-bold text-transparent">
              Project 57
            </span>
          </RouterLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center">
            {/* Links (Home + 2 dropdowns) */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setDropdownOpen(item.name)}
                      onMouseLeave={() => setDropdownOpen('')}
                    >
                      <RouterLink
                        to={item.path}
                        className="flex items-center space-x-1 text-white transition-colors hover:text-sunset-pink"
                        onClick={() => setDropdownOpen('')}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </RouterLink>

                      {dropdownOpen === item.name && (
                        <div className="before:absolute before:top-[-8px] before:left-0 before:h-8 before:w-full absolute left-0 top-full mt-2 w-48 animate-fade-in rounded-lg border border-white/10 bg-black/95 backdrop-blur-md shadow-lg">
                          {item.dropdown.map((sub) => (
                            <HashLink
                              key={sub.name}
                              smooth
                              to={sub.path}
                              className="block px-4 py-3 text-sm text-white transition-colors hover:bg-white/5 hover:text-sunset-pink first:rounded-t-lg last:rounded-b-lg"
                            >
                              {sub.name}
                            </HashLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <RouterLink
                      to={item.path}
                      className={`text-white transition-colors hover:text-sunset-pink ${
                        location.pathname === item.path ? 'text-sunset-pink' : ''
                      }`}
                    >
                      {item.name}
                    </RouterLink>
                  )}
                </div>
              ))}
            </div>

            {/* Divider + Theme chip on the far right */}
            <div className="ml-6 pl-6 border-l border-white/10">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white transition-colors hover:text-sunset-pink"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile */}
        {isOpen && (
          <div className="md:hidden animate-fade-in border-b border-white/10 bg-black/95 backdrop-blur-md">
            <div className="px-4 py-4">
              <ThemeToggle />
            </div>
            <div className="space-y-1 px-2 pb-3">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <RouterLink
                        to={item.path}
                        className="flex items-center space-x-1 text-white transition-colors hover:text-sunset-pink"
                        onClick={() =>
                          setDropdownOpen(dropdownOpen === item.name ? '' : item.name)
                        }
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            dropdownOpen === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </RouterLink>
                      {dropdownOpen === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((sub) => (
                            <HashLink
                              key={sub.name}
                              smooth
                              to={sub.path}
                              className="block px-3 py-2 text-sm text-white transition-colors hover:text-sunset-pink"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </HashLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <RouterLink
                      to={item.path}
                      className={`block px-3 py-2 text-white transition-colors hover:text-sunset-pink ${
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
