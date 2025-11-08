import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <h2 className="text-4xl font-bold text-center text-gradient mb-10">
        Get In Touch
      </h2>

      <div className="max-w-3xl mx-auto bg-black/50 border border-yellow-500/20 rounded-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-yellow-400 mb-2">Name</label>
            <input
              name="name"
              type="text"
              className="w-full p-3 bg-black border border-yellow-500/30 rounded-md focus:outline-none focus:border-yellow-400"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-yellow-400 mb-2">Email</label>
            <input
              name="email"
              type="email"
              className="w-full p-3 bg-black border border-yellow-500/30 rounded-md focus:outline-none focus:border-yellow-400"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-yellow-400 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-3 bg-black border border-yellow-500/30 rounded-md focus:outline-none focus:border-yellow-400"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
