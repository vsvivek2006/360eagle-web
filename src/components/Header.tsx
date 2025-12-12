import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Search, ArrowUp } from "lucide-react";

// --- Configuration ---
// Backlinks.live Report URL (Path Variable format)
const BACKLINKS_BASE_URL = 'https://backlinks.live/report/'; 
// **********************************************

type NavItem = { name: string; href: string };
const primaryNav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Backlinks Report State (Pop-up open state)
  const [reportOpen, setReportOpen] = useState<boolean>(false);
  const [domain, setDomain] = useState("");
  
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${linkBase} bg-purple-600 text-white shadow-md`
      : `${linkBase} text-gray-700 hover:bg-purple-50 hover:text-purple-600`;

    // Handle Redirection to Backlinks.live/report/[DOMAIN]
    const handleBacklinkRedirect = () => {
        if (!domain) {
            alert("कृपया एक डोमेन नाम दर्ज करें।");
            return;
        }

        // Clean domain (remove http/https/www) and encode for URL path
        const validDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '').trim();
        
        // Construct the final URL: https://backlinks.live/report/example.com
        const redirectUrl = `${BACKLINKS_BASE_URL}${encodeURIComponent(validDomain)}`; 
        
        // Open in a new tab
        window.open(redirectUrl, "_blank");
        
        // Close the local popup and reset domain
        setReportOpen(false);
        setDomain('');
    };


  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo and Name */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center space-x-2 md:space-x-4 hover:scale-105 transition-transform duration-200"
                aria-label="360EagleWeb Home"
              >
                <div className="flex-shrink-0">
                  <img
                    src="/logo.svg"
                    alt="360EagleWeb Logo"
                    className="h-12 w-12 md:h-16 md:w-16 object-contain"
                    style={{ filter: "invert(0)" }} 
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span
                    className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-900 bg-clip-text text-transparent"
                    style={{ fontFamily: '"Haboro Serif", serif', letterSpacing: "-0.05em" }}
                  >

                  </span>
                  <span
                    className="hidden sm:block text-xs text-gray-500 -mt-1 tracking-wider"
                    style={{ fontFamily: '"Haboro Serif", serif' }}
                  >
                    
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {primaryNav.map((item) => (
                <NavLink key={item.name} to={item.href} className={navClass} end={item.href === "/"}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            
            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Check Backlinks Report CTA (Opens local modal which then redirects) */}
              <button
                onClick={() => { setReportOpen(true); setDomain(''); }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-[1.03] shadow-md flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                <span>Check Backlinks Report</span>
              </button>
              
              {/* Order Now CTA (Price ₹199) */}
              <NavLink
                to="/services"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 px-4 py-2 rounded-lg font-extrabold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg flex items-center gap-2 border border-yellow-700"
              >
                <span>🦅</span>
                <span>Order Now - ₹199</span>
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden animate-in fade-in-50 slide-in-from-top-5 duration-200">
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-xl">
                {primaryNav.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive ? "bg-purple-600 text-white shadow-md" : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* Mobile CTAs */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  {/* Mobile Check Backlinks Report CTA */}
                  <button
                    onClick={() => { setReportOpen(true); setIsOpen(false); setDomain(''); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Check Backlinks Report
                  </button>
                  
                  {/* Mobile Order Now CTA (Price ₹199) */}
                  <NavLink
                    to="/services"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 px-4 py-3 rounded-lg font-extrabold transition-all duration-200 text-center flex items-center justify-center gap-2 border border-yellow-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>🦅</span>
                    Order Now - ₹199
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Backlinks Report Popup (Redirects) */}
      {reportOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-xl relative animate-in fade-in zoom-in-90 duration-300">
            <button
              onClick={() => setReportOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Check Backlinks Report</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
                यह रिपोर्ट देखने के लिए, कृपया Backlinks.live की वेबसाइट पर जारी रखें।
            </p>
            
            {/* Domain Input */}
            <input
              type="text"
              placeholder="Enter Domain (e.g., example.com)"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            {/* Redirect Button */}
            <button
              onClick={handleBacklinkRedirect}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 hover:shadow-lg"
            >
              <Search className="h-5 w-5" />
              Continue to Backlinks.live Report
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
