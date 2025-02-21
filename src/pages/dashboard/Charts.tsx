import React from "react"

import { Users, DollarSign, ShoppingCart, TrendingUp } from "react-feather"
import StatCard from "../../components/cards/StatCard"
import ChartCard from "../../components/cards/ChartCard"

const Dashboard: React.FC = () => {
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Total Users" value="10,245" icon={<Users className="w-8 h-8" />} />
      <StatCard title="Total Revenue" value="$21,456" icon={<DollarSign className="w-8 h-8" />} />
      <StatCard title="Total Orders" value="1,456" icon={<ShoppingCart className="w-8 h-8" />} />
      <StatCard title="Growth" value="+ 15.7%" icon={<TrendingUp className="w-8 h-8" />} />

      <div className="md:col-span-2">
        <ChartCard title="Sales Overview">
          <div className="flex items-center justify-center h-full text-gray-500">Chart placeholder</div>
        </ChartCard>
      </div>

      <div className="md:col-span-2">
        <ChartCard title="Top Products">
          <div className="flex items-center justify-center h-full text-gray-500">Chart placeholder</div>
        </ChartCard>
      </div>
    </div>
  )
}

export default Dashboard
