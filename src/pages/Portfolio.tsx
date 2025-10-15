import React, { useState, useMemo } from 'react';
import { ExternalLink, Filter, Star, TrendingUp, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ['All', 'Branding', 'Digital Marketing', 'Websites', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'TechStart Solutions',
      category: 'Websites',
      description: 'Complete website redesign for a technology startup focusing on user experience and conversion optimization',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['WordPress', 'Responsive', 'SEO'],
      results: '300% increase in conversions',
      duration: '4 Weeks',
      client: 'Tech Startup',
      rating: 5
    },
    {
      id: 2,
      title: 'Fashion Hub Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for fashion retailer including logo, packaging, and brand guidelines',
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Logo Design', 'Brand Guidelines', 'Packaging'],
      results: 'Brand recognition increased by 250%',
      duration: '6 Weeks',
      client: 'Fashion Retail',
      rating: 5
    },
    {
      id: 3,
      title: 'FoodieDelight E-commerce',
      category: 'E-commerce',
      description: 'Custom Shopify store for food delivery service with integrated payment and mobile app',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shopify', 'Payment Gateway', 'Mobile App'],
      results: '500% increase in online orders',
      duration: '8 Weeks',
      client: 'Food Delivery',
      rating: 5
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive social media and PPC campaign strategy for local business expansion',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Facebook Ads', 'Google Ads', 'SEO'],
      results: '400% ROI on ad spend',
      duration: '12 Weeks',
      client: 'Local Business',
      rating: 5
    },
    {
      id: 5,
      title: 'HealthCare Plus Website',
      category: 'Websites',
      description: 'Professional website for healthcare provider with booking system and HIPAA compliance',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['WordPress', 'Booking System', 'HIPAA Compliant'],
      results: '200% increase in appointments',
      duration: '5 Weeks',
      client: 'Healthcare',
      rating: 5
    },
    {
      id: 6,
      title: 'Luxury Watches Brand',
      category: 'Branding',
      description: 'Premium brand identity for luxury watch retailer with photography and catalog design',
      image: 'https://images.pexels.com/photos/1697911/pexels-photo-1697911.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Luxury Branding', 'Photography', 'Catalog Design'],
      results: 'Premium positioning achieved',
      duration: '7 Weeks',
      client: 'Luxury Retail',
      rating: 5
    },
    {
      id: 7,
      title: 'E-learning Platform',
      category: 'Websites',
      description: 'Custom learning management system with video streaming and user management',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Custom Development', 'LMS', 'Video Streaming'],
      results: '10,000+ active learners',
      duration: '10 Weeks',
      client: 'Education',
      rating: 5
    },
    {
      id: 8,
      title: 'Real Estate Marketing',
      category: 'Digital Marketing',
      description: 'Complete digital marketing strategy for real estate with lead generation and virtual tours',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Lead Generation', 'Virtual Tours', 'Social Media'],
      results: '150% increase in qualified leads',
      duration: '8 Weeks',
      client: 'Real Estate',
      rating: 5
    },
    {
      id: 9,
      title: 'Organic Beauty Store',
      category: 'E-commerce',
      description: 'Shopify store for organic beauty products with subscription model and influencer integration',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shopify Plus', 'Subscription Model', 'Influencer Integration'],
      results: '600% growth in 6 months',
      duration: '6 Weeks',
      client: 'Beauty & Cosmetics',
      rating: 5
    }
  ];

  const filteredProjects = useMemo(() => 
    activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter),
    [activeFilter]
  );

  const stats = [
    { icon: TrendingUp, value: '100+', label: 'Projects Completed' },
    { icon: Users, value: '95%', label: 'Client Satisfaction' },
    { icon: Star, value: '300%', label: 'Average ROI Increase' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

  const TestimonialSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rajesh Sharma",
              company: "TechStart Solutions",
              text: "DiziGrow transformed our online presence completely. The website redesign resulted in 300% more conversions!",
              rating: 5
            },
            {
              name: "Priya Patel",
              company: "Fashion Hub",
              text: "Their branding expertise helped us stand out in a crowded market. Brand recognition skyrocketed!",
              rating: 5
            },
            {
              name: "Amit Kumar",
              company: "FoodieDelight",
              text: "The e-commerce store they built increased our orders by 500%. Exceptional work and support!",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-purple-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Portfolio | DiziGrow – Branding, Web, E-commerce & Digital Marketing</title>
        <meta
          name="description"
          content="Explore DiziGrow's portfolio showcasing branding, web development, e-commerce, and digital marketing projects. See how we help businesses grow."
        />
        <meta
          name="keywords"
          content="DiziGrow portfolio, digital marketing Jaipur, SEO projects, web design Jaipur, branding projects, e-commerce development, website redesign, Shopify store, social media campaigns"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dizigrow.com/portfolio" />

        <meta property="og:title" content="Portfolio | DiziGrow – Branding, Web, E-commerce & Digital Marketing" />
        <meta property="og:description" content="Check out our portfolio of successful branding, web development, e-commerce, and digital marketing projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dizigrow.com/portfolio" />
        <meta property="og:image" content="https://dizigrow.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | DiziGrow – Branding, Web, E-commerce & Digital Marketing" />
        <meta name="twitter:description" content="Explore our portfolio showcasing successful branding, web development, e-commerce, and digital marketing projects." />
        <meta name="twitter:image" content="https://dizigrow.com/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "DiziGrow Portfolio",
            "url": "https://dizigrow.com/portfolio",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://dizigrow.com/portfolio#project-${project.id}`,
              "name": project.title,
              "description": project.description
            }))
          })}
        </script>
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-400">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100 leading-relaxed">
              Discover the success stories of businesses we've transformed through innovative digital solutions and strategic marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#portfolio"
                className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                🚀 Explore Our Work
              </a>
              <a
                href="https://wa.me/919521281509"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                💬 Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section */}
      <section id="portfolio" className="py-8 bg-white sticky top-0 z-50 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-6 w-6 text-purple-600" />
              <span className="text-lg font-semibold text-gray-700">Filter Projects:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600 hover:shadow-md'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-purple-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {activeFilter === 'All' 
                ? 'Showcasing our diverse range of successful projects across all categories'
                : `Specialized ${activeFilter} projects delivering exceptional results`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      ⏱️ {project.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      👤 {project.client}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-4 border border-green-100">
                    <p className="text-green-700 font-semibold text-sm flex items-center">
                      📈 {project.results}
                    </p>
                  </div>
                  
                  <a
                    href={`https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20discuss%20a%20project%20similar%20to%20${encodeURIComponent(project.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 group"
                  >
                    <span>Discuss Similar Project</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Real results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your <span className="text-yellow-400">Success Story</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Let's discuss how we can help you achieve similar outstanding results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20start%20my%20success%20story%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
            >
              <span>💬 Start Your Project Today</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href="tel:+919521281509"
              className="border-2 border-white hover:bg-white hover:text-purple-600 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300"
            >
              📞 Call Us Now
            </a>
          </div>
          <p className="mt-6 text-purple-200">
            🚀 Get free consultation within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;