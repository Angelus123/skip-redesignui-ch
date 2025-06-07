// Description: A React component to display a skip card with details like size, hire period, and price.
import React from 'react'
import type { Skip } from '../types/skip'
type SkipCardProps = {
    skip: Skip
}

const SkipCard: React.FC<SkipCardProps> = ({ skip }: SkipCardProps) => (
    <div className="bg-white rounded-2xl shadow-xl p-2 w-full">
        <img
            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg"
            alt={`${skip.size} Yard Skip`}
            className="w-full object-contain p-2 mb-4 rounded-md"
        />
        <div className="text-center pb-2">
            <h2 className="text-2xl font-bold text-gray-900">{skip.size} Yard Skip</h2>
            <p className="text-sm text-gray-400">{skip.hirePeriod} day hire period</p>
            <p className="text-xl font-extrabold text-indigo-600 mt-3">£{skip.price.total.toFixed(0)}</p>
            <button className="mt-5 bg-indigo-600 text-white px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
                Select This Skip
            </button>
        </div>
    </div>
)

export default SkipCard
