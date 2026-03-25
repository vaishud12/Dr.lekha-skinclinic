import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Award, GraduationCap, Heart, Target, Calendar } from 'lucide-react';
import { doctorInfo, stats } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={doctorInfo.image}
                  alt={doctorInfo.name}
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-xl shadow-2xl p-6">
                <div className="grid grid-cols-3 gap-4">
                  {stats.slice(0, 3).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-teal-700">{stat.number}</div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 lg:pl-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  Meet {doctorInfo.name}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    {doctorInfo.qualifications}
                  </span>
                  <span className="px-4 py-2 bg-peach-100 text-amber-700 rounded-full text-sm font-medium">
                    {doctorInfo.experience} Experience
                  </span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {doctorInfo.bio}
              </p>

              <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-600">
                <div className="flex gap-3 mb-3">
                  <Heart className="w-6 h-6 text-teal-700 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">My Philosophy</h3>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{doctorInfo.philosophy}"
                </p>
              </div>

              <Link to="/book-appointment">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 gap-2 mt-4">
                  <Calendar className="w-5 h-5" />
                  Book Your Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Areas of Specialization
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorInfo.specialization.map((spec, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-teal-700" />
                  </div>
                  <h3 className="font-bold text-gray-900">{spec}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Qualifications & Credentials
            </h2>
            <p className="text-lg text-gray-600">
              Trained, certified, and committed to excellence in medical care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>MBBS from prestigious medical college</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>MD in Dermatology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Fellowship in Aesthetic Medicine</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Achievements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>12+ years clinical experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>2000+ successful patient outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Member of Indian Medical Association</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-teal-50 to-peach-50 border-none shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Discuss Your Health Goals
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Schedule a personal consultation to understand how we can help you achieve sustainable results
              </p>
              <Link to="/book-appointment">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Schedule Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;

