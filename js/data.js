// ============================================================
// MyAIKart – Product & Services Data
// ============================================================

const CATEGORIES = [
  { id: 'all-industries', name: 'For All Industries', icon: '🌐', color: '#232f3e' },
  { id: 'real-estate', name: 'Real Estate / PropTech', icon: '🏠', color: '#1a6b3c' },
  { id: 'fintech', name: 'FinTech', icon: '💰', color: '#c7511f' },
  { id: 'healthcare', name: 'Healthcare', icon: '🏥', color: '#007185' },
  { id: 'filmmaking-media', name: 'Filmmaking & Media', icon: '🎬', color: '#8b1a4a' },
  { id: 'services', name: 'Services', icon: '⚙️', color: '#565959' },
];

const PRODUCTS = [
  // ── 1. For All Industries ──────────────────────────────────
  {
    id: 'enxo',
    name: 'Enxo – AI Meeting Intelligence Platform',
    shortName: 'Enxo',
    category: 'all-industries',
    tagline: 'Turn Every Meeting Into Actionable Intelligence',
    description: 'Automatically captures speaker-level transcripts, action points, and summaries from offline meetings, eliminating manual documentation costs. Transforms conversations into structured intelligence that improves execution speed and accountability across teams.',
    features: [
      'Speaker-level transcription',
      'Auto-generated action items',
      'Meeting summaries & analytics',
      'Team accountability tracking',
      'Integration with calendars & project tools'
    ],
    rating: 4.7,
    reviews: 2340,
    price: 'Starting at $29/user/mo',
    badge: "Best Seller",
    caseStudy: {
      title: 'How TechCorp Saved 1,200 Hours/Year on Meeting Documentation',
      company: 'TechCorp Industries',
      challenge: 'TechCorp had 200+ weekly meetings across 15 departments with no consistent documentation process. Action items were lost and follow-ups missed.',
      solution: 'Deployed Enxo across all departments, integrating with their existing calendar and Slack workflows.',
      results: ['87% reduction in meeting follow-up time', '1,200+ hours saved annually', '34% improvement in project execution speed', 'ROI achieved within 2 months']
    },
    companiesUsing: [
      { name: 'TechCorp Industries', logo: 'TC', industry: 'Technology' },
      { name: 'Global Consulting Group', logo: 'GC', industry: 'Consulting' },
      { name: 'Pinnacle Finance', logo: 'PF', industry: 'Finance' },
      { name: 'UrbanScale Architects', logo: 'UA', industry: 'Architecture' },
      { name: 'MedVista Health', logo: 'MV', industry: 'Healthcare' }
    ],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'enxtoffice',
    name: 'EnxtOffice – AI Workforce Automation Suite',
    shortName: 'EnxtOffice',
    category: 'all-industries',
    tagline: 'One Platform for All Your Workforce Operations',
    description: 'Unifies attendance, payroll automation, task allocation, and WhatsApp-based follow-ups into one intelligent operations system. Reduces HR overhead, improves workforce productivity, and ensures real-time operational visibility for leadership.',
    features: [
      'Smart attendance management',
      'Automated payroll processing',
      'AI task allocation engine',
      'WhatsApp-based follow-ups',
      'Leadership dashboards & analytics'
    ],
    rating: 4.5,
    reviews: 1876,
    price: 'Starting at $19/user/mo',
    badge: "Amazon's Choice",
    caseStudy: {
      title: 'ManufacturePro Cuts HR Costs by 60% with EnxtOffice',
      company: 'ManufacturePro Ltd.',
      challenge: 'Managing 5,000+ factory workers across 8 locations with manual attendance and payroll systems caused frequent errors and delays.',
      solution: 'Full deployment of EnxtOffice with biometric integration and WhatsApp-based task management.',
      results: ['60% reduction in HR operational costs', '99.2% payroll accuracy (up from 91%)', 'Real-time visibility across all 8 locations', '45% faster task completion rates']
    },
    companiesUsing: [
      { name: 'ManufacturePro Ltd.', logo: 'MP', industry: 'Manufacturing' },
      { name: 'RetailMax Global', logo: 'RM', industry: 'Retail' },
      { name: 'BuildRight Construction', logo: 'BR', industry: 'Construction' },
      { name: 'FreshFarms Agri', logo: 'FF', industry: 'Agriculture' },
      { name: 'LogiTrans Shipping', logo: 'LT', industry: 'Logistics' }
    ],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'gkcms',
    name: 'Global Knowledge Client Management System',
    shortName: 'GKCMS',
    category: 'all-industries',
    tagline: 'Centralize Client Communication, Maximize Retention',
    description: 'Centralizes client communication across WhatsApp and automated outbound calls with AI-driven follow-ups and reminders. Increases client retention, improves response time, and drives measurable revenue through structured engagement pipelines.',
    features: [
      'WhatsApp business integration',
      'Automated outbound calling',
      'AI-driven follow-up scheduling',
      'Client engagement analytics',
      'Revenue pipeline tracking'
    ],
    rating: 4.6,
    reviews: 1432,
    price: 'Starting at $39/user/mo',
    badge: null,
    caseStudy: {
      title: 'LegalEase Firm Boosts Client Retention by 42%',
      company: 'LegalEase Associates',
      challenge: 'High-value legal clients were slipping through the cracks due to inconsistent follow-ups and fragmented communication channels.',
      solution: 'Implemented GKCMS to unify all client touchpoints with automated reminders and engagement tracking.',
      results: ['42% increase in client retention', '3x faster response times', '$2.4M additional revenue from re-engaged clients', '28% reduction in client churn']
    },
    companiesUsing: [
      { name: 'LegalEase Associates', logo: 'LE', industry: 'Legal' },
      { name: 'WealthBridge Advisors', logo: 'WB', industry: 'Finance' },
      { name: 'CloudNine SaaS', logo: 'CN', industry: 'Technology' },
      { name: 'EduSpark Academy', logo: 'ES', industry: 'Education' },
      { name: 'PrimeRealty Group', logo: 'PR', industry: 'Real Estate' }
    ],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'ai-reputation-manager',
    name: 'AI Reputation Manager',
    shortName: 'AI Reputation Manager',
    category: 'all-industries',
    tagline: 'Protect Your Brand, Amplify Your Trust',
    description: 'Automatically responds to Instagram, LinkedIn, Google Reviews, and DMs using sentiment-aware AI automation. Protects brand image, boosts public engagement, and converts social interactions into high-trust customer acquisition channels.',
    features: [
      'Multi-platform sentiment analysis',
      'Auto-response to reviews & DMs',
      'Brand health dashboard',
      'Crisis detection alerts',
      'Engagement-to-conversion tracking'
    ],
    rating: 4.4,
    reviews: 987,
    price: 'Starting at $49/mo',
    badge: null,
    caseStudy: {
      title: 'DineDelight Restaurants Turns Negative Reviews Into Revenue',
      company: 'DineDelight Restaurant Chain',
      challenge: '1,500+ monthly reviews across 40 locations were going unanswered, leading to a declining average rating from 4.2 to 3.6 stars.',
      solution: 'Deployed AI Reputation Manager across all locations with sentiment-aware auto-responses and escalation protocols.',
      results: ['Average rating improved from 3.6 to 4.5 stars', '95% of reviews responded to within 1 hour', '23% increase in footfall from improved online reputation', 'Crisis incidents detected 6x faster']
    },
    companiesUsing: [
      { name: 'DineDelight Restaurants', logo: 'DD', industry: 'Hospitality' },
      { name: 'FashionForward', logo: 'FW', industry: 'Retail' },
      { name: 'AutoElite Motors', logo: 'AE', industry: 'Automotive' },
      { name: 'GreenLeaf Organics', logo: 'GL', industry: 'Food & Beverage' },
      { name: 'StayLuxe Hotels', logo: 'SL', industry: 'Hospitality' }
    ],
    image: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  },

  // ── 2. Real Estate / PropTech ──────────────────────────────
  {
    id: 'ai-virtual-tour',
    name: 'AI Virtual Tour Generator',
    shortName: 'AI Virtual Tour',
    category: 'real-estate',
    tagline: 'Immersive Property Experiences, Zero Physical Visits',
    description: 'Converts raw property videos into immersive, interactive virtual tours using AI rendering and scene reconstruction. Accelerates buyer decisions, reduces physical site visit costs, and increases listing conversion rates.',
    features: [
      'AI scene reconstruction from video',
      '360° interactive walkthroughs',
      'Auto-generated property highlights',
      'Embeddable tour widgets',
      'Analytics on viewer engagement'
    ],
    rating: 4.8,
    reviews: 1654,
    price: 'Starting at $99/property',
    badge: "Best Seller",
    caseStudy: {
      title: 'LuxeHomes Increases Conversions 3x with Virtual Tours',
      company: 'LuxeHomes Developers',
      challenge: 'Luxury properties required multiple in-person visits before purchase decisions, costing $50K+ monthly in logistics and agent time.',
      solution: 'Integrated AI Virtual Tour Generator for all new listings, enabling remote first-impression tours.',
      results: ['3x increase in listing conversion rates', '68% reduction in physical site visits', '$600K annual savings in logistics costs', 'Average decision time reduced from 45 to 12 days']
    },
    companiesUsing: [
      { name: 'LuxeHomes Developers', logo: 'LH', industry: 'Real Estate' },
      { name: 'MetroProp Realty', logo: 'MR', industry: 'Real Estate' },
      { name: 'SkyView Towers', logo: 'SV', industry: 'Real Estate' },
      { name: 'GreenBuild Properties', logo: 'GB', industry: 'Real Estate' },
      { name: 'CityScape Agents', logo: 'CS', industry: 'Real Estate' }
    ],
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: '3-tier-crm',
    name: '3-Tier AI Real Estate CRM',
    shortName: '3-Tier CRM',
    category: 'real-estate',
    tagline: 'Developer → Broker → Agent, All Connected',
    description: 'A structured CRM for developers, brokers, and agents with advertisement aggregation and workflow automation. Improves deal visibility, reduces lead leakage, and streamlines large-scale real estate operations.',
    features: [
      '3-tier hierarchy management',
      'Ad aggregation & attribution',
      'Automated deal pipeline',
      'Commission tracking',
      'Performance analytics per tier'
    ],
    rating: 4.5,
    reviews: 892,
    price: 'Starting at $79/user/mo',
    badge: null,
    caseStudy: {
      title: 'RealtorNation Eliminates 90% Lead Leakage',
      company: 'RealtorNation Network',
      challenge: 'A network of 200 brokers and 1,500 agents was losing 40% of leads due to manual handoffs and fragmented tracking.',
      solution: 'Deployed 3-Tier CRM connecting all developers, brokers, and agents in a unified pipeline.',
      results: ['90% reduction in lead leakage', '$12M additional revenue captured in Year 1', 'Broker productivity increased by 55%', 'Full visibility across 200 broker offices']
    },
    companiesUsing: [
      { name: 'RealtorNation Network', logo: 'RN', industry: 'Real Estate' },
      { name: 'UrbanEdge Developers', logo: 'UE', industry: 'Real Estate' },
      { name: 'BrickStone Realty', logo: 'BS', industry: 'Real Estate' },
      { name: 'PrimeAcre Group', logo: 'PA', industry: 'Real Estate' },
      { name: 'HorizonLands', logo: 'HL', industry: 'Real Estate' }
    ],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 'ai-calling-agent',
    name: 'AI Calling Agent – 24/7 Lead Support',
    shortName: 'AI Calling Agent',
    category: 'real-estate',
    tagline: 'Never Miss a Lead, Day or Night',
    description: 'An always-active AI voice agent that handles inbound queries and screens outbound leads instantly. Cuts support costs while increasing lead qualification rates and response speed beyond human limits.',
    features: [
      '24/7 AI voice support',
      'Intelligent lead screening',
      'Multi-language support',
      'CRM auto-sync',
      'Call analytics & recordings'
    ],
    rating: 4.6,
    reviews: 1123,
    price: 'Starting at $199/mo',
    badge: "Amazon's Choice",
    caseStudy: {
      title: 'PropConnect Qualifies 5x More Leads After Hours',
      company: 'PropConnect Realty',
      challenge: '65% of property inquiries came outside business hours and were lost due to no after-hours support.',
      solution: 'Deployed AI Calling Agent to handle all after-hours calls and screen leads during business hours.',
      results: ['5x increase in qualified leads from after-hours calls', '40% reduction in call center costs', 'Average response time under 3 seconds', 'Lead qualification accuracy of 94%']
    },
    companiesUsing: [
      { name: 'PropConnect Realty', logo: 'PC', industry: 'Real Estate' },
      { name: 'DreamHome Estates', logo: 'DH', industry: 'Real Estate' },
      { name: 'NexGen Properties', logo: 'NG', industry: 'Real Estate' },
      { name: 'SilverKey Rentals', logo: 'SK', industry: 'Real Estate' },
      { name: 'AnchorPoint Realty', logo: 'AP', industry: 'Real Estate' }
    ],
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 'ai-lead-management',
    name: 'AI Lead Management Engine',
    shortName: 'AI Lead Engine',
    category: 'real-estate',
    tagline: 'From Cold Lead to Closed Deal, Automatically',
    description: 'Automates lead capture, nurturing, scoring, and follow-up workflows across marketing channels. Maximizes ROI on ad spend by converting cold prospects into structured sales opportunities.',
    features: [
      'Multi-channel lead capture',
      'AI lead scoring & prioritization',
      'Automated nurture sequences',
      'Ad spend ROI attribution',
      'Conversion funnel analytics'
    ],
    rating: 4.7,
    reviews: 1345,
    price: 'Starting at $59/mo',
    badge: null,
    caseStudy: {
      title: 'EstateKing Doubles ROI on Digital Ad Spend',
      company: 'EstateKing Properties',
      challenge: 'Spending $200K/month on digital ads with only 2% lead-to-conversion rate due to poor follow-up timing.',
      solution: 'Implemented AI Lead Management Engine with automated scoring and nurture sequences triggered by behavioral data.',
      results: ['Lead-to-conversion rate improved from 2% to 8.5%', 'Ad spend ROI doubled within 90 days', '70% reduction in manual follow-up effort', 'Sales cycle shortened by 35%']
    },
    companiesUsing: [
      { name: 'EstateKing Properties', logo: 'EK', industry: 'Real Estate' },
      { name: 'BlueSky Developers', logo: 'BD', industry: 'Real Estate' },
      { name: 'MarbleArch Homes', logo: 'MA', industry: 'Real Estate' },
      { name: 'PeakView Realty', logo: 'PV', industry: 'Real Estate' },
      { name: 'TrustHaven Properties', logo: 'TH', industry: 'Real Estate' }
    ],
    image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  // ── 3. FinTech ─────────────────────────────────────────────
  {
    id: 'amc-data-aggregation',
    name: 'AMC Data Aggregation & Financial APIs',
    shortName: 'AMC Data APIs',
    category: 'fintech',
    tagline: 'Unified Financial Data, One API',
    description: 'Aggregates structured data from all Asset Management Companies to power unified financial APIs. Enables fintech platforms to scale faster with real-time, compliant, and reliable financial intelligence.',
    features: [
      'All-AMC data aggregation',
      'RESTful & WebSocket APIs',
      'Real-time data feeds',
      'Regulatory compliance layer',
      'Custom data schema support'
    ],
    rating: 4.8,
    reviews: 876,
    price: 'Starting at $499/mo',
    badge: "Best Seller",
    caseStudy: {
      title: 'WealthApp Launches 6 Months Faster with AMC APIs',
      company: 'WealthApp Technologies',
      challenge: 'Building direct integrations with 44 AMCs would have required 18+ months and a team of 12 engineers.',
      solution: 'Used AMC Data Aggregation APIs to access all fund data through a single integration point.',
      results: ['Launched 6 months ahead of schedule', 'Saved $1.2M in development costs', '99.99% API uptime', 'Compliance-ready from day one']
    },
    companiesUsing: [
      { name: 'WealthApp Technologies', logo: 'WA', industry: 'FinTech' },
      { name: 'InvestSmart Platform', logo: 'IS', industry: 'FinTech' },
      { name: 'CapitalFlow Analytics', logo: 'CF', industry: 'FinTech' },
      { name: 'MoneyMint Digital', logo: 'MM', industry: 'FinTech' },
      { name: 'FinEdge Solutions', logo: 'FE', industry: 'FinTech' }
    ],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'smart-trading',
    name: 'Smart AI Trading Platform',
    shortName: 'Smart Trading',
    category: 'fintech',
    tagline: 'Trade Smarter, Not Harder',
    description: 'AI-driven trading engine using predictive analytics and adaptive risk models. Enhances portfolio performance while reducing emotional trading bias and operational inefficiencies.',
    features: [
      'Predictive price analytics',
      'Adaptive risk management',
      'Emotion-free automated trading',
      'Multi-asset class support',
      'Real-time portfolio optimization'
    ],
    rating: 4.6,
    reviews: 1567,
    price: 'Starting at $149/mo',
    badge: null,
    caseStudy: {
      title: 'TradeMasters Achieves 28% Better Returns with AI',
      company: 'TradeMasters Capital',
      challenge: 'Human traders were making emotional decisions during market volatility, leading to inconsistent returns and high drawdowns.',
      solution: 'Deployed Smart AI Trading Platform for automated execution with adaptive risk management.',
      results: ['28% improvement in annualized returns', '45% reduction in maximum drawdown', 'Zero emotional trading errors', '24/7 market monitoring across 5 exchanges']
    },
    companiesUsing: [
      { name: 'TradeMasters Capital', logo: 'TM', industry: 'Finance' },
      { name: 'AlphaEdge Fund', logo: 'AF', industry: 'Finance' },
      { name: 'RetailTrader Pro', logo: 'RT', industry: 'FinTech' },
      { name: 'QuantumVest Group', logo: 'QV', industry: 'Finance' },
      { name: 'SwiftTrade Global', logo: 'ST', industry: 'FinTech' }
    ],
    image: 'linear-gradient(135deg, #f5576c 0%, #ff9a9e 100%)'
  },
  {
    id: 'ai-kyc',
    name: 'AI-Powered Online KYC System',
    shortName: 'AI KYC System',
    category: 'fintech',
    tagline: 'Onboard Customers in Minutes, Not Days',
    description: 'Automates document verification, face authentication, and secure e-sign workflows. Reduces onboarding time, ensures regulatory compliance, and prevents identity fraud at scale.',
    features: [
      'AI document verification',
      'Liveness-detected face auth',
      'Secure e-signature workflows',
      'Regulatory compliance engine',
      'Fraud detection & prevention'
    ],
    rating: 4.7,
    reviews: 2103,
    price: 'Starting at $0.50/verification',
    badge: "Amazon's Choice",
    caseStudy: {
      title: 'NeoBank Reduces Onboarding Time from 3 Days to 4 Minutes',
      company: 'NeoBank Digital',
      challenge: 'Manual KYC was taking 3-5 business days per customer, causing a 60% drop-off rate during onboarding.',
      solution: 'Integrated AI KYC System for real-time document verification and biometric authentication.',
      results: ['Onboarding time reduced from 3 days to 4 minutes', 'Customer drop-off rate decreased from 60% to 8%', '99.7% fraud detection accuracy', '100% regulatory compliance maintained']
    },
    companiesUsing: [
      { name: 'NeoBank Digital', logo: 'NB', industry: 'Banking' },
      { name: 'QuickLoan Finance', logo: 'QL', industry: 'FinTech' },
      { name: 'InsureNow Digital', logo: 'IN', industry: 'Insurance' },
      { name: 'CryptoGuard Exchange', logo: 'CG', industry: 'Crypto' },
      { name: 'PayEase Wallet', logo: 'PE', industry: 'FinTech' }
    ],
    image: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
  },
  {
    id: 'unified-banking-dashboard',
    name: 'Unified Banking & Trading Dashboard',
    shortName: 'Unified Dashboard',
    category: 'fintech',
    tagline: 'All Your Financial Assets, One View',
    description: 'Consolidates all trading accounts and banking assets into a single intelligent financial control center. Improves decision-making with real-time asset visibility and cross-platform financial analytics.',
    features: [
      'Multi-bank account aggregation',
      'Cross-platform trading view',
      'Real-time net worth tracking',
      'Customizable financial widgets',
      'Tax-ready reporting'
    ],
    rating: 4.5,
    reviews: 934,
    price: 'Starting at $29/mo',
    badge: null,
    caseStudy: {
      title: 'PrivateWealth Advisors Saves 15 Hours/Week per Advisor',
      company: 'PrivateWealth Advisors',
      challenge: 'Advisors were logging into 8+ platforms daily to compile client portfolio views, wasting 15+ hours per week.',
      solution: 'Deployed Unified Dashboard connecting all banking and trading accounts for each client.',
      results: ['15 hours/week saved per advisor', 'Client satisfaction scores up 40%', 'Assets under management grew 25%', 'Real-time portfolio alerts improved response time by 80%']
    },
    companiesUsing: [
      { name: 'PrivateWealth Advisors', logo: 'PW', industry: 'Finance' },
      { name: 'ClearView Capital', logo: 'CV', industry: 'Finance' },
      { name: 'FamilyOffice Pro', logo: 'FO', industry: 'Finance' },
      { name: 'SmartSaver App', logo: 'SS', industry: 'FinTech' },
      { name: 'GlobalInvest Partners', logo: 'GI', industry: 'Finance' }
    ],
    image: 'linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)'
  },

  // ── 4. Healthcare ──────────────────────────────────────────
  {
    id: 'ai-patient-management',
    name: 'AI Patient Management System',
    shortName: 'AI PMS',
    category: 'healthcare',
    tagline: 'Smarter Patient Care, End to End',
    description: 'Digitizes patient intake, prescriptions, billing, and follow-ups into one centralized healthcare platform. Reduces administrative errors, improves patient experience, and increases hospital operational efficiency.',
    features: [
      'Digital patient intake forms',
      'AI prescription management',
      'Automated billing & insurance',
      'Follow-up scheduling',
      'Patient engagement portal'
    ],
    rating: 4.7,
    reviews: 1789,
    price: 'Starting at $199/mo',
    badge: "Best Seller",
    caseStudy: {
      title: 'CityHealth Hospital Reduces Admin Errors by 92%',
      company: 'CityHealth Hospital Network',
      challenge: 'Paper-based patient management across 12 facilities led to frequent prescription errors, billing disputes, and missed follow-ups.',
      solution: 'Full deployment of AI Patient Management System with centralized digital workflows.',
      results: ['92% reduction in administrative errors', 'Patient wait times reduced by 35%', '$1.8M annual savings in administrative costs', 'Patient satisfaction score increased from 3.2 to 4.6/5']
    },
    companiesUsing: [
      { name: 'CityHealth Hospital Network', logo: 'CH', industry: 'Healthcare' },
      { name: 'MediCare Plus Clinics', logo: 'MC', industry: 'Healthcare' },
      { name: 'WellSpring Diagnostics', logo: 'WS', industry: 'Healthcare' },
      { name: 'LifeLine Emergency', logo: 'LL', industry: 'Healthcare' },
      { name: 'HealFirst Hospitals', logo: 'HF', industry: 'Healthcare' }
    ],
    image: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
  },
  {
    id: 'smart-hospital-monitoring',
    name: 'Smart Hospital Room Monitoring',
    shortName: 'Smart Monitoring',
    category: 'healthcare',
    tagline: 'AI Eyes Where It Matters Most',
    description: 'Uses thermal sensing and AI monitoring for patient welfare tracking and visitor management. Enhances safety, optimizes staff allocation, and improves hospital compliance standards.',
    features: [
      'Thermal patient monitoring',
      'Fall detection & alerts',
      'Visitor management system',
      'Staff allocation optimization',
      'Compliance reporting dashboard'
    ],
    rating: 4.6,
    reviews: 654,
    price: 'Starting at $299/room/mo',
    badge: null,
    caseStudy: {
      title: 'SafeCare Hospital Prevents 340 Fall Incidents in Year One',
      company: 'SafeCare Medical Center',
      challenge: 'An aging patient population resulted in 45+ fall incidents monthly, leading to liability concerns and patient harm.',
      solution: 'Installed Smart Monitoring in all 200 patient rooms with real-time fall detection and nurse alerts.',
      results: ['340 fall incidents prevented in Year 1', 'Nurse response time improved by 70%', 'Insurance liability costs reduced by $2.1M', 'Full Joint Commission compliance achieved']
    },
    companiesUsing: [
      { name: 'SafeCare Medical Center', logo: 'SC', industry: 'Healthcare' },
      { name: 'ElderCare Facilities', logo: 'EC', industry: 'Healthcare' },
      { name: 'NeuroHealth Institute', logo: 'NH', industry: 'Healthcare' },
      { name: 'BrightStar Senior Living', logo: 'BL', industry: 'Healthcare' },
      { name: 'PrimaCare Rehab', logo: 'PR', industry: 'Healthcare' }
    ],
    image: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
  },
  {
    id: 'sbbm-emergency',
    name: 'SBBM – National Emergency Allocation Helpline',
    shortName: 'SBBM',
    category: 'healthcare',
    tagline: 'Right Bed, Right Time, Every Time',
    description: 'AI-powered hospital allocation system for real-time emergency bed management and routing. Optimizes healthcare resource distribution and reduces life-critical response delays.',
    features: [
      'Real-time bed availability tracking',
      'AI-optimized patient routing',
      'Emergency response coordination',
      'Hospital capacity forecasting',
      'Government reporting dashboards'
    ],
    rating: 4.9,
    reviews: 432,
    price: 'Contact for Government Pricing',
    badge: "Top Rated",
    caseStudy: {
      title: 'Metro City Reduces Emergency Response Delays by 67%',
      company: 'Metro City Health Authority',
      challenge: 'During peak periods, patients were being routed to full hospitals, causing life-threatening delays averaging 45 minutes.',
      solution: 'Deployed SBBM across 85 hospitals with real-time bed tracking and AI-optimized routing.',
      results: ['67% reduction in emergency routing delays', 'Average routing time reduced from 45 to 8 minutes', '12% improvement in critical care survival rates', 'System handles 10,000+ daily queries']
    },
    companiesUsing: [
      { name: 'Metro City Health Authority', logo: 'MH', industry: 'Government' },
      { name: 'National Health Service Dept.', logo: 'NS', industry: 'Government' },
      { name: 'RegionalCare Alliance', logo: 'RC', industry: 'Healthcare' },
      { name: 'EmergencyFirst Network', logo: 'EF', industry: 'Healthcare' },
      { name: 'UnityHealth Systems', logo: 'UH', industry: 'Healthcare' }
    ],
    image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  {
    id: 'pandemic-prediction',
    name: 'Pandemic & Zoonotic Disease Prediction Models',
    shortName: 'Disease Prediction AI',
    category: 'healthcare',
    tagline: 'Predict Outbreaks Before They Escalate',
    description: 'AI models analyzing environmental and health data to predict outbreaks before escalation. Enables governments and institutions to act early, reducing economic and public health impact.',
    features: [
      'Multi-source data fusion',
      'Predictive outbreak modeling',
      'Geographic heat mapping',
      'Early warning alert system',
      'Policy impact simulations'
    ],
    rating: 4.8,
    reviews: 312,
    price: 'Contact for Institutional Pricing',
    badge: null,
    caseStudy: {
      title: 'WHO Regional Office Detects Outbreak 3 Weeks Early',
      company: 'WHO Southeast Asia Regional Office',
      challenge: 'Traditional surveillance detected outbreaks only after significant spread, limiting response effectiveness.',
      solution: 'Integrated Pandemic Prediction Models with existing surveillance data for early warning capabilities.',
      results: ['Detected outbreak 3 weeks before traditional methods', 'Enabled proactive containment saving estimated 15,000 cases', 'False positive rate below 5%', 'Now monitoring 12 zoonotic disease vectors']
    },
    companiesUsing: [
      { name: 'WHO Regional Office', logo: 'WO', industry: 'Global Health' },
      { name: 'National CDC Equivalent', logo: 'NC', industry: 'Government' },
      { name: 'BioWatch Analytics', logo: 'BW', industry: 'BioTech' },
      { name: 'GlobalGuard Health', logo: 'GG', industry: 'Healthcare' },
      { name: 'VaxReady Foundation', logo: 'VR', industry: 'Non-Profit' }
    ],
    image: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
  },

  // ── 5. Filmmaking & Media ──────────────────────────────────
  {
    id: 'generative-documentary',
    name: 'Generative Documentary Creation Engine',
    shortName: 'Documentary AI',
    category: 'filmmaking-media',
    tagline: 'Recreate Stories, Redefine Filmmaking',
    description: 'Recreates real individuals across different life stages using AI generation and advanced VFX workflows. Reduces production costs while unlocking new storytelling formats previously impossible at scale.',
    features: [
      'AI age progression/regression',
      'Photorealistic scene generation',
      'Automated VFX pipelines',
      'Multi-era character rendering',
      'Script-to-scene automation'
    ],
    rating: 4.9,
    reviews: 567,
    price: 'Starting at $2,999/project',
    badge: "Top Rated",
    caseStudy: {
      title: 'HistoryLens Studio Produces Award-Winning Documentary in Half the Time',
      company: 'HistoryLens Studios',
      challenge: 'A historical documentary required recreating 30+ individuals across 5 decades — traditional VFX quotes exceeded $2M.',
      solution: 'Used Generative Documentary Engine to recreate characters using AI generation with 95% visual fidelity.',
      results: ['Production cost reduced by 75% (from $2M to $500K)', 'Completed 4 months ahead of schedule', 'Won Best Documentary at 3 film festivals', 'Opened new revenue stream for historical content']
    },
    companiesUsing: [
      { name: 'HistoryLens Studios', logo: 'HS', industry: 'Film' },
      { name: 'DocuVerse Productions', logo: 'DV', industry: 'Film' },
      { name: 'National Heritage Channel', logo: 'NHC', industry: 'Media' },
      { name: 'TimeWarp Films', logo: 'TW', industry: 'Film' },
      { name: 'CultureFirst Media', logo: 'CM', industry: 'Media' }
    ],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'ai-avatar',
    name: 'AI Avatar Personal Brand System',
    shortName: 'AI Avatar',
    category: 'filmmaking-media',
    tagline: 'Scale Your Influence Without Scaling Your Time',
    description: 'Creates realistic AI avatars for daily content creation and automated social media presence. Enables creators and executives to scale influence without scaling personal time investment.',
    features: [
      'Photorealistic avatar generation',
      'Voice cloning & lip sync',
      'Automated content scheduling',
      'Multi-platform distribution',
      'Engagement analytics dashboard'
    ],
    rating: 4.5,
    reviews: 1234,
    price: 'Starting at $499/mo',
    badge: null,
    caseStudy: {
      title: 'CEO of TechNova Posts Daily Content Without Recording a Single Video',
      company: 'TechNova Inc.',
      challenge: 'CEO needed consistent social media presence but had zero time for content creation with a packed executive schedule.',
      solution: 'Created a photorealistic AI avatar and automated daily LinkedIn and Instagram content pipeline.',
      results: ['300% increase in LinkedIn engagement', 'Daily content output with zero CEO time investment', 'Follower growth from 5K to 85K in 6 months', '12 speaking invitations generated from AI content']
    },
    companiesUsing: [
      { name: 'TechNova Inc.', logo: 'TN', industry: 'Technology' },
      { name: 'InfluenceHub Agency', logo: 'IH', industry: 'Marketing' },
      { name: 'SportStar Management', logo: 'SM', industry: 'Sports' },
      { name: 'PolitiComm Advisors', logo: 'PA', industry: 'Political' },
      { name: 'FashionIcon Studios', logo: 'FI', industry: 'Fashion' }
    ],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'ai-cartoon-generator',
    name: 'AI Cartoon & Educational Series Generator',
    shortName: 'Cartoon AI',
    category: 'filmmaking-media',
    tagline: 'From Script to Screen, Fully Automated',
    description: 'Automates scripting, animation, voice, and editing workflows for educational and entertainment content. Cuts production timelines dramatically while enabling mass distribution of scalable digital IP.',
    features: [
      'AI script generation',
      'Automated character animation',
      'Multi-voice AI narration',
      'Auto-editing & post-production',
      'Multi-language dubbing'
    ],
    rating: 4.6,
    reviews: 789,
    price: 'Starting at $999/episode',
    badge: "Amazon's Choice",
    caseStudy: {
      title: 'EduToons Produces 100 Episodes in 3 Months',
      company: 'EduToons Media',
      challenge: 'Producing one animated educational episode traditionally took 6-8 weeks and cost $15K–$25K per episode.',
      solution: 'Adopted AI Cartoon Generator for end-to-end production from script to final render.',
      results: ['100 episodes produced in 3 months (vs. 12-15 per quarter)', 'Per-episode cost reduced from $20K to $3K', 'Content distributed in 8 languages simultaneously', 'YouTube channel grew from 10K to 500K subscribers']
    },
    companiesUsing: [
      { name: 'EduToons Media', logo: 'ET', industry: 'Education' },
      { name: 'KidsWorld Entertainment', logo: 'KW', industry: 'Entertainment' },
      { name: 'LearnBright Academy', logo: 'LB', industry: 'Education' },
      { name: 'AnimateNow Studios', logo: 'AN', industry: 'Animation' },
      { name: 'StoryForge Digital', logo: 'SF', industry: 'Media' }
    ],
    image: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)'
  },

  // ── 6. Services ────────────────────────────────────────────
  {
    id: 'custom-slms',
    name: 'Custom SLMs – Enterprise AI Models',
    shortName: 'Custom SLMs',
    category: 'services',
    tagline: 'AI Models Built on Your Data, For Your Workflows',
    description: 'Models trained on company data and workflow management systems tailored to enterprise-specific processes and compliance needs. Improves employee performance, reduces training costs, and creates scalable knowledge ecosystems inside organizations.',
    features: [
      'Company-data trained models',
      'Workflow-specific fine-tuning',
      'Compliance-aware architecture',
      'On-premise deployment option',
      'Continuous learning pipeline'
    ],
    rating: 4.8,
    reviews: 423,
    price: 'Starting at $4,999/mo',
    badge: "Best Seller",
    caseStudy: {
      title: 'LegalForce Reduces Document Review Time by 80%',
      company: 'LegalForce International',
      challenge: 'Junior associates spent 60% of their time on document review, a task that was repetitive but required domain expertise.',
      solution: 'Deployed Custom SLM trained on 10 years of firm-specific legal documents and workflows.',
      results: ['80% reduction in document review time', 'Junior associate productivity doubled', '$3.5M annual savings in billable hour optimization', 'Model accuracy of 97.3% on firm-specific legal analysis']
    },
    companiesUsing: [
      { name: 'LegalForce International', logo: 'LF', industry: 'Legal' },
      { name: 'PharmaCorp Research', logo: 'PC', industry: 'Pharmaceutical' },
      { name: 'AeroDefense Systems', logo: 'AD', industry: 'Defense' },
      { name: 'GlobalBank Operations', logo: 'GB', industry: 'Banking' },
      { name: 'EnergyFirst Utilities', logo: 'EF', industry: 'Energy' }
    ],
    image: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)'
  }
];

// Helper functions
function getProductsByCategory(categoryId) {
  return PRODUCTS.filter(p => p.category === categoryId);
}

function getProductById(productId) {
  return PRODUCTS.find(p => p.id === productId);
}

function getCategoryById(categoryId) {
  return CATEGORIES.find(c => c.id === categoryId);
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tagline.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}
