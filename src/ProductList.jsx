import React, { useState, useEffect } from "react";
import { ChevronDown, Search, User, Heart, ShoppingCart, Menu, X, ChevronRight } from "lucide-react";

const menuData = [
  {
    title: "Coffee & Machines",
    subItems: [
      {
        title: "illy Coffee Capsules & Beans",
        img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=300&fit=crop",
        desc: "Freshly roasted coffee beans and premium capsules.",
        price: "$24.99"
      },
      {
        title: "illy Coffee Machines",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop",
        desc: "Brew barista-level espresso at home.",
        price: "$299.99"
      },
      {
        title: "illy Art Collection",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=300&fit=crop",
        desc: "Exclusive designer cups and accessories.",
        price: "$49.99"
      },
      {
        title: "All Coffee & Machines",
        img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=300&fit=crop",
        desc: "See the complete coffee range.",
        price: "From $19.99"
      },
    ],
  },
  {
    title: "Kitchen Taps",
    subItems: [
      {
        title: "Modern Taps",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop",
        desc: "Sleek and durable taps for modern kitchens.",
        price: "$89.99"
      },
      {
        title: "Smart Taps",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
        desc: "Touch-activated and sensor taps.",
        price: "$149.99"
      },
    ],
  },
  {
    title: "Kitchen Sinks",
    subItems: [
      {
        title: "Steel Sink",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
        desc: "Durable stainless steel sinks with modern finish.",
        price: "$199.99"
      },
      {
        title: "Ceramic Sinks",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop",
        desc: "Classic white ceramic kitchen sinks.",
        price: "$159.99"
      },
    ],
  },
  {
    title: "Water Purification Units",
    subItems: [
      {
        title: "RO Purifier",
        img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&h=300&fit=crop",
        desc: "Clean, safe, and fresh water every day.",
        price: "$399.99"
      },
      {
        title: "UV Purifiers",
        img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&h=300&fit=crop",
        desc: "Advanced UV water purification technology.",
        price: "$299.99"
      },
    ],
  },
  {
    title: "Kitchen Tools & Gadgets",
    subItems: [
      {
        title: "Smart Gadgets",
        img: "https://images.unsplash.com/photo-1556909114-4f5cb3c492ac?w=500&h=300&fit=crop",
        desc: "Modern tools to simplify your cooking.",
        price: "$79.99"
      },
      {
        title: "Traditional Tools",
        img: "https://images.unsplash.com/photo-1556909092-f6eacb468828?w=500&h=300&fit=crop",
        desc: "Classic kitchen essentials and utensils.",
        price: "$29.99"
      },
    ],
  },
];

