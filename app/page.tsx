'use client';

import { useState } from 'react';
import { ChevronRight, Heart, Shield, Truck, Star, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const donkeys = [
    {
      name: 'Mediterranean Miniature',
      price: '$2,499',
      image: '🫏',
      description: 'Perfect companion for small farms',
      rating: 5,
    },
    {
      name: 'Standard Gray',
      price: '$3,299',
      image: '🐴',
      description: 'Hardy and reliable work partner',
      rating: 5,
    },
    {
      name: 'Spotted Burro',
      price: '$3,799',
      image: '🦓',
      description: 'Unique and friendly personality',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Ethically Raised',
      description: 'All our donkeys are raised with love and care in spacious pastures',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Health Guaranteed',
      description: 'Complete health certification and 30-day wellness guarantee',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Safe Delivery',
      description: 'Professional transport to your location anywhere in the country',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Texas Ranch',
      text: 'Best decision ever! Our donkey guards the sheep perfectly and has the sweetest personality.',
      rating: 5,
    },
    {
      name: 'Mike Peterson',
      location: 'Colorado Farm',
      text: 'Professional service from start to finish. The donkey arrived healthy and well-trained.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      location: 'Oregon Homestead',
      text: 'Our kids absolutely love their new companion. Great for our small farm!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🫏</span>
              <span className="text-2xl font-bold text-amber-900">DonkeyDirect</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#donkeys" className="text-gray-700 hover:text-amber-900 transition">Our Donkeys</a>
              <a href="#about" className="text-gray-700 hover:text-amber-900 transition">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-amber-900 transition">Reviews</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#donkeys" className="block py-2 text-gray-700 hover:text-amber-900">Our Donkeys</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-amber-900">About</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-amber-900">Reviews</a>
              <button className="w-full bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🌟 Premium Donkeys Since 2010
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Find Your Perfect
                <span className="text-amber-600"> Donkey</span> Companion
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ethically raised, health-certified donkeys for farms, companionship, and livestock protection. 
                Trusted by over 5,000+ happy families nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition flex items-center justify-center text-lg font-semibold">
                  Browse Donkeys
                  <ChevronRight className="ml-2" />
                </button>
                <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full hover:bg-amber-50 transition text-lg font-semibold">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">5,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="text-gray-600">5.0 Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-amber-400 rounded-3xl p-8 transform rotate-3">
                <div className="bg-white rounded-2xl p-8 transform -rotate-3 shadow-2xl">
                  <div className="text-9xl text-center">🫏</div>
                  <div className="text-center mt-4">
                    <div className="text-2xl font-bold text-gray-900">Premium Quality</div>
                    <div className="text-gray-600 mt-2">Healthy & Happy Donkeys</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DonkeyDirect?</h2>
            <p className="text-xl text-gray-600">We're committed to excellence in every aspect</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-amber-50 rounded-2xl p-8 hover:shadow-xl transition">
                <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donkeys Showcase */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white" id="donkeys">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Donkeys</h2>
            <p className="text-xl text-gray-600">Handpicked companions ready for their forever homes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {donkeys.map((donkey, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-12 text-center">
                  <div className="text-8xl transform group-hover:scale-110 transition">{donkey.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{donkey.name}</h3>
                    <div className="flex text-amber-500">
                      {[...Array(donkey.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{donkey.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-amber-600">{donkey.price}</span>
                    <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied donkey owners</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-amber-50 rounded-2xl p-8">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Welcome Your New Companion?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Start your journey with a donkey today. Our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full hover:bg-amber-50 transition text-lg font-semibold">
              Browse Available Donkeys
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-amber-800 transition text-lg font-semibold">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🫏</span>
                <span className="text-xl font-bold">DonkeyDirect</span>
              </div>
              <p className="text-gray-400">
                Your trusted source for premium donkeys since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Our Donkeys</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Care Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Health Guarantee</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 1-800-DONKEY-1</li>
                <li>📧 info@donkeydirect.com</li>
                <li>📍 Rural Route 1, Farmville, USA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DonkeyDirect. All rights reserved. Made with ❤️ for donkey lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
