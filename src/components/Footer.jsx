import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { clinicInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Dr. Lekha Jadhav</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Specialized medical clinic offering personalized weight management and advanced skin care treatments with over 12 years of expertise.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/kayakalp.weight.skin.hair"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-teal-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link className="text-sm hover:text-teal-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link className="text-sm hover:text-teal-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link className="text-sm hover:text-teal-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-sm hover:text-teal-400 transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-teal-400 transition-colors">Medical Weight Loss</li>
              <li className="hover:text-teal-400 transition-colors">PCOS Weight Management</li>
              <li className="hover:text-teal-400 transition-colors">Obesity Treatment</li>
              <li className="hover:text-teal-400 transition-colors">Acne Treatment</li>
              <li className="hover:text-teal-400 transition-colors">Anti-Aging Treatments</li>
              <li className="hover:text-teal-400 transition-colors">Skin Rejuvenation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href={`tel:${clinicInfo.phone}`} className="text-sm hover:text-teal-400 transition-colors">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Email Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div>{clinicInfo.workingHours.weekdays}</div>
                  <div>{clinicInfo.workingHours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dr. Lekha Jadhav. All rights reserved.
              <span className="block text-xs">Copyright © {new Date().getFullYear()} Vaishnavi Devardekar. Unauthorized use is prohibited.</span>
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-teal-400 transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-left mt-4">
            Disclaimer: Results may vary from person to person. All treatments are performed under qualified medical supervision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


