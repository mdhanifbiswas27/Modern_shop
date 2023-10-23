import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "./AuthProvider";
import Swal from "sweetalert2";


const ProductDetail = () => {
    const { user } = useContext(authContext)


    const handleAddToCart = (id,photo,price,name) => {
        const email = user.email;


        // save to database user's order
        const userCart = { id,photo,price,name,email };
        fetch('http://localhost:5000/userCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userCart)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged === true) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Product added to cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }
    const loadProduct = useLoaderData();
    const { name, photo, price, description, rating, _id } = loadProduct;

    return (
        <div>

            <div className="grid lg:grid-cols-2">
                <div className="p-24"> <img className="w-[550px] h-[450px]" src={photo} alt="" /></div>

                <div className="p-24">
                    <h2 className="text-2xl font-bold mbn-4">{name}</h2>
                    <p className="text-xl font-medium text-[#E76D66] mb-4"> Price:{price}</p>
                    <p className="text-xl font-medium text-[#E76D66] mb-4">Rating: {rating} out of 5</p>
                    <p className="text-lg font-medium text-justify my-10">{description}</p>

                    <hr />
                    <div className="flex my-10 gap-1">
                        <p className="text-xl font-extrabold">select quantity:</p>
                        <select className=" w-[100px] border-4 h-[40px] text-lg font-bold" name="select" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                    <button onClick={() => handleAddToCart(_id,photo,price,name)} className="mt-7 btn btn-wide bg-[#E76D66] text-white">Add To Cart</button>
                </div>

            </div>



        </div>
    );
};

export default ProductDetail;