export default function Navbar() {
  const [showMega, setShowMega] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(menuData[0]);
  const [hoveredItem, setHoveredItem] = useState(menuData[0].subItems[0]);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

 
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setMobileMenuOpen(false);
        setExpandedMobileCategory(null);
      }
      

      if (mobile) {
        setShowMega(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileCategory = (index) => {
    setExpandedMobileCategory(expandedMobileCategory === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileCategory(null);
  };

  return (
    <div className="relative">

      <div className="bg-teal-600 text-white text-xs sm:text-sm py-2 px-4">
        <div className="text-center">
          <span className="font-medium">Free shipping on any orders</span>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="hidden md:flex items-center space-x-2 cursor-pointer hover:text-teal-600 transition-colors">
            <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-4 sm:w-5 h-auto" />
            <span className="text-sm">English</span>
            <ChevronDown size={14} className="sm:size-4" />
          </div>

          
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

       
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 cursor-pointer">
            eqwep
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            <User size={18} className="sm:size-5 lg:size-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
            <Heart size={18} className="sm:size-5 lg:size-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
            <div className="relative">
              <ShoppingCart size={18} className="sm:size-5 lg:size-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 z-50 md:hidden ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="text-xl font-bold text-teal-600">eqwep</div>
            <button 
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500 text-sm"
                />
                <Search size={18} className="text-gray-500" />
              </div>

              <div className="space-y-1">
                <div className="py-3 px-4 font-medium text-gray-800 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  Bathroom
                </div>
        
                <div className="border border-gray-200 rounded-lg">
                  <button 
                    className="w-full flex items-center justify-between py-3 px-4 font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => toggleMobileCategory('kitchen')}
                  >
                    Kitchen
                    <ChevronDown 
                      className={`transform transition-transform duration-200 ${
                        expandedMobileCategory === 'kitchen' ? 'rotate-180' : ''
                      }`} 
                      size={16} 
                    />
                  </button>
                  
                  {expandedMobileCategory === 'kitchen' && (
                    <div className="border-t border-gray-200 animate-slideDown">
                      {menuData.map((category, i) => (
                        <div key={i} className="border-b border-gray-100 last:border-b-0">
                          <div className="py-3 px-6 font-semibold text-teal-600 text-sm bg-gray-50">
                            {category.title}
                          </div>
                          {category.subItems.map((item, j) => (
                            <div 
                              key={j} 
                              className="py-2 px-8 text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors"
                              onClick={closeMobileMenu}
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{item.title}</span>
                                <span className="text-xs font-medium text-teal-600">{item.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {['Accessories', 'Home Decor', 'Spa & Wellness', 'Appliances', 'Brands'].map((item) => (
                  <div key={item} className="py-3 px-4 font-medium text-gray-800 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

       
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-4 h-auto" />
              <span>English</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 lg:px-6 py-3">
            <div className="flex space-x-4 lg:space-x-8">
              <span className="cursor-pointer hover:text-teal-600 transition-colors font-medium text-gray-800 flex items-center text-sm lg:text-base">
                Bathroom <ChevronDown size={14} className="ml-1" />
              </span>

              <div
                className="relative"
                onMouseEnter={() => !isMobile && setShowMega(true)}
                onMouseLeave={() => !isMobile && setShowMega(false)}
              >
                <span className="cursor-pointer hover:text-teal-600 transition-colors font-medium text-gray-800 flex items-center text-sm lg:text-base">
                  Kitchen <ChevronDown size={14} className="ml-1" />
                </span>

                {showMega && !isMobile && (
                  <div className="absolute left-0 top-full w-80 lg:w-[1000px] bg-white shadow-2xl border-t-4 border-teal-600 z-50 animate-slideDown">
                    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                        <div className="lg:col-span-3">
                          <h3 className="font-semibold text-gray-900 mb-4 text-base lg:text-lg border-b border-gray-200 pb-2">
                            Categories
                          </h3>
                          {menuData.map((cat, i) => (
                            <div
                              key={i}
                              className={`py-2 lg:py-3 px-3 lg:px-4 cursor-pointer font-medium rounded-lg transition-all duration-200 flex items-center justify-between group text-sm lg:text-base ${
                                activeCategory.title === cat.title
                                  ? "bg-teal-50 text-teal-600 border-l-4 border-teal-600"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                              }`}
                              onMouseEnter={() => {
                                setActiveCategory(cat);
                                setHoveredItem(cat.subItems[0]);
                              }}
                            >
                              <span>{cat.title}</span>
                              <ChevronRight size={12} className="lg:size-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          ))}
                        </div>
                        <div className="lg:col-span-4">
                          <h3 className="font-semibold text-teal-600 mb-4 text-base lg:text-lg border-b border-gray-200 pb-2">
                            {activeCategory.title}
                          </h3>
                          <div className="space-y-1 lg:space-y-2">
                            {activeCategory.subItems.map((item, j) => (
                              <div
                                key={j}
                                className={`py-2 lg:py-3 px-3 lg:px-4 cursor-pointer rounded-lg transition-all duration-200 text-sm lg:text-base ${
                                  hoveredItem.title === item.title
                                    ? "bg-teal-50 text-teal-600 border-l-4 border-teal-600"
                                    : "hover:bg-gray-50 hover:text-teal-600"
                                }`}
                                onMouseEnter={() => setHoveredItem(item)}
                              >
                                <div className="font-medium">{item.title}</div>
                                <div className="text-xs lg:text-sm text-gray-500 mt-1">{item.price}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="lg:col-span-5 flex items-center justify-center">
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl lg:rounded-2xl p-4 lg:p-6 xl:p-8 w-full max-w-sm lg:max-w-md">
                            <div className="text-center">
                              <div className="mb-4 lg:mb-6">
                                <img
                                  src={hoveredItem.img}
                                  alt={hoveredItem.title}
                                  className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg lg:rounded-xl shadow-lg transition-all duration-300 hover:scale-105 mx-auto"
                                />
                              </div>
                              <h4 className="font-bold text-base lg:text-xl text-gray-900 mb-2 lg:mb-3">
                                {hoveredItem.title}
                              </h4>
                              <p className="text-gray-600 text-xs lg:text-sm mb-4 lg:mb-6 leading-relaxed">
                                {hoveredItem.desc}
                              </p>
                              <div className="flex items-center justify-center space-x-4 mb-4">
                                <span className="text-lg lg:text-2xl font-bold text-teal-600">
                                  {hoveredItem.price}
                                </span>
                              </div>
                              <button className="bg-teal-600 text-white px-4 lg:px-6 xl:px-8 py-2 lg:py-3 rounded-full hover:bg-teal-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:scale-105 w-full text-sm lg:text-base">
                                Shop Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div> 

              {['Accessories', 'Home Decor', 'Spa & Wellness', 'Appliances', 'Brands'].map((item) => (
                <span key={item} className="cursor-pointer hover:text-teal-600 transition-colors font-medium text-gray-800 flex items-center text-sm lg:text-base">
                  {item !== 'Brands' && <><ChevronDown size={14} className="ml-1" /></>}
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-3 lg:px-4 py-2 w-48 md:w-56 lg:w-80">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500 text-sm lg:text-base"
              />
              <Search size={16} className="lg:size-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
        
        /* Smooth scrollbar for mobile menu */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 2px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
}