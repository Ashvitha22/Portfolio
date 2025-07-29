import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs
      .send(
        'service_hmo6o5c',
        'template_mppacms',
        {
          user_name: form.name,
          to_name: 'Ashvitha',
          user_email: form.email,
          to_email: 'ashviselva22@gmail.com',
          message: form.message,
        },
        'VCXqsjzIZ6mRDhGEV'
      )
      .then(() => {
        setLoading(false);
        setSuccessMessage('✅ Thank you for your message! I’ll get back to you shortly.');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setErrorMessage("❌ Sorry, I didn't receive your message. Please try again.");
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-black to-[#0f0f0f] text-white">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-white mb-4 border-b-2 border-red-500 pb-2">
          📬 Let's Talk
        </h2>
        <p className="text-gray-400 mb-10">
          Whether you want to build a new app, improve your website, or just say hello — I’d love to hear from you.
        </p>

        {successMessage && (
          <div className="mb-4 p-3 rounded border border-green-500 text-green-400 bg-green-900/20">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-3 rounded border border-red-500 text-red-400 bg-red-900/20">
            {errorMessage}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g. johndoe"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="e.g. johndoe@gmail.com"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Let me know how I can help..."
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded bg-red-600 hover:bg-red-700 transition font-semibold shadow-lg"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
