import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
            <div className="flex justify-between">
                <div className="mt-4"><img src='https://i.ibb.co/WB7RhBX/Logo.png' alt="" /></div>
                <div>
                    <ul className="flex gap-5 text-lg ">
                        <Link to='/'><li className="hover:text-[#E76D66] hover:bg-[#F5F6F7] border-b-8 border-b-transparent hover:border-b-8 hover:border-[#E76D66] py-6 px-3">Home</li></Link>
                        <Link to='/addProduct'><li className="hover:text-[#E76D66] hover:bg-[#F5F6F7] border-b-8 border-b-transparent hover:border-b-8 hover:border-[#E76D66] py-6 px-3">Add Product</li></Link>
                        <Link to='/myCart'><li className="hover:text-[#E76D66] hover:bg-[#F5F6F7] border-b-8 border-b-transparent hover:border-b-8 hover:border-[#E76D66] py-6 px-3">My Cart</li></Link>
                        <Link to='/register'><li className="hover:text-[#E76D66] hover:bg-[#F5F6F7] border-b-8 border-b-transparent hover:border-b-8 hover:border-[#E76D66] py-6 px-3">Register</li></Link>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between">
                 <div></div>
                 <div>
                    <Link ><button className="btn py-4 px-3 mt-5 hover:text-white bg-inherit hover:bg-[#E76D66]">Log Out</button></Link>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;