import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import Subjects from "./pages/Subjects";
import SubjectContent from "./pages/SubjectContent";
import PYQList from "./pages/PYQList";
import ChapterList from "./pages/ChapterList";  
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <div className="ml-16">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Subjects />} />
            <Route path="/team" element={<div>coming soon</div>} />
            <Route path="/profile" element={<div>coming soon</div>} />
            <Route path="/subject/:subject" element={<SubjectContent />} />
            <Route path="/subject/:subject/pyq" element={<PYQList />} />
            <Route path="/subject/:subject/chapters" element={<ChapterList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}