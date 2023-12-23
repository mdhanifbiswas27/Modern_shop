import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const CartProduct = ({ cart }) => {
    const { _id, photo, name, price } = cart;
    const [cartItem, setCartItem] = useState();

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                //   )

                fetch(`https://my-assainment-tenth-assainment-server-site-awxsfnusn.vercel.app/userCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json()
                    )
                    .then(data => {
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted from cart.',
                                'success',
                            )
                            window.location.reload();
                        }

                    })

            }
        })
    }


    return (
        <div className="flex gap-10  bg-white my-5 p-5">
            <div className="overflow-x-auto">
                <table className="table text-center align-middle">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className='max-w-[200px]'>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm  text-[#E76D66]">price:{price}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='max-w-[300px]'>
                                Your selected product
                                <br />
                                <span className="badge badge-ghost badge-sm">Buy before being out of stock</span>
                            </td>
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                                <td><button className='btn bg-blue-600 text-white hover:bg-blue-600'>Buy Now</button></td>
                                <th>
                                    <button onClick={() => handleDelete(_id)} className="btn  text-xl  bg-red-600 text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </th>
                            </div>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartProduct;