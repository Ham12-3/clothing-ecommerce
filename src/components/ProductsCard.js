import React from "react";

const ProductsCard = ({ product }) => {
  return (
    <div>
      <div className="w-full h-96">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImage"
        />
      </div>
    </div>
  );
};

export default ProductsCard;
