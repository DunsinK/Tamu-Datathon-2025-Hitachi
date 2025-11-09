import { motion } from "framer-motion";
import logo from "../assets/six7_logo.png";

export default function LandingPage({ onStart }) {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-[#f5f7fb] to-[#edf0f5] text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center py-24 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/*<img src={logo} alt="Six7 Security" className="w-32 mb-6 drop-shadow-md" />*/}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Six7 Security
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10">
          AI-powered document intelligence — <br className="hidden md:block" />
          classify, protect, and comply with confidence.
        </p>
        <motion.button
          onClick={onStart}
          className="bg-[#1b5e20] hover:bg-[#145417] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 px-8 pb-24 max-w-6xl w-full">
        {[
          {
            title: "AI-Powered Classification",
            text: "Automatically identify and categorize sensitive information with LLMs trained on compliance patterns.",
          },
          {
            title: "Secure & Auditable",
            text: "Full data traceability, encryption, and page-level evidence ensure compliance and transparency.",
          },
          {
            title: "Human-in-the-Loop Ready",
            text: "Built for SMEs to validate, review, and improve model accuracy in real time.",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 text-left border border-gray-100"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed">{f.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="pb-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Six7 Security. All rights reserved.
      </footer>
    </div>
  );  
}



