import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Calendar, ArrowRight, Star, Award, User, FlaskConical, 
  Shield, HeartHandshake, Building2, CheckCircle2 
} from 'lucide-react';
import { clinicInfo, services, whyChooseUs, testimonials, stats } from '../mock';
import ctaBgImg from '../Images/1000723428.jpg';

const Home = () => {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isWhyChooseVisible, setIsWhyChooseVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        } else {
          setIsServicesVisible(false); // Reset when scrolling away
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px' // Trigger when 50px into viewport
      }
    );

    const currentRef = servicesRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhyChooseVisible(true);
        } else {
          setIsWhyChooseVisible(false);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const currentRef = whyChooseRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialsVisible(true);
        } else {
          setIsTestimonialsVisible(false);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const currentRef = testimonialsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      Award, User, FlaskConical, Shield, HeartHandshake, Building2
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  const getLoaderColor = (index) => {
    const colors = ['#14b8a6', '#0d9488', '#0f766e'];
    return colors[index % 3];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[700px] flex items-end">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/coverage.mp4" // Path to the video in the public folder
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transform rotate-90"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-800/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto relative z-10 pb-8">
          <div className="max-w-4xl">
            
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              {"Transform Your Health & Confidence".split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-teal-50 leading-relaxed max-w-xl">
              {"Expert medical care for sustainable weight loss, PCOS management, and advanced skin treatments. Personalized, science-backed solutions under qualified medical supervision.".split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 px-4 sm:px-6 lg:px-8 pb-12 z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl font-bold text-teal-700 mb-2 group-hover:text-teal-600 transition-colors">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          {/* Heading animates from left */}
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-[1500ms] ease-out ${
            isServicesVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-32'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300">
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive medical solutions for your weight management and skin care needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`glass-card group hover:shadow-2xl transition-all duration-[1500ms] ease-out border-none overflow-hidden ${
                  isServicesVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-32'
                }`}
                style={{ 
                  transitionDelay: isServicesVisible ? `${300 + index * 200}ms` : '0ms'
                }}
              >
                <div className="glass-effect"></div>
                <div className="relative h-48 overflow-hidden rounded-t-xl z-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 transition-colors duration-300">
                    {service.shortDesc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-start gap-2 text-sm text-gray-700 transition-all duration-[1200ms] ease-out ${
                          isServicesVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-16'
                        }`}
                        style={{ 
                          transitionDelay: isServicesVisible ? `${500 + (index * 200) + (idx * 150)}ms` : '0ms'
                        }}
                      >
                        <CheckCircle2 
                          className={`w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5 transition-all duration-500 ease-out ${
                            isServicesVisible 
                              ? 'opacity-100 scale-100 rotate-0' 
                              : 'opacity-0 scale-0 -rotate-90'
                          }`}
                          style={{ 
                            transitionDelay: isServicesVisible ? `${600 + (index * 200) + (idx * 150)}ms` : '0ms'
                          }}
                        />
                        <span className="transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" ref={whyChooseRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-[1500ms] ease-out ${
            isWhyChooseVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-32'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why to Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              Your health deserves the best care. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-[1500ms] ease-out ${
                  isWhyChooseVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-32'
                }`}
                style={{ 
                  transitionDelay: isWhyChooseVisible ? `${300 + index * 200}ms` : '0ms'
                }}
              >
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full relative overflow-hidden">
                  {/* Animated loader background */}
                  <div 
                    className="animated-loader"
                    style={{
                      '--i': index,
                      '--clr': getLoaderColor(index)
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                      <span className="text-teal-700 group-hover:text-white transition-colors">
                        {getIcon(item.icon)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={testimonialsRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="container mx-auto">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ease-out ${
            isTestimonialsVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Patient Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real patients. See how we've helped transform lives.
            </p>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide snap-x snap-mandatory">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className={`group border-none shadow-md hover:shadow-2xl transition-all duration-1000 ease-out relative bg-gradient-to-br from-white to-teal-50/30 flex-shrink-0 w-full md:w-96 snap-center ${
                  isTestimonialsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ 
                  transitionDelay: isTestimonialsVisible ? `${index * 150}ms` : '0ms'
                }}
              >

                {/* Decorative Leaf Left */}
                <div className="absolute -left-4 top-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300 leaf-decoration">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5C15 10 10 15 8 20C6 25 8 30 12 33C16 36 22 36 26 33C30 30 32 25 30 20C28 15 23 10 20 5Z" fill="#14b8a6" opacity="0.5"/>
                  </svg>
                </div>

                {/* Decorative Leaf Right */}
                <div className="absolute -right-4 bottom-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300 transform rotate-180 leaf-decoration" style={{ animationDelay: '1s' }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5C15 10 10 15 8 20C6 25 8 30 12 33C16 36 22 36 26 33C30 30 32 25 30 20C28 15 23 10 20 5Z" fill="#0d9488" opacity="0.5"/>
                  </svg>
                </div>

                {/* Subtle gradient border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-teal-200/20 via-transparent to-yellow-200/20 group-hover:from-teal-300/40 group-hover:to-yellow-300/40 transition-all duration-500"></div>
                
                <CardContent className="p-6 pt-10 relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...new Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age}</div>
                    <div className="text-sm text-gray-500">{testimonial.treatment} • {testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 italic">
            *Individual results may vary. Testimonials are from real patients but outcomes depend on various factors.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id='contact' className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${ctaBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-champagneGold">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg mb-8 text-teal-50">
              Book a consultation with Dr. Lekha Jadhav today and take the first step towards a healthier, more confident you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-appointment">
                <Button size="lg" className="bg-medicalTeal text-white hover:bg-champagneGold gap-2 group">
                  Book Appointment Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a 
                href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent("Hi, I would like to know more about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-medicalTeal text-white hover:bg-champagneGold border-2 border-white gap-2">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Visit Our Clinic
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience professional medical care in a comfortable, modern setting. We're here to help you achieve your health and wellness goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <div className="text-gray-600">{clinicInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Working Hours</div>
                    <div className="text-gray-600">{clinicInfo.workingHours.weekdays}</div>
                    <div className="text-gray-600">{clinicInfo.workingHours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gray-100">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.997323585242!2d73.93832747443159!3d18.56264956788914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15c45335b5d%3A0xa80f89de305e7e36!2sShraddha%20Hospital%20-%20A%20Project%20by%20Panchamrut%20Lifecare%20LLP!5e1!3m2!1sen!2sin!4v1776974136984!5m2!1sen!2sin"         
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

