import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "./AuthProvider";
import { BsMoon, BsFillSunFill } from 'react-icons/bs';
import Swal from 'sweetalert2'


const Navbar = () => {
    const { user, userLogOut } = useContext(authContext);
    const [lightMode, setLightMode] = useState('light');


 function changeTheme(){
     const html = document.documentElement

     if(lightMode == "light"){
        html.classList.remove("light")
        html.classList.add("dark")
        setLightMode("dark")
        localStorage.setItem("mode", "dark")
     }
     else{
        
            html.classList.remove("dark")
            html.classList.add("light")
            setLightMode("light")
            localStorage.setItem("mode", "light")
     }
 }
useEffect(()=>{
    const currentMode = localStorage.getItem("mode") || "light"
    if(currentMode){
        setLightMode(currentMode)
        const html = document.documentElement
        html.classList.add(currentMode)
    }
    
},[])
    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                Swal.fire({
                    title: 'success!',
                    text: 'Login successfully',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            })
            .catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'something wrong',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-white dark:bg-indigo-900">
            <div className="">

                <div className="mt-4 w-[180px] "><img className="flex justify-center dark:rounded-md" src='https://i.ibb.co/WB7RhBX/Logo.png' alt="" /></div>
                <div>
                    <ul className="flex gap-5 text-lg sm:ml-8 lg:ml-0 dark:text-white">
                        <Link to='/'><li className="hover:text-[#E76D66] hover:bg-[#F5F6F7] border-b-8 border-b-transparent hover:border-b-8 hover:border-[#E76D66] py-6 sm:px-1 lg:px-3">Home</li></Link>
                        <Link to='/addProduct'><li className="hover:text-[#E76D66] hover:bg-[#F5F6F7] border-b-8 border-b-transparent hover:border-b-8 hover:border-[#E76D66] py-6 sm:px-1 lg:px-3">Add Product</li></Link>
                        <Link to='/myCart'><li className="hover:text-[#E76D66] hover:bg-[#F5F6F7] border-b-8 border-b-transparent hover:border-b-8 hover:border-[#E76D66] py-6 sm:px-1 lg:px-3">My Cart</li></Link>
                        <Link to='/register'><li className="hover:text-[#E76D66] hover:bg-[#F5F6F7] border-b-8 border-b-transparent hover:border-b-8 hover:border-[#E76D66] py-6 sm:px-1 lg:px-3">Register</li></Link>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between">
                <div></div>
                <div className="flex">
                    <div className="flex items-center">
                        <div className=" flex items-center">
                            {
                                user ? <>
                                    <span className="mr-2 text-lg font-medium inline mt-3 dark:text-white">{user.displayName} <img className="inline rounded-full h-[40px] w-[40px] " src={user.photoURL} alt="photo" /></span>

                                    <Link ><button onClick={handleLogOut} className="btn py-4 px-3 mt-5 text-white  bg-[#E76D66]">Log Out</button></Link>
                                </> :
                                    <Link to='/login'><button className="btn py-4 px-3 mt-5 text-white  bg-[#E76D66]">LogIn</button></Link>
                            }
                        </div>
                        {/* <div className="p-3 rounded-full ml-2 mt-4  text-2xl bg-[]" id="change_btn"><p id="change_img">< BsMoon></BsMoon></p></div> */}
                        <div onClick={changeTheme} className="p-3 rounded-full ml-2 mt-4  text-2xl bg-[] dark:text-white" id="change_btn"><p id="change_img">< BsFillSunFill></BsFillSunFill></p></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;