'use client'
import { useState } from "react";
export default function Filter() {
    const [selectedBrand, setSelectedBrand] = useState<string>('Todos');
    const brands = ['Todos', 'Nike', 'Converse', 'New Balance', 'Asics'];

    const handleSelectBrand = (brand: string) => {
        setSelectedBrand(brand);
    };
    return (
        <div className="flex overflow-x-auto whitespace-nowrap space-x-2 mt-2 pt-8">
            {brands.map((brand) => (
                <button
                    key={brand}
                    onClick={() => handleSelectBrand(brand)}
                    className={`font-medium px-[16px] py-[8px] rounded-3xl ${selectedBrand === brand ? 'bg-selectFilter text-white' : 'bg-secondary text-black'}`}
                >
                    {brand}
                </button>
            ))}
        </div>
    )
}