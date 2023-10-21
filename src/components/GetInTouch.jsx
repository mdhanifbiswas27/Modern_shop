import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const GetInTouch = () => {
    return (
        <div className='bg-white p-10 my-10 mx-auto'>
            <h1 className='text-4xl font-normal my-4 text-center'>Get us On social media</h1>
            <div className='mx-auto'>
                <ul className='flex justify-between gap-6 p-2 mx-auto text-center my-5  w-[400px]'>
                    <li className='bg-[#E76D66]  text-white p-3 text-4xl rounded-full'><FaFacebookF></FaFacebookF></li>
                    <li className='bg-[#E76D66]  text-white p-3 text-4xl rounded-full'><BsTwitter></BsTwitter></li>
                    <li className='bg-[#E76D66]  text-white p-3 text-4xl rounded-full'><BsInstagram></BsInstagram></li>
                </ul>
            </div>
            <div>
                <h2 className='text-center mb-4 text-lg font-medium mt-10'>
                    We Trying Out Best To make Your Life Easy,<br />
                    We Working to Make Our Client 100% Satisfied And To Lead A Nice Life
                </h2>
                <p className='max-w-[900px] mx-auto text-center font-medium'>
                    Discover a wide range of top-quality electronics, from the latest smartphones and laptops to home appliances and accessories. We offer expert guidance, excellent customer service, and competitive prices to ensure you stay connected and up-to-date with the latest innovations. Visit us today and experience the future of electronics.
                </p>
            </div>
        </div>
    );
};

export default GetInTouch;