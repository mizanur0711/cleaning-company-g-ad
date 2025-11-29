import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, Home, Building2, Waves, Sofa, Mountain, Factory } from 'lucide-react';
import './index.css';
import logo from './assets/logo.png';

const content = {
  company: "شركة الدليل الوطنية للتنظيف",
  tagline: "خدمات تنظيف احترافية",
  phone: "+965 50104485",
  whatsapp: "+965 50104485",
  hero: {
    title: "حوّل منزلك مع شركة الدليل الوطنية للتنظيف",
    subtitle: "خدمات تنظيف عالية الجودة يقدمها فريق محترف ذو خبرة",
    cta: "احصل على عرض مجاني"
  },
  services: [
    {
      id: 1,
      title: "تنظيف المطبخ",
      description: "تنظيف شامل للمطابخ",
      icon: "home"
    },
    {
      id: 2,
      title: "تنظيف الأثاث والكنب",
      description: "تنظيف احترافي للكنب والأثاث",
      icon: "sofa"
    },
    {
      id: 3,
      title: "تنظيف المجلس",
      description: "تنظيف مخصص لغرف استقبال الضيوف",
      icon: "home"
    },
    {
      id: 4,
      title: "تنظيف المراتب",
      description: "تنظيف صحي وآمن للمراتب",
      icon: "sofa"
    },
    {
      id: 5,
      title: "تنظيف المكاتب",
      description: "تنظيف احترافي للمكاتب",
      icon: "building"
    },
    {
      id: 6,
      title: "تنظيف بالشامبو وغسيل السجاد",
      description: "تنظيف عميق للسجاد والموكيت باستخدام الشامبو",
      icon: "sparkles"
    },
    {
      id: 7,
      title: "تنظيف الستائر",
      description: "تنظيف دقيق ولطيف للستائر",
      icon: "sparkles"
    },
    {
      id: 8,
      title: "تنظيف الشقق",
      description: "خدمة تنظيف متكاملة للشقق",
      icon: "home"
    },
    {
      id: 9,
      title: "تنظيف الحمامات",
      description: "تنظيف عميق وتعقيم شامل للحمامات",
      icon: "waves"
    },
    {
      id: 10,
      title: "تنظيف المباني",
      description: "تنظيف كامل وشامل للمباني",
      icon: "building"
    },
    {
      id: 11,
      title: "تنظيف المنزل بالكامل",
      description: "تنظيف شامل للمنزل من الأعلى إلى الأسفل",
      icon: "home"
    },
    {
      id: 12,
      title: "تلميع الرخام والسيراميك",
      description: "استعادة لمعان الرخام والسيراميك",
      icon: "sparkles"
    },
    {
      id: 13,
      title: "مكافحة الحشرات",
      description: "خدمات مكافحة الحشرات العامة",
      icon: "factory"
    }
  ],
  about: {
    title: "نبذة عن شركة الدليل الوطنية للتنظيف",
    description: "نحن ملتزمون بتقديم خدمات تنظيف ممتازة للمنازل والمكاتب والمساحات المتخصصة. يستخدم فريقنا المحترف معدات عالية الجودة لضمان نظافة كل زاوية. بخبرتنا وموثوقيتنا واهتمامنا بالتفاصيل، نقدم نتائج مميزة تلبي جميع احتياجاتك في التنظيف."
  }
};



const contentBackup = {
  company: "Al-Daleel National Cleaning Company",
  tagline: "Professional Cleaning Services",
  phone: "+965 50104485",
  whatsapp: "+965 50104485",
  hero: {
    title: "Transform Your Home with Al-Daleel National Cleaning Company",
    subtitle: "Quality cleaning services delivered by experienced male professionals",
    cta: "Get a Free Quote"
  },
  services: [
    {
      id: 1,
      title: "Kitchen Cleaning",
      description: "Thorough cleaning for kitchens",
      icon: "home"
    },
    {
      id: 2,
      title: "Furniture & Sofa Cleaning",
      description: "Professional cleaning for sofas and furniture",
      icon: "sofa"
    },
    {
      id: 3,
      title: "Majlis Cleaning",
      description: "Specialized cleaning for guest sitting areas",
      icon: "home"
    },
    {
      id: 4,
      title: "Mattress Cleaning",
      description: "Hygienic cleaning for mattresses",
      icon: "sofa"
    },
    {
      id: 5,
      title: "Office Cleaning",
      description: "Professional cleaning for offices",
      icon: "building"
    },
    {
      id: 6,
      title: "Shampoo Cleaning & Carpet Washing",
      description: "Deep cleaning for carpets and rugs with shampoo",
      icon: "sparkles"
    },
    {
      id: 7,
      title: "Curtain Cleaning",
      description: "Delicate cleaning for curtains",
      icon: "sparkles"
    },
    {
      id: 8,
      title: "Apartment Cleaning",
      description: "Full service cleaning for apartments",
      icon: "home"
    },
    {
      id: 9,
      title: "Bathroom Cleaning",
      description: "Deep cleaning and sanitization for bathrooms",
      icon: "waves"
    },
    {
      id: 10,
      title: "Building Cleaning",
      description: "Comprehensive cleaning for entire buildings",
      icon: "building"
    },
    {
      id: 11,
      title: "Full House Cleaning",
      description: "Complete house service from top to bottom",
      icon: "home"
    },
    {
      id: 12,
      title: "Marble & Tile Polishing",
      description: "Restoring shine to marble and tiles",
      icon: "sparkles"
    },
    {
      id: 13,
      title: "Pest & Anti-Insect Treatment",
      description: "General pest control services",
      icon: "factory"
    }
  ],
  about: {
    title: "About Al-Daleel National Cleaning Company",
    description: "We are dedicated to providing exceptional cleaning services for residential, commercial, and specialized spaces. Our professional team uses top-quality equipment to ensure every corner shines. With expertise, reliability, and attention to detail, we deliver outstanding results for all your cleaning needs."
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
    const phoneNumber = content.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
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
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((service) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`group bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer border border-gray-100 relative overflow-hidden ${hoveredService === service.id ? 'shadow-2xl -translate-y-2 border-blue-500/30' : 'shadow-sm hover:shadow-md'
                    }`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 ${hoveredService === service.id ? 'scale-150 bg-blue-100' : 'scale-100'
                    }`}></div>

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${hoveredService === service.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white text-blue-600 border border-blue-100 shadow-sm'
                      }`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Sparkles className="w-12 h-12 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                    <span>Professional & Experienced Team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                    <span>Top Quality Equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                    <span>100% Satisfaction Guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{content.about.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {content.about.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Support</div>
                </div>
              </div>
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
                src="https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?w=600&h=800&fit=crop"
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
                src="https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?w=600&h=800&fit=crop"
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
                src="https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=600&h=800&fit=crop"
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
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <img src={logo} alt={content.company} className="w-16 h-16 object-contain bg-white rounded-full p-1" />
              <div>
                <h3 className="text-2xl font-bold">{content.company}</h3>
                <p className="text-gray-400 text-sm">Excellence in every detail</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition flex items-center gap-2 font-medium">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
              <button onClick={handleCall} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition flex items-center gap-2 font-medium">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} {content.company}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;