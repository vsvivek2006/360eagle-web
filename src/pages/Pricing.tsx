import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, Link2, Globe, Award, Rocket, Target, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet';

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Pricing = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentService, setPaymentService] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [originalAmount, setOriginalAmount] = useState(0);

  const RAZORPAY_KEY_ID = 'rzp_live_ROjWHHKbSiP7Al';

  // Payment Handler
  const handlePayment = async (amount: number, serviceName: string) => {
    try {
      const amountInPaise = Math.round(amount * 100);
      
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: amountInPaise,
        currency: 'INR',
        name: '360EagleWeb Backlink Services',
        description: `${serviceName} - Advance Payment`,
        handler: function(response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          window.location.href = `https://wa.me/919310533973?text=Payment Successful for ${serviceName}. Payment ID: ${response.razorpay_payment_id}`;
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '+919999999999'
        },
        notes: {
          service: serviceName
        },
        theme: {
          color: '#4F46E5'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Payment failed. Please try again or contact support.');
    }
  };

  const openPaymentModal = (serviceName: string, currentPrice: number, originalPrice: number) => {
    const discountedPrice = Math.floor(currentPrice * 0.95); // 5% extra discount
    setPaymentAmount(discountedPrice);
    setOriginalAmount(currentPrice);
    setPaymentService(serviceName);
    setIsPaymentOpen(true);
  };

  // Backlink Packages
  const backlinkPackages = [
    { 
      name: 'EAGLE DEMO', 
      price: '₹1', 
      originalPrice: '₹999',
      currentPrice: 1,
      backlinks: '10 Premium Backlinks',
      keywords: '1 Keyword & 1 URL',
      duration: '3 Working Days Delivery',
      description: 'Perfect for testing our service quality',
      popular: false,
      features: [
        '10 High-Quality Do-Follow Backlinks',
        'Premium Wiki Backlinks',
        'Social Bookmarking Links',
        '5 Authority Profile Links',
        '100% Google Algorithm Safe',
        'Fast Index Process',
        'Perfect for Service Quality Testing',
        'Quick 3-Day Delivery'
      ],
      badge: 'PERFECT FOR TESTING'
    },
    { 
      name: 'EAGLE START', 
      price: '₹299', 
      originalPrice: '₹999',
      currentPrice: 299,
      backlinks: '300 Premium Backlinks',
      keywords: '2 Keywords & 1 URL',
      duration: '7 Working Days Delivery',
      description: 'Ideal for new websites needing initial ranking boost',
      popular: false,
      features: [
        '300 Premium Quality Backlinks',
        'Quality Mixed Backlinks from Multiple Sources',
        'Do-Follow Backlinks Only',
        'Premium Wiki Backlinks',
        'Press Release Backlinks',
        'Web 2.0 Property Links',
        'Social Bookmarking Links',
        '30 Authority Profile Links',
        '40 Days Ping Back Service',
        'Submit to 1020+ Search Engines'
      ],
      badge: 'BEST FOR STARTERS'
    },
    { 
      name: 'EAGLE PRO', 
      price: '₹599', 
      originalPrice: '₹1,999',
      currentPrice: 599,
      backlinks: '750 Premium Backlinks',
      keywords: '2 Keywords & 2 URLs',
      duration: '7 Working Days Delivery',
      description: 'Most popular package for established websites',
      popular: true,
      features: [
        '750 Premium Quality Backlinks',
        'Mixed High-Quality Backlink Profile',
        'Do-Follow Backlinks',
        'Premium Wiki Backlinks',
        'Press Release Distribution',
        'Web 2.0 Property Links',
        'Social Bookmarking Services',
        'Authority Profile Links',
        'Super Fast Index Process',
        '40 Days Ping Back Service',
        'Submit to 1020+ Search Engines'
      ],
      badge: 'MOST POPULAR'
    },
    { 
      name: 'EAGLE BUSINESS', 
      price: '₹899', 
      originalPrice: '₹2,999',
      currentPrice: 899,
      backlinks: '1200 Premium Backlinks',
      keywords: '3 Keywords & 2 URLs',
      duration: '7 Working Days Delivery',
      description: 'Comprehensive package for business growth',
      popular: false,
      features: [
        '1200 Premium Quality Backlinks',
        'Diverse Backlink Portfolio',
        'Do-Follow Backlinks',
        'Premium Wiki Backlinks',
        'Press Release Campaigns',
        'Web 2.0 Property Networks',
        'Social Bookmarking Strategy',
        'Authority Profile Building',
        'Super Fast Index Process',
        '40 Days Ping Back Service',
        'Submit to 1020+ Search Engines'
      ],
      badge: 'BUSINESS GROWTH'
    }
  ];

  // Advanced SEO Packages
  const advancedPackages = [
    { 
      name: 'EAGLE ENTERPRISE', 
      price: '₹1,499', 
      originalPrice: '₹4,999',
      currentPrice: 1499,
      backlinks: '2000+ Premium Backlinks',
      keywords: '6 Keywords & 2 URLs',
      duration: '10 Working Days Delivery',
      description: 'Enterprise-level website authority building',
      popular: false,
      features: [
        '2000+ Premium Quality Backlinks',
        'Enterprise-Level Backlink Diversity',
        'Do-Follow Backlinks Strategy',
        'Premium Wiki Backlinks Network',
        'Professional Press Releases',
        'Web 2.0 Property Portfolio',
        'Social Bookmarking Campaign',
        'Authority Profile Network',
        'Super Fast Index Process',
        '40 Days Ping Back Service',
        'Submit to 1020+ Search Engines'
      ],
      badge: 'ENTERPRISE LEVEL'
    },
    { 
      name: 'EAGLE PREMIUM', 
      price: '₹2,999', 
      originalPrice: '₹9,999',
      currentPrice: 2999,
      backlinks: '5000+ Premium Backlinks',
      keywords: '10 Keywords & 5 URLs',
      duration: '10 Working Days Delivery',
      description: 'Dominating your industry search results',
      popular: true,
      features: [
        '5000+ Premium Quality Backlinks',
        'Comprehensive Backlink Ecosystem',
        'Do-Follow Backlinks Architecture',
        'Premium Wiki Backlinks Network',
        'Strategic Press Release Distribution',
        'Web 2.0 Property Network',
        'Social Bookmarking Strategy',
        'Authority Profile System',
        'Super Fast Index Process',
        '40 Days Ping Back Service',
        'Submit to 1020+ Search Engines'
      ],
      badge: 'INDUSTRY DOMINANCE'
    }
  ];

  // Specialized SEO Services
  const specializedServices = [
    { 
      name: 'Google Safe Backlink Audit', 
      price: '₹1,999', 
      originalPrice: '₹4,999',
      currentPrice: 1999,
      description: 'Professional audit of your existing backlink profile',
      features: [
        'Complete Backlink Profile Analysis',
        'Toxic Link Identification',
        'Google Penalty Risk Assessment',
        'Competitor Backlink Analysis',
        'Link Quality Scoring',
        'Disavow File Preparation',
        'Recovery Strategy Development',
        'White-hat Link Building Plan'
      ]
    },
    { 
      name: 'Content-Based Link Building', 
      price: '₹3,999', 
      originalPrice: '₹9,999',
      currentPrice: 3999,
      description: 'High-quality content creation for natural backlinks',
      features: [
        'SEO-Optimized Article Writing',
        'Guest Post Outreach & Placement',
        'Industry Blog Contributions',
        'Expert Roundup Participation',
        'Resource Page Link Building',
        'Broken Link Building',
        'Content Promotion Strategy'
      ]
    },
    { 
      name: 'Local SEO Backlinks', 
      price: '₹2,499', 
      originalPrice: '₹5,999',
      currentPrice: 2499,
      description: 'Local citation building for local businesses',
      features: [
        'Local Business Directory Submissions',
        'Google Business Profile Optimization',
        'Local Citation Building',
        'Geo-Targeted Backlink Strategy',
        'Local News Site Outreach',
        'Community Website Links',
        'Map Pack Optimization'
      ]
    },
    { 
      name: 'Technical SEO Audit', 
      price: '₹2,999', 
      originalPrice: '₹6,999',
      currentPrice: 2999,
      description: 'Comprehensive technical SEO analysis',
      features: [
        'Website Crawl Analysis',
        'Indexation Issues Identification',
        'Site Speed Optimization Review',
        'Mobile-Friendliness Audit',
        'Structured Data Implementation',
        'XML Sitemap Optimization',
        'Core Web Vitals Optimization'
      ]
    }
  ];

  // Monthly SEO Services
  const monthlyServices = [
    { 
      name: 'Monthly SEO Performance Tracking', 
      price: '₹2,999/month', 
      originalPrice: '₹6,999',
      currentPrice: 2999,
      duration: 'Minimum 3 months commitment',
      description: 'Ongoing SEO performance monitoring and optimization',
      popular: true,
      features: [
        'Monthly Ranking Reports',
        'Organic Traffic Analysis',
        'Backlink Growth Monitoring',
        'Competitor Performance Tracking',
        'Conversion Rate Optimization',
        'Technical SEO Health Checks',
        'Content Performance Analysis',
        'Google Algorithm Updates Monitoring',
        'Performance Recommendations',
        'Strategy Adjustments'
      ],
      badge: 'RECOMMENDED'
    },
    { 
      name: 'Keyword Research & Strategy', 
      price: '₹1,999/month', 
      originalPrice: '₹4,999',
      currentPrice: 1999,
      duration: 'Monthly service',
      description: 'Continuous keyword research and targeting strategy',
      popular: false,
      features: [
        'Competitor Keyword Analysis',
        'Search Volume & Difficulty Analysis',
        'Long-tail Keyword Identification',
        'Buyer Intent Keyword Mapping',
        'Seasonal Keyword Planning',
        'Local Keyword Research',
        'Keyword Gap Analysis',
        'Content Opportunity Identification'
      ],
      badge: 'STRATEGIC'
    }
  ];

  // Add-ons & Extra Services
  const addOns = [
    { 
      name: 'Extra URL Targeting', 
      price: '₹199/URL', 
      currentPrice: 199,
      description: 'Additional URL targeting in your package',
      category: 'targeting'
    },
    { 
      name: 'Extra Keyword Optimization', 
      price: '₹99/keyword', 
      currentPrice: 99,
      description: 'Additional keyword optimization',
      category: 'keywords'
    },
    { 
      name: 'Priority Delivery', 
      price: '₹499', 
      currentPrice: 499,
      description: 'Get your order delivered in 3 days instead of 7',
      category: 'delivery'
    },
    { 
      name: 'Free SEO Consultation', 
      price: '₹999', 
      currentPrice: 10,
      description: '30-min Professional SEO & Backlink Consultation',
      category: 'consultation',
    }
  ];

  const calculateDiscount = (currentPrice: number, originalPrice: number) => {
    return Math.round((1 - currentPrice / originalPrice) * 100);
  };

  return (
    <div>
      <Helmet>
        <title>Backlink Services Pricing | Premium Packages from ₹1 - 360EagleWeb</title>
        <meta
          name="description"
          content="Affordable backlink packages: EAGLE DEMO ₹1, EAGLE START ₹299, EAGLE PRO ₹599. Premium dofollow backlinks with 70% OFF + 5% Extra on Advance Payment."
        />
        <meta 
          name="keywords" 
          content="backlink pricing, SEO packages cost, dofollow backlinks price, affordable backlinks, premium backlink services, 360EagleWeb pricing"
        />
        <link rel="canonical" href="https://360eagleweb.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-bold mb-8 animate-bounce">
              🦅 Premium Backlink Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Backlink Services <span className="text-yellow-400">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Premium Dofollow Backlink Packages at 70% OFF + 5% Extra on Advance Payment
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>70% Discount on All Packages</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>5% Extra OFF on Advance Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>100% Google Safe Techniques</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backlink Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Backlink Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the Perfect Package for Your Website's Needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {backlinkPackages.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                service.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200'
              } transition-all duration-300`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{service.badge}</span>
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-1">{service.backlinks}</p>
                  <p className="text-gray-600 text-xs mb-3">{service.keywords}</p>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  <div className="mb-6 text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
                    <div className="mt-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                      </span>
                    </div>
                    {service.currentPrice > 1 && (
                      <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Advance: ₹{Math.floor(service.currentPrice * 0.95).toLocaleString()} (5% OFF)
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    {service.currentPrice > 1 ? (
                      <button
                        onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                        className={`w-full py-2 px-4 rounded-lg font-semibold transition-all block text-center text-sm ${
                          service.popular
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-blue-900'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        💳 Pay Advance - Save 5%
                      </button>
                    ) : (
                      <button
                        onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all block text-center text-sm"
                      >
                        🚀 Try Demo - ₹1 Only
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced SEO Packages
            </h2>
            <p className="text-xl text-gray-600">
              High-Volume Backlink Packages for Maximum Impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedPackages.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                service.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200'
              } transition-all duration-300`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{service.badge}</span>
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-1">{service.backlinks}</p>
                  <p className="text-gray-600 mb-4">{service.keywords}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6 text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
                    <div className="mt-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                      </span>
                    </div>
                    <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Advance: ₹{Math.floor(service.currentPrice * 0.95).toLocaleString()} (5% OFF)
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <button
                      onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all block text-center ${
                        service.popular
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-blue-900'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      💳 Pay Advance - Save 5%
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized SEO Services
            </h2>
            <p className="text-xl text-gray-600">
              Targeted SEO Solutions for Specific Requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  {service.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                  </div>
                </div>
                
                <div className="space-y-2">
                  <button
                    onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center"
                  >
                    💳 Pay Advance - Save 5%
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Monthly SEO Services
            </h2>
            <p className="text-xl text-gray-600">
              Ongoing SEO Management and Performance Tracking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monthlyServices.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                service.popular ? 'border-yellow-400' : 'border-gray-200'
              } hover:shadow-xl transition-shadow`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                      {service.badge}
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    <div className="ml-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <button
                      onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all block text-center ${
                        service.popular
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-blue-900'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      💳 Pay Advance - Save 5%
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhance Your Package with These Additional Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className={`bg-gray-50 p-6 rounded-xl border-2 ${
                addon.name === 'Free SEO Consultation' ? 'border-green-300 bg-green-50' : 'border-gray-200'
              } hover:border-blue-300 transition-colors`}>
                {addon.name === 'Free SEO Consultation' && (
                  <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                    🎯 FREE CONSULTATION
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-600">{addon.price}</span>
                </div>

                <div className="space-y-2">
                  {addon.name === 'Free SEO Consultation' ? (
                    <button
                      onClick={() => openPaymentModal(addon.name, addon.currentPrice, 999)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center text-sm"
                    >
                      💳 Pay ₹10 & Schedule
                    </button>
                  ) : (
                    <button
                      onClick={() => openPaymentModal(addon.name, addon.currentPrice, addon.currentPrice * 2)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center text-sm"
                    >
                      💳 Pay Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get Premium Backlink Services at 70% OFF + 5% Extra on Advance Payment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openPaymentModal('EAGLE PRO Package', 599, 1999)}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💳 Get Started with EAGLE PRO</span>
            </button>
            <button
              onClick={() => openPaymentModal('EAGLE DEMO Package', 1, 999)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>🚀 Try Demo for ₹1</span>
            </button>
          </div>
          <p className="text-blue-200 mt-8 text-lg">
            🚀 Limited Time Offer - Book Your Package Today!
          </p>
        </div>
      </section>

      {/* Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Payment</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-semibold">{paymentService}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Original Price:</span>
                <span className="text-gray-400 line-through">₹{originalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Advance Payment (5% OFF):</span>
                <span className="text-green-600 font-bold">₹{paymentAmount.toLocaleString()}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total to Pay:</span>
                  <span className="text-blue-600">₹{paymentAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setIsPaymentOpen(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsPaymentOpen(false);
                  handlePayment(paymentAmount, paymentService);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                💳 Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;