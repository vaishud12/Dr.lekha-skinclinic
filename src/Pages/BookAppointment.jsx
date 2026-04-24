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
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', phone: '' });

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation - only digits, exactly 10
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear errors on change
    if (name === 'email' || name === 'phone') {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Blur validation
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors({
          ...errors,
          email: 'Please enter a valid email address (e.g., example@domain.com)'
        });
      }
    }

    if (name === 'phone' && value) {
      if (!validatePhone(value)) {
        setErrors({
          ...errors,
          phone: 'Phone number must be exactly 10 digits'
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email and phone before submission
    let newErrors = { email: '', phone: '' };

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., example@domain.com)';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    setErrors(newErrors);

    // Prevent submission if validation fails
    if (newErrors.email || newErrors.phone) {
      return;
    }
    
    // Start loading state
    setIsLoading(true);

    try {
      // Prepare data for Google Sheets
      const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbx3unIhzz65TBP4DWEoCOZAXgZJFEUHlLIK83DDI8317VSWczFUw0-7L6z5taq5asc/exec';
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

      // Wait for Google Sheets to save data
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
      });

      // Only proceed if Google Sheets save was successful
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

      // Show success message only after data is saved
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
      console.error('Error saving appointment:', error);
      alert('Error saving appointment. Please try again.');
    } finally {
      // Stop loading state
      setIsLoading(false);
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
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              maxLength="10"
              className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white/70 transition-all`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
            disabled={isLoading}
            className={`w-full px-6 py-3 rounded-lg font-medium shadow-lg transition-all ${
              isLoading 
                ? 'bg-gray-400 text-white cursor-not-allowed shadow-md' 
                : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-xl'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Appointment Request'
            )}
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
