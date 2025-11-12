import { useState } from "react";
import { motion } from "framer-motion";

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
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("✅ Application submitted! Our team will get in touch soon.");
  };

  // ✅ Animate on mount, not on scroll
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 text-white overflow-hidden opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
      {/* Header */}
      <motion.h2
        {...fadeUp(0)}
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
      >
        Join the Neural Revolution
      </motion.h2>

      <motion.p
        {...fadeUp(0.2)}
        className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
      >
        At <span className="text-yellow-400 font-semibold">Neuricorn Syndicate</span>, we’re not just hiring — we’re
        building the next generation of innovators redefining education through
        intelligence, creativity, and technology. If you’re driven by purpose,
        this is where you belong.
      </motion.p>

      {/* Form */}
      <motion.form
        {...fadeUp(0.3)}
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-[#141414]/80 border border-[#2a2a2a] rounded-2xl p-10
        backdrop-blur-md shadow-lg shadow-black/40 grid md:grid-cols-2 gap-8
        hover:border-yellow-400/50 transition-all duration-300"
      >
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "John Doe" },
          { label: "Email", name: "email", type: "email", placeholder: "john@example.com" },
          { label: "Phone", name: "phone", type: "tel", placeholder: "+91 9876543210" },
          { label: "Date of Birth", name: "dob", type: "date" },
        ].map((input) => (
          <div key={input.name}>
            <label className="block text-sm text-yellow-400 mb-2">{input.label}</label>
            <input
              {...input}
              onChange={handleChange}
              className="w-full p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
                focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
              required
            />
          </div>
        ))}

        {/* Bio */}
        <div className="md:col-span-2">
          <label className="block text-sm text-yellow-400 mb-2">Short Bio</label>
          <textarea
            name="bio"
            rows="4"
            onChange={handleChange}
            placeholder="Tell us about yourself, your skills, and your goals..."
            className="w-full p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
              focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
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
              className="w-full text-gray-300 bg-transparent border border-yellow-500/30 rounded-md p-2 cursor-pointer
                file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-yellow-400 file:text-black file:font-semibold
                hover:file:bg-yellow-300 transition-all"
              required
            />
          </div>
        ))}

        {/* Socials */}
        {[
          { name: "github", label: "GitHub", placeholder: "https://github.com/username" },
          { name: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/in/username" },
          { name: "portfolio", label: "Portfolio", placeholder: "https://yourportfolio.com" },
        ].map((s, i) => (
          <div key={s.name} className={i === 2 ? "md:col-span-2" : ""}>
            <label className="block text-sm text-yellow-400 mb-2">{s.label}</label>
            <input
              type="url"
              name={s.name}
              placeholder={s.placeholder}
              onChange={handleChange}
              className="w-full p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
                focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
            />
          </div>
        ))}

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="col-span-2 mt-4 py-3 font-semibold text-black rounded-md
          bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300
          shadow-lg shadow-yellow-400/30 transition-all"
        >
          Submit Application
        </motion.button>
      </motion.form>

      {/* Extra CTA */}
      <motion.div {...fadeUp(0.6)} className="text-center mt-16 text-gray-300 max-w-3xl mx-auto">
        <p className="text-lg mb-4">
          Have questions before applying? Reach us at{" "}
          <span className="text-yellow-400 font-semibold cursor-pointer hover:underline">
            careers@neuricorn.ai
          </span>
        </p>
        <p className="text-sm text-gray-500">
          We’re an equal-opportunity company — your skills, ideas, and mindset
          matter more than anything else.
        </p>
      </motion.div>
    </section>
  );
}
