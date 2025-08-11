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
      'service_iwm6b6n',
      'template_c6b0eya',
      form.current,
      'xXAGTZO6e5pBEH4qw'
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Contact <span className="bg-sunset-gradient bg-clip-text text-transparent">Us</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Questions? Send us a message below or{" "}
              <a 
                href="mailto:project57.connect@gmail.com" 
                className="text-sunset-orange hover:underline"
              >
                email us directly
              </a>.
            </p>

            {/* Card wrapper to define against background */}
            <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 ring-1 ring-white/5 p-6 sm:p-8 text-left focus-within:ring-2 focus-within:ring-sunset-pink/30">
              {/* subtle glow behind the card */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-3xl -z-10
                           bg-[radial-gradient(60%_80%_at_50%_0%,rgba(236,72,153,.10),transparent)]"
              />

              {/* Contact Form */}
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-gray-100 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/40 text-white placeholder-gray-500
                               border border-white/10 focus:outline-none focus:ring-2
                               focus:ring-sunset-pink/30 focus:border-sunset-pink/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-100 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/40 text-white placeholder-gray-500
                               border border-white/10 focus:outline-none focus:ring-2
                               focus:ring-sunset-pink/30 focus:border-sunset-pink/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-100 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/40 text-white placeholder-gray-500
                               border border-white/10 focus:outline-none focus:ring-2
                               focus:ring-sunset-pink/30 focus:border-sunset-pink/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-100 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/40 text-white placeholder-gray-500
                               border border-white/10 focus:outline-none focus:ring-2
                               focus:ring-sunset-pink/30 focus:border-sunset-pink/50"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-sunset-gradient text-white font-semibold rounded-lg hover:opacity-90 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
