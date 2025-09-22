import { ChevronDown, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activePage, setActivePage] = useState('Home');

  // Handle scroll effect for navbar shrinking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle dropdown toggles
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  // Navigation items
  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { 
      name: 'Courses', 
      href: '#courses',
      dropdown: [
        { name: 'Undergraduate Programs', href: '#undergraduate' },
        { name: 'Graduate Programs', href: '#graduate' },
        { name: 'Online Courses', href: '#online' },
        { name: 'Professional Development', href: '#professional' },
        { name: 'Continuing Education', href: '#continuing' },
        { name: 'Summer Programs', href: '#summer' }
      ]
    },
    { 
      name: 'Admissions', 
      href: '#admissions',
      dropdown: [
        { name: 'Apply Now', href: '#apply' },
        { name: 'Admission Requirements', href: '#requirements' },
        { name: 'Financial Aid', href: '#financial-aid' },
        { name: 'Scholarships', href: '#scholarships' },
        { name: 'Campus Tours', href: '#tours' }
      ]
    },
    { name: 'Student Life', href: '#student-life' },
    { name: 'Contact', href: '#contact' }
  ];

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`flex-shrink-0 transition-all duration-300 ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}>
              <img 
                src="/logo.jpg" 
                alt="Unique College" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-14 w-auto' : 'h-18 w-auto'
                }`}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.dropdown) {
                        toggleDropdown(item.name);
                      } else {
                        handlePageClick(item.name);
                      }
                    }}
                    className={`relative text-dark-gray hover:text-secondary-blue transition-colors duration-200 font-medium py-2 px-1 cursor-pointer ${
                      activePage === item.name ? 'text-secondary-blue' : ''
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={`ml-1 inline-block w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? '-rotate-90' : ''
                        }`}/>
                    )}
                    {/* Active page underline */}
                    {activePage === item.name && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-blue"></div>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md border border-gray-200 min-w-64 z-10">
                      {item.name === 'Courses' ? (
                        // Mega menu for Courses
                        <div className="grid grid-cols-2 gap-4 p-6">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block p-3 rounded-md hover:bg-light-gray transition-colors duration-200"
                              onClick={() => handlePageClick(dropdownItem.name)}
                            >
                              <div className="font-medium text-dark-gray">{dropdownItem.name}</div>
                            </a>
                          ))}
                        </div>
                      ) : (
                        // Regular dropdown for Admissions
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-dark-gray hover:bg-light-gray hover:text-secondary-blue transition-colors duration-200"
                              onClick={() => handlePageClick(dropdownItem.name)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-dark-gray hover:text-secondary-blue focus:outline-none focus:text-secondary-blue transition-colors duration-200"
              >
                  {isMobileMenuOpen ? 
                    <X className="h-6 w-6" />
                   : 
                    <Menu className={`transition-all duration-300 ${
              isScrolled ? 'h-6 w-6' : 'h-8 w-8'
             }`} />
                  }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Slide-in Menu */}
        <div className={`lg:hidden fixed inset-y-0 right-0 w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <X className={`absolute h-6 w-6 ${
                  isScrolled ? 'right-4 top-6' : 'right-5 top-9'
                } `} onClick={toggleMobileMenu} />
          <div className="flex flex-col h-full py-20 overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.dropdown) {
                      toggleDropdown(item.name);
                    } else {
                      handlePageClick(item.name);
                    }
                  }}
                  className={`w-full text-left px-6 py-4 text-lg font-medium transition-colors duration-200 flex items-center justify-between ${
                    activePage === item.name 
                      ? 'text-secondary-blue bg-light-gray border-r-4 border-secondary-blue' 
                      : 'text-dark-gray hover:text-secondary-blue hover:bg-light-gray'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                      <ChevronDown
                        className={`ml-1 inline-block w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? '-rotate-90' : ''
                        }`}/>
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="bg-light-gray">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-10 py-3 text-dark-gray hover:text-secondary-blue transition-colors duration-200"
                        onClick={() => handlePageClick(dropdownItem.name)}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {/* {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleMobileMenu}
          ></div>
        )} */}
      </nav>


      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}></div>
    </>
  );
};

export default Navbar;
