import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

// --- Configuration ---
// Backlinks.live Report URL (Path Variable format)
const BACKLINKS_BASE_URL = 'https://backlinks.live/report/'; 
// **********************************************

const WhatsAppFloat: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [domain, setDomain] = useState(''); // State for the domain input

    // Handle Redirection to Backlinks.live/report/[DOMAIN]
    const handleBacklinkRedirect = () => {
        if (!domain) {
            alert("कृपया एक डोमेन नाम दर्ज करें।");
            return;
        }

        // Clean domain (remove http/https/www) and encode for URL path
        const validDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '').trim();
        
        if (validDomain.length === 0) {
            alert("कृपया एक वैध डोमेन दर्ज करें।");
            return;
        }

        // Construct the final URL: https://backlinks.live/report/example.com
        const redirectUrl = `${BACKLINKS_BASE_URL}${encodeURIComponent(validDomain)}`; 
        
        // Open in a new tab
        window.open(redirectUrl, "_blank");
        
        // Close the local popup and reset domain
        setOpen(false);
        setDomain('');
    };
    
    // Function to handle popup close and reset states
    const handleClosePopup = () => {
        setOpen(false);
        setDomain('');
    };

  return (
    <>
      {/* Floating Backlink Check Button */}
      <button
        onClick={() => setOpen(true)}
        // Button placed at bottom-right
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 animate-pulse flex items-center gap-2"
        aria-label="Check Backlinks Report"
      >
        <Search className="h-6 w-6" />
        <span className="hidden md:inline font-medium text-sm">Check Your Backlinks Report</span>
      </button>

      {/* Popup Form (for Domain Input and Redirect) */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-xl relative animate-in fade-in zoom-in-90 duration-300">
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Check Backlinks Report</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
                डोमेन दर्ज करें और Backlinks.live पर रिपोर्ट देखें।
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

export default WhatsAppFloat;
