
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className=''>
       <div className='max-w-screen-xl mx-auto'><Navbar></Navbar></div>
      <div className="bg-[#F5F6F7] w-full h-full py-6">
        <div className='max-w-screen-xl mx-auto'>
            <Outlet ></Outlet>
        </div>
      </div>
      
    </div>
  )
}

export default App
