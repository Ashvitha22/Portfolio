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
        'service_hxuiop2',
        'template_mppacms',
        {
          user_name: form.name,
          to_name: 'Ashvitha',
          user_email: form.email,
          to_email: 'ashviselva22@gmail.com',
          message: form.message,
        },
        'VCXqsjzIZ6mRDhGEV',
      )
      .then(() => {
        setLoading(false);
        setSuccessMessage('Thank you for your message 😃');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setErrorMessage("I didn't receive your message 😢");
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-950 text-white">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Talk</h2>
        <p className="text-gray-400 mb-10">
          Whether you want a new website, improve an existing one, or bring a unique idea to life — I'm here to help!
        </p>

        {successMessage && (
          <div className="mb-4 p-3 rounded bg-green-600 text-white">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mb-4 p-3 rounded bg-red-600 text-white">{errorMessage}</div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="e.g. johndoe@gmail.com"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Share your thoughts or inquiries..."
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;