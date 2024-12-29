// src/app/page.tsx

import Header from "@/components/client/header/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20 text-center">
          <h2 className="text-3xl font-semibold">Welcome to Our Website</h2>
          <p className="mt-4 text-xl">We are passionate about delivering top-quality solutions for your needs.</p>
          <a href="#services" className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400">Explore Our Services</a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">About Us</h2>
            <p className="text-lg mb-4">
              We are a team of experts dedicated to providing the best solutions for our clients. Our focus is on quality, innovation, and customer satisfaction.
            </p>
            <p className="text-lg">
              With years of experience in the industry, we have successfully completed numerous projects across various sectors. Our team is committed to helping you achieve your goals and make your vision a reality.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 bg-white shadow-md rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-lg">
                  We specialize in creating responsive, user-friendly websites that drive results for businesses of all sizes.
                </p>
              </div>
              <div className="p-8 bg-white shadow-md rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Mobile App Development</h3>
                <p className="text-lg">
                  Our mobile apps are designed to provide seamless user experiences across all devices, from iOS to Android.
                </p>
              </div>
              <div className="p-8 bg-white shadow-md rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
                <p className="text-lg">
                  We help businesses grow online through innovative digital marketing strategies that reach and engage your audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">Our Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-200 rounded-lg shadow-md">
                <img src="/portfolio1.jpg" alt="Portfolio 1" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Project One</h3>
                  <p className="text-lg">Description of the project goes here. Showcasing our expertise in various domains.</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg shadow-md">
                <img src="/portfolio2.jpg" alt="Portfolio 2" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
                  <p className="text-lg">A brief overview of another successful project we've completed for a client.</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg shadow-md">
                <img src="/portfolio3.jpg" alt="Portfolio 3" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
                  <p className="text-lg">A showcase of how our solutions helped our clients achieve their business objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
            <div className="flex justify-center space-x-8">
              <div className="w-1/3 bg-white shadow-md p-6 rounded-lg">
                <p className="text-lg mb-4">"The team exceeded our expectations. Their work has made a huge impact on our business!"</p>
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-500">CEO, Example Co.</p>
              </div>
              <div className="w-1/3 bg-white shadow-md p-6 rounded-lg">
                <p className="text-lg mb-4">"Incredible service and excellent communication throughout the project. Highly recommend!"</p>
                <p className="font-semibold">Jane Smith</p>
                <p className="text-gray-500">Marketing Director, ABC Corp.</p>
              </div>
              <div className="w-1/3 bg-white shadow-md p-6 rounded-lg">
                <p className="text-lg mb-4">"The results we got from their work were beyond what we hoped for. Fantastic team!"</p>
                <p className="font-semibold">Michael Lee</p>
                <p className="text-gray-500">Founder, Startup Inc.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
            <p className="text-lg mb-6">We'd love to hear from you! Reach out to us for any questions or inquiries.</p>
            <form>
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-6 py-3 text-gray-800 rounded-lg mb-4 w-full max-w-lg mx-auto"
              />
              <textarea
                placeholder="Your Message"
                className="px-6 py-3 text-gray-800 rounded-lg mb-4 w-full max-w-lg mx-auto"
              />
              <button type="submit" className="bg-yellow-500 text-black py-3 px-6 rounded-lg">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Our Amazing Website. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
