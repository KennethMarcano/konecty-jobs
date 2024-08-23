// components/ProductCard.tsx  
import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    imageUrl: string;
    brand: string;
    productName: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, brand, productName, price }) => {
    return (
        <div className=" w-[256px] bg-secondary rounded-2xl shadow-md p-4 ">
            <Image height={100} width={160} src={imageUrl} alt={productName} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-2">{brand}</h2>
            <p className="text-gray-600 overflow-hidden text-ellipsis line-clamp-2">{productName}</p>
            <p className="text-xl font-semibold mt-2">{`$${price}`}</p>
        </div>
    );
};

export default ProductCard;  