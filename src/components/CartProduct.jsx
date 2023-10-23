import { RiDeleteBin6Line } from 'react-icons/ri';

const CartProduct = ({ cart }) => {
    const { photo, name, price } = cart;
    return (
        <div className="flex gap-10  bg-white my-5 p-5">
            <div className="overflow-x-auto">
                <table className="table text-center align-middle">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className='w-[200px]'> 
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">price:{price}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='w-[300px]'>
                                Your selected product
                                <br />
                                <span className="badge badge-ghost badge-sm">Buy before being out of stock</span>
                            </td>
                            <td>Buy Now</td>
                            <th>
                                <button className="btn btn-ghost btn-xs"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartProduct;