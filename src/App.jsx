import { Outlet } from 'react-router'
import Footer from './Footer'
import './index.css'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

function App() {

  return (
    <>
    {/* ScrollToTop */}
    <ScrollToTop/>
    <div>
      {/* Navigation Bar  */}
      <Navbar />
      {/* Main content area */}
      <Outlet/>
      {/* Footer Section  */}
      <Footer/>
    </div>
    </>
  )
}

export default App
