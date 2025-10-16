import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  const [quantities, setQuantities] = useState({
    blogBacklinks: 50,
    socialBookmarks: 100,
    wikiBacklinks: 100,
    mozDA25: 1,
    mozDA35: 1,
    mozDA40: 1,
    ahrefsDR25: 1,
    ahrefsDR35: 1,
    ahrefsDR40: 1,
    gmbSetup: 1,
    gmbRanking: 1,
    landingPage: 1,
    website4Page: 1
  });

  // WhatsApp Order Function
  const placeOrder = (serviceName, price, quantity = 1) => {
    const totalPrice = typeof price === 'number' ? price * quantity : price;
    const message = `🦅 360EagleWeb - New Order\n\nService: ${serviceName}\nQuantity: ${quantity}\nTotal Price: ${totalPrice}\n\nI want to order this service. Please proceed.`;
    const whatsappUrl = `https://wa.me/919310533973?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Quantity handlers
  const increaseQuantity = (service) => {
    setQuantities(prev => ({
      ...prev,
      [service]: prev[service] + 1
    }));
  };

  const decreaseQuantity = (service) => {
    setQuantities(prev => ({
      ...prev,
      [service]: Math.max(1, prev[service] - 1)
    }));
  };

  // Moz DA PA Packages
  const mozPackages = [
    {
      id: 'mozDA25',
      name: "Moz DA 25+",
      price: 699,
      originalPrice: 1499,
      description: "Increase your Domain Authority to 25+",
      features: [
        "DA Boost to 25+",
        "High Quality Backlinks",
        "Authority Site Links",
        "Natural Link Profile",
        "30 Days Completion",
        "Detailed Report"
      ],
      popular: false
    },
    {
      id: 'mozDA35',
      name: "Moz DA 35+",
      price: 799,
      originalPrice: 1999,
      description: "Boost Domain Authority to 35+",
      features: [
        "DA Boost to 35+",
        "Premium Quality Links",
        "Authority .edu/.gov Links",
        "Natural Growth Pattern",
        "45 Days Completion",
        "White-hat Techniques"
      ],
      popular: true
    },
    {
      id: 'mozDA40',
      name: "Moz DA 40+",
      price: 899,
      originalPrice: 2499,
      description: "Achieve 40+ Domain Authority",
      features: [
        "DA Boost to 40+",
        "Ultra Premium Links",
        "High Authority Networks",
        "Natural Anchor Text",
        "60 Days Completion",
        "Priority Support"
      ],
      popular: false
    }
  ];

  // Ahrefs DR Packages
  const ahrefsPackages = [
    {
      id: 'ahrefsDR25',
      name: "Ahrefs DR 25+",
      price: 999,
      originalPrice: 2499,
      description: "Increase Domain Rating to 25+",
      features: [
        "DR Boost to 25+",
        "Quality Referring Domains",
        "Natural Link Velocity",
        "Dofollow Links",
        "30 Days Completion",
        "Detailed Analytics"
      ],
      popular: false
    },
    {
      id: 'ahrefsDR35',
      name: "Ahrefs DR 35+",
      price: 1499,
      originalPrice: 3999,
      description: "Boost Domain Rating to 35+",
      features: [
        "DR Boost to 35+",
        "Premium Referring Domains",
        "Authority Site Links",
        "Natural Growth",
        "45 Days Completion",
        "White-hat Strategy"
      ],
      popular: true
    },
    {
      id: 'ahrefsDR40',
      name: "Ahrefs DR 40+",
      price: 1999,
      originalPrice: 4999,
      description: "Achieve 40+ Domain Rating",
      features: [
        "DR Boost to 40+",
        "Ultra Premium Domains",
        "High DR Network Links",
        "Natural Pattern",
        "60 Days Completion",
        "Priority Implementation"
      ],
      popular: false
    }
  ];

  // Backlink Services
  const backlinkServices = [
    {
      id: 'blogBacklinks',
      name: "Blog 2.0 Backlinks",
      pricePerUnit: 2,
      minOrder: 50,
      unit: "links",
      description: "High-quality blog comment backlinks",
      features: [
        "DoFollow Blog Comments",
        "High DA/PA Sites",
        "Relevant Niche Blogs",
        "Natural Anchor Text",
        "Manual Submission",
        "7 Days Delivery"
      ]
    },
    {
      id: 'socialBookmarks',
      name: "Social Bookmarking",
      pricePerUnit: 1,
      minOrder: 100,
      unit: "links",
      description: "Social bookmarking backlinks",
      features: [
        "Social Bookmark Sites",
        "High Authority Platforms",
        "Instant Indexing",
        "Dofollow Links",
        "Bulk Submission",
        "3 Days Delivery"
      ]
    },
    {
      id: 'wikiBacklinks',
      name: "Wiki Backlinks",
      pricePerUnit: 2,
      minOrder: 100,
      unit: "links",
      description: "Wikipedia-style backlinks",
      features: [
        "Wiki Site Backlinks",
        "High Trust Flow",
        "Editorial Links",
        "Natural Context",
        "Manual Placement",
        "5 Days Delivery"
      ]
    }
  ];

  // GMB Services
  const gmbServices = [
    {
      id: 'gmbSetup',
      name: "GMB Profile Setup",
      price: 2500,
      description: "Complete Google My Business profile setup",
      features: [
        "Business Profile Creation",
        "Category Optimization",
        "Business Description",
        "Photo Optimization",
        "Contact Details Setup",
        "Business Hours Setup",
        "Products/Services Listing",
        "Initial Review Setup"
      ]
    },
    {
      id: 'gmbRanking',
      name: "GMB Ranking",
      price: 5000,
      description: "Monthly GMB ranking and optimization",
      features: [
        "Local SEO Optimization",
        "Citation Building",
        "Review Management",
        "Regular Posts Updates",
        "Photo Updates",
        "Q&A Management",
        "Performance Tracking",
        "Monthly Report"
      ]
    }
  ];

  // Website Services
  const websiteServices = [
    {
      id: 'landingPage',
      name: "Landing Page",
      price: 2000,
      description: "Single high-converting landing page",
      features: [
        "Custom Design",
        "Mobile Responsive",
        "SEO Optimized",
        "Contact Form",
        "Social Media Integration",
        "Basic SEO Setup",
        "1 Page Delivery",
        "3 Days Completion"
      ]
    },
    {
      id: 'website4Page',
      name: "4-5 Page Website",
      price: 5000,
      description: "Complete business website with 4-5 pages",
      features: [
        "4-5 Custom Pages",
        "Mobile Responsive Design",
        "SEO Optimized",
        "Contact Forms",
        "Social Media Integration",
        "Basic SEO Setup",
        "Google Analytics",
        "7 Days Completion"
      ]
    }
  ];

  // Stats
  const stats = [
    { number: "1500+", label: "Happy Clients", icon: "😊" },
    { number: "98%", label: "Success Rate", icon: "📈" },
    { number: "24/7", label: "Customer Support", icon: "🛡️" },
    { number: "100%", label: "White-hat SEO", icon: "✅" }
  ];

  // Calculate total price for backlink services
  const calculateBacklinkPrice = (service) => {
    const quantity = quantities[service.id];
    return quantity * service.pricePerUnit;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Helmet>
        <title>SEO Services Pricing | Moz DA, Ahrefs DR, Backlinks - 360EagleWeb</title>
        <meta 
          name="description" 
          content="Affordable SEO services: Moz DA increase from ₹699, Ahrefs DR boost from ₹999, Backlinks from ₹1. GMB setup ₹2500, Websites from ₹2000."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-bold mb-8 animate-bounce">
            🦅 Premium SEO Services
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Affordable <span className="text-yellow-400">SEO Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Premium SEO Services at Unbeatable Prices. Boost Your Rankings Today!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[140px]">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backlink Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🔗 PREMIUM BACKLINKS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Buy Quality Backlinks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Affordable backlink packages - Increase quantity to get more links!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {backlinkServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{service.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{service.description}</p>
                  
                  {/* Quantity Controls */}
                  <div className="bg-purple-100 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-purple-800">Quantity ({service.unit}):</span>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => decreaseQuantity(service.id)}
                          className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-lg font-bold text-purple-700 w-8 text-center">
                          {quantities[service.id]}
                        </span>
                        <button
                          onClick={() => increaseQuantity(service.id)}
                          className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-purple-700 mb-1">
                        ₹{service.pricePerUnit} per {service.unit}
                      </div>
                      <div className="text-2xl font-bold text-purple-600">
                        ₹{calculateBacklinkPrice(service).toLocaleString()}
                      </div>
                      <div className="text-sm text-purple-600 mt-1">
                        {quantities[service.id]} {service.unit} × ₹{service.pricePerUnit}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => placeOrder(service.name, calculateBacklinkPrice(service), quantities[service.id])}
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    🔗 Order {quantities[service.id]} {service.unit} - ₹{calculateBacklinkPrice(service).toLocaleString()}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moz DA PA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🔥 MOZ DOMAIN AUTHORITY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Increase Moz DA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Boost your website's Domain Authority with our premium link building services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mozPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`relative bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border-2 ${
                  pkg.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-blue-200'
                } transition-all duration-300 hover:shadow-2xl`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>MOST POPULAR</span>
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{pkg.name}</h3>
                  <p className="text-gray-600 text-center mb-6">{pkg.description}</p>
                  
                  {/* Quantity Controls for Moz */}
                  <div className="flex items-center justify-center mb-6 space-x-4">
                    <span className="text-sm font-medium text-gray-700">Quantity:</span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => decreaseQuantity(pkg.id)}
                        className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-lg font-bold text-blue-700 w-8 text-center">
                        {quantities[pkg.id]}
                      </span>
                      <button
                        onClick={() => increaseQuantity(pkg.id)}
                        className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold text-blue-600">
                        ₹{(pkg.price * quantities[pkg.id]).toLocaleString()}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ₹{(pkg.originalPrice * quantities[pkg.id]).toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                      </span>
                    </div>
                    {quantities[pkg.id] > 1 && (
                      <div className="text-sm text-blue-600 mt-2">
                        {quantities[pkg.id]} packages × ₹{pkg.price}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => placeOrder(pkg.name, pkg.price * quantities[pkg.id], quantities[pkg.id])}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                    }`}
                  >
                    🚀 Order {quantities[pkg.id] > 1 ? `${quantities[pkg.id]} Packages` : 'Now'} - ₹{(pkg.price * quantities[pkg.id]).toLocaleString()}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ahrefs DR Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              📈 AHREFS DOMAIN RATING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Increase Ahrefs DR
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Improve your Domain Rating with high-quality backlink campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ahrefsPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`relative bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl border-2 ${
                  pkg.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-green-200'
                } transition-all duration-300 hover:shadow-2xl`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>BEST VALUE</span>
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{pkg.name}</h3>
                  <p className="text-gray-600 text-center mb-6">{pkg.description}</p>
                  
                  {/* Quantity Controls for Ahrefs */}
                  <div className="flex items-center justify-center mb-6 space-x-4">
                    <span className="text-sm font-medium text-gray-700">Quantity:</span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => decreaseQuantity(pkg.id)}
                        className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-lg font-bold text-green-700 w-8 text-center">
                        {quantities[pkg.id]}
                      </span>
                      <button
                        onClick={() => increaseQuantity(pkg.id)}
                        className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold text-green-600">
                        ₹{(pkg.price * quantities[pkg.id]).toLocaleString()}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ₹{(pkg.originalPrice * quantities[pkg.id]).toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                      </span>
                    </div>
                    {quantities[pkg.id] > 1 && (
                      <div className="text-sm text-green-600 mt-2">
                        {quantities[pkg.id]} packages × ₹{pkg.price}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => placeOrder(pkg.name, pkg.price * quantities[pkg.id], quantities[pkg.id])}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900'
                        : 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white'
                    }`}
                  >
                    📈 Order {quantities[pkg.id] > 1 ? `${quantities[pkg.id]} Packages` : 'Now'} - ₹{(pkg.price * quantities[pkg.id]).toLocaleString()}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Sections (GMB & Website) - Similar pattern */}
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Online Presence?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get premium SEO services at unbeatable prices. Order now and see your rankings soar!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => placeOrder('Consultation', 'FREE')}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>📞 FREE Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <a
              href="https://wa.me/919310533973"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>💬 Chat on WhatsApp</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="flex justify-around items-center py-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-center space-y-1 text-blue-600"
          >
            <span className="text-lg">🏠</span>
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-600"
          >
            <span className="text-lg">🔍</span>
            <span className="text-xs font-medium">Search</span>
          </button>

          <button
            onClick={() => placeOrder('Blog Backlinks', calculateBacklinkPrice(backlinkServices[0]), quantities.blogBacklinks)}
            className="flex flex-col items-center space-y-1 text-green-600 hover:text-green-700 relative"
          >
            <span className="text-lg">🛒</span>
            <span className="text-xs font-medium">Add to Cart</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              ₹{calculateBacklinkPrice(backlinkServices[0])}
            </span>
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-600"
          >
            <span className="text-lg">💰</span>
            <span className="text-xs font-medium">Pricing</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;