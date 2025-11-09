import { useState } from "react";
import { motion } from "framer-motion";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      alert(`"${file.name}" classified successfully!`);
    }, 2000);
  };

  return (
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-10 w-[90%] md:w-[500px] border border-gray-100"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center mb-6">
        <input
          type="file"
          className="block w-full text-sm text-gray-600 mb-4"
          onChange={handleFileChange}
        />
        <p className="text-gray-500">
          Drag & drop or click to upload your document
        </p>
      </div>
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`${
          uploading ? "bg-gray-400" : "bg-[#1b5e20] hover:bg-[#145417]"
        } text-white w-full py-3 rounded-full font-semibold text-lg shadow-md`}
      >
        {uploading ? "Processing..." : "Upload & Analyze"}
      </button>
    </motion.div>
  );
}
