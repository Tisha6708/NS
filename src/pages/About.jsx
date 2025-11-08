export default function About() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gradient mb-8">About Us</h2>
      <p className="text-gray-400 max-w-3xl text-center mb-10">
        Neuricorn Syndicate pioneers the future of education technology through
        neural-network-based automation, blockchain security, and AI-driven
        intelligence. We build tools that empower institutions to streamline
        assessments, evaluations, and learning experiences.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
        <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-6 text-center">
          <div className="text-3xl mb-3">👩‍🎓</div>
          <h4 className="text-yellow-400 font-semibold">50K+ Students</h4>
          <p className="text-gray-400 text-sm">Empowered globally</p>
        </div>
        <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-6 text-center">
          <div className="text-3xl mb-3">🏫</div>
          <h4 className="text-yellow-400 font-semibold">200+ Institutions</h4>
          <p className="text-gray-400 text-sm">Trusted network</p>
        </div>
        <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-6 text-center">
          <div className="text-3xl mb-3">⚙️</div>
          <h4 className="text-yellow-400 font-semibold">99.9% Uptime</h4>
          <p className="text-gray-400 text-sm">Reliable cloud systems</p>
        </div>
      </div>
    </section>
  );
}
