{/* WHY NEURICORN SECTION */}
<section className="relative py-24 bg-transparent">
  <div className="container mx-auto px-6 md:px-16 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-neural-golden mb-6">
      Why <span className="gradient-text">Neuricorn?</span>
    </h2>
    <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
      Neuricorn Syndicate isn’t just another EdTech startup — it’s a movement to redefine how intelligence, 
      automation, and creativity converge in education. Our platforms are designed to think, learn, and adapt 
      like the human mind — driven by data, powered by neural logic.
    </p>
    <div className="grid md:grid-cols-3 gap-10 mt-16">
      {[
        { title: "Adaptive AI", desc: "Machine learning models that evolve with data, not just rules." },
        { title: "Decentralized Security", desc: "Blockchain-backed integrity ensuring transparent education systems." },
        { title: "Human-Centered Design", desc: "Tech that amplifies human potential, not replaces it." }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-[#141414]/60 backdrop-blur-md border border-[#2a2a2a] rounded-2xl hover:border-neural-golden transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-neural-golden mb-3">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* OUR VISION */}
<section className="relative py-32 bg-gradient-to-b from-transparent to-black/50">
  <div className="container mx-auto px-6 md:px-20 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-neural-golden mb-6">
      Our <span className="gradient-text">Vision</span>
    </h2>
    <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-10">
      To create an ecosystem where education is intelligent, decentralized, and deeply personal. 
      We envision a world where neural networks empower institutions to teach smarter, assess faster, and evolve endlessly.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-10">
      <div className="bg-[#1a1a1a]/70 p-8 rounded-2xl border border-[#2a2a2a] w-full md:w-1/3 hover:border-neural-golden transition-all">
        <h4 className="text-xl font-semibold text-neural-golden mb-3">Innovation</h4>
        <p className="text-gray-400 text-sm">
          We constantly experiment with new technologies to keep institutions at the edge of the neural revolution.
        </p>
      </div>
      <div className="bg-[#1a1a1a]/70 p-8 rounded-2xl border border-[#2a2a2a] w-full md:w-1/3 hover:border-neural-golden transition-all">
        <h4 className="text-xl font-semibold text-neural-golden mb-3">Integration</h4>
        <p className="text-gray-400 text-sm">
          Our solutions integrate seamlessly with existing academic systems — no friction, no downtime.
        </p>
      </div>
      <div className="bg-[#1a1a1a]/70 p-8 rounded-2xl border border-[#2a2a2a] w-full md:w-1/3 hover:border-neural-golden transition-all">
        <h4 className="text-xl font-semibold text-neural-golden mb-3">Impact</h4>
        <p className="text-gray-400 text-sm">
          Every product we build is engineered to elevate educational outcomes and operational efficiency.
        </p>
      </div>
    </div>
  </div>
</section>

{/* POWERED BY NEURAL INTELLIGENCE */}
<section className="relative py-24 bg-transparent">
  <div className="container mx-auto px-6 md:px-16 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-neural-golden mb-6">
      Powered by <span className="gradient-text">Neural Intelligence</span>
    </h2>
    <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-12">
      Every system at Neuricorn is powered by deep neural logic — inspired by the human brain, optimized by machine learning, 
      and secured by blockchain. Together, they form an intelligent, adaptive layer over modern education.
    </p>
    <div className="flex flex-wrap justify-center gap-6">
      {["AI Grading", "Smart Mark Recognition", "Blockchain Security", "Deep Learning Models", "Real-time Analytics"].map((tech, i) => (
        <span key={i} className="px-5 py-3 text-sm bg-[#202020]/60 border border-[#333] rounded-full text-neural-golden hover:bg-neural-golden/10 transition-all duration-300">
          {tech}
        </span>
      ))}
    </div>
  </div>
</section>

{/* CTA SECTION */}
<section className="relative py-28 text-center bg-gradient-to-t from-[#111] to-transparent">
  <div className="container mx-auto px-6 md:px-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neural-golden">
      Join the <span className="gradient-text">Neural Revolution</span>
    </h2>
    <p className="max-w-2xl mx-auto text-gray-300 mb-10">
      Be part of the future. Empower education with intelligence, automation, and integrity.
    </p>
    <button className="btn btn--primary px-8 py-3 rounded-lg">
      <span>Get Started</span>
    </button>
  </div>
</section>
