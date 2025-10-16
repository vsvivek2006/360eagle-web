import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Link2, 
  TrendingUp, 
  Globe, 
  Users,
  FileText,
  MapPin,
  Zap,
  ArrowRight,
  Star,
  Shield,
  CheckCircle,
  Rocket,
  Target,
  Award,
  BarChart3,
  ShoppingCart
} from 'lucide-react';

const Services = () => {
  // ✅ SERVICES ARRAY EXACTLY MATCHING PRICING PAGE
  const serviceCategories = [
    {
      title: '🔗 PREMIUM BACKLINKS',
      icon: <Link2 className="h-12 w-12" />,
      description: 'Buy Quality Backlinks - Affordable backlink packages with quantity options',
      services: [
        {
          icon: <FileText className="h-8 w-8" />,
          name: 'Blog 2.0 Backlinks',
          description: 'High-quality blog comment backlinks with minimum 50 links order',
          features: [
            'DoFollow Blog Comments',
            'High DA/PA Sites',
            'Relevant Niche Blogs',
            'Natural Anchor Text',
            'Manual Submission',
            '7 Days Delivery'
          ],
          startingPrice: '₹100 (50 links)',
          priceNote: '₹2 per link - Minimum 50 links'
        },
        {
          icon: <Users className="h-8 w-8" />,
          name: 'Social Bookmarking',
          description: 'Social bookmarking backlinks with minimum 100 links order',
          features: [
            'Social Bookmark Sites',
            'High Authority Platforms',
            'Instant Indexing',
            'Dofollow Links',
            'Bulk Submission',
            '3 Days Delivery'
          ],
          startingPrice: '₹100 (100 links)',
          priceNote: '₹1 per link - Minimum 100 links'
        },
        {
          icon: <Globe className="h-8 w-8" />,
          name: 'Wiki Backlinks',
          description: 'Wikipedia-style backlinks with minimum 100 links order',
          features: [
            'Wiki Site Backlinks',
            'High Trust Flow',
            'Editorial Links',
            'Natural Context',
            'Manual Placement',
            '5 Days Delivery'
          ],
          startingPrice: '₹200 (100 links)',
          priceNote: '₹2 per link - Minimum 100 links'
        }
      ]
    },
    {
      title: '🔥 MOZ DOMAIN AUTHORITY',
      icon: <TrendingUp className="h-12 w-12" />,
      description: 'Increase Moz DA - Boost your website\'s Domain Authority with premium link building',
      services: [
        {
          icon: <Zap className="h-8 w-8" />,
          name: 'Moz DA 25+',
          description: 'Increase your Domain Authority to 25+ with high-quality backlinks',
          features: [
            'DA Boost to 25+',
            'High Quality Backlinks',
            'Authority Site Links',
            'Natural Link Profile',
            '30 Days Completion',
            'Detailed Report'
          ],
          startingPrice: '₹699',
          priceNote: 'Original: ₹1,499 - Save 53%',
          popular: false
        },
        {
          icon: <Target className="h-8 w-8" />,
          name: 'Moz DA 35+',
          description: 'Boost Domain Authority to 35+ with premium quality links',
          features: [
            'DA Boost to 35+',
            'Premium Quality Links',
            'Authority .edu/.gov Links',
            'Natural Growth Pattern',
            '45 Days Completion',
            'White-hat Techniques'
          ],
          startingPrice: '₹799',
          priceNote: 'Original: ₹1,999 - Save 60%',
          popular: true
        },
        {
          icon: <Award className="h-8 w-8" />,
          name: 'Moz DA 40+',
          description: 'Achieve 40+ Domain Authority with ultra premium links',
          features: [
            'DA Boost to 40+',
            'Ultra Premium Links',
            'High Authority Networks',
            'Natural Anchor Text',
            '60 Days Completion',
            'Priority Support'
          ],
          startingPrice: '₹899',
          priceNote: 'Original: ₹2,499 - Save 64%',
          popular: false
        }
      ]
    },
    {
      title: '📈 AHREFS DOMAIN RATING',
      icon: <BarChart3 className="h-12 w-12" />,
      description: 'Increase Ahrefs DR - Improve your Domain Rating with high-quality campaigns',
      services: [
        {
          icon: <Rocket className="h-8 w-8" />,
          name: 'Ahrefs DR 25+',
          description: 'Increase Domain Rating to 25+ with quality referring domains',
          features: [
            'DR Boost to 25+',
            'Quality Referring Domains',
            'Natural Link Velocity',
            'Dofollow Links',
            '30 Days Completion',
            'Detailed Analytics'
          ],
          startingPrice: '₹999',
          priceNote: 'Original: ₹2,499 - Save 60%',
          popular: false
        },
        {
          icon: <Shield className="h-8 w-8" />,
          name: 'Ahrefs DR 35+',
          description: 'Boost Domain Rating to 35+ with premium referring domains',
          features: [
            'DR Boost to 35+',
            'Premium Referring Domains',
            'Authority Site Links',
            'Natural Growth',
            '45 Days Completion',
            'White-hat Strategy'
          ],
          startingPrice: '₹1,499',
          priceNote: 'Original: ₹3,999 - Save 63%',
          popular: true
        },
        {
          icon: <CheckCircle className="h-8 w-8" />,
          name: 'Ahrefs DR 40+',
          description: 'Achieve 40+ Domain Rating with ultra premium domains',
          features: [
            'DR Boost to 40+',
            'Ultra Premium Domains',
            'High DR Network Links',
            'Natural Pattern',
            '60 Days Completion',
            'Priority Implementation'
          ],
          startingPrice: '₹1,999',
          priceNote: 'Original: ₹4,999 - Save 60%',
          popular: false
        }
      ]
    },
    {
      title: '📍 ADDITIONAL SERVICES',
      icon: <MapPin className="h-12 w-12" />,
      description: 'Complete digital solutions for your business growth',
      services: [
        {
          icon: <Users className="h-8 w-8" />,
          name: 'GMB Profile Setup',
          description: 'Complete Google My Business profile setup and optimization',
          features: [
            'Business Profile Creation',
            'Category Optimization',
            'Photo Optimization',
            'Contact Details Setup',
            'Business Hours Setup',
            'Products/Services Listing'
          ],
          startingPrice: '₹2,500',
          priceNote: 'One-time setup fee'
        },
        {
          icon: <TrendingUp className="h-8 w-8" />,
          name: 'GMB Ranking',
          description: 'Monthly GMB ranking and optimization service',
          features: [
            'Local SEO Optimization',
            'Citation Building',
            'Review Management',
            'Regular Posts Updates',
            'Performance Tracking',
            'Monthly Report'
          ],
          startingPrice: '₹5,000/month',
          priceNote: 'Monthly subscription'
        },
        {
          icon: <Globe className="h-8 w-8" />,
          name: 'Website Development',
          description: 'Professional website development services',
          features: [
            'Landing Page: ₹2,000',
            '4-5 Page Website: ₹5,000',
            'Mobile Responsive Design',
            'SEO Optimized',
            'Contact Forms',
            'Google Analytics'
          ],
          startingPrice: '₹2,000 - ₹5,000',
          priceNote: 'Custom pricing available'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* ✅ SEO OPTIMIZED META TAGS */}
      <Helmet>
        <title>Premium SEO Services | Backlinks, Moz DA, Ahrefs DR - 360EagleWeb</title>
        <meta
          name="description"
          content="Professional SEO services: Premium backlinks, Moz DA increase, Ahrefs DR boost, GMB setup. Affordable packages starting from ₹100."
        />
        <meta
          name="keywords"
          content="backlink services, Moz DA increase, Ahrefs DR boost, GMB setup, website development, SEO services India"
        />
        <link rel="canonical" href="https://360eagleweb.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-bold mb-8 animate-bounce">
            🦅 Premium SEO Services
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">SEO Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Premium backlinks, Moz DA boost, Ahrefs DR increase, and complete digital solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
              <Star className="h-4 w-4 mr-1" /> 1500+ Clients Served
            </span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
              <Star className="h-4 w-4 mr-1" /> Google Safe Techniques
            </span>
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
              <Star className="h-4 w-4 mr-1" /> Affordable Pricing
            </span>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section 
          key={categoryIndex} 
          className={categoryIndex % 2 === 0 ? 'py-16 bg-white' : 'py-16 bg-gray-50'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-blue-600 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div 
                  key={serviceIndex} 
                  className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    service.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200'
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span>POPULAR</span>
                      </span>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  
                  {/* Service Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Starting Price */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6 border border-blue-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {service.startingPrice}
                      </div>
                      <div className="text-sm text-blue-700 font-medium">
                        {service.priceNote}
                      </div>
                    </div>
                  </div>
                  
                  {/* Features Section */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      Service Includes:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-700 flex items-start">
                          <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons - Only Order Now & View Pricing */}
                  <div className="space-y-3">
                    <Link
                      to="/pricing"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-center"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Order Now</span>
                    </Link>
                    <Link
                      to="/pricing"
                      className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-center"
                    >
                      <span>View Pricing</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 360EagleWeb Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver premium SEO services that actually work and drive real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Safe</h3>
              <p className="text-gray-600 text-sm">
                100% white-hat techniques that comply with Google guidelines
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                3-10 days delivery with super fast indexing process
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                High-quality backlinks from authoritative sources only
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1500+ Clients</h3>
              <p className="text-gray-600 text-sm">
                Trusted by businesses worldwide with proven results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order Your Services?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            View our complete pricing and place your order today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Order Now</span>
            </Link>
            <Link
              to="/pricing"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>View Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;