import React, { useEffect } from "react";
import { 
  HardHat, 
  Car, 
  Award, 
  FileText, 
  Clock, 
  Shield, 
  MoveRight,
  CheckCircle,
  Users,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-card py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Fast, exam-free documentation services for UK residents, construction workers, and drivers — all delivered within 3–6 working days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center bg-primary hover:bg-primary/80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
              >
                Apply Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/447300061048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">What We Offer</h2>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism p-6">
              <HardHat className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">🚧 Construction Certifications</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• CSCS Construction Cards (all levels)</li>
                <li>• CPCS Cards (operators)</li>
                <li>• CITB Health & Safety Test</li>
                <li>• NVQs Level 2–6</li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6">
              <Car className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">🚗 UK Driving Licenses</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Provisional Driving License</li>
                <li>• Theory Certificate</li>
                <li>• Full UK Driving License</li>
                <li>• Motorcycle License</li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">📜 Fast-Track Certifications</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• CITB Approved Documents</li>
                <li>• License Conversions</li>
                <li>• Work Permits</li>
                <li>• ID Verifications</li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">📋 SSSTS & SMSTS</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Site Supervisor Safety Training</li>
                <li>• Site Management Safety Training</li>
                <li>• Advanced Scaffolding Cards</li>
                <li>• Health & Safety Certificates</li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">👷 Operator Licenses</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Crane Operator License</li>
                <li>• Forklift Certification</li>
                <li>• Digger Operator Cards</li>
                <li>• Plant Machinery Permits</li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">🛡️ Professional Cards</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Green Labourer Cards</li>
                <li>• Blue Skilled Worker Cards</li>
                <li>• Manager & Supervisor Cards</li>
                <li>• Specialized Trade Cards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">✅ Why Choose Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FileText />, title: "No Exams" },
              { icon: <Clock />, title: "3-6 Days" },
              { icon: <Users />, title: "Authorized" },
              { icon: <Shield />, title: "Secure" }
            ].map((item, index) => (
              <div key={index} className="glassmorphism p-4 card-hover">
                <div className="text-primary mb-2 flex justify-center">{item.icon}</div>
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center glassmorphism p-8 card-hover">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Available 24/7 for your convenience</p>
          <Link
            to="/booking"
            className="bg-primary hover:bg-primary/80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center btn-glow"
          >
            Apply Now <MoveRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;