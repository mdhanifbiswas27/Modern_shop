import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="mx-auto text-center pb-5">
            <h2 className="text-4xl font-extrabold text-[#E76D66] opacity-70 py-9">Register Your Account</h2>
            <div className="mx-auto text-center max-w-[900px] bg-white p-10 rounded-md">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 mx-auto text-center">
                    <input className="p-5 w-3/4 mt-4 bg-[#F5F6F7] ml-10 rounded-md border-2 border-[#E76D66] outline-none" type="text" name="name" id="" placeholder="Enter your name" />
                    <input className="p-5 w-3/4 mt-4 bg-[#F5F6F7] ml-10 rounded-md border-2 border-[#E76D66] outline-none" type="text" name="photo" id="" placeholder="Enter photo url" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 mb-8">
                    <input className="p-5 w-3/4 mt-4 bg-[#F5F6F7] ml-10 rounded-md border-2 border-[#E76D66] outline-none" type="email" name="email" id="" placeholder=" Enter your E-mail" />
                    <input className="p-5 w-3/4 mt-4 bg-[#F5F6F7] ml-10 rounded-md border-2 border-[#E76D66] outline-none" type="password" name="password" id="" placeholder="Enter your password" />
                </div>
                <input className="btn w-3/4 btn-outline hover:bg-[#E76D66] hover:outline-none mt-9" type="submit" value="REgister" />
                <h1 className="text-xl font-medium mt-5">Already have an account?<button className="btn-link text-[#E76D66]"><Link to='/login'>Login</Link></button></h1>
            </div>



        </div>
    );
};

export default Register;