import  React from "react"
import { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string
  icon: ReactNode
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-3xl font-semibold mt-1">{value}</h2>
        </div>
        <div className="text-blue-500">{icon}</div>
      </div>
    </div>
  )
}

export default StatCard

