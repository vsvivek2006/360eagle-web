import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Home, ArrowLeft, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* ✅ SEO Component */}
      <Helmet>
        <title>404 - Page Not Found | DiziGrow</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Explore DiziGrow services or go back to the homepage."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://dizigrow.com/404" />

        {/* Open Graph */}
        <meta property="og:title" content="404 - Page Not Found | DiziGrow" />
        <meta property="og:description" content="Oops! The page you're looking for doesn't exist. Explore our services or go back to homepage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dizigrow.com/404" />
        <meta property="og:image" content="https://dizigrow.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | DiziGrow" />
        <meta name="twitter:description" content="The page you are looking for is missing. Go back or explore DiziGrow services." />
        <meta name="twitter:image" content="https://dizigrow.com/og-image.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "404 - Page Not Found",
            "url": "https://dizigrow.com/404",
            "description": "Oops! The page you're looking for doesn't exist. Explore DiziGrow services or homepage."
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">404</h1>
          <p className="mt-3 text-xl text-purple-100">Oops! The page you’re looking for doesn’t exist.</p>
          <p className="text-purple-200 text-sm mt-1">It may have been moved, renamed, or removed.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 transition-colors"
            >
              <Home className="h-5 w-5" />
              Go to Homepage
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              View FAQ
            </Link>
          </div>

          {/* Optional: search hint */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <Search className="h-5 w-5 text-gray-400" />
              <span className="text-gray-500 text-sm">
                Tip: Use the main navigation to find Services, Portfolio, Pricing, or Contact.
              </span>
            </div>
          </div>

          {/* Suggested links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/services"
              className="block rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900">Explore Services</h3>
              <p className="text-sm text-gray-600 mt-1">Branding, marketing, web development</p>
            </Link>
            <Link
              to="/portfolio"
              className="block rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900">See Our Work</h3>
              <p className="text-sm text-gray-600 mt-1">Recent projects & case studies</p>
            </Link>
            <Link
              to="/pricing"
              className="block rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900">View Pricing</h3>
              <p className="text-sm text-gray-600 mt-1">Packages crafted for growth</p>
            </Link>
            <Link
              to="/contact"
              className="block rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900">Contact Us</h3>
              <p className="text-sm text-gray-600 mt-1">We’ll help you find the right page</p>
            </Link>
          </div>

          {/* Help strip */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919521281509"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-purple-700"
            >
              <Phone className="h-5 w-5" />
              +91 9521281509
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20need%20help%20finding%20a%20page."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
