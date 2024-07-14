"use client"

import { useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export const Products = ({ products }) => {

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed!");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled"
      );
    }
  }, []);

  const handleSubmit = async (event: any, priceId: number) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ priceId }),
      });

      if (response.status == 200) {
        const sessionInfo = await response.data;
        console.log("response: ", response.data)
        const session = sessionInfo.session
        window.location.href = session.url;
      }
    } catch (err: any) {
      console.log(err)
    }
  };

  return (
    <div className="container mx-auto">
      <div className="py-20 bg-secondary-500 md:pb-18">
        <div className="text-h2 text-font-header text-center">T-Shirts</div>
        <div className="flex flex-col items-center gap-4 p-5">
          {products.length ? (
            <ul className="flex flex-row items-center gap-4 list-none p-0">
              {products.map((product) => (
                <li key={product.id} className="flex flex-col items-center relative">
                  {/* <form action="/api/checkout_sessions" method="POST"> */}
                  <div className="w-64 h-64 mb-4 relative">
                    <Image
                      src={product.images[0]}
                      alt={`Image of ${product.name}`}
                      layout={"fill"}
                      width={0}
                      height={0}
                      priority={true}
                      className="object-cover rounded"
                    />
                  </div>
                  <h2 className="mb-4 text-lg  text-black font-bold text-center">{product.name}</h2>
                  <p className="mb-4 text-base text-black text-center">{product.description}</p>
                  <button
                    type="submit"
                    role="link"
                    className="px-16 py-3 mx-8 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent text-nowrap"
                    onClick={(event) => handleSubmit(event, product.default_price)}
                  >
                    Buy Now
                  </button>
                  {/* <input
                      type="hidden"
                      name="priceId"
                      value={product.default_price}
                    />
                  </form> */}
                </li>
              ))}
            </ul>
          ) : (
            <div>No products</div>
          )}
        </div>
      </div>
    </div>
  );
};