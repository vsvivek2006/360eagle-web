import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// Razorpay utility functions
const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(true));
      existingScript.addEventListener('error', () => resolve(false));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    
    script.onload = () => {
      resolve(true);
    };
    
    script.onerror = () => {
      resolve(false);
    };
    
    document.body.appendChild(script);
  });
};

const formatAmount = (amount: number): number => {
  return Math.round(amount * 100);
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    website: "",
    keywords: ""
  });

  // ✅ FIXED: Use Vite environment variables
  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const WHATSAPP_NUMBER = "919310533973";

  // Hero Slides - Updated to remove ₹1 references
  const heroSlides = [
    {
      title: "Premium Backlink Services",
      subtitle: "Starting at Just ₹99",
      originalPrice: "₹999",
      description: "Buy High Quality DoFollow Backlinks with 70-90 DA, PA Wiki, Article Directories, Social Bookmarks & News Sites. Google Algorithm Safe Link Building for Higher Rankings.",
      badge: "🚀 LIMITED TIME OFFER",
      bgGradient: "from-blue-900 via-indigo-800 to-purple-700",
      cta: "View Packages"
    },
    {
      title: "Google Algorithm Safe Link Building",
      subtitle: "Rank #1 on Google",
      originalPrice: "₹2,999",
      description: "Backlinks have always been the big ticket item to jump your site up the rankings. We guarantee that your backlinks will be loved by Google and your site will quickly Reach Page One.",
      badge: "🛡️ Google Safe Backlinks",
      bgGradient: "from-emerald-900 via-teal-800 to-cyan-700",
      cta: "Get Ranking Now"
    },
    {
      title: "Higher Ranking Within 4 Weeks",
      subtitle: "270% Revenue Supercharge",
      originalPrice: "₹4,999",
      description: "100% Of Our Customers' Websites Get Higher Search Page Rankings Within 4 Weeks; this has led to a > 270% supercharge in Revenue.",
      badge: "📈 Proven Results",
      bgGradient: "from-violet-900 via-purple-800 to-fuchsia-700",
      cta: "Boost Rankings"
    }
  ];

  // Backlink Packages - REMOVED ₹1 PACKAGE, STARTING FROM ₹99
  const backlinkPackages = [
    {
      id: "300_backlinks",
      name: "EAGLE START",
      price: 99,
      displayPrice: "₹99",
      originalPrice: "₹999",
      backlinks: "300 Premium Backlinks",
      keywords: "SEO For 2 Keywords & 1 URL",
      features: [
        "300 Quality Mixed Backlinks",
        "Articles, Forum & Profile Links",
        "Do-Follow Backlinks",
        "Premium Wiki Backlinks",
        "Press Releases",
        "Web 2.0 Links",
        "Social Bookmarking",
        "30 Authority Profile Links",
        "Delivery Within 7 Working Days",
        "100% Google Safe",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submit To 1020+ Search Engines"
      ],
      popular: true,
      badge: "90% OFF",
      color: "from-green-500 to-emerald-500",
      icon: "🎯",
      bestFor: "Perfect for New Websites"
    },
    {
      id: "750_backlinks",
      name: "EAGLE PRO",
      price: 199,
      displayPrice: "₹199",
      originalPrice: "₹1,999",
      backlinks: "750 Premium Backlinks",
      keywords: "SEO For 2 Keywords & 2 URL",
      features: [
        "750 Quality Mixed Backlinks",
        "Articles, Forum & Profile Links",
        "Do-Follow Backlinks",
        "Premium Wiki Backlinks",
        "Press Releases",
        "Web 2.0 Links",
        "Social Bookmarking",
        "Authority Profile Links",
        "Delivery Within 7 Working Days",
        "100% Google Safe",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submit To 1020+ Search Engines",
        "Priority Support"
      ],
      popular: false,
      badge: "90% OFF",
      color: "from-purple-500 to-indigo-500",
      icon: "⚡",
      bestFor: "Growing Businesses"
    },
    {
      id: "1200_backlinks",
      name: "EAGLE BUSINESS",
      price: 299,
      displayPrice: "₹299",
      originalPrice: "₹2,999",
      backlinks: "1200 Premium Backlinks",
      keywords: "SEO For 3 Keywords & 2 URL",
      features: [
        "1200 Quality Mixed Backlinks",
        "Articles, Forum & Profile Links",
        "Do-Follow Backlinks",
        "Premium Wiki Backlinks",
        "Press Releases",
        "Web 2.0 Links",
        "Social Bookmarking",
        "Authority Profile Links",
        "Delivery Within 7 Working Days",
        "100% Google Safe",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submit To 1020+ Search Engines",
        "Priority Support",
        "Detailed Analytics Report"
      ],
      popular: false,
      badge: "90% OFF",
      color: "from-orange-500 to-red-500",
      icon: "🏆",
      bestFor: "Established Websites"
    },
    {
      id: "2000_backlinks",
      name: "EAGLE ENTERPRISE",
      price: 499,
      displayPrice: "₹499",
      originalPrice: "₹4,999",
      backlinks: "2000+ Premium Backlinks",
      keywords: "SEO For 6 Keywords & 2 URL",
      features: [
        "2000+ Quality Mixed Backlinks",
        "Articles, Forum & Profile Links",
        "Do-Follow Backlinks",
        "Premium Wiki Backlinks",
        "Press Releases",
        "Web 2.0 Links",
        "Social Bookmarking",
        "Authority Profile Links",
        "Delivery Within 10 Working Days",
        "100% Google Safe",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submit To 1020+ Search Engines",
        "Dedicated Account Manager",
        "Detailed Analytics Report",
        "Monthly Performance Review"
      ],
      popular: false,
      badge: "90% OFF",
      color: "from-pink-500 to-rose-500",
      icon: "💼",
      bestFor: "Large Businesses"
    },
    {
      id: "5000_backlinks",
      name: "EAGLE PREMIUM",
      price: 999,
      displayPrice: "₹999",
      originalPrice: "₹9,999",
      backlinks: "5,000+ Premium Backlinks",
      keywords: "SEO For 10 Keywords & 5 URL",
      features: [
        "5000+ Quality Mixed Backlinks",
        "Articles, Forum & Profile Links",
        "Do-Follow Backlinks",
        "Premium Wiki Backlinks",
        "Press Releases",
        "Web 2.0 Links",
        "Social Bookmarking",
        "Authority Profile Links",
        "Delivery Within 10 Working Days",
        "100% Google Safe",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submit To 1020+ Search Engines",
        "Dedicated Account Manager",
        "Detailed Analytics Report",
        "Monthly Performance Review",
        "Competitor Analysis",
        "Custom Strategy Planning"
      ],
      popular: false,
      badge: "90% OFF",
      color: "from-teal-500 to-cyan-500",
      icon: "👑",
      bestFor: "Enterprise & Agencies"
    }
  ];

  // Services Section
  const services = [
    {
      icon: "🎯",
      title: "Premium Backlink Building",
      description: "High-quality dofollow backlinks from authoritative websites with 70-90 DA/PA",
      features: ["Wiki Backlinks", "Article Directories", "Social Bookmarks", "News Sites"],
      color: "from-blue-500 to-cyan-500",
      delay: "0s"
    },
    {
      icon: "⚡",
      title: "Fast Indexing Service",
      description: "Super fast indexing with 40 days ping back service for quick results",
      features: ["Quick Indexing", "Ping Service", "Search Engine Submission", "Fast Results"],
      color: "from-green-500 to-emerald-500",
      delay: "0.2s"
    },
    {
      icon: "🛡️",
      title: "Google Safe Techniques",
      description: "100% white-hat techniques that comply with Google's guidelines",
      features: ["White-hat SEO", "Algorithm Safe", "Penalty Protection", "Safe Growth"],
      color: "from-purple-500 to-indigo-500",
      delay: "0.4s"
    },
    {
      icon: "📊",
      title: "Detailed Analytics & Reports",
      description: "Comprehensive white label reports with performance tracking",
      features: ["White Label Reports", "Performance Tracking", "Analytics", "Progress Reports"],
      color: "from-orange-500 to-red-500",
      delay: "0.6s"
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Select Package",
      description: "Choose the perfect backlink package for your website needs",
      icon: "🦅",
      color: "from-blue-500 to-purple-500"
    },
    {
      step: "02",
      title: "Secure Payment",
      description: "Safe & secure payment through Razorpay gateway",
      icon: "💳",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Submit Details",
      description: "Provide your website URLs and target keywords",
      icon: "📝",
      color: "from-purple-500 to-indigo-500"
    },
    {
      step: "04",
      title: "Get Results",
      description: "Receive comprehensive report and track rankings",
      icon: "📊",
      color: "from-orange-500 to-red-500"
    }
  ];

  // Features
  const features = [
    {
      icon: "🦅",
      title: "Eagle-Eye Precision",
      description: "Targeted backlink strategy with 100% customer satisfaction"
    },
    {
      icon: "⚡",
      title: "Lightning Fast Results",
      description: "Higher rankings within 4 weeks with 270% revenue growth"
    },
    {
      icon: "💰",
      title: "Most Affordable Prices",
      description: "Premium quality backlinks at the cheapest market prices"
    },
    {
      icon: "🛡️",
      title: "Google Algorithm Safe",
      description: "100% white-hat techniques loved by Google algorithms"
    },
    {
      icon: "🚀",
      title: "Super Fast Indexing",
      description: "Quick indexing with 40 days ping back service"
    },
    {
      icon: "📋",
      title: "Detailed Reports",
      description: "Comprehensive white label reports within 7-10 days"
    }
  ];

  // Stats Section
  const stats = [
    { number: "1500+", label: "Happy Clients", icon: "😊" },
    { number: "1000+", label: "Successful Projects", icon: "🚀" },
    { number: "270%", label: "Revenue Growth", icon: "📈" },
    { number: "4 Weeks", label: "Average Results Time", icon: "⚡" }
  ];

  // Portfolio Projects
  const portfolioProjects = [
    {
      title: "E-commerce Store SEO",
      category: "300 Backlinks Campaign",
      result: "Page 1 Google Ranking",
      description: "Achieved first page ranking for competitive e-commerce keywords"
    },
    {
      title: "Local Business Marketing",
      category: "750 Backlinks Strategy",
      result: "45% Traffic Increase",
      description: "Boosted local visibility and customer acquisition"
    },
    {
      title: "Blog Authority Building",
      category: "1200 Backlinks Package",
      result: "3x Organic Growth",
      description: "Established domain authority and reader engagement"
    },
    {
      title: "Corporate Website SEO",
      category: "2000 Backlinks Enterprise",
      result: "Industry Leader Position",
      description: "Positioned as industry authority with comprehensive backlink profile"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "E-commerce Store Owner",
      text: "360EagleWeb transformed my website's ranking. From page 5 to page 1 in just 4 weeks! The backlink quality is exceptional.",
      rating: 5,
      service: "300 Backlinks Package"
    },
    {
      name: "Priya Sharma",
      company: "Blogger & Content Creator",
      text: "Excellent service! My organic traffic increased by 200% in 6 weeks. The detailed reports helped me track progress effectively.",
      rating: 5,
      service: "750 Backlinks Package"
    },
    {
      name: "Amit Patel",
      company: "Local Business Owner",
      text: "Professional service with regular updates. My business now appears on Google's first page for all major local keywords.",
      rating: 5,
      service: "300 Backlinks Package"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What Is Your Refund Policy?",
      answer: "We offer a satisfaction guarantee. If you're not happy with our service, contact us for a refund within 7 days."
    },
    {
      question: "What Is Off-Page SEO?",
      answer: "Off-page SEO refers to actions taken outside of your own website to impact your rankings within search engine results pages."
    },
    {
      question: "How do I find out how many backlinks my website has?",
      answer: "You can use tools like Google Search Console, Ahrefs, or SEMrush to analyze your current backlink profile."
    },
    {
      question: "How Much Time Does It Take To See Effects On Ranking?",
      answer: "Most clients see improvements within 2-4 weeks, with significant results within 8-12 weeks."
    },
    {
      question: "What Is On-Page SEO?",
      answer: "On-page SEO refers to optimizing elements on your website like content, HTML tags, and internal linking."
    },
    {
      question: "Buy Backlinks Is Safe?",
      answer: "Yes, when done correctly with high-quality, relevant backlinks from trusted sources like we provide."
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle payment
  const handlePayment = async (pkg) => {
    setSelectedPackage(pkg);
    
    try {
      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        alert('Payment gateway loading failed. Please check your internet connection and try again.');
        return;
      }

      if (!RAZORPAY_KEY_ID) {
        alert('Payment gateway is not properly configured. Please contact support.');
        return;
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: formatAmount(pkg.price),
        currency: 'INR',
        name: '360EagleWeb',
        description: `Purchase of ${pkg.name} Package - ${pkg.backlinks}`,
        image: '/logo.png',
        handler: function (response) {
          setPaymentSuccess(true);
          setShowForm(true);
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        notes: {
          package: pkg.name,
          backlinks: pkg.backlinks,
          company: '360EagleWeb'
        },
        theme: {
          color: '#4F46E5'
        },
        modal: {
          ondismiss: function() {
            alert('Payment was cancelled. You can try again anytime.');
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      
      razorpayInstance.on('payment.failed', function (response) {
        alert(`Payment failed: ${response.error.description}. Please try again.`);
      });

      razorpayInstance.open();
      
    } catch (error) {
      alert('Error initializing payment. Please try again or contact support.');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `🦅 360EagleWeb - New Backlink Order\n\nPackage: ${selectedPackage.name}\nBacklinks: ${selectedPackage.backlinks}\nPrice: ${selectedPackage.displayPrice}\n\nCustomer Details:\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nWebsite: ${formData.website}\nKeywords: ${formData.keywords}\n\nOrder Time: ${new Date().toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setShowForm(false);
    setPaymentSuccess(false);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      website: "",
      keywords: ""
    });
    setSelectedPackage(null);

    alert('🎉 Order Completed Successfully! We have received your details. Our team will contact you shortly.');
  };

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Helmet>
        <title>360EagleWeb - Premium Backlink Services | Buy High Quality DoFollow Backlinks</title>
        <meta 
          name="description" 
          content="360EagleWeb - Buy High Quality DoFollow Backlinks with 70-90 DA, PA. Google Algorithm Safe Link Building Services. Higher Rankings in 4 Weeks. Starting at ₹99 Only."
        />
        <meta 
          name="keywords" 
          content="buy backlinks, dofollow backlinks, seo backlinks, high da backlinks, google safe backlinks, premium backlinks, backlink services, 360eagleweb"
        />
        <link rel="canonical" href="https://360eagleweb.com" />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            } bg-gradient-to-br ${slide.bgGradient}`}
          >
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className={`inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-full text-sm md:text-lg font-bold mb-6 md:mb-8 ${
                  index === currentSlide ? 'animate-bounce' : ''
                }`}>
                  🦅 {slide.badge}
                </div>

                <h1 className={`text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  {slide.title}
                  <span className="block text-yellow-300 mt-2 md:mt-4 text-2xl md:text-4xl lg:text-5xl">
                    {slide.subtitle}
                  </span>
                  <span className="block text-white/70 text-xl md:text-2xl mt-2 line-through">
                    {slide.originalPrice}
                  </span>
                </h1>
                
                <p className={`text-base md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  {slide.description}
                </p>
                
                <div className={`${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  <button
                    onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-yellow-500/30 mx-auto"
                  >
                    <span>🦅 {slide.cta}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* === PACKAGES SECTION === */}
      <section id="packages" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 md:mb-4 animate-fade-in-up">
              🦅 Choose Your Flight Plan
            </h2>
            <p className="text-base md:text-xl text-blue-700 animate-fade-in-up">
              Premium backlink packages starting at just ₹99
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🔥 90% OFF Limited Time
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                ⚡ Fast 7-Day Delivery
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                🛡️ Google Safe
              </span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                📈 Proven Results
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {backlinkPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 ${
                  pkg.popular 
                    ? 'border-green-500 transform hover:-translate-y-3 relative' 
                    : 'border-blue-200 hover:border-blue-400 transform hover:-translate-y-2'
                } overflow-hidden group animate-fade-in-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-6 rounded-full font-bold text-sm md:text-base animate-pulse shadow-lg">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="p-6 md:p-8">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{pkg.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{pkg.name}</h3>
                    <p className="text-blue-600 font-semibold text-lg md:text-xl mb-2">{pkg.backlinks}</p>
                    <p className="text-blue-700 text-sm md:text-base mb-4">{pkg.keywords}</p>
                    {pkg.bestFor && (
                      <p className="text-sm text-blue-500 bg-blue-50 inline-block px-3 py-1 rounded-full">
                        ✅ {pkg.bestFor}
                      </p>
                    )}
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <div className="flex items-baseline justify-center space-x-2 mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-blue-600">{pkg.displayPrice}</span>
                      <span className="text-lg md:text-xl text-blue-400 line-through">{pkg.originalPrice}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-red-500 text-white animate-pulse">
                      {pkg.badge}
                    </span>
                    <p className="text-sm text-blue-600 mt-2">One-time payment • No hidden fees</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-blue-700 text-sm md:text-base group-hover:translate-x-1 transition-transform">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0 text-lg">✓</span>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Order Now Button */}
                  <button
                    onClick={() => handlePayment(pkg)}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-green-500/30'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                  >
                    🦅 Order Now - {pkg.displayPrice}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offer Banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 md:p-8 text-center shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              🎁 Special Launch Offer - Limited Time!
            </h3>
            <p className="text-white/90 text-lg mb-4">
              Get <span className="font-bold text-yellow-300">90% OFF</span> on all packages + Free SEO Consultation worth ₹999
            </p>
            <button
              onClick={() => handlePayment(backlinkPackages[0])}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
            >
              🚀 Start with ₹99 Package
            </button>
          </div>

          {/* Comparison Table */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Package Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="p-4 text-left">Features</th>
                    {backlinkPackages.map((pkg, idx) => (
                      <th key={idx} className="p-4 text-center">{pkg.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b">Backlinks</td>
                    {backlinkPackages.map((pkg, idx) => (
                      <td key={idx} className="p-4 border-b text-center font-bold">{pkg.backlinks}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Keywords</td>
                    {backlinkPackages.map((pkg, idx) => (
                      <td key={idx} className="p-4 border-b text-center">{pkg.keywords}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Delivery Time</td>
                    {backlinkPackages.map((pkg, idx) => (
                      <td key={idx} className="p-4 border-b text-center">{pkg.price >= 499 ? '10 Days' : '7 Days'}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Price</td>
                    {backlinkPackages.map((pkg, idx) => (
                      <td key={idx} className="p-4 border-b text-center font-bold text-blue-600">{pkg.displayPrice}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section className="py-12 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 md:mb-4 animate-fade-in-up">
              Our Premium Services
            </h2>
            <p className="text-base md:text-xl text-blue-700 animate-fade-in-up">
              Eagle-eye precision in every backlink strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-200 group animate-fade-in-up"
                style={{animationDelay: service.delay}}
              >
                <div className={`bg-gradient-to-r ${service.color} text-white p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  {service.title}
                </h3>
                
                <p className="text-blue-700 text-sm mb-4 text-center">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-blue-600 text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === STATS SECTION === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 md:p-6 bg-white/10 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-2xl md:text-4xl mb-2 animate-bounce">{stat.icon}</div>
                <div className="text-xl md:text-3xl font-bold text-yellow-400 mb-1 md:mb-2 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-white/80 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION === */}
      <section className="py-12 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 md:mb-4">Why Choose 360EagleWeb?</h2>
            <p className="text-base md:text-xl text-blue-700">Eagle-eye precision in every backlink strategy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group p-4 md:p-6 bg-white rounded-xl hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 border border-blue-200 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-blue-700 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS SECTION === */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 md:mb-4">How EagleWeb Works</h2>
            <p className="text-base md:text-xl text-blue-700">Simple 4-step process to soar your rankings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${step.color} text-white p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                    {step.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2 animate-pulse">{step.step}</div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-blue-700 text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PORTFOLIO SECTION === */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 md:mb-4">Our Success Stories</h2>
            <p className="text-base md:text-xl text-blue-700">Real results for real businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {portfolioProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-purple-600 font-medium text-sm md:text-base mb-2">{project.category}</p>
                <p className="text-green-600 text-sm md:text-base font-semibold mb-2">{project.result}</p>
                <p className="text-blue-700 text-xs md:text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS SECTION === */}
      <section className="py-12 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 md:mb-4">What Our Clients Say</h2>
            <p className="text-base md:text-xl text-blue-700">Don't just take our word for it</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-blue-200 hover:border-purple-300 transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-blue-700 text-sm md:text-base mb-3 md:mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-blue-900 text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-purple-600 text-sm md:text-base">{testimonial.company}</p>
                  <p className="text-blue-500 text-xs md:text-sm mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ SECTION === */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-base md:text-xl text-blue-700">Everything you need to know about our eagle-eye backlink services</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">🦅 {faq.question}</h3>
                  <p className="text-blue-700 text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 animate-pulse">Ready to Soar Your Rankings?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100">Get professional backlink services at <span className="text-yellow-300 font-semibold">90% OFF</span>. Start with just ₹99!</p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button
              onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 animate-bounce"
            >
              <span>🦅 View All Packages</span>
            </button>
            <button
              onClick={() => handlePayment(backlinkPackages[0])}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>🚀 Start with ₹99 Package</span>
            </button>
          </div>
          
          <p className="text-blue-200 mt-4 md:mt-6 text-xs md:text-sm">
            ✅ 24/7 Support ✅ Money-Back Guarantee ✅ Free Consultation
          </p>
        </div>
      </section>

      {/* Payment Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border-2 border-blue-400 animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900">🦅 Complete Your Order</h3>
              <button
                onClick={() => {
                  setShowForm(false);
                  setPaymentSuccess(false);
                }}
                className="text-blue-500 hover:text-blue-700"
              >
                ✕
              </button>
            </div>
            
            {paymentSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                ✅ Payment Successful! Please submit your details below.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your mobile number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Website Domain *</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Keywords *</label>
                <textarea
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your target keywords (comma separated)"
                />
              </div>
              
              {selectedPackage && (
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-700">Selected Package:</p>
                  <p className="text-lg font-bold text-blue-600">{selectedPackage.name}</p>
                  <p className="text-sm text-blue-600">{selectedPackage.backlinks}</p>
                  <p className="text-sm text-blue-500">Price: {selectedPackage.displayPrice}</p>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                🦅 Complete Order & Submit Details
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Home;
