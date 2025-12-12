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

  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const WHATSAPP_NUMBER = "919310533973";

  // Hero Slides - Professional Version
  const heroSlides = [
    {
      title: "Premium Backlink Services",
      subtitle: "Genuine Results, Transparent Process",
      originalPrice: "",
      description: "Get high-quality dofollow backlinks from authoritative websites with 70-90 DA/PA. Our Google-safe link building strategies ensure sustainable growth.",
      badge: "Trusted by 1500+ Clients",
      bgGradient: "from-blue-900 via-indigo-800 to-purple-700",
      cta: "Explore Packages"
    },
    {
      title: "Higher Ranking Within 4 Weeks",
      subtitle: "Proven 270% Revenue Growth",
      originalPrice: "",
      description: "Join our satisfied clients who achieved significant search engine ranking improvements within just 4 weeks of implementing our strategies.",
      badge: "Data-Driven Results",
      bgGradient: "from-emerald-900 via-teal-800 to-cyan-700",
      cta: "View Success Stories"
    },
    {
      title: "Google Algorithm Safe Link Building",
      subtitle: "Sustainable SEO Growth",
      originalPrice: "",
      description: "Our white-hat techniques are fully compliant with Google's guidelines, ensuring long-term growth without penalties or risks.",
      badge: "100% White-Hat Methods",
      bgGradient: "from-violet-900 via-purple-800 to-fuchsia-700",
      cta: "Get Started"
    }
  ];

  // Backlink Packages - Starting from ₹199, No Demo Package
  const backlinkPackages = [
    {
      id: "300_backlinks",
      name: "STARTER PACKAGE",
      price: 199,
      displayPrice: "₹199",
      originalPrice: "₹1,999",
      backlinks: "300 Premium Backlinks",
      keywords: "SEO For 2 Keywords & 1 URL",
      features: [
        "300 Quality Mixed Backlinks",
        "Do-Follow Backlinks from Articles & Forums",
        "Premium Wiki Backlinks",
        "Press Release Submissions",
        "Web 2.0 Property Links",
        "Social Bookmarking",
        "30 Authority Profile Links",
        "Delivery Within 7 Working Days",
        "100% Google Safe Techniques",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submission to 1020+ Search Engines"
      ],
      popular: false,
      badge: "SAVE 90%",
      color: "from-green-500 to-emerald-500",
      icon: "🚀"
    },
    {
      id: "750_backlinks",
      name: "PROFESSIONAL PACKAGE",
      price: 399,
      displayPrice: "₹399",
      originalPrice: "₹3,999",
      backlinks: "750 Premium Backlinks",
      keywords: "SEO For 2 Keywords & 2 URLs",
      features: [
        "750 Quality Mixed Backlinks",
        "Do-Follow Backlinks from Articles & Forums",
        "Premium Wiki Backlinks",
        "Press Release Submissions",
        "Web 2.0 Property Links",
        "Social Bookmarking",
        "50 Authority Profile Links",
        "Delivery Within 7 Working Days",
        "100% Google Safe Techniques",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submission to 1020+ Search Engines",
        "Priority Support",
        "Detailed Analytics Report"
      ],
      popular: true,
      badge: "MOST POPULAR",
      color: "from-purple-500 to-indigo-500",
      icon: "⚡"
    },
    {
      id: "1200_backlinks",
      name: "BUSINESS PACKAGE",
      price: 599,
      displayPrice: "₹599",
      originalPrice: "₹5,999",
      backlinks: "1200 Premium Backlinks",
      keywords: "SEO For 3 Keywords & 2 URLs",
      features: [
        "1200 Quality Mixed Backlinks",
        "Do-Follow Backlinks from Articles & Forums",
        "Premium Wiki Backlinks",
        "Press Release Submissions",
        "Web 2.0 Property Links",
        "Social Bookmarking",
        "75 Authority Profile Links",
        "Delivery Within 7 Working Days",
        "100% Google Safe Techniques",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submission to 1020+ Search Engines",
        "Priority Support",
        "Detailed Analytics Report",
        "Competitor Analysis"
      ],
      popular: false,
      badge: "SAVE 90%",
      color: "from-orange-500 to-red-500",
      icon: "🏆"
    },
    {
      id: "2000_backlinks",
      name: "ENTERPRISE PACKAGE",
      price: 999,
      displayPrice: "₹999",
      originalPrice: "₹9,999",
      backlinks: "2000+ Premium Backlinks",
      keywords: "SEO For 6 Keywords & 2 URLs",
      features: [
        "2000+ Quality Mixed Backlinks",
        "Do-Follow Backlinks from Articles & Forums",
        "Premium Wiki Backlinks",
        "Press Release Submissions",
        "Web 2.0 Property Links",
        "Social Bookmarking",
        "100 Authority Profile Links",
        "Delivery Within 10 Working Days",
        "100% Google Safe Techniques",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submission to 1020+ Search Engines",
        "24/7 Priority Support",
        "Detailed Analytics Report",
        "Competitor Analysis",
        "Monthly Performance Review"
      ],
      popular: false,
      badge: "SAVE 90%",
      color: "from-pink-500 to-rose-500",
      icon: "💼"
    },
    {
      id: "5000_backlinks",
      name: "PREMIUM PACKAGE",
      price: 1999,
      displayPrice: "₹1,999",
      originalPrice: "₹19,999",
      backlinks: "5,000+ Premium Backlinks",
      keywords: "SEO For 10 Keywords & 5 URLs",
      features: [
        "5000+ Quality Mixed Backlinks",
        "Do-Follow Backlinks from Articles & Forums",
        "Premium Wiki Backlinks",
        "Press Release Submissions",
        "Web 2.0 Property Links",
        "Social Bookmarking",
        "150 Authority Profile Links",
        "Delivery Within 10 Working Days",
        "100% Google Safe Techniques",
        "Super Fast Index Process",
        "40 Days Ping Back Service",
        "Submission to 1020+ Search Engines",
        "24/7 Priority Support",
        "Detailed Analytics Report",
        "Competitor Analysis",
        "Monthly Performance Review",
        "Custom Strategy Development",
        "Dedicated Account Manager"
      ],
      popular: false,
      badge: "SAVE 90%",
      color: "from-teal-500 to-cyan-500",
      icon: "👑"
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
      icon: "📦",
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
      icon: "🎯",
      title: "Targeted Strategy",
      description: "Precision-targeted backlink strategy with 100% customer satisfaction"
    },
    {
      icon: "⚡",
      title: "Rapid Results",
      description: "Higher rankings within 4 weeks with 270% revenue growth"
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Premium quality backlinks at the most competitive market prices"
    },
    {
      icon: "🛡️",
      title: "Algorithm Safe",
      description: "100% white-hat techniques loved by Google algorithms"
    },
    {
      icon: "🚀",
      title: "Fast Indexing",
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
      service: "750 Backlinks Package"
    },
    {
      name: "Priya Sharma",
      company: "Blogger & Content Creator",
      text: "The quality of backlinks exceeded my expectations. My organic traffic increased by 200% in 6 weeks. Highly recommended!",
      rating: 5,
      service: "1200 Backlinks Package"
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
      question: "Is Buying Backlinks Safe?",
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
    
    const message = `360EagleWeb - New Backlink Order\n\nPackage: ${selectedPackage.name}\nBacklinks: ${selectedPackage.backlinks}\nPrice: ${selectedPackage.displayPrice}\n\nCustomer Details:\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nWebsite: ${formData.website}\nKeywords: ${formData.keywords}\n\nOrder Time: ${new Date().toLocaleString()}`;
    
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

    alert('Order Completed Successfully! We have received your details. Our team will contact you shortly.');
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
        <title>360EagleWeb - Premium Backlink Services | High Quality DoFollow Backlinks</title>
        <meta 
          name="description" 
          content="360EagleWeb offers premium backlink services with high-quality dofollow backlinks from 70-90 DA/PA websites. Google-safe link building for sustainable growth."
        />
        <meta 
          name="keywords" 
          content="premium backlinks, dofollow backlinks, seo backlinks, high da backlinks, google safe backlinks, link building services"
        />
        <link rel="canonical" href="https://360eagleweb.com" />
      </Helmet>

      {/* === PROFESSIONAL HERO SECTION === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'absolute opacity-0 translate-y-8'
                }`}
              >
                <div className="mb-6">
                  <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                    {slide.badge}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                
                <div className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-medium mb-6">
                  {slide.subtitle}
                </div>
                
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                  >
                    {slide.cta}
                  </button>
                  <button
                    onClick={() => handlePayment(backlinkPackages[0])}
                    className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    Get Started from ₹199
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-12' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* === PACKAGES SECTION === */}
      <section id="packages" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Backlink Packages
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional packages designed to boost your search rankings
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Limited Time Offer
              </span>
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Fast Delivery
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Google Safe
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {backlinkPackages.slice(0, 2).map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border ${
                  pkg.popular ? 'border-purple-500 transform hover:-translate-y-2' : 'border-gray-200'
                } overflow-hidden`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 text-center font-bold">
                    RECOMMENDED PACKAGE
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-blue-600 font-semibold text-xl mb-1">{pkg.backlinks}</p>
                    <p className="text-gray-600">{pkg.keywords}</p>
                  </div>
                  
                  <div className="text-center mb-8 p-6 bg-gray-50 rounded-xl">
                    <div className="flex items-baseline justify-center space-x-3 mb-3">
                      <span className="text-4xl md:text-5xl font-bold text-blue-600">{pkg.displayPrice}</span>
                      <span className="text-xl text-gray-400 line-through">{pkg.originalPrice}</span>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      pkg.popular ? 'bg-purple-100 text-purple-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handlePayment(pkg)}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                  >
                    Get Started - {pkg.displayPrice}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {backlinkPackages.slice(2).map((pkg, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{pkg.backlinks}</p>
                    <p className="text-sm text-gray-600">{pkg.keywords}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-blue-600">{pkg.displayPrice}</span>
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                      {pkg.badge}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handlePayment(pkg)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300"
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive backlink solutions designed for maximum impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div className={`bg-gradient-to-r ${service.color} text-white p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <span className="text-green-500 mr-2">•</span>
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose 360EagleWeb?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Proven strategies backed by data and results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-3xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS SECTION === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to boost your rankings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center relative"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                  <div className={`bg-gradient-to-r ${step.color} text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl`}>
                    {step.icon}
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-blue-200 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS SECTION === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-purple-600">{testimonial.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ SECTION === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 1500+ satisfied clients who transformed their online presence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              View All Packages
            </button>
            <button
              onClick={() => handlePayment(backlinkPackages[0])}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started from ₹199
            </button>
          </div>
          
          <p className="text-blue-200 text-sm">
            Professional Services | 24/7 Support | Satisfaction Guaranteed
          </p>
        </div>
      </section>

      {/* Payment Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Complete Your Order</h3>
              <button
                onClick={() => {
                  setShowForm(false);
                  setPaymentSuccess(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            {paymentSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Payment Successful! Please provide your details below.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your mobile number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website Domain *</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keywords *</label>
                <textarea
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your target keywords (comma separated)"
                />
              </div>
              
              {selectedPackage && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-700">Selected Package:</p>
                  <p className="text-lg font-bold text-blue-600">{selectedPackage.name}</p>
                  <p className="text-blue-600">{selectedPackage.backlinks}</p>
                  <p className="text-blue-500">Price: {selectedPackage.displayPrice}</p>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
              >
                Submit Details & Complete Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
