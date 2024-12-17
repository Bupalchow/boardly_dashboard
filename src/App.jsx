import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import Subjects from "./pages/Subjects";
import SubjectContent from "./pages/SubjectContent";
import PYQList from "./pages/PYQList";
import ChapterList from "./pages/ChapterList";  
import TopperSolution from "./pages/TopperSolution";
import Communities from "./pages/Communities";
import MentorBooking from "./components/MentorBooking";

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
            <Route path="/communities" element={<Communities />} />
            <Route path="/mentorship" element={<MentorBooking />} />
            <Route path="/subject/:subject" element={<SubjectContent />} />
            <Route path="/subject/:subject/pyq" element={<PYQList />} />
            <Route path="/subject/:subject/chapters" element={<ChapterList />} />
            <Route path="/subject/:subject/pyq/:year/topper-solution" element={<TopperSolution />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}