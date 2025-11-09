import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="w-screen h-screen justify-center  text-gray-900">
      {!started ? <LandingPage onStart={() => setStarted(true)} /> : <Dashboard onEnd={()=> setStarted(false)}/>}
    </div>
  );
}
