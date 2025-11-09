import FileUpload from "./FileUpload";
import logo from "../assets/six7_logo.png";

export default function Dashboard({onEnd}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#edf0f5] text-gray-800">
      <nav className="flex items-center justify-between bg-white/70 backdrop-blur-md shadow-sm px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Six7 Security" className="w-10" />
          <h1 className="text-xl font-semibold">Six7 Dashboard</h1>
        </div>
        <button className="text-gray-600 hover:text-green-700 font-medium" onClick={onEnd}>
          Go Back
        </button>
      </nav>

      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-6">Upload Regulatory Documents</h2>
        <p className="text-gray-600 mb-10 text-center max-w-lg">
          Analyze multi-page, multi-modal files for security classification and compliance evidence.
        </p>
        <FileUpload />
      </main>
    </div>
  );
}
