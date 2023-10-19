import { Link } from "react-router-dom";
import { IoIosContact } from 'react-icons/io';
import { BsFillLockFill } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { useContext } from "react";
import { authContext } from "../../AuthProvider";


const Login = () => {

    const {userLogin} = useContext(authContext)

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        // login
        userLogin(email,password)
        .then(() =>{
            alert('login successfully')
        })
        .catch(()=>{
            alert('Email or password not mathch')
        })


    }
    return (
        <div className="mx-auto bg-white w-[600px] pb-6">
            <h1 className="text-center text-4xl font-bold mb-7 py-5 text-[#E76D66]">Log in to your account!</h1>
            <form onSubmit={handleLogin}>
                <div className=" mx-auto  text-center">
                    <div className="mx-auto flex text-center">

                        <div className="mx-auto flex items-center border-b-2 gap-2 border-[#E76D66]">
                            <div className="text-3xl ml-3 text-[#9CAAC9] py-5">
                                < IoIosContact ></IoIosContact>
                            </div>
                            <input className=" mx-auto w-[350px] text-xl font-medium  outline-none pb-1 " type="email" name="email" placeholder="Type Your E-mail" id="" />
                        </div>
                    </div> <br />

                    <div className="mx-auto flex text-center">

                        <div className="mx-auto flex items-center border-b-2 gap-2 border-[#E76D66] py-3">
                            <div className="text-3xl ml-3 text-[#9CAAC9] py-4">
                                < BsFillLockFill ></BsFillLockFill>
                            </div>
                            <input className=" mx-auto w-[350px] text-xl font-medium  outline-none pb-1 " type="password" name="password" placeholder="Type Your Password" id="" />
                        </div>
                    </div> <br />
                    {/* <p className="ml-[254px] text-xl text-[#9CAAC9]" >Forget Your password</p> */}

                    <input className="btn bg-white text-[#E76D66] hover:bg-[#E76D66] hover:text-white" type="submit" value='Login' />
                    <p className="mt-5 py-5 text-lg text-[#9CAAC9]">New here please <button className="btn-link text-[#E76D66]"><Link to='/register'>Register!</Link></button></p>
                </div>
            </form>

            <h2 className="text-center text-lg font-medium mb-5">Or sing up with</h2>
            <div>
                <div className="flex justify-center">
                    <div className="border-2 flex w-[200px]">
                        <div className="text-white bg-red-500  rounded-sm text-2xl p-2">

                            <BsGoogle></BsGoogle>
                        </div>
                        <p className="text-3xl font-bold ml-4 text-red-500">Google</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;