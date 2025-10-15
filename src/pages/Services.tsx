import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Link2,
  FileText,
  Users,
  Zap,
  ArrowRight,
  Star,
  Globe,
  Shield,
  BarChart3,
  Target,
  Rocket,
  CheckCircle,
  Award,
  Clock,
  Heart
} from 'lucide-react';

const Services = () => {
  // ✅ SERVICES ARRAY FOCUSED ON BACKLINK & SEO SERVICES
  const serviceCategories = [
    {
      title: 'Premium Backlink Services',
      icon: <Link2 className="h-12 w-12" />,
      description: 'High-quality dofollow backlink packages to boost your website rankings and authority',
      services: [
        {
          icon: <Rocket className="h-8 w-8" />,
          name: 'EAGLE DEMO Package',
          description: 'Perfect for testing our service quality with 10 premium backlinks',
          features: [
            '10 High-Quality Do-Follow Backlinks',
            'Premium Wiki Backlinks',
            'Social Bookmarking Links',
            '5 Authority Profile Links',
            'Delivery Within 3 Working Days',
            '100% Google Algorithm Safe',
            'Fast Index Process',
            'Perfect for Service Quality Testing'
          ],
          benefits: [
            'Test service quality risk-free',
            'Quick results in 3 days',
            'Google safe techniques',
            'Affordable starting point'
          ]
        },
        {
          icon: <Target className="h-8 w-8" />,
          name: 'EAGLE START Package',
          description: '300 premium backlinks for new websites needing initial ranking boost',
          features: [
            '300 Premium Quality Backlinks',
            'SEO For 2 Keywords & 1 URL',
            'Quality Mixed Backlinks from Multiple Sources',
            'Do-Follow Backlinks Only',
            'Premium Wiki Backlinks',
            'Press Release Backlinks',
            'Web 2.0 Property Links',
            'Social Bookmarking Links',
            '30 Authority Profile Links',
            'Delivery Within 7 Working Days'
          ],
          benefits: [
            'Strong foundation building',
            'Multiple backlink types',
            'Quick 7-day delivery',
            'Safe for new websites'
          ]
        },
        {
          icon: <Zap className="h-8 w-8" />,
          name: 'EAGLE PRO Package',
          description: '750 premium backlinks for established websites wanting faster growth',
          features: [
            '750 Premium Quality Backlinks',
            'SEO For 2 Keywords & 2 URLs',
            'Mixed High-Quality Backlink Profile',
            'Do-Follow Backlinks',
            'Premium Wiki Backlinks',
            'Press Release Distribution',
            'Web 2.0 Property Links',
            'Social Bookmarking Services',
            'Authority Profile Links',
            'Delivery Within 7 Working Days',
            '40 Days Ping Back Service'
          ],
          benefits: [
            'Rapid ranking improvement',
            'Comprehensive link profile',
            'Multiple URL targeting',
            'Extended ping service'
          ]
        },
        {
          icon: <Award className="h-8 w-8" />,
          name: 'EAGLE BUSINESS Package',
          description: '1200 premium backlinks for serious business growth and authority',
          features: [
            '1200 Premium Quality Backlinks',
            'SEO For 3 Keywords & 2 URLs',
            'Diverse Backlink Portfolio',
            'Do-Follow Backlinks',
            'Premium Wiki Backlinks',
            'Press Release Campaigns',
            'Web 2.0 Property Networks',
            'Social Bookmarking Strategy',
            'Authority Profile Building',
            'Delivery Within 7 Working Days',
            'Submit to 1020+ Search Engines'
          ],
          benefits: [
            'Business-level authority',
            'Multiple keyword targeting',
            'Wide search engine coverage',
            'Professional results'
          ]
        }
      ]
    },
    {
      title: 'Advanced SEO Packages',
      icon: <TrendingUp className="h-12 w-12" />,
      description: 'Comprehensive SEO packages with high-volume backlinks for maximum impact',
      services: [
        {
          icon: <BarChart3 className="h-8 w-8" />,
          name: 'EAGLE ENTERPRISE Package',
          description: '2000+ premium backlinks for enterprise-level website authority',
          features: [
            '2000+ Premium Quality Backlinks',
            'SEO For 6 Keywords & 2 URLs',
            'Enterprise-Level Backlink Diversity',
            'Do-Follow Backlinks Strategy',
            'Premium Wiki Backlinks Network',
            'Professional Press Releases',
            'Web 2.0 Property Portfolio',
            'Social Bookmarking Campaign',
            'Authority Profile Network',
            'Delivery Within 10 Working Days',
            'Super Fast Index Process'
          ],
          benefits: [
            'Enterprise authority building',
            'Multiple keyword clusters',
            'Faster indexing',
            'Professional campaign management'
          ]
        },
        {
          icon: <Globe className="h-8 w-8" />,
          name: 'EAGLE PREMIUM Package',
          description: '5000+ premium backlinks for dominating your industry search results',
          features: [
            '5000+ Premium Quality Backlinks',
            'SEO For 10 Keywords & 5 URLs',
            'Comprehensive Backlink Ecosystem',
            'Do-Follow Backlinks Architecture',
            'Premium Wiki Backlinks Network',
            'Strategic Press Release Distribution',
            'Web 2.0 Property Network',
            'Social Bookmarking Strategy',
            'Authority Profile System',
            'Delivery Within 10 Working Days',
            '40 Days Ping Back Service'
          ],
          benefits: [
            'Industry dominance',
            'Multiple URL optimization',
            'Comprehensive coverage',
            'Long-term ping benefits'
          ]
        },
        {
          icon: <Shield className="h-8 w-8" />,
          name: 'Google Safe Backlink Audit',
          description: 'Professional audit of your existing backlink profile for safety and optimization',
          features: [
            'Complete Backlink Profile Analysis',
            'Toxic Link Identification',
            'Google Penalty Risk Assessment',
            'Competitor Backlink Analysis',
            'Link Quality Scoring',
            'Disavow File Preparation',
            'Recovery Strategy Development',
            'White-hat Link Building Plan',
            'Monthly Monitoring Setup',
            'Risk Mitigation Recommendations'
          ],
          benefits: [
            'Google penalty prevention',
            'Clean backlink profile',
            'Competitor insights',
            'Safe growth strategy'
          ]
        }
      ]
    },
    {
      title: 'Specialized Link Building',
      icon: <Users className="h-12 w-12" />,
      description: 'Targeted link building strategies for specific industries and requirements',
      services: [
        {
          icon: <FileText className="h-8 w-8" />,
          name: 'Content-Based Link Building',
          description: 'High-quality content creation and placement for natural backlink acquisition',
          features: [
            'SEO-Optimized Article Writing',
            'Guest Post Outreach & Placement',
            'Industry Blog Contributions',
            'Expert Roundup Participation',
            'Resource Page Link Building',
            'Broken Link Building',
            'Skyscraper Technique Implementation',
            'Content Promotion Strategy',
            'Relationship Building with Publishers',
            'Natural Link Acquisition'
          ],
          benefits: [
            'Natural link profile',
            'High-quality referrals',
            'Industry authority',
            'Sustainable growth'
          ]
        },
        {
          icon: <Heart className="h-8 w-8" />,
          name: 'Local SEO Backlinks',
          description: 'Local citation building and geo-targeted backlinks for local businesses',
          features: [
            'Local Business Directory Submissions',
            'Google Business Profile Optimization',
            'Local Citation Building',
            'Geo-Targeted Backlink Strategy',
            'Local News Site Outreach',
            'Community Website Links',
            'Local Blog Features',
            'Map Pack Optimization',
            'Local Review Management',
            'Neighborhood Business Networks'
          ],
          benefits: [
            'Local search dominance',
            'Map pack visibility',
            'Community trust building',
            'Local customer acquisition'
          ]
        },
        {
          icon: <Clock className="h-8 w-8" />,
          name: 'Authority Building Service',
          description: 'Long-term authority building through high-DA backlinks and brand mentions',
          features: [
            'High DA/PA Backlink Acquisition',
            'Brand Mention Campaigns',
            'Industry Authority Site Links',
            'Educational Institution Links',
            'Government Website Outreach',
            'News Site Coverage',
            'Industry Award Submissions',
            'Expert Profile Building',
            'Thought Leadership Development',
            'Long-term Authority Strategy'
          ],
          benefits: [
            'Domain authority boost',
            'Industry recognition',
            'Trust signal establishment',
            'Long-term ranking stability'
          ]
        }
      ]
    },
    {
      title: 'Additional SEO Services',
      icon: <Search className="h-12 w-12" />,
      description: 'Complementary SEO services to enhance your overall search engine performance',
      services: [
        {
          icon: <CheckCircle className="h-8 w-8" />,
          name: 'Technical SEO Audit',
          description: 'Comprehensive technical SEO analysis and optimization recommendations',
          features: [
            'Website Crawl Analysis',
            'Indexation Issues Identification',
            'Site Speed Optimization Review',
            'Mobile-Friendliness Audit',
            'Structured Data Implementation',
            'XML Sitemap Optimization',
            'Robots.txt Analysis',
            'Canonical Issues Resolution',
            'HTTPS & Security Audit',
            'Core Web Vitals Optimization'
          ],
          benefits: [
            'Technical issue resolution',
            'Better crawl efficiency',
            'Improved user experience',
            'Higher quality scores'
          ]
        },
        {
          icon: <TrendingUp className="h-8 w-8" />,
          name: 'Keyword Research & Strategy',
          description: 'Comprehensive keyword research and targeting strategy for maximum ROI',
          features: [
            'Competitor Keyword Analysis',
            'Search Volume & Difficulty Analysis',
            'Long-tail Keyword Identification',
            'Buyer Intent Keyword Mapping',
            'Seasonal Keyword Planning',
            'Local Keyword Research',
            'Keyword Gap Analysis',
            'Content Opportunity Identification',
            'Ranking Difficulty Assessment',
            'ROI-Focused Keyword Strategy'
          ],
          benefits: [
            'Targeted traffic acquisition',
            'Higher conversion rates',
            'Competitive advantage',
            'Strategic content planning'
          ]
        },
        {
          icon: <BarChart3 className="h-8 w-8" />,
          name: 'Monthly SEO Performance Tracking',
          description: 'Ongoing SEO performance monitoring and optimization recommendations',
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
          benefits: [
            'Continuous improvement',
            'Algorithm update protection',
            'Performance optimization',
            'ROI measurement'
          ]
        }
      ]
    }
  ];

  return (
    <div>
      {/* ✅ SEO OPTIMIZED META TAGS */}
      <Helmet>
        <title>Premium Backlink Services | SEO & Link Building Packages - 360EagleWeb</title>
        <meta
          name="description"
          content="Professional backlink services: Premium dofollow backlinks, SEO packages, link building strategies. Boost your website rankings with 360EagleWeb's expert services."
        />
        <meta
          name="keywords"
          content="backlink services, SEO packages, dofollow backlinks, link building, premium backlinks, Google safe backlinks, 360EagleWeb services, SEO services"
        />
        <link rel="canonical" href="https://360eagleweb.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-bold mb-8 animate-bounce">
              🦅 Premium Backlink Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Backlink</span> Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Premium dofollow backlink packages designed to boost your website rankings and authority with Google-safe strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="h-4 w-4 mr-1" /> 1000+ Clients Served
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="h-4 w-4 mr-1" /> Google Safe Techniques
              </span>
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="h-4 w-4 mr-1" /> 4 Weeks Average Results
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={categoryIndex % 2 === 0 ? 'py-16 bg-white' : 'py-16 bg-gray-50'}>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  
                  {/* Features Section */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-700 flex items-start">
                          <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Section */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                      Key Benefits:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button - Redirects to Pricing Page */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/pricing"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-center"
                    >
                      <span>View Pricing</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-center"
                    >
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Our Backlink Services */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 360EagleWeb Backlink Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver premium backlink services that actually work and drive real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Google Safe</h3>
              <p className="text-gray-600">
                All our backlink strategies comply with Google's guidelines, ensuring your website stays safe from penalties while ranking higher.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Results</h3>
              <p className="text-gray-600">
                Quick 3-10 day delivery with super fast indexing. Most clients see ranking improvements within 2-4 weeks of service delivery.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We only build high-quality, relevant backlinks from authoritative sources that actually impact your search rankings positively.
              </p>
            </div>
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
            Choose from our premium backlink packages and start dominating search results today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>View All Packages</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get Free SEO Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;