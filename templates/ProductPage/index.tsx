"use client"
import { useEffect, useState } from 'react';
import Layout from "@/components/Layout";
import { Products } from "./Products/products";
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: {
    unit_amount: number;
    currency: string;
  };
}

export const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("api/products");
      setProducts(data);
    }
    fetchProducts();
  }, []);


  return (
    <Layout>
      <Products products={products} />
    </Layout>
  )
}
