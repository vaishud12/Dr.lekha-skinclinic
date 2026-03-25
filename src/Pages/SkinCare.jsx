import React from 'react';
import { Link } from 'react-router-dom';

const SkinCare = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Skin Care</h1>
        <p className="text-lg text-gray-600 mb-8">
          Advanced skin care treatments for healthy, radiant skin.
        </p>
        
        <div className="prose max-w-none">
          <h2>Our Treatments</h2>
          <ul>
            <li>Acne Treatment</li>
            <li>Anti-Aging Solutions</li>
            <li>Skin Rejuvenation</li>
            <li>Pigmentation Treatment</li>
            <li>Laser Treatments</li>
          </ul>
          
          <div className="mt-8">
            <Link to="/book-appointment" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinCare;
