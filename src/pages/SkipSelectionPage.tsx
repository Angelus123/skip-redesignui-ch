// Description: this file fetches skip sizes from an API, displays them in a grid, and allows users to select a skip size

import React from 'react'
import { useSkips } from '../hooks/useSkips'
import SkipCard from '../components/SkipCard'
import { LoadingSpinner } from '../components/LoadingSpinner'
import type { Skip } from '../types/skip'

function SkipSelectionPage() {
  const { data: skips, loading, error } = useSkips()

  const [selectedSkipIds, setSelectedSkipIds] = React.useState<string[]>([]);

  // Persist selected skip in localStorage
  React.useEffect(() => {
    const stored = localStorage.getItem('selectedSkipIds')
    if (stored) {
      setSelectedSkipIds(JSON.parse(stored))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('selectedSkipIds', JSON.stringify(selectedSkipIds))
  }, [selectedSkipIds])

  const handleSelect = (skipId: string) => {
    setSelectedSkipIds([skipId]);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-black bg-gray-50 dark:bg-gray-800 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto"></div>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold sm:text-3xl sm:tracking-tight lg:text-4xl">
        Find Your Perfect Skip
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl">
        Select the ideal skip size for your project needs
        </p>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-400 dark:border-red-700 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700 dark:text-red-300">
                <svg className="inline h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-9-3a1 1 0 112 0v4a1 1 0 11-2 0V7zm1 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                </svg>
                Error loading skip sizes: {error}
              </p>
            </div>
          </div>
        </div>
      )}

      {skips && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {skips.map((skip: Skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selected={selectedSkipIds.includes(skip.id)}
            onClick={() => handleSelect(skip.id)}
          />
        ))}
        </div>
      )}

      <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 max-w-4xl mx-auto">
        {['24/7 Support', 'Fast Delivery', 'Eco-Friendly', 'Price Match'].map((item) => (
          <div key={item}>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 mx-auto bg-primary-light dark:bg-primary-dark rounded-full text-primary dark:text-white transition-colors duration-500"></div>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="mt-4 text-lg font-medium">{item}</h3>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default SkipSelectionPage