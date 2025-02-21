import React from "react"

const RideCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/5 mb-4"></div>
      <div className="h-10 bg-blue-200 dark:bg-blue-700 rounded"></div>
    </div>
  )
}

export default RideCardSkeleton

