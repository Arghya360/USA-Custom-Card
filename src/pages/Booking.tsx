
import React, { useEffect } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import { Clock, CheckCircle, Headphones, MoveRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookingSteps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Choose Your Service",
      description: "Select from CSCS cards, UK driving licenses, construction certifications, or plant operator licenses."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Submit Required Documents",
      description: "Upload your personal information, photos, and any supporting documentation via our secure portal."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Secure Payment & Processing",
      description: "Make payment through our encrypted system and our certified consultants begin immediate processing."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Fast Document Delivery",
      description: "Receive your official UK documents within 3-6 working days via secure tracked delivery."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Fast-Track UK Document Services</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Professional UK document certification services. Get your CSCS cards, driving licenses, and construction certifications processed by authorized consultants within 3-6 working days.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Process */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Our Document Processing Service</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional UK document certification with guaranteed processing times and secure delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, index) => (
              <div
                key={index}
                className="glassmorphism p-6 text-center animate-fade-in card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-psyco-green-DEFAULT/50">
                    <MoveRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Calendar */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Schedule Your Consultation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a consultation with our certified document specialists to discuss your requirements
            </p>
          </div>
          
          <BookingCalendar />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our UK document certification services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does document processing take?",
                answer: "All UK documents are processed within 3-6 working days from receipt of complete documentation and payment. Express services available for urgent requirements."
              },
              {
                question: "What documents do I need to provide?",
                answer: "Requirements vary by service. Generally, you'll need proof of identity, passport photos, and relevant supporting documents. Our team will provide a complete checklist after consultation."
              },
              {
                question: "Are your services legally authorized?",
                answer: "Yes, we work exclusively with certified consultants authorized by UK regulatory bodies. All documents issued are genuine and legally valid."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and secure online payments. Full payment is required before processing begins."
              },
              {
                question: "Can I track my application progress?",
                answer: "Yes, you'll receive regular updates via email and SMS. We also provide a tracking portal where you can monitor your application status 24/7."
              },
              {
                question: "What if my application is rejected?",
                answer: "Our pre-screening process ensures 99% success rate. In rare cases of rejection, we offer full refund minus administrative fees and will advise on reapplication."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 animate-fade-in card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Direct Contact */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 card-hover">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">UK Document Certification Specialists</h2>
                <p className="text-gray-300 mb-6">
                  Get expert guidance on CSCS cards, driving licenses, and construction certifications. Our certified consultants are here to assist you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">+44 20 7946 0958</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">info@ukdocumentservices.co.uk</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">Mon-Fri: 8am-7pm | Sat: 9am-5pm | Emergency: 24/7</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Urgent Processing</h3>
                    <p className="text-gray-300">24/7 support for express document services</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Document Verification</h3>
                    <p className="text-gray-300">Free document authenticity checks and guidance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Secure Delivery</h3>
                    <p className="text-gray-300">Tracked, insured delivery to your preferred address</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add Calendar and MessageSquare components for the icons
const Calendar = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const MessageSquare = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default Booking;
