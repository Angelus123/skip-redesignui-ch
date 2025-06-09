import React from 'react'
import { useSkips } from '../hooks/useSkips'
import SkipCard from '../components/SkipCard'
import { LoadingSpinner } from '../components/LoadingSpinner'
import type { Skip } from '../types/skip'

const SkipSelectionPage = () => {
  const { data: skips, loading, error } = useSkips()
  const [selectedSkipId, setSelectedSkipId] = React.useState<string | null>(null);
  React.useEffect(() => {
    const storedSkipId = localStorage.getItem('selectedSkipId');
    if (storedSkipId) {
      try {
        setSelectedSkipId(JSON.parse(storedSkipId));
      } catch {
        console.error('Failed to parse selectedSkipId from localStorage');
        setSelectedSkipId(null);
      }
    }
  }, []);
  const handleSelect = (skipId: string) => {
    if (selectedSkipId === skipId) {
      setSelectedSkipId(null);
      localStorage.removeItem('selectedSkipId');
      return;
    }
    setSelectedSkipId(skipId);
    localStorage.setItem('selectedSkipId', JSON.stringify(skipId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <header className="flex flex-col items-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">Choose Your Skip Size</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">Browse our range of skips and pick the best fit for your project.</p>
        </header>

        <section>
          {loading && (
            <div className="flex justify-center items-center h-48">
              <LoadingSpinner />
            </div>
          )}

          {error && (
            <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 rounded p-4 mb-8 flex items-center">
              <svg className="h-6 w-6 text-red-600 dark:text-red-300 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-1.414 1.414M6.343 17.657l-1.415-1.414M6.343 6.343l1.414 1.414M17.657 17.657l1.414-1.414M12 8v4m0 4h.01" />
              </svg>
              <span className="text-red-700 dark:text-red-300 font-medium">Error loading skip sizes: {error}</span>
            </div>
          )}

          {skips && (
            <div className="grid gap-6 grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
              {skips.map((skip: Skip) => (
                <div
                  key={skip.id}
                  className={`rounded-xl shadow-md border-2 transition-all duration-200 ${selectedSkipId === skip.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                    : 'border-transparent bg-white dark:bg-gray-800'
                  } hover:shadow-lg`}
                >
                  <SkipCard
                  skip={skip}
                  selected={selectedSkipId === skip.id}
                  onClick={() => handleSelect(skip.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        <footer className="mt-16">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                label: '24/7 Support', icon: (
                  <svg className="h-7 w-7 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-1.414 1.414M6.343 17.657l-1.415-1.414M6.343 6.343l1.414 1.414M17.657 17.657l1.414-1.414M12 8v4m0 4h.01" />
                  </svg>
                )
              },
              {
                label: 'Fast Delivery', icon: (
                  <svg className="h-7 w-7 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l2 7h13l2-7h1" />
                    <circle cx="7.5" cy="19.5" r="1.5" />
                    <circle cx="17.5" cy="19.5" r="1.5" />
                  </svg>
                )
              },
              {
                label: 'Eco-Friendly', icon: (
                  <svg className="h-7 w-7 text-green-700 dark:text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c4.418 0 8-4.03 8-9 0-5.523-4.03-10-8-10S4 7.477 4 13c0 4.97 3.582 9 8 9z" />
                  </svg>
                )
              },
              {
                label: 'Price Match', icon: (
                  <svg className="h-7 w-7 text-yellow-500 dark:text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
            ].map(({ label, icon }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="mb-2">{icon}</div>
                <span className="text-base font-semibold text-gray-700 dark:text-gray-200">{label}</span>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default SkipSelectionPage