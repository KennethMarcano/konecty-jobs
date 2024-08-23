'use client'
import { Suspense } from "react";
import { useState, useEffect } from "react";

import Search from "./ui/search";
import InformationSearch from "./ui/informationSearch";
import Filter from "./ui/product/filter";
import ProductCard from "./ui/product/cards";
import Pagination from "./ui/product/pagination";
import { Product } from "@/types/product";



export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useState({ name: '', category: '' }); 
  useEffect(() => {  
    const fetchProducts = async () => {  
      const query = new URLSearchParams(searchParams).toString();  
      const response = await fetch(`/api/products?${query}`);
      if (!response.ok) {  
        throw new Error('Error al cargar los productos');  
      }  
      const data = await response.json();  
      setProducts(data);  
    };  

    fetchProducts();  
  }, [searchParams]); 


  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  return (
    <main className="mx-auto max-w-6xl p-4 pt-10">
      <Search placeholder="Buscar produto" />
      <InformationSearch />
      <Filter />
      <Suspense>
        <div className="flex flex-wrap gap-4 pt-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              brand={product.category}
              productName={product.name}
              price={product.price}
            />
          ))}
        </div>
      </Suspense>
      <div className="mt-5 flex w-full justify-center py-8">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
