/**
 * SkipCard displays skip info, color selection, and selection state.
 * - Loads selected skip ID from localStorage.
 * - Maps color to image for dynamic display..
 */
import React from 'react'
import type { Skip } from '../types/skip'
import yellowSkip from '../assets/skip-14.png'
import blueSkip from '../assets/blue-skip.png'
import greenSkip from '../assets/green-skip.png'
import blackSkip from '../assets/black-skip.png'
import ColorCircles  from './ColorCircle'

type SkipCardProps = {
    skip: Skip
}

interface SkipCardPropsExtended extends SkipCardProps {
    selected?: boolean
    onClick?: () => void
}

const SkipCard: React.FC<SkipCardPropsExtended> = ({
    skip,
    selected,
    onClick,
}) => {
    const [initialSelectedId] = React.useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('selectedSkipId')
        }
        return null
    })

    const [selectedColor, setSelectedColor] = React.useState<'yellow' | 'green' |'blue'| 'black' >('yellow')
    const colorToImage: Record<'yellow' | 'green' | 'blue'| 'black', string> = {
        blue: blueSkip,
        green: greenSkip,
        yellow: yellowSkip,
        black: blackSkip,
    }

    const isSelected = selected ?? (initialSelectedId === skip.id)

    return (
        <div>
            <div
                className={`border-2 ${isSelected ? 'border-yellow-200 bg-yellow-50 dark:bg-yellow-500' : 'border-gray-100 bg-gray-500 dark:border-gray-600 dark:bg-gray-800'
                    } rounded-lg overflow-hidden shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer relative w-full max-w-2xl
                hover:border-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-700 group`}
                onClick={onClick}
            >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200 bg-yellow-200 dark:bg-yellow-400 rounded-lg" />
                <div className="absolute top-2 left-2 flex items-center gap-1 z-10">
                    {skip.restrictions?.allowedOnRoad ? (
                        <span className="flex items-center justify-center text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-200 px-2 py-0.5 rounded text-xs font-semibold w-full">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Allowed on road
                        </span>
                    ) : (
                        <span className="flex items-center text-red-700 bg-red-100 dark:bg-gray-900 dark:text-red-200 px-2 py-0.5 rounded text-xs font-semibold">
                            <svg className="w-4 h-4 mr-1 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Not allowed on road
                        </span>
                    )}
                </div>
                <div className="flex flex-col items-center p-0">
                    <div className="w-full h-44 sm:h-52 md:h-60 flex items-center justify-center bg-gradient-to-br from-white via-white to-yellow-50 dark:from-gray-800 dark:to-gray-600 relative">
                        <img
                            src={colorToImage[selectedColor]}
                            alt={`${skip.size} Yard Skip`}
                            className="h-36 sm:h-44 md:h-56 object-contain drop-shadow-lg"
                        />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row gap-2 z-20 pointer-events-auto">
                            {(['yellow', 'blue', 'green', 'black'] as const).map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    className={`
                                        focus:outline-none rounded-full p-0.5
                                        ${selectedColor === color
                                            ? 'bg-yellow-100 dark:bg-yellow-700'
                                            : 'bg-gray-100 dark:bg-gray-800'
                                        }
                                        transition-colors duration-200
                                    `}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedColor(color)
                                    }}
                                >
                                    <ColorCircles color={color} selected={selectedColor === color} />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full px-3 bg-gray-50 sm:px-5 py-3 sm:py-4 flex flex-col gap-2 dark:bg-gray-800">
                        <div className="flex items-center justify-between">
                            <span className="text-base sm:text-lg font-semibold text-yellow-800 dark:text-yellow-200">{skip.size} Yard Skip</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 px-2 py-1 rounded">
                                {skip.hirePeriod} day hire period
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500 dark:text-gray-300">Total</span>
                            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">£{skip.price.total.toFixed(0)}</span>
                        </div>
                        <button
                            type="button"
                            className={`mt-4 w-full py-2 rounded-md font-bold transition-colors duration-200 ${isSelected
                                ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                                : 'bg-white text-yellow-700 border border-yellow-600 hover:bg-yellow-50 dark:bg-gray-900 dark:text-yellow-200'
                                }`}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation()
                                onClick?.()
                            }}
                        >
                            {isSelected ? 'Selected' : 'Choose This Skip'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
                {isSelected && (
                    <div>
                        <div className="w-full flex justify-center items-end mt-4"></div>
                        <div className="bg-white dark:bg-gray-900 p-2 sm:p-3 w-full max-w-3xl relative mx-auto pointer-events-auto flex flex-col sm:flex-row items-center gap-3 shadow-lg shadow-black/40 dark:shadow-yellow-900 border border-gray-300 dark:border-gray-700">
                            <div className="flex-1 flex justify-center items-center">
                                <img
                                    src={colorToImage[selectedColor]}
                                    alt={`${skip.size} Yard Skip`}
                                    className="w-28 sm:w-40 md:w-56 h-auto object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <h3 className="text-sm font-bold text-yellow-800 dark:text-yellow-200">{skip.size} Yard Skip</h3>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                    £{skip.price.total.toFixed(0)} <span className="text-xs font-semibold">for {skip.hirePeriod} days</span>
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-300 text-center mt-1">
                                    Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center gap-1 w-full sm:w-auto">
                                <div className="flex flex-row gap-2 w-full justify-center mt-1">
                                    <button
                                        type="button"
                                        className="h-7 w-full sm:w-auto px-2 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 flex items-center justify-center"
                                        onClick={onClick}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        className="h-7 w-full sm:w-auto px-2 py-1 rounded bg-yellow-600 text-white font-bold hover:bg-yellow-700 transition flex items-center justify-center"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SkipCard
