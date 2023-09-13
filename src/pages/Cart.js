import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  return (
    <div>
      {!productData.length ? (
        <div className="flex flex-col justify-center items-center mt-[300px] mb-[300px]">
          <h1 className="text-3xl">No Product added to cart</h1>
          <Link to="/">
            <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <img
            className="w-full h-60 object-cover"
            src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compressed"
            alt="cartImg"
          />

          <div className="max-w-screen-xl mx-auto py-20 flex">
            <CartItem />
            <div className="w-1/3 bg-[#fafafa] py-6 px-4">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">cart totals</h2>
                <p className="flex items-center gap-4 text-base">
                  Subtotal
                  <span className="font-titleFont font-bold text-lg">
                    $ {totalAmt}
                  </span>
                </p>
                <p className="flex items-center gap-4 text-base">
                  Shipping
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nobis, impedit!
                  </span>
                </p>
              </div>
              <p className="font-titleFont font-semibold flex justify-between mt-6">
                Total <span className="text-2xl font-bold">$ {totalAmt}</span>
              </p>
              <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
                Proceed to checkout
              </button>
            </div>
          </div>
          <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
