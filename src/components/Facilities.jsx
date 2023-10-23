

const Facilities = () => {
    return (
        <div className="bg-white my-10 py-10 px-5 rounded-md">
            <h1 className="mt-3 mb-3 text-4xl font-bold text-center">your benefits</h1>
            <p className="text-center font-bold text-xl mb-10">client satisfaction is our first priority!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex items-center gap-2 bg-[#E76D66] p-4 rounded-md">
                    <div>
                        <img src="https://i.ibb.co/mJ43Lxc/shiping.png" alt="" />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-white">FREE SHIPPING</p>
                        <p className="font-medium text-white">You are getting free home shipping 24/7</p>
                    </div>
                </div>
                <div className="flex items-center bg-[#57A6B9] gap-2 rounded-md p-4">
                    <div>
                        <img src="https://i.ibb.co/mRhNVYT/discount222.png" alt="" />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-white">Discounts</p>
                        <p className="font-medium text-white">You are getting a huge discount on Your Purchase</p>
                    </div>
                </div>
                <div className="flex items-center bg-[#95BB7A] gap-2 rounded-md p-4">
                    <div>
                        <img src="https://i.ibb.co/sPP7qDH/money-back.png" alt="" />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-white">MONEY BACK</p>
                        <p className="font-medium text-white">You are getting Money Back geranty if You don't take product</p>
                    </div>
                </div>
                <div className="flex items-center bg-[#7F7F7F] gap-2 rounded-md p-4">
                    <div>
                        <img src="https://i.ibb.co/MZtwQTQ/support222.png" alt="" />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-white">SUPPORT</p>
                        <p className="font-medium text-white">You are getting free support from morning to night</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;