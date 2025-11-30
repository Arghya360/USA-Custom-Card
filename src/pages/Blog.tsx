
import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: "1",
      title: "Labourer looking for a Green CSCS card",
      excerpt: "Learn about our fast-track process for obtaining CSCS cards quickly and legally without the need for traditional testing procedures.",
      date: "December 15, 2024",
      readTime: "5 min read",
      author: "CSCS Team",
      category: "Construction",
      imageSrc: "/lovable-uploads/blog-1.png",
      featured: true
    },
    {
      id: "2",
      title: "Plant operator needing a CPCS card",
      excerpt: "Everything you need to know about obtaining your UK driving license quickly through our authorized consultation services.",
      date: "December 10, 2024",
      readTime: "7 min read",
      author: "Leon Harris",
      category: "Driving",
      imageSrc: "/lovable-uploads/blog-2.png",
    },
    {
    id: "3",
    title: "Skilled tradesperson applying for NVQs or SMSTS",
    excerpt: "Understanding the importance of CITB health and safety certifications for construction workers in the UK.",
    date: "December 5, 2024",
    readTime: "6 min read",
    author: "Safety Expert",
    category: "Safety",
    imageSrc: "/lovable-uploads/blog-3.jpg"
    },
{
  id: "4",
  title: "UK resident who simply wants a full driving license quickly",
  excerpt: "How NVQ Level 2-6 qualifications can advance your construction career and why our fast-track process works.",
  date: "November 28, 2024",
  readTime: "8 min read",
  author: "Career Advisor",
  category: "Education",
  imageSrc: "/lovable-uploads/blog4.jpg"
},
    {
      id: "5",
      title: "CPCS Cards for Plant Operators: What You Need",
      excerpt: "Essential guide to CPCS certification for crane, forklift, and digger operators in the UK construction industry.",
      date: "November 20, 2024",
      readTime: "4 min read",
      author: "Plant Specialist",
      category: "Operations",
      imageSrc: "/lovable-uploads/blog-5.jpg"
    },
   {
  id: "6",
  title: "License Conversion: Foreign to UK Standards",
  excerpt: "How to convert your foreign driving license or work certificates to UK standards quickly and efficiently.",
  date: "November 15, 2024",
  readTime: "9 min read",
  author: "Immigration Expert",
  category: "Conversion",
  imageSrc: "/lovable-uploads/blog-6.webp"
}

  ];
  
  const categories = [
    "All",
    "Construction",
    "Driving",
    "Safety",
    "Education",
    "Operations",
    "Conversion"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Latest Update</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Fast-Track Your CSCS Cards & Driving Licenses Without Exams in the UK
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in animation-delay-200">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-psyco-black-DEFAULT border-psyco-green-muted/50 w-full"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex gap-2 overflow-x-auto pb-2 no-scrollbar flex-nowrap md:justify-end">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-psyco-green-DEFAULT text-white"
                      : "bg-psyco-black-DEFAULT text-gray-300 hover:bg-psyco-black-card"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPost
                  key={post.id}
                  {...post}
                  className={`animate-fade-in ${post.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No posts found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center card-hover">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Industry Insights</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest articles, tips, and industry news directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-psyco-black-DEFAULT border-psyco-green-muted/50 flex-grow"
              />
              <button className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
