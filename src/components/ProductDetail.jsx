import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ProductDetail = () => {
    const { user } = useContext(authContext)
    const [rating, setRating] = useState(0);
    const [customerReview, setCustomerReview] = useState([]);
    
    const loadProduct = useLoaderData();
    const { name, photo, price, description, _id } = loadProduct;

    useEffect(() => {
        fetch('https://my-assainment-tenth-assainment-server-site-awxsfnusn.vercel.app/customerReviews')
            .then(res => res.json())
            .then(data =>{
                const reviewItem = data.filter(item => item.productId === _id);
                setCustomerReview(reviewItem)})
    }, [_id])
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const productId = _id;
        const customerRating = rating;
        const ReviewAre = user.displayName;
        const NewReview = { productId, customerRating, comment, ReviewAre };
        console.log(NewReview);

        fetch('https://my-assainment-tenth-assainment-server-site-awxsfnusn.vercel.app/customerReviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewReview)
        })

            .then(() => {
                Swal.fire({
                    title: 'success!',
                    text: 'Thank you for Your Rating',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })

            })
    }

    const handleAddToCart = (id, photo, price, name) => {
        const email = user.email;


        // save to database user's order
        const userCart = { id, photo, price, name, email };
        fetch('https://my-assainment-tenth-assainment-server-site-awxsfnusn.vercel.app/userCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userCart)
        })

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
   



    return (
        <div>

            <div className="grid lg:grid-cols-2">
                <div className="p-24"> <img className="w-[550px] h-[450px]" src={photo} alt="" /></div>

                <div className="px-24 pt-24 pb-6">
                    <h2 className="text-2xl font-bold mb-4">{name}</h2>
                    <p className="text-xl font-medium text-[#E76D66] mb-4"> Price:{price}</p>
                    <p className="text-lg font-medium text-justify my-10">{description}</p>

                    <hr className=""></hr>
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
                    <button onClick={() => handleAddToCart(_id, photo, price, name)} className="mt-7 btn btn-wide bg-[#E76D66] text-white">Add To Cart</button>
                    <hr className="my-3"></hr>
                    <p>Give a rating of this product</p>
                    <div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                        />
                    </div>
                    <form onSubmit={handleReview}>
                        <textarea name="comment" className="w-[90%] h-[100px] border-2 rounded-md mt-2 p-2" placeholder="Provide you Feedback"></textarea>
                        <input className="btn btn-sx text-white bg-[#E76D66]" type="submit" />
                    </form>
                </div>

            </div>
            <div className="">
                <h1 className="text-2xl font-semibold ">Other Customers' Reviews</h1>
                <hr className="h-[2px] bg-[#E76D66]"></hr>
                <div>
                    {
                        customerReview.map(review => <span key={review._id}>
                            <h2 className="text-xl font-medium my-2 uppercase">{review.ReviewAre}</h2>
                            <p>{review.comment}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.customerRating}
                                readOnly
                            />
                        </span>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;