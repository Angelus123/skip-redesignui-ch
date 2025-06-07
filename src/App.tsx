import SkipSelectionPage from './pages/SkipSelectionPage'
import ThemeToggle from './components/ThemeToggle'
function App() {
  return <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
    <div className="p-4">
      <ThemeToggle />
    </div>

    <SkipSelectionPage />
  </div>
}

export default App