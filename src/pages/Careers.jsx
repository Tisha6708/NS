import { useState } from "react";

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    bio: "",
    github: "",
    linkedin: "",
    portfolio: "",
    resume: null,
    marks10: null,
    marks12: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Application submitted!");
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <h2 className="text-4xl font-bold text-center text-gradient mb-10">
        Join Our Team
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-black/50 border border-yellow-500/20 rounded-xl p-8 grid md:grid-cols-2 gap-6"
      >
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm text-yellow-400 mb-2">Name</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="w-full p-3 bg-black border border-yellow-500/30 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-yellow-400 mb-2">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            className="w-full p-3 bg-black border border-yellow-500/30 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-yellow-400 mb-2">Phone</label>
          <input
            name="phone"
            type="tel"
            onChange={handleChange}
            className="w-full p-3 bg-black border border-yellow-500/30 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-yellow-400 mb-2">Date of Birth</label>
          <input
            name="dob"
            type="date"
            onChange={handleChange}
            className="w-full p-3 bg-black border border-yellow-500/30 rounded-md"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm text-yellow-400 mb-2">Short Bio</label>
          <textarea
            name="bio"
            rows="4"
            onChange={handleChange}
            className="w-full p-3 bg-black border border-yellow-500/30 rounded-md"
            placeholder="Tell us about yourself..."
            required
          ></textarea>
        </div>

        {/* Uploads */}
        {["resume", "marks10", "marks12"].map((field) => (
          <div key={field}>
            <label className="block text-sm text-yellow-400 mb-2 capitalize">
              {field === "marks10"
                ? "10th Marksheet"
                : field === "marks12"
                ? "12th Marksheet"
                : "Resume"}
            </label>
            <input
              name={field}
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={handleChange}
              className="w-full text-gray-300"
              required
            />
          </div>
        ))}

        {/* Social Links */}
        <div>
          <label className="block text-sm text-yellow-400 mb-2">GitHub</label>
          <input
            name="github"
            type="url"
            onChange={handleChange}
            placeholder="https://github.com/username"
            className="w-full p-3 bg-black border border-yellow-500/30 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm text-yellow-400 mb-2">LinkedIn</label>
          <input
            name="linkedin"
            type="url"
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
            className="w-full p-3 bg-black border border-yellow-500/30 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm text-yellow-400 mb-2">Portfolio</label>
          <input
            name="portfolio"
            type="url"
            onChange={handleChange}
            placeholder="https://yourportfolio.com"
            className="w-full p-3 bg-black border border-yellow-500/30 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="col-span-2 mt-4 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
}
