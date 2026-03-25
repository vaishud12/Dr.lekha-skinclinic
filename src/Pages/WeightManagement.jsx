import React from 'react';
import { Link } from 'react-router-dom';

const WeightManagement = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Weight Management</h1>
        <p className="text-lg text-gray-600 mb-8">
          Comprehensive weight management solutions tailored to your needs.
        </p>
        
        <div className="prose max-w-none">
          <h2>Our Services</h2>
          <ul>
            <li>Personalized Diet Plans</li>
            <li>Medical Weight Loss Programs</li>
            <li>Nutritional Counseling</li>
            <li>Lifestyle Modification Support</li>
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

export default WeightManagement;
