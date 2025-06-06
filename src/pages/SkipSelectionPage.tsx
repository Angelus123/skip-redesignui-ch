// this file is part of a skip hire application
// It fetches skip sizes from an API, displays them in a grid, and allows users to select a skip size
import { useSkips } from '../hooks/useSkips'
import SkipCard from '../components/SkipCard'
import { LoadingSpinner } from '../components/LoadingSpinner'
import type { Skip } from '../types/skip' 

const SkipSelectionPage = () => {
  const { data: skips, loading, error } = useSkips()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Find Your Perfect Skip
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Select the ideal skip size for your project needs
          </p>
        </div>
        
        {loading && (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  Error loading skip sizes: {error}
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Skip Grid */}
        {skips && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skips.map((skip: Skip) => (
              <SkipCard key={skip.id} skip={skip} />
            ))}
          </div>
        )}
        
        {/* Trust Badges */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {['24/7 Support', 'Fast Delivery', 'Eco-Friendly', 'Price Match'].map((item) => (
              <div key={item} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 mx-auto bg-primary.light rounded-full text-primary.DEFAULT">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkipSelectionPage