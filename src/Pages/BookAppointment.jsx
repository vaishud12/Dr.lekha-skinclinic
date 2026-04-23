import React, { useState } from 'react';
import { clinicInfo } from '../mock';
import appointmentImg from '../Images/book-doctor-appointment-card-template-schedule-hospital-visit-editable-social-media-post-design-flat-color-illustration-for-poster-web-banner-ecard-vector.jpg'

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Save to Google Sheets silently in background
      const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Will get this from setup
      
      const sheetData = {
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        service: formData.service,
        message: formData.message || 'N/A'
      };

      // Send to Google Sheets (silently - user won't see this)
      if (GOOGLE_SHEET_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetData)
        }).catch(err => console.log('Sheet save attempt:', err));
      }

      // Generate WhatsApp message with all appointment details
      const whatsappMessage = `*New Appointment Request*

📋 *Patient Details:*
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

📅 *Appointment Details:*
Date: ${formData.date}
Time: ${formData.time}
Service: ${formData.service}

${formData.message ? `💬 *Additional Message:*\n${formData.message}\n` : ''}
Please confirm the appointment at your earliest convenience.`;

      // Create WhatsApp URL - sends to clinic WhatsApp number
      const whatsappURL = `https://api.whatsapp.com/send?phone=${clinicInfo.whatsapp}&text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp with the pre-filled message
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');

      // Show success message
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      // Still show success to user even if sheet fails
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-peach-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={appointmentImg}
                  alt="Medical Consultation"
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
              </div>
              
              {/* Floating Info Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Why Book With Us?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Expert medical consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Personalized treatment plans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Flexible appointment scheduling
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Glass Effect Form */}
          <div className="relative">
            <div className="glass-card-appointment p-8 md:p-10">
              {/* Success Message Overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-3xl flex items-center justify-center z-50 animate-fade-in">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
                    <p className="text-lg text-gray-600 mb-2">Your appointment request has been received.</p>
                    <p className="text-gray-500">Our team will contact you soon.</p>
                  </div>
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Book an Appointment</h1>
              <p className="text-gray-600 mb-8">
                Schedule your consultation with Dr. Lekha Jadhav
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all"
            >
              <option value="">Select a service</option>
              <option value="weight-management">Weight Management</option>
              <option value="skin-care">Skin Care</option>
              <option value="general">General Consultation</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            Submit Appointment Request
          </button>
        </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
