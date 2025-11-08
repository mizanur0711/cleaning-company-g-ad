import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, Home, Building2, Waves, Sofa, Mountain, Factory } from 'lucide-react';
import './index.css';
import logo from './assets/file.svg';
const content = {
  company: "شركة ديسمبر للتنظيف",
  tagline: "خدمات تنظيف احترافية",
  phone: "+96923008",
  whatsapp: "+67683420",
  hero: {
    title: "حوّل مساحتك مع خدمات التنظيف الاحترافية",
    subtitle: "خدمات تنظيف عالية الجودة يقدمها عمال ذكور ذوو خبرة",
    cta: "احصل على عرض مجاني"
  },
  services: [
    {
      id: 1,
      title: "تنظيف السجاد والموكيت",
      description: "تنظيف عميق لجميع أنواع السجاد والموكيت",
      icon: "sparkles"
    },
    {
      id: 2,
      title: "تنظيف الأثاث",
      description: "تنظيف احترافي لجميع أنواع الأثاث",
      icon: "sofa"
    },
    {
      id: 3,
      title: "تنظيف الأرضيات والممرات",
      description: "أرضيات وممرات وسلالم نظيفة تماماً",
      icon: "building"
    },
    {
      id: 4,
      title: "تنظيف المطبخ والحمام",
      description: "تنظيف شامل لجميع أنواع المطابخ والحمامات",
      icon: "home"
    },
    {
      id: 5,
      title: "تنظيف حمامات السباحة",
      description: "تنظيف احترافي لجميع أحجام حمامات السباحة",
      icon: "waves"
    },
    {
      id: 6,
      title: "تنظيف كامل للشقق",
      description: "خدمة تنظيف كاملة للشقق السكنية",
      icon: "home"
    },
    {
      id: 7,
      title: "تنظيف المباني",
      description: "تنظيف شامل للمباني بأكملها",
      icon: "building"
    },
    {
      id: 8,
      title: "تنظيف الشاليهات",
      description: "خدمات تنظيف كاملة للشاليهات",
      icon: "mountain"
    },
    {
      id: 9,
      title: "تنظيف المكاتب والشركات",
      description: "تنظيف احترافي للمكاتب والشركات",
      icon: "building"
    },
    {
      id: 10,
      title: "تنظيف المباني الزراعية",
      description: "تنظيف متخصص للمباني الزراعية",
      icon: "factory"
    },
    {
      id: 11,
      title: "تنظيف الفلل الخاصة",
      description: "خدمات تنظيف فاخرة للفلل الخاصة",
      icon: "home"
    }
  ],
  about: {
    title: "عن شركة ديسمبر للتنظيف",
    description: "نحن ملتزمون بتقديم خدمات تنظيف استثنائية للمساحات السكنية والتجارية والمتخصصة. يستخدم فريقنا الاحترافي من العمال الذكور ذوي الخبرة أفضل المعدات لضمان نظافة كل زاوية. مع الخبرة والموثوقية والانتباه للتفاصيل، يقدم فريقنا الذكوري نتائج متميزة لجميع احتياجاتك في التنظيف."
  }
};


