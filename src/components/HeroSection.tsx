import React from 'react';
import { MoveRight, MessageCircle, Phone, CheckCircle, Clock, Shield, Star } from 'lucide-react'; // Importing Star icon
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Contact Header */}
      <div className="absolute top-20 right-6 md:right-12 z-20 hidden md:block">
        <div className="glassmorphism p-4 text-sm card-hover">
          <div className="flex flex-col space-y-2 text-white">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+44 7300 61048</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-primary">📧</span>
              <span>leonharris2110@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-primary">📱</span>
              <span>@uk_online_service</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            {/* Flag and Main Headline */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/20 text-primary rounded-full px-6 py-2 text-sm font-medium inline-flex items-center">
                <span className="mr-2">🇬🇧</span>
                DVLA & CITB Approved
              </div>
            </div>
            {/* Left and Right Hero Images */}
<img
  src="/lovable-uploads/card.png"
  alt="Card Left"
  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[200px] md:w-[340px] opacity-80 z-10 hidden sm:block transition-transform duration-500 ease-in-out hover:scale-105 hover:-rotate-2"
/>
<img
  src="/lovable-uploads/card.png"
  alt="Card Right"
  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[200px] md:w-[340px] opacity-80 z-10 hidden sm:block transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-2"
/>



            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Fast-Track Your UK <span className="text-primary">Driving License</span>, 
              <span className="text-secondary"> CSCS Card</span> & Certifications
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get approved documents within 3–6 working days. No exams. 100% secure & DVLA / CITB backed.
            </p>
            
            {/* Trust Badges with Icons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-green-500/10 text-green-400 rounded-full px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                No Exams
              </div>
              <div className="flex items-center bg-blue-500/10 text-blue-400 rounded-full px-4 py-2 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                3–6 Day Delivery
              </div>
              <div className="flex items-center bg-red-500/10 text-red-400 rounded-full px-4 py-2 text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Government-Approved
              </div>
              <div className="flex items-center bg-yellow-500/10 text-yellow-400 rounded-full px-4 py-2 text-sm">
                <Star className="h-4 w-4 mr-2" />
                Trusted Service
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-primary hover:bg-primary/80 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow text-lg"
              >
                Apply Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/447300061048"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
              <Link
                to="/booking"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center text-lg"
              >
                Contact Consultant
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447300061048"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default HeroSection;
