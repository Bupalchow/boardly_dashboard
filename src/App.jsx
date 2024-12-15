import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Progress from "./components/Progress";
import {Calendar} from "./components/Calendar";
import { ActionCards } from "./components/ActionCards";
import { RecommendedSection } from "./components/RecommendedSection";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { Partners } from "./components/Partners";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="ml-16">
        <Sidebar />
        <div className="p-6">
          <div className="flex gap-6">
            <div className="flex-[3]">
              <Progress />
            </div>
            <div className="flex-1">
              <Calendar />
            </div>
          </div>
          <div className="mt-6">
            <ActionCards />
          </div>
          <div className="mt-6 flex gap-6">
            <div className="flex-[2]">
              <RecommendedSection />
            </div>
            <div className="flex-1">
              <UpcomingEvents />
            </div>
          </div>
          <Partners />
        </div>
      </div>
    </div>
  )
}