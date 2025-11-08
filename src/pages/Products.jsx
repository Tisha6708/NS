const products = [
  {
    title: "WebChain",
    subtitle: "Blockchain Question Papers",
    description:
      "Automated question paper generation using blockchain-verified content and DevOps pipelines for secure, tamper-proof assessments.",
    icon: "🔗",
  },
  {
    title: "NeuraGrade",
    subtitle: "AI Grading System",
    description:
      "AI-powered grading system with ML-based evaluation and intelligent feedback generation.",
    icon: "🤖",
  },
  {
    title: "NeuraScan",
    subtitle: "Smart Mark Processing",
    description:
      "Mark sheet automation using computer vision for seamless academic record management.",
    icon: "📊",
  },
  {
    title: "Training & Placement",
    subtitle: "Career Development Hub",
    description:
      "Industry-aligned training programs and placement guidance platform for students.",
    icon: "🎓",
  },
];

export default function Products() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <h2 className="text-4xl font-bold text-center text-gradient mb-10">
        Our Products
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Revolutionary EdTech solutions powered by neural intelligence and
        cutting-edge technology.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-black/50 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-400/40 transition shadow-md"
          >
            <div className="text-4xl mb-4">{p.icon}</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-1">
              {p.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{p.subtitle}</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
