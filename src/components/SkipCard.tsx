// Description: A React component to display a skip card with details like size, hire period, and price.
import React from 'react'
import type { Skip } from '../types/skip'
type SkipCardProps = {
    skip: Skip
}

const SkipCard: React.FC<SkipCardProps & { selected?: boolean; onClick?: () => void }> = ({ skip, selected = false, onClick }) => (
    <div
        className={`bg-white rounded-2xl shadow-xl p-2 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto dark:bg-gray-800 transition-colors duration-200 cursor-pointer
            ${selected ? 'ring-4 ring-yellow-300 bg-yellow-50 dark:bg-yellow-900' : ''}
            hover:bg-yellow-100 hover:ring-2 hover:ring-yellow-300 dark:hover:bg-yellow-900`}
        onClick={onClick}
    >
        <img
            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg"
            alt={`${skip.size} Yard Skip`}
            className="w-full object-contain p-2 mb-4 rounded-md bg-white dark:bg-gray-900"
        />
        <div className="text-center pb-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{skip.size} Yard Skip</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">{skip.hirePeriod} day hire period</p>
            {selected && (
                <div className="">
                    <div className="absolute" onClick={onClick} />
                    <div className="fixed left-0 bottom-0 w-full z-50 flex justify-center pointer-events-none">
                        <div className="bg-white dark:bg-gray-800 rounded-t-2xl  p-4 w-full max-w-2xl relative pointer-events-auto">
                            <div className="flex items-center gap-4 mb-2">
                                <img
                                    src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg"
                                    alt={`${skip.size} Yard Skip`}
                                    className="w-20 h-20 object-contain rounded-md bg-white dark:bg-gray-900"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{skip.size} Yard Skip</h3>
                                    <p className="text-base font-extrabold text-gray-900 dark:text-gray-100">£{skip.price.total.toFixed(0)} {skip.hirePeriod} day hire</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-300 mb-2">
                                Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                            </p>
                            <div className="flex justify-between mt-4">
                                <button
                                    type="button"
                                    className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                                    onClick={onClick}
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <p className="text-xl font-extrabold text-gray-900 mt-3 dark:text-gray-100">£{skip.price.total.toFixed(0)}</p>
            <button
                type="button"
                className="mt-5 bg-gray-100 text-gray-900 px-6 rounded-lg hover:bg-gray-200 transition duration-300 font-bold dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                onClick={onClick}
            >
                {selected ? 'Selected' : 'Select This Skip'}
            </button>
        </div>
    </div>
)

export default SkipCard
