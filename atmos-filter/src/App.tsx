import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Home } from "lucide-react";
import Example from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
      </div>
    </Router>
  );
}
