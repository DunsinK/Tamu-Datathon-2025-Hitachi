import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:5000/classify", formData);
    setResult(res.data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">AI-Powered Document Classifier</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl"
      >
        {loading ? "Analyzing..." : "Upload & Classify"}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-white shadow rounded-xl max-w-lg">
          <h2 className="text-lg font-semibold mb-2">Result:</h2>
          <pre className="text-sm bg-gray-100 p-2 rounded">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
