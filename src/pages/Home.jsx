import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-gradient mb-6 neural-pulse"
      >
        Neural Intelligence for Education
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-2xl text-gray-300 text-lg"
      >
        Empowering institutions with AI-driven SaaS and blockchain-secured solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex gap-6"
      >
        <button className="px-6 py-3 bg-yellow-400 text-black rounded-md font-medium hover:bg-yellow-300 transition neural-border">
          Explore Solutions
        </button>
        <button className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-md font-medium hover:bg-yellow-400 hover:text-black transition neural-border">
          Watch Demo
        </button>
      </motion.div>
    </section>
  );
}
