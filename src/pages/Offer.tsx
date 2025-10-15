// src/pages/Offer.tsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { 
  Check, 
  Star, 
  Rocket, 
  Clock, 
  Users, 
  MessageCircle, 
  Phone, 
  X, 
  Send, 
  CreditCard, 
  Shield,
  Search,
  Globe,
  ShoppingCart,
  ThumbsUp,
  Eye,
  Target,
  Sparkles,
  Gift,
  Award,
  Heart,
  Quote,
  ChevronDown,
  MapPin,
  Mail,
  Zap,
  TrendingUp,
  Link,
  ShieldCheck,
  Zap as Lightning
} from "lucide-react";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Offer: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isSuccessFormOpen, setIsSuccessFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes timer
  const [flashSaleTime, setFlashSaleTime] = useState(30); // 30 seconds flash sale
  const [isSpecialPrice, setIsSpecialPrice] = useState(true);
  const [isFlashSale, setIsFlashSale] = useState(true);
  const [hasFlashSaleOccurred, setHasFlashSaleOccurred] = useState(false);
  const [offerExpired, setOfferExpired] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [successFormData, setSuccessFormData] = useState({
    name: "",
    email: "",
    utr: "",
    service: "",
    amount: ""
  });
  const [paymentService, setPaymentService] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [originalAmount, setOriginalAmount] = useState(0);

  // ✅ Environment variables
  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const WHATSAPP_NUMBER = "9310533973";

  // Initialize timers from localStorage
  useEffect(() => {
    const savedTime = localStorage.getItem('specialOfferTime');
    const savedFlashSale = localStorage.getItem('flashSaleOccurred');
    const savedOfferExpired = localStorage.getItem('offerExpired');
    
    if (savedTime) {
      const remainingTime = parseInt(savedTime);
      setTimeLeft(remainingTime);
      if (remainingTime <= 0) {
        setOfferExpired(true);
        setIsSpecialPrice(false);
      }
    }
    
    if (savedFlashSale === 'true') {
      setHasFlashSaleOccurred(true);
      setIsFlashSale(false);
    }

    if (savedOfferExpired === 'true') {
      setOfferExpired(true);
      setIsSpecialPrice(false);
    }
  }, []);

  // Main Timer Effect - 3 minutes
  useEffect(() => {
    if (timeLeft <= 0) {
      setOfferExpired(true);
      setIsSpecialPrice(false);
      localStorage.setItem('offerExpired', 'true');
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        localStorage.setItem('specialOfferTime', newTime.toString());
        
        if (newTime <= 0) {
          setOfferExpired(true);
          setIsSpecialPrice(false);
          localStorage.setItem('offerExpired', 'true');
          return 0;
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Flash Sale Timer - 30 seconds with 20% discount
  useEffect(() => {
    if (flashSaleTime <= 0 || hasFlashSaleOccurred) {
      setIsFlashSale(false);
      setHasFlashSaleOccurred(true);
      localStorage.setItem('flashSaleOccurred', 'true');
      return;
    }

    const flashTimerId = setInterval(() => {
      setFlashSaleTime(prev => {
        if (prev <= 1) {
          setIsFlashSale(false);
          setHasFlashSaleOccurred(true);
          localStorage.setItem('flashSaleOccurred', 'true');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(flashTimerId);
  }, [flashSaleTime, hasFlashSaleOccurred]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Updated Price Data for EagleWeb Backlink Packages
  const priceData = {
    start: {
      special: 99,
      regular: 999,
      save: "₹900",
      name: "EAGLE START",
      description: "300 Premium Backlinks - SEO For 2 Keywords & 1 URL",
      features: [
        "Quality Mixed Backlinks From Articles Forum Profiles",
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
      icon: "🦅",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      badge: "POPULAR"
    },
    pro: {
      special: 199,
      regular: 1999,
      save: "₹1,800",
      name: "EAGLE PRO",
      description: "750 Premium Backlinks - SEO For 2 Keywords & 2 URL",
      features: [
        "Quality Mixed Backlinks From Articles Forum Profiles",
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
        "Submit To 1020+ Search Engines"
      ],
      icon: "⚡",
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
      badge: "MOST POPULAR"
    },
    business: {
      special: 299,
      regular: 2999,
      save: "₹2,700",
      name: "EAGLE BUSINESS",
      description: "1200 Premium Backlinks - SEO For 3 Keywords & 2 URL",
      features: [
        "Quality Mixed Backlinks From Articles Forum Profiles",
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
        "Submit To 1020+ Search Engines"
      ],
      icon: "💼",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
      badge: "BUSINESS"
    },
    enterprise: {
      special: 499,
      regular: 4999,
      save: "₹4,500",
      name: "EAGLE ENTERPRISE",
      description: "2000+ Premium Backlinks - SEO For 6 Keywords & 2 URL",
      features: [
        "Quality Mixed Backlinks From Articles Forum Profiles",
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
        "Submit To 1020+ Search Engines"
      ],
      icon: "👑",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      badge: "ENTERPRISE"
    },
    premium: {
      special: 999,
      regular: 9999,
      save: "₹9,000",
      name: "EAGLE PREMIUM",
      description: "5,000+ Premium Backlinks - SEO For 10 Keywords & 5 URL",
      features: [
        "Quality Mixed Backlinks From Articles Forum Profiles",
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
        "Submit To 1020+ Search Engines"
      ],
      icon: "🏆",
      gradient: "bg-gradient-to-r from-yellow-500 to-amber-500",
      badge: "PREMIUM"
    }
  };

  const scrollToOffer = () => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSuccessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSuccessFormData({
      ...successFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `🎯 EagleWeb Backlink Package Inquiry 🦅\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleSuccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `✅ EagleWeb Payment Success 🦅\n\nPayment Details:\nName: ${successFormData.name}\nEmail: ${successFormData.email}\nUTR Number: ${successFormData.utr}\nService: ${successFormData.service}\nAmount Paid: ₹${successFormData.amount}\n\nPlease verify my payment and start the service!`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    setIsSuccessFormOpen(false);
    setSuccessFormData({ name: "", email: "", utr: "", service: "", amount: "" });
    alert("Thank you! We'll verify your payment and start your service within 24 hours. 🎉");
  };

  const openQuickForm = (service: string) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service }));
    setIsFormOpen(true);
  };

  // Payment Functions
  const openPaymentModal = (serviceKey: keyof typeof priceData) => {
    const service = priceData[serviceKey];
    
    if (offerExpired) {
      // Normal prices after offer expires
      setPaymentAmount(service.regular);
      setOriginalAmount(service.regular);
    } else {
      let originalPrice = isSpecialPrice ? service.special : service.regular;
      let discountedPrice = Math.floor(originalPrice * 0.9); // 10% discount
      
      // Apply 20% discount for flash sale
      if (isFlashSale) {
        discountedPrice = Math.floor(originalPrice * 0.8); // 20% off
      }
      
      setPaymentAmount(discountedPrice);
      setOriginalAmount(originalPrice);
    }
    
    setPaymentService(service.name);
    setIsPaymentOpen(true);
  };

  const initiateRazorpayPayment = async () => {
    try {
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: paymentAmount * 100,
        currency: 'INR',
        name: 'EagleWeb - Premium Backlink Packages',
        description: `${paymentService} - Premium Backlinks Package`,
        image: '/logo.png',
        handler: function (response: any) {
          // Open success form after payment
          setIsSuccessFormOpen(true);
          setSuccessFormData(prev => ({
            ...prev,
            service: paymentService,
            amount: paymentAmount.toString()
          }));
          setIsPaymentOpen(false);
          
          // Mark flash sale as used
          if (isFlashSale) {
            setHasFlashSaleOccurred(true);
            localStorage.setItem('flashSaleOccurred', 'true');
          }
        },
        prefill: {
          name: formData.name || 'Customer',
          email: formData.email || 'customer@example.com',
          contact: formData.phone || ''
        },
        notes: {
          service: paymentService,
          type: 'Backlink Package'
        },
        theme: {
          color: '#3B82F6'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again or contact us on WhatsApp.');
    }
  };

  const getServicePrice = (serviceKey: keyof typeof priceData) => {
    if (offerExpired) {
      return priceData[serviceKey].regular;
    }
    
    if (isFlashSale) {
      return Math.floor(priceData[serviceKey].special * 0.8); // 20% off during flash sale
    }
    
    return isSpecialPrice ? priceData[serviceKey].special : priceData[serviceKey].regular;
  };

  const getDiscountedPrice = (serviceKey: keyof typeof priceData) => {
    if (offerExpired) {
      return priceData[serviceKey].regular;
    }
    
    const originalPrice = getServicePrice(serviceKey);
    return Math.floor(originalPrice * 0.9); // 10% advance discount
  };

  const servicesList = [
    { key: 'start' as const, label: 'EAGLE START' },
    { key: 'pro' as const, label: 'EAGLE PRO' },
    { key: 'business' as const, label: 'EAGLE BUSINESS' },
    { key: 'enterprise' as const, label: 'EAGLE ENTERPRISE' },
    { key: 'premium' as const, label: 'EAGLE PREMIUM' }
  ];

  // Sparkles Component
  const SparklesEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );

  // Reset everything (for testing)
  const resetAll = () => {
    localStorage.removeItem('specialOfferTime');
    localStorage.removeItem('flashSaleOccurred');
    localStorage.removeItem('offerExpired');
    setTimeLeft(180);
    setFlashSaleTime(30);
    setIsSpecialPrice(true);
    setIsFlashSale(true);
    setHasFlashSaleOccurred(false);
    setOfferExpired(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50" style={{ fontFamily: "'Haboro Serif', serif" }}>
      <Helmet>
        <title>Special Offer - Premium Backlink Packages 90% OFF + 20% Flash Sale | EagleWeb</title>
        <meta name="description" content="Special Offer: Get Premium Backlink Packages at 90% OFF + 20% FLASH SALE. Boost your SEO rankings with quality backlinks from EagleWeb." />
        <link href="https://fonts.googleapis.com/css2?family=Haboro+Serif:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Developer Reset Button (Hidden in production) */}
      {process.env.NODE_ENV === 'development' && (
        <button 
          onClick={resetAll}
          className="fixed bottom-4 left-4 z-50 bg-red-500 text-white px-3 py-2 rounded-lg text-xs opacity-50 hover:opacity-100"
        >
          Reset All
        </button>
      )}

      {/* Flash Sale Banner */}
      {isFlashSale && !offerExpired && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 text-center animate-pulse">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base">
            <Lightning className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
            <span className="font-bold">FLASH SALE: 20% EXTRA OFF - Ends in {flashSaleTime}s!</span>
            <Lightning className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
          </div>
        </div>
      )}

      {/* Floating Timer */}
      <div className="fixed top-4 right-4 z-40">
        <div className={`bg-gradient-to-r ${offerExpired ? 'from-gray-500 to-gray-700' : isSpecialPrice ? 'from-green-500 to-emerald-500' : 'from-red-500 to-orange-500'} text-white px-4 py-2 rounded-full shadow-2xl animate-pulse border-2 border-yellow-300`}>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 animate-spin" />
            <div className="text-center">
              <div className="text-xs font-semibold">
                {offerExpired ? '❌ OFFER EXPIRED' : isSpecialPrice ? '⏰ ENDS IN' : '⏰ ENDED'}
              </div>
              <div className={`text-sm font-bold ${offerExpired && 'line-through'}`}>
                {offerExpired ? '00:00' : formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white pt-16 pb-12 md:py-20 overflow-hidden">
        <SparklesEffect />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {!offerExpired && (
            <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-2xl ${isSpecialPrice ? 'bg-green-500/20 border border-green-300' : 'bg-red-500/20 border border-red-300'} backdrop-blur-sm`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 md:h-6 md:w-6 animate-pulse" />
                  <span className="text-sm md:text-lg font-bold">{isSpecialPrice ? '⏰ SPECIAL OFFER ENDS IN:' : '❌ OFFER EXPIRED'}</span>
                </div>
                <div className={`text-xl md:text-2xl font-bold ${isSpecialPrice ? 'text-yellow-300' : 'text-red-300'} font-mono`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          )}

          {isFlashSale && !offerExpired && (
            <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold inline-block mb-4 md:mb-6 animate-pulse border-2 border-yellow-300">
              ⚡ FLASH SALE: 20% EXTRA OFF - {flashSaleTime}s LEFT!
            </div>
          )}

          {!offerExpired && (
            <div className="bg-yellow-400 text-blue-800 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block mb-4 md:mb-6 animate-pulse border-2 border-blue-300">
              🦅 Premium Backlink Packages - 90% OFF! 🦅
            </div>
          )}
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {offerExpired ? (
              <>
                Offer <span className="text-red-300">Expired</span><br />
                <span className="text-yellow-300">Contact for Prices</span>
              </>
            ) : isSpecialPrice ? (
              <>
                Premium Backlinks<br />
                <span className="text-yellow-300">For Higher Rankings</span>
              </>
            ) : (
              <>
                Offer <span className="text-red-300">Ended</span><br />
                <span className="text-yellow-300">Check New Offers</span>
              </>
            )}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 max-w-4xl mx-auto font-medium">
            {offerExpired ? (
              "Special offer period has ended. Contact us for current pricing!"
            ) : isSpecialPrice ? (
              isFlashSale ? 
                "Premium Backlink Packages at 90% OFF + 20% FLASH SALE!" :
                "Choose your flight plan to higher rankings with premium backlinks!"
            ) : (
              "Special offer period has ended. Contact us for current pricing!"
            )}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 mb-6 md:mb-8 max-w-6xl mx-auto">
            {servicesList.map((service, index) => (
              <div key={service.key} className={`${priceData[service.key].gradient} text-white p-2 md:p-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-white/30 text-center`}>
                <div className="text-lg md:text-xl mb-1">{priceData[service.key].icon}</div>
                <div className="text-sm md:text-base font-bold mb-1">
                  ₹{getServicePrice(service.key).toLocaleString()}
                </div>
                <div className="text-xs font-medium">{service.label}</div>
                {!offerExpired && isSpecialPrice && !isFlashSale && (
                  <div className="text-[10px] bg-white/20 rounded px-1 mt-1">
                    Advance: ₹{getDiscountedPrice(service.key).toLocaleString()}
                  </div>
                )}
                {!offerExpired && isFlashSale && (
                  <div className="text-[10px] bg-purple-500/80 rounded px-1 mt-1 text-white">
                    20% OFF!
                  </div>
                )}
                {offerExpired && (
                  <div className="text-[10px] bg-gray-500/80 rounded px-1 mt-1 text-white">
                    Normal Price
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg justify-center">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
              {offerExpired ? 'View Packages' : 'View All Packages'}
            </button>
            <button onClick={() => setIsFormOpen(true)} className={`px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg justify-center ${offerExpired ? 'bg-blue-500 hover:bg-blue-600 text-white' : isSpecialPrice ? 'bg-green-500 hover:bg-green-600 text-white border-2 border-green-300' : 'bg-gray-500 hover:bg-gray-600 text-white'}`}>
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              {offerExpired ? '📞 Contact Now' : isSpecialPrice ? '💬 Get Offer' : '📞 Contact Now'}
            </button>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      {!offerExpired && (
        <section className="py-4 md:py-6 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
          <SparklesEffect />
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <Gift className="h-5 w-5 md:h-6 md:w-6 text-yellow-300 animate-pulse" />
                <span className="text-lg md:text-xl font-bold">Premium Backlinks at 90% OFF!</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-300" />
                <span>{isFlashSale ? '+ 20% FLASH SALE EXTRA OFF!' : '+ 10% EXTRA OFF on Advance Booking'}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Packages Section */}
      <section id="offers" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {offerExpired ? (
                <>Our <span className="text-blue-500">Backlink Packages</span></>
              ) : (
                <>🦅 Premium <span className="text-blue-500">Backlink Packages</span> 🦅</>
              )}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {offerExpired ? "Professional backlink packages for higher SEO rankings" : "Choose your flight plan to higher rankings with premium backlinks"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {servicesList.map((service) => (
              <div key={service.key} className={`bg-white border-2 ${offerExpired ? 'border-gray-300' : 'border-blue-200'} rounded-2xl p-4 md:p-6 relative overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl`}>
                {!offerExpired && priceData[service.key].badge && (
                  <div className={`absolute -top-2 -right-2 ${service.key === 'pro' ? 'bg-purple-500' : service.key === 'premium' ? 'bg-yellow-500' : 'bg-blue-500'} text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse`}>
                    {priceData[service.key].badge === "MOST POPULAR" && "⭐ "}
                    {priceData[service.key].badge}
                  </div>
                )}
                
                {!offerExpired && isFlashSale && (
                  <div className="absolute -top-2 -left-2 bg-purple-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    ⚡ 20% OFF
                  </div>
                )}

                {offerExpired && (
                  <div className="absolute -top-2 -right-2 bg-gray-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold rotate-12 shadow-lg z-10">
                    Standard
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    ₹{getServicePrice(service.key).toLocaleString()}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-gray-900">{priceData[service.key].name}</div>
                  <div className="text-sm text-gray-600 mb-2">{priceData[service.key].description}</div>
                  {!offerExpired && (
                    <div className="text-gray-500 line-through text-sm md:text-base">₹{priceData[service.key].regular.toLocaleString()}</div>
                  )}
                  
                  {!offerExpired && isSpecialPrice && !isFlashSale && (
                    <div className="mt-2 p-2 bg-green-500/10 rounded-lg">
                      <div className="text-green-700 font-bold text-xs md:text-sm">Advance Booking:</div>
                      <div className="text-green-600 font-bold text-lg md:text-xl">₹{getDiscountedPrice(service.key).toLocaleString()}</div>
                      <div className="text-green-500 text-xs">Save 10% Extra!</div>
                    </div>
                  )}

                  {!offerExpired && isFlashSale && (
                    <div className="mt-2 p-2 bg-purple-500/10 rounded-lg border border-purple-200">
                      <div className="text-purple-700 font-bold text-xs md:text-sm">FLASH SALE:</div>
                      <div className="text-purple-600 font-bold text-lg md:text-xl">₹{getServicePrice(service.key).toLocaleString()}</div>
                      <div className="text-purple-500 text-xs">Save 20% Extra!</div>
                    </div>
                  )}
                </div>
                
                <ul className="space-y-2 mb-4 text-xs md:text-sm max-h-60 overflow-y-auto">
                  {priceData[service.key].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2">
                  <button 
                    onClick={() => openPaymentModal(service.key)} 
                    className={`w-full py-2 md:py-3 rounded-xl font-bold transition-all hover:scale-105 text-center block text-sm md:text-base ${
                      offerExpired 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-300' 
                        : isFlashSale
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-2 border-purple-300'
                          : isSpecialPrice 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300' 
                            : 'bg-gray-500 hover:bg-gray-600 text-white'
                    }`}
                  >
                    {offerExpired 
                      ? '💳 Order Now' 
                      : isFlashSale
                        ? '⚡ Grab 20% OFF Now!'
                        : isSpecialPrice 
                          ? '🦅 Order Now - Save 10%' 
                          : '📞 Contact for Price'
                    }
                  </button>
                  <button 
                    onClick={() => openQuickForm(priceData[service.key].name)} 
                    className="w-full py-2 rounded-xl font-bold transition-all hover:scale-105 text-center block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs md:text-sm border-2 border-blue-300"
                  >
                    💬 {offerExpired ? 'Get Quote' : 'Free Inquiry'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {offerExpired ? 'Ready to Boost Your SEO Rankings?' : 'Ready to Skyrocket Your Rankings?'}
          </h2>
          <p className="text-lg md:text-xl mb-6">
            {offerExpired ? 'Contact us now for premium backlink packages!' : 'Contact us now and get your premium backlinks started!'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button 
              onClick={() => window.open(`https://wa.me/91${WHATSAPP_NUMBER}`, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              WhatsApp Now
            </button>
            <button 
              onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, '_blank')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Call: +91 {WHATSAPP_NUMBER}
            </button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              Email Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-400">EagleWeb</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Your trusted partner for premium backlinks and SEO success.
              </p>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm md:text-base text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 {WHATSAPP_NUMBER}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@eagleweb.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>India</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.open(`https://wa.me/91${WHATSAPP_NUMBER}`, '_blank')}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button 
                  onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, '_blank')}
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2024 EagleWeb. All rights reserved. | {offerExpired ? 'Professional Backlink Services' : 'Special Backlink Offer'}
            </p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-4 md:p-6 max-w-md w-full shadow-2xl border-2 border-blue-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                  {offerExpired ? 'Order Package' : isFlashSale ? 'Flash Sale 20% OFF' : 'Advance Booking'}
                </h3>
                <p className="text-blue-600 font-semibold text-xs md:text-sm mt-1">{paymentService}</p>
              </div>
              <button onClick={() => setIsPaymentOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className={`p-3 md:p-4 rounded-xl border-2 ${
                offerExpired 
                  ? 'bg-blue-50 border-blue-200' 
                  : isFlashSale
                    ? 'bg-purple-50 border-purple-200'
                    : 'bg-green-50 border-green-200'
              }`}>
                <div className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${
                    offerExpired 
                      ? 'text-blue-600' 
                      : isFlashSale 
                        ? 'text-purple-600' 
                        : 'text-green-600'
                  }`}>
                    ₹{paymentAmount.toLocaleString()}
                  </div>
                  <div className={`font-semibold text-sm md:text-base ${
                    offerExpired 
                      ? 'text-blue-700' 
                      : isFlashSale 
                        ? 'text-purple-700' 
                        : 'text-green-700'
                  }`}>
                    {offerExpired 
                      ? 'Package Price' 
                      : isFlashSale 
                        ? 'Flash Sale 20% OFF!' 
                        : 'After 10% Advance Discount'
                    }
                  </div>
                  {!offerExpired && (
                    <div className="text-gray-500 text-xs md:text-sm line-through mt-1">
                      Original: ₹{originalAmount.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={initiateRazorpayPayment}
                className={`w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg ${
                  offerExpired 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-300' 
                    : isFlashSale
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-2 border-purple-300'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300'
                }`}
              >
                <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                {offerExpired 
                  ? `Pay ₹${paymentAmount.toLocaleString()}` 
                  : `Pay ₹${paymentAmount.toLocaleString()} Now`
                }
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Form Modal - Opens after payment */}
      {isSuccessFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-4 md:p-6 max-w-md w-full shadow-2xl border-2 border-green-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                  Payment Successful! 🎉
                </h3>
                <p className="text-green-600 font-semibold text-xs md:text-sm mt-1">Complete your details to start service</p>
              </div>
              <button onClick={() => setIsSuccessFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSuccessSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={successFormData.name} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your full name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={successFormData.email} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your email" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UTR Number *</label>
                <input 
                  type="text" 
                  name="utr" 
                  required 
                  value={successFormData.utr} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter UTR number from payment" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
                <input 
                  type="text" 
                  name="service" 
                  required 
                  value={successFormData.service} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base bg-gray-50" 
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount Paid *</label>
                <input 
                  type="text" 
                  name="amount" 
                  required 
                  value={successFormData.amount} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base bg-gray-50" 
                  readOnly
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                Submit & Start Service
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-4 md:p-6 max-w-md w-full shadow-2xl border-2 border-blue-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {offerExpired ? '📞 Contact Us' : '🦅 Backlink Package Inquiry'}
                </h3>
                {selectedService && <p className="text-blue-600 font-semibold text-xs md:text-sm mt-1">{selectedService}</p>}
              </div>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your full name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your email" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your WhatsApp number" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Package Interested In *</label>
                <select 
                  name="service" 
                  required 
                  value={formData.service} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Select your package</option>
                  {servicesList.map(service => (
                    <option key={service.key} value={priceData[service.key].name}>
                      {priceData[service.key].name} - ₹{getServicePrice(service.key).toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Requirements</label>
                <textarea 
                  name="message" 
                  rows={3} 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Tell us about your website and requirements..." 
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-2 border-blue-300"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                {offerExpired ? 'Send Inquiry' : 'Send Package Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;