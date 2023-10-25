
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <div className=''>
      <div className='bg-white dark:bg-indigo-900'>
      <div className=' max-w-screen-xl mx-auto sm:p-2 lg:p-5'><Navbar></Navbar></div>
      </div>
      <div className="bg-[#F5F6F7] dark:bg-indigo-900 w-full h-full py-6 sm:p-5 lg:p-5">
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
