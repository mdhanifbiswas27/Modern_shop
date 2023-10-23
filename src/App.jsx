
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <div className=''>
      <div className='max-w-screen-xl mx-auto sm:p-2 lg:p-5'><Navbar></Navbar></div>
      <div className="bg-[#F5F6F7] w-full h-full py-6 sm:p-5 lg:p-5">
        <div className='max-w-screen-xl mx-auto'>
          <Outlet ></Outlet>
        </div>
        <div className='max-w-screen-xl mx-auto'>
          <Footer></Footer>
        </div>
      </div>

    </div>
  )
}

export default App
