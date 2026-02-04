import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PitchShoot from "@/pages/PitchShoot";
import StyleGuide from "@/pages/StyleGuide";
import { ChatWidget } from "@/components/ui/ChatWidget";
import ScrollToTop from "@/components/utils/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder-pitch-shoot" element={<PitchShoot />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
      <ChatWidget />
    </Router>
  );
}
