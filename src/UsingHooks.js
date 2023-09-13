import React, { useEffect, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSelector } from "react-redux";
export default function App() {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const config = {
    public_key: "FLWPUBK_TEST-3ac76a766c94e99cfddca5a029fbf201-X",
    tx_ref: Date.now(),
    amount: totalAmt,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <h1>Hello Test user</h1>

      <button
        disabled={!userInfo}
        className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Proceed to checkout
      </button>
    </div>
  );
}
