import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import cscsCardsImg from "@/assets/cscs-cards.jpg";
import ukDrivingLicenseImg from "@/assets/uk-driving-license.jpg";
import constructionCertsImg from "@/assets/construction-certs.jpg";
import plantOperatorCardsImg from "@/assets/plant-operator-cards.jpg";
import safetyTrainingCardsImg from "@/assets/safety-training-cards.jpg";
import professionalQualificationsImg from "@/assets/professional-qualifications.jpg";
import { 
  FileText, 
  Car, 
  HardHat, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  MoveRight,
  Award,
  CreditCard,
  BookOpen,
  Wrench,
  Building2,
  GraduationCap
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      title: "CSCS Construction Cards",
      description: "Essential cards for UK construction sites - all levels from Labourer to Manager.",
      icon: <HardHat size={24} />,
      imageSrc: cscsCardsImg,
      link: "/services#construction"
    },
    {
      title: "UK Driving License",
      description: "Full UK driving license without tests - provisional to full license fast-tracked.",
      icon: <Car size={24} />,
      imageSrc: ukDrivingLicenseImg,
      link: "/services#driving"
    },
    {
      title: "Construction Certifications",
      description: "CPCS, CITB, NVQs and specialized construction qualifications.",
      icon: <Award size={24} />,
      imageSrc: constructionCertsImg,
      link: "/services#certifications"
    },
    {
      title: "Plant Operator Licenses",
      description: "Crane, forklift, digger and all machinery operator certifications.",
      icon: <Wrench size={24} />,
      imageSrc: plantOperatorCardsImg,
      link: "/services#operators"
    },
    {
      title: "Safety Training Cards",
      description: "SSSTS, SMSTS and health & safety training certifications.",
      icon: <Shield size={24} />,
      imageSrc: safetyTrainingCardsImg,
      link: "/services#safety"
    },
    {
      title: "Professional Qualifications",
      description: "NVQ Level 2-6, advanced scaffolding and specialized trade cards.",
      icon: <GraduationCap size={24} />,
      imageSrc: professionalQualificationsImg,
      link: "/services#qualifications"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg mb-8">
                CSCS Construction Card UK is a London-based online service helping workers and 
                residents across the UK to obtain valid government-approved documents without the need for exams.
                 We work with verified agents from DVLA and CITB to ensure secure and fast processing.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <CheckCircle className="h-8 w-8" />, text: "No Exams", color: "text-green-400" },
                  { icon: <Clock className="h-8 w-8" />, text: "3–6 Day Delivery", color: "text-blue-400" },
                  { icon: <Shield className="h-8 w-8" />, text: "Government-Approved", color: "text-red-400" },
                  { icon: <Users className="h-8 w-8" />, text: "Full Confidentiality", color: "text-yellow-400" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`${item.color} mb-2 flex justify-center`}>
                      {item.icon}
                    </div>
                    <p className="text-white font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
              <p className="text-gray-400 max-w-2xl">
                Fast, exam-free documentation services for UK residents, construction workers, and drivers — all delivered within 3–6 working days.
              </p>
            </div>
            <Link 
              to="/services"
              className="mt-4 sm:mt-0 flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View all services
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Why Choose Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We make getting your certifications simple, fast, and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="h-12 w-12" />,
                title: "No Exams Required",
                description: "Skip the stress of testing centers and exams"
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "3-6 Day Delivery",
                description: "Fast-track delivery for all services"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Authorized Consultants",
                description: "All services handled by verified professionals"
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Secure Processing",
                description: "Private and confidential document handling"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Categories */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Document Categories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Quick access to our most popular certification categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "CSCS Cards", icon: <CreditCard size={32} />, color: "text-blue-400" },
              { name: "Driving Licenses", icon: <Car size={32} />, color: "text-green-400" },
              { name: "CPCS Cards", icon: <HardHat size={32} />, color: "text-red-400" },
              { name: "CITB Tests", icon: <BookOpen size={32} />, color: "text-yellow-400" },
              { name: "NVQ Certificates", icon: <Award size={32} />, color: "text-purple-400" },
              { name: "Safety Training", icon: <Shield size={32} />, color: "text-orange-400" }
            ].map((category, index) => (
              <Link
                key={index}
                to="/services"
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-card relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have fast-tracked their certifications with us. Available 24/7 for your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-primary hover:bg-primary/80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Apply Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">📍 Based in London – 100% Online | 🕐 Available 24/7</p>
              <div className="flex justify-center space-x-6 text-sm text-gray-300">
                <span>📞 +44 7300 61048</span>
                <span>📧 leonharris2110@gmail.com</span>
                <span>📱 @uk_online_service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;