const contentBackup = {
  company: "December Cleaning Company",
  tagline: "Professional Cleaning Services",
  phone: "+9696923008",
  whatsapp: "+9667683420",
  hero: {
    title: "Transform Your Space with Professional Cleaning",
    subtitle: "Quality cleaning services delivered by experienced male professionals",
    cta: "Get a Free Quote"
  },
  services: [
    {
      id: 1,
      title: "Carpet & Rug Cleaning",
      description: "Deep cleaning for all types of carpets and rugs",
      icon: "sparkles"
    },
    {
      id: 2,
      title: "Furniture Cleaning",
      description: "Professional cleaning for all kinds of furniture",
      icon: "sofa"
    },
    {
      id: 3,
      title: "Floor & Corridor Cleaning",
      description: "Spotless floors, corridors and stairs",
      icon: "building"
    },
    {
      id: 4,
      title: "Kitchen & Bathroom",
      description: "Thorough cleaning of all types of kitchens and bathrooms",
      icon: "home"
    },
    {
      id: 5,
      title: "Swimming Pool Cleaning",
      description: "Professional cleaning for pools of all sizes",
      icon: "waves"
    },
    {
      id: 6,
      title: "Complete Apartment Cleaning",
      description: "Full service cleaning for residential apartments",
      icon: "home"
    },
    {
      id: 7,
      title: "Building Cleaning",
      description: "Comprehensive cleaning for entire buildings",
      icon: "building"
    },
    {
      id: 8,
      title: "Chalet Cleaning",
      description: "Complete cleaning services for chalets",
      icon: "mountain"
    },
    {
      id: 9,
      title: "Office & Company Cleaning",
      description: "Professional cleaning for offices and companies",
      icon: "building"
    },
    {
      id: 10,
      title: "Farm Building Cleaning",
      description: "Specialized cleaning for farm buildings",
      icon: "factory"
    },
    {
      id: 11,
      title: "Private Villa Cleaning",
      description: "Luxury cleaning services for private villas",
      icon: "home"
    }
  ],
  about: {
    title: "About December Cleaning Company",
    description: "We are dedicated to providing exceptional cleaning services for residential, commercial, and specialized spaces. Our professional team of experienced male workers uses top-quality equipment to ensure every corner shines. With expertise, reliability, and attention to detail, our male workforce delivers outstanding results for all your cleaning needs."
  }
};

const iconMap = {
  sparkles: Sparkles,
  sofa: Sofa,
  building: Building2,
  home: Home,
  waves: Waves,
  mountain: Mountain,
  factory: Factory
};

function App() {
  const [hoveredService, setHoveredService] = useState(null);

  const handleCall = () => {
    window.location.href = `tel:${content.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${content.whatsapp}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center group"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden group-hover:inline-block ml-2 text-sm font-medium">WhatsApp</span>
        </button>
        <button
          onClick={handleCall}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center group"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
          <span className="hidden group-hover:inline-block ml-2 text-sm font-medium">Call Now</span>
        </button>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Company logo image (imported from src/assets) */}
              <img src={logo} alt={content.company} className="w-20 h-20 object-contain" />
              <h1 className="text-2xl font-bold text-gray-900">{content.company}</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <button onClick={handleCall} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {content.hero.title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {content.hero.subtitle}
            </p>
            <button onClick={handleWhatsApp} className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive cleaning solutions for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((service) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer ${
                    hoveredService === service.id ? 'transform -translate-y-2 shadow-2xl' : ''
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${
                    hoveredService === service.id ? 'bg-blue-600' : 'bg-blue-100'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      hoveredService === service.id ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{content.about.title}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {content.about.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-6 rounded-xl shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop"
                alt="Professional male cleaning worker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a Cleaner Space?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact us today for a free consultation and quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleCall} className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call: {content.phone}
            </button>
            <button onClick={handleWhatsApp} className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp: {content.whatsapp}
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Team</h2>
            <p className="text-xl text-gray-600">Experienced male professionals dedicated to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1632927063333-df848f5f916a?w=600&h=800&fit=crop"
                alt="Professional cleaning worker"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Trained Professionals</h3>
                  <p className="text-sm text-gray-200">Expert cleaning specialists</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?w=600&h=800&fit=crop"
                alt="Experienced cleaning professional"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Experienced Staff</h3>
                  <p className="text-sm text-gray-200">Years of industry expertise</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1742483359033-13315b247c74?w=600&h=800&fit=crop"
                alt="Reliable cleaning worker"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Reliable Team</h3>
                  <p className="text-sm text-gray-200">Trustworthy and punctual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-xl font-bold">{content.company}</h3>
              </div>
              <p className="text-gray-400">Professional cleaning services you can trust</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: {content.phone}</li>
                <li>WhatsApp: {content.whatsapp}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {content.company}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;