import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { aboutDetails } from '../data/portfolioData';

export default function Contact() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real application, you would send this to a backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 text-white ${
            hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-xl text-gray-text text-center mb-12 ${
            hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          I'm actively seeking graduate school opportunities and internships in hardware/software engineering. Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div
            className={`space-y-6 ${
              hasIntersected ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="bg-dark-surface/50 backdrop-blur-sm border border-gray-border rounded-xl p-6">
              <h3 className="text-yellow-primary text-lg font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${aboutDetails.email}`}
                  className="flex items-center gap-3 text-gray-text hover:text-yellow-primary transition-colors duration-300"
                >
                  <span className="text-2xl">📧</span>
                  <span>{aboutDetails.email}</span>
                </a>
                <a
                  href={`https://${aboutDetails.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-text hover:text-yellow-primary transition-colors duration-300"
                >
                  <span className="text-2xl">💼</span>
                  <span>LinkedIn Profile</span>
                </a>
                <div className="flex items-center gap-3 text-gray-text">
                  <span className="text-2xl">📍</span>
                  <span>{aboutDetails.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${
              hasIntersected ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-dark-surface/50 backdrop-blur-sm border border-gray-border rounded-xl p-6 lg:p-8 space-y-6"
            >
              {submitted && (
                <div className="bg-yellow-primary/20 border border-yellow-primary/50 text-yellow-primary px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-gray-text mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-border'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-text mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-border'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-text mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-primary focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-border'
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-primary text-dark-bg font-semibold rounded-lg hover:bg-yellow-gold hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-primary/20 hover:shadow-yellow-primary/40"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

