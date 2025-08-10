import { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.08 * i },
  }),
};

const Contact = () => {
  const navigate = useNavigate(); 
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.8s ease-in-out';
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current?.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sunset-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sunset-purple/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Contact <span className="bg-sunset-gradient bg-clip-text text-transparent">Us</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Questions? Send us a message below or{" "}
              <a 
                href="mailto:project57.connect@gmail.com" 
                className="text-sunset-orange hover:underline"
              >
                email us directly
              </a>.
            </p>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6 text-left">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-sunset-orange"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-sunset-orange"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-sunset-orange"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-sunset-orange"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-sunset-gradient text-white font-bold rounded-lg hover:opacity-90 transition duration-200"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
