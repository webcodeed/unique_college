import Home from './Home'
import './index.css'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Navbar />
      {/* Main content area */}
      <Home/>
      <main className="min-h-screen bg-white">
        {/* Add your page content here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-dark-gray mb-8">Welcome to Unique College</h1>
          <p className="text-lg text-dark-gray mb-4">
            This is a placeholder for your main content. The navigation bar above is fully functional with:
          </p>
          <ul className="list-disc list-inside text-dark-gray space-y-2 mb-8">
            <li>Sticky positioning that shrinks on scroll</li>
            <li>Mobile-responsive design with hamburger menu</li>
            <li>Dropdown menus for Courses (mega menu) and Admissions</li>
            <li>Active page highlighting with blue underline</li>
            <li>Mobile Apply Now CTA in footer</li>
          </ul>
          
          {/* Add some content to test scrolling */}
          <div className="space-y-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-light-gray p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-dark-gray mb-4">Section {i + 1}</h2>
                <p className="text-dark-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
