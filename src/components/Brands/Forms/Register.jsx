import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const Navigate = useNavigate();
    const {createUser} = useContext(authContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // create user
        createUser(email,password)
        .then((result)=>{
            alert('User created successfully')
            Navigate('/');
            // update profile
            updateProfile(result.user,{
                displayName: name,
                photoURL:photo,
            })
            .then(()=>{
                Navigate('/');
            })
            .catch()
        })
        .catch(()=>{
            alert(()=>{
                alert('Some thing wrong Please try again')
            })
        })

    }


    return (
        <div className="mx-auto text-center pb-5">
            <h2 className="text-4xl font-extrabold text-[#E76D66] opacity-70 py-9">Register Your Account</h2>
            <form onSubmit={handleRegister}><div className="mx-auto text-center max-w-[900px] bg-white p-10 rounded-md">
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
            </form>



        </div>
    );
};

export default Register;