import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FiArrowLeft, FiCheck, FiCircle, FiEye, FiSearch } from 'react-icons/fi'
import { FaCirclePlay } from "react-icons/fa6";

import { OutlineButton } from "../components/ui/OutlineButton"

const pyqData = [
  {
    id: "1",
    status: "pending",
    title: "CBSE 2024 PYQ",
    difficulty: "Easy",
    hasTopperSolution: true,
    hasVideoSolution: true
  },
  {
    id: "2",
    status: "completed",
    title: "CBSE 2023 PYQ",
    difficulty: "Medium",
    hasTopperSolution: true,
    hasVideoSolution: true
  },
  {
    id: "3",
    status: "pending",
    title: "CBSE 2022 PYQ",
    difficulty: "Hard",
    hasTopperSolution: true,
    hasVideoSolution: true
  }
]

const difficultyColors = {
  Easy: "text-green-600",
  Medium: "text-orange-500",
  Hard: "text-red-500"
}

export default function PYQList() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const { subject } = useParams()

  const filteredData = pyqData.filter(item => {
    const matchesFilter = filter === "all" || item.difficulty.toLowerCase() === filter
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate(`/subject/${subject}`)}
          className="p-2 hover:bg-gray-100 rounded-full mr-2"
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-semibold">{subject.charAt(0).toUpperCase() + subject.slice(1)}-Previous Year Questions</h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="relative flex-1 max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
          <input 
            type="text"
            placeholder="Search by year" 
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-32 border rounded-lg p-2"
        >
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="hidden md:grid grid-cols-7 gap-4 px-4 py-2 text-sm font-medium text-gray-500 border-b">
        <div>Status</div>
        <div className="col-span-2">Title</div>
        <div>Attempt</div>
        <div>Topper Solution</div>
        <div>Difficulty</div>
        <div>Video Solution</div>
      </div>

      <div className="space-y-2 mt-2">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm">
            <div className="grid grid-cols-7 md:grid-cols-7 gap-4 items-center px-4 py-3">
              <div className="flex items-center">
                {item.status === "completed" ? (
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <FiCheck className="h-4 w-4 text-green-600" />
                  </div>
                ) : (
                  <FiCircle className="h-6 w-6 text-gray-300" />
                )}
              </div>
              <div className="col-span-3 md:col-span-2 font-medium">{item.title}</div>
              <div className="hidden md:block">
                <OutlineButton variant="green">
                  Attempt
                </OutlineButton>
              </div>
              <div className="hidden md:flex justify-center">
                <button
                  onClick={() => {}}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="View Topper Solution"
                >
                  <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
              <div className="col-span-2 md:col-span-1 flex items-center justify-end md:justify-between">
                <span className={`${difficultyColors[item.difficulty]} mr-2 md:mr-0`}>
                  {item.difficulty}
                </span>
              </div>
              <div className="hidden md:flex justify-center">
                {item.hasVideoSolution && (
                  <button
                    onClick={() => {}}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Watch Video Solution"
                  >
                    <FaCirclePlay className="h-5 w-5 text-orange-500 hover:text-orange-600" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
