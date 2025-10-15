import React, { useState } from "react";

const Privacy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-bold mb-8 animate-bounce">
            🦅 Premium Backlink Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy & Services</h1>
          <p className="text-blue-100 text-lg md:text-xl">
            How 360EagleWeb collects, uses, protects, and shares your information.
          </p>
          <p className="text-sm text-blue-200 mt-2">Last updated: {lastUpdated}</p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "privacy" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "services" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Our Services
            </button>
            <button
              onClick={() => setActiveTab("packages")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "packages" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Backlink Packages
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      {activeTab === "privacy" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            {/* Intro */}
            <div>
              <p>
                This Privacy Policy explains how <strong>360EagleWeb</strong> ("we", "us", "our") collects,
                uses, discloses, and safeguards personal information when you visit our website, engage
                with our SEO campaigns, or use our backlink services. By using our website/services,
                you agree to this Policy. If you do not agree, please discontinue use.
              </p>
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-900">
                <strong>Regulatory note:</strong> We strive to comply with applicable laws, including
                India's Digital Personal Data Protection (DPDP) Act and, where relevant, GDPR. References
                below to "lawful basis" and "data principal rights" reflect these standards.
              </div>
            </div>

            {/* What we collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1) Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Identity & Contact:</strong> name, email, phone, company, role.</li>
                <li><strong>Website Information:</strong> URLs, target keywords, competitor analysis data.</li>
                <li><strong>Technical:</strong> IP address, device/browser info, pages viewed, referrer URLs, session data.</li>
                <li><strong>Usage & Analytics:</strong> interactions with pages, forms, CTAs; events/pixels (GA4, etc.).</li>
                <li><strong>Marketing:</strong> preferences, consent, campaign engagement (opens, clicks, conversions).</li>
                <li><strong>Payment/Commercial:</strong> invoices, transaction metadata (processed via third-party gateways; we do not store card data).</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                Sensitive personal data is not intentionally collected. Please avoid sharing it.
              </p>
            </div>

            {/* Sources */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2) Sources of Data</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Direct:</strong> forms, emails, WhatsApp, calls, meetings.</li>
                <li><strong>Automated:</strong> cookies, tags, analytics, pixels.</li>
                <li><strong>Third-Party:</strong> ad platforms, CRM or lead gen tools you connect/provide.</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3) Cookies & Similar Technologies</h2>
              <p className="mb-2">
                We use cookies, pixels, and tags to enable site functionality, remember preferences,
                analyze performance, and measure/optimize campaigns.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential:</strong> required for core functionality.</li>
                <li><strong>Analytics:</strong> GA4/GTM events, traffic sources, on-site behavior.</li>
                <li><strong>Marketing:</strong> remarketing/conversion pixels (e.g., Google Ads).</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                You can manage cookies via your browser settings. Some features may not work without certain cookies.
              </p>
            </div>

            {/* How we use */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4) How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and improve our website and backlink services.</li>
                <li>Respond to inquiries, proposals, and support requests.</li>
                <li>Plan, execute, and optimize SEO campaigns; measure performance/ROI.</li>
                <li>Personalize experiences and recommend relevant services.</li>
                <li>Security, fraud prevention, troubleshooting, and diagnostics.</li>
                <li>Legal compliance and enforcement of our Terms/Agreement.</li>
              </ul>
            </div>

            {/* Lawful basis */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5) Legal Bases / Consent</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Consent:</strong> marketing communications, non-essential cookies.</li>
                <li><strong>Contract:</strong> to deliver backlink services requested/paid for.</li>
                <li><strong>Legitimate Interest:</strong> analytics, security, product improvement.</li>
                <li><strong>Legal Obligation:</strong> taxation, accounting, compliance.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                You may withdraw consent at any time (see "Your Rights" below).
              </p>
            </div>

            {/* Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6) How We Share Information</h2>
              <p className="mb-2">
                We do not sell personal data. We may share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Processors/Vendors:</strong> hosting, CDN, analytics (GA4/GTM), payment gateways, project tools.</li>
                <li><strong>Partners/Sub-contractors:</strong> only as needed for agreed backlink work, under confidentiality and DP terms.</li>
                <li><strong>Legal/Compliance:</strong> when required by law or to protect rights/safety.</li>
              </ul>
            </div>

            {/* International transfer */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7) International Transfers</h2>
              <p>
                Vendors may process data in other countries. We take reasonable steps to ensure appropriate
                safeguards (e.g., contractual protections) consistent with applicable law.
              </p>
            </div>

            {/* Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">8) Data Retention</h2>
              <p>
                We retain data only for as long as necessary for the purposes above or as required by law.
                Typical retention: marketing contacts up to 24 months of last interaction; project records
                aligned with statutory/accounting obligations.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">9) Security</h2>
              <p>
                We use reasonable technical and organizational measures to protect data (access controls,
                encryption in transit, least-privilege practices). No system is 100% secure; please share
                credentials via secure methods (password managers).
              </p>
            </div>

            {/* Children */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">10) Children's Privacy</h2>
              <p>
                Our services are intended for business users. We do not knowingly collect data from
                children under applicable age thresholds.
              </p>
            </div>

            {/* Your rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">11) Your Rights</h2>
              <p className="mb-2">
                Subject to law, you may have the right to: access, correct, update, delete, restrict or
                object to processing, withdraw consent, and request data portability.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access/Correction:</strong> get a copy of your data or ask us to fix inaccuracies.</li>
                <li><strong>Deletion ("Right to be Forgotten"):</strong> request erasure where legally permitted.</li>
                <li><strong>Consent Management:</strong> opt-out of marketing or withdraw cookie consent.</li>
                <li><strong>Objection/Restriction:</strong> where we rely on legitimate interests.</li>
                <li><strong>Portability:</strong> receive data in a commonly used format where feasible.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                We may verify your identity before actioning requests and may retain limited data as required by law.
              </p>
            </div>

            {/* How to exercise */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">12) How to Contact / Exercise Rights</h2>
              <p>
                Email <a className="text-blue-700 underline" href="mailto:info@360eagleweb.com">info@360eagleweb.com</a> or call{" "}
                <a className="text-blue-700 underline" href="tel:+919310533973">+91 93105 33973</a>. We aim to respond within 7 business days.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Address: 360EagleWeb, India
              </p>
            </div>

            {/* Marketing choices */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">13) Marketing Preferences</h2>
              <p>
                You can unsubscribe from emails using the footer link or by contacting us. For ads
                preferences, adjust settings in Google or your device's ad settings.
              </p>
            </div>

            {/* Third-party links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">14) Third-Party Websites</h2>
              <p>
                Our site may link to external sites we do not control. Their privacy practices apply to
                their content and services.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">15) Changes to This Policy</h2>
              <p>
                We may update this Policy from time to time. Material changes will be posted here with an
                updated "Last updated" date. Continued use signifies acceptance.
              </p>
            </div>

            {/* Summary card */}
            <div className="border rounded-xl p-5 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Summary</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>We collect contact, usage/analytics, and project data to deliver & improve backlink services.</li>
                <li>We use cookies/pixels (GA4, Google) with consent and provide opt-outs.</li>
                <li>We don't sell personal data; we share with vetted processors/vendors as needed.</li>
                <li>You have rights to access, correct, delete, object/restrict, and withdraw consent.</li>
              </ul>
            </div>

            <p className="text-xs text-gray-500">
              Disclaimer: This template is for general guidance and not legal advice. Please review with legal counsel.
            </p>
          </div>
        </section>
      )}

      {/* Services Tab */}
      {activeTab === "services" && (
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Premium SEO & Backlink Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Premium Backlink Packages */}
              <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 text-blue-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Premium Backlink Packages</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">Starting ₹1</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹999</span>
                    <span className="text-sm bg-red-500 text-white px-2 py-1 rounded ml-2">70% OFF</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ 10-5000+ Premium Backlinks</li>
                  <li>✓ 100% Dofollow Links</li>
                  <li>✓ Google Safe Techniques</li>
                  <li>✓ Fast 3-10 Day Delivery</li>
                  <li>✓ 40 Days Ping Back Service</li>
                  <li>✓ Submit to 1020+ Search Engines</li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm font-semibold text-yellow-800">Special Offer:</p>
                  <p className="text-xs text-yellow-700">5% Extra OFF on Advance Payment</p>
                </div>
              </div>

              {/* SEO Audit & Analysis */}
              <div className="bg-white border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 text-green-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">SEO Audit & Analysis</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹1,999</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹4,999</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Complete Backlink Profile Analysis</li>
                  <li>✓ Toxic Link Identification</li>
                  <li>✓ Google Penalty Risk Assessment</li>
                  <li>✓ Competitor Backlink Analysis</li>
                  <li>✓ Disavow File Preparation</li>
                  <li>✓ Recovery Strategy Development</li>
                </ul>
              </div>

              {/* Content-Based Link Building */}
              <div className="bg-white border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 text-purple-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Content Link Building</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹3,999</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹9,999</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ SEO-Optimized Article Writing</li>
                  <li>✓ Guest Post Outreach & Placement</li>
                  <li>✓ Industry Blog Contributions</li>
                  <li>✓ Expert Roundup Participation</li>
                  <li>✓ Resource Page Link Building</li>
                  <li>✓ Natural Link Acquisition</li>
                </ul>
              </div>

              {/* Local SEO Backlinks */}
              <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 text-orange-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Local SEO Backlinks</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹2,499</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹5,999</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Local Business Directory Submissions</li>
                  <li>✓ Google Business Profile Optimization</li>
                  <li>✓ Local Citation Building</li>
                  <li>✓ Geo-Targeted Backlink Strategy</li>
                  <li>✓ Local News Site Outreach</li>
                  <li>✓ Map Pack Optimization</li>
                </ul>
              </div>

              {/* Technical SEO Audit */}
              <div className="bg-white border border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 text-red-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Technical SEO Audit</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹2,999</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹6,999</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Website Crawl Analysis</li>
                  <li>✓ Indexation Issues Identification</li>
                  <li>✓ Site Speed Optimization Review</li>
                  <li>✓ Mobile-Friendliness Audit</li>
                  <li>✓ Structured Data Implementation</li>
                  <li>✓ Core Web Vitals Optimization</li>
                </ul>
              </div>

              {/* Monthly SEO Management */}
              <div className="bg-white border border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 text-indigo-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Monthly SEO Management</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹2,999/mo</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹6,999</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Monthly Ranking Reports</li>
                  <li>✓ Organic Traffic Analysis</li>
                  <li>✓ Backlink Growth Monitoring</li>
                  <li>✓ Competitor Performance Tracking</li>
                  <li>✓ Technical SEO Health Checks</li>
                  <li>✓ Strategy Adjustments</li>
                </ul>
                <p className="text-xs text-indigo-700 mt-3">* Minimum 3 months commitment</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Packages Tab */}
      {activeTab === "packages" && (
        <section className="py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Premium Backlink Packages</h2>
            <p className="text-center text-gray-600 mb-12">Get 70% OFF + 5% Extra on Advance Payment</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* EAGLE DEMO */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-green-300 transform hover:scale-105 transition-transform">
                <div className="bg-green-500 text-white rounded-t-xl p-6 text-center">
                  <h3 className="text-2xl font-bold">EAGLE DEMO</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₹1</span>
                    <span className="block text-green-100 text-sm line-through">₹999</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      10 Premium Backlinks
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      1 Keyword & 1 URL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      3 Days Delivery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Perfect for Testing
                    </li>
                  </ul>
                  <button className="w-full mt-4 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                    Try Demo - ₹1 Only
                  </button>
                </div>
              </div>

              {/* EAGLE PRO */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-yellow-400 transform hover:scale-105 transition-transform relative">
                <div className="absolute top-0 right-0 bg-yellow-500 text-blue-900 px-4 py-1 rounded-bl-lg rounded-tr-xl font-bold">
                  MOST POPULAR
                </div>
                <div className="bg-yellow-500 text-blue-900 rounded-t-xl p-6 text-center">
                  <h3 className="text-2xl font-bold">EAGLE PRO</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₹599</span>
                    <span className="block text-blue-800 text-sm line-through">₹1,999</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      750 Premium Backlinks
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      2 Keywords & 2 URLs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      7 Days Delivery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      40 Days Ping Service
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      Mixed High-Quality Profile
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 font-semibold text-center">Advance: ₹569 (5% OFF)</p>
                  </div>
                  <button className="w-full mt-2 bg-yellow-500 text-blue-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                    Get EAGLE PRO
                  </button>
                </div>
              </div>

              {/* EAGLE PREMIUM */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-purple-500 transform hover:scale-105 transition-transform">
                <div className="bg-purple-500 text-white rounded-t-xl p-6 text-center">
                  <h3 className="text-2xl font-bold">EAGLE PREMIUM</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₹2,999</span>
                    <span className="block text-purple-100 text-sm line-through">₹9,999</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      5000+ Premium Backlinks
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      10 Keywords & 5 URLs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      10 Days Delivery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Comprehensive Ecosystem
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Industry Dominance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Strategic Distribution
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 font-semibold text-center">Advance: ₹2,849 (5% OFF)</p>
                  </div>
                  <button className="w-full mt-2 bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                    Get EAGLE PREMIUM
                  </button>
                </div>
              </div>
            </div>

            {/* Special Offer Banner */}
            <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🎯 Limited Time Special Offer</h3>
              <div className="grid md:grid-cols-3 gap-6 text-blue-900">
                <div className="bg-white bg-opacity-90 p-4 rounded-lg">
                  <div className="text-3xl font-bold">70% OFF</div>
                  <div className="text-sm">On All Packages</div>
                </div>
                <div className="bg-white bg-opacity-90 p-4 rounded-lg">
                  <div className="text-3xl font-bold">5% EXTRA</div>
                  <div className="text-sm">On Advance Payment</div>
                </div>
                <div className="bg-white bg-opacity-90 p-4 rounded-lg">
                  <div className="text-3xl font-bold">₹1 DEMO</div>
                  <div className="text-sm">Test Our Service Quality</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="mt-12 text-center">
              <div className="bg-[#25D366] text-white rounded-xl p-6 inline-block">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-lg">Get Instant Quote on WhatsApp</p>
                    <p className="text-green-100">Quick response within 15 minutes</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/919310533973?text=Hi%20360EagleWeb,%20I'm%20interested%20in%20your%20backlink%20services"
                  className="inline-block mt-4 bg-white text-[#25D366] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Message Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Privacy;