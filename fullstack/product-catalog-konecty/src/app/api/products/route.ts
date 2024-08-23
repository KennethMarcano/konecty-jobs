import { NextResponse } from 'next/server';
import {products} from '@/app/api/sample/sample'

export async function GET(request: Request) {  
    const url = new URL(request.url);  
    const name = url.searchParams.get('name');  
    const category = url.searchParams.get('category');  
    
    let filteredProducts = products;  
  
    if (name) {  
      filteredProducts = filteredProducts.filter(product =>  
        product.name.toLowerCase().includes(name.toLowerCase())  
      );  
    }  
  
    if (category) {  
      filteredProducts = filteredProducts.filter(product =>  
        product.category.toLowerCase() === category.toLowerCase()  
      );  
    }  
    return NextResponse.json(filteredProducts);  
  }  