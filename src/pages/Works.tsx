
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Works = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Featured Project */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Our Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recent construction projects and certification services completed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glassmorphism p-1 h-full animate-fade-in card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                {/* <img
                  src="/lovable-uploads/works-1.webp"
                  alt="Summer Music Festival"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  {/* <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Festival
                  </div> */}
                  <h3 className="text-2xl font-semibold text-white mb-2">🪪 Professional Licenses & Operator Cards</h3>
                  <p className="text-gray-300 mb-4">📋 Fast Operator Licenses for machinery & plant handling</p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-100 card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80"
                  alt="Corporate Gala"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  {/* <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Corporate
                  </div> */}
                  <h3 className="text-2xl font-semibold text-white mb-2">CSCS</h3>
                  <p className="text-gray-300 mb-4">CPCS Cards – Plant & Equipment Operator Certifications.</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-200 card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                {/* <img
                  src="/lovable-uploads/48e75083-18aa-4df9-bc91-8515485aa465.png"
                  alt="Monegros Festival 2024"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  {/* <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Festival
                  </div> */}
                  <h3 className="text-2xl font-semibold text-white mb-2">CITB Health, Safety & Environment Test</h3>
                  <p className="text-gray-300 mb-4">The CITB Health, Safety & Environment Test is a mandatory certification for construction workers in the Uk.</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-300 card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                {/* <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                  alt="Major Infrastructure Project"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Infrastructure
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Provisional License</h3>
                  <p className="text-gray-300 mb-4">A Provisional License allows you to legally start learning to drive on UK roads with supervision before taking your full driving test..</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-400 card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&q=80"
                  alt="Commercial Development"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Commercial
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Theory or Practical Certificate</h3>
                  <p className="text-gray-300 mb-4">We provide fast-track Theory and Practical Driving Certificates without exams, approved by DVLA and delivered within 3–6 working days..</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-500 card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                {/* <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80"
                  alt="Residential Construction"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Residential
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">NVQ Certification</h3>
                  <p className="text-gray-300 mb-4">We offer fast-track NVQ Certifications (Level 2–6) for construction professionals, with no exams and government-approved processing..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
