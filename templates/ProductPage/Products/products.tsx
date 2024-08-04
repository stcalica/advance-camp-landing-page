"use client"

import { useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export const Products = () => {

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


  return (
    <div className="container mx-auto">
      <div className="py-20 bg-secondary-500 md:pb-18">
        <div className="text-h2 text-font-header text-center">T-Shirts</div>
        <div className="flex flex-col items-center gap-4 p-5">
          {
            <ul className="flex flex-row items-center gap-4 list-none p-0">
            <li key={1} className="flex flex-col items-center relative">
                  <div className="w-64 h-64 mb-4 relative">
                    <Image
                      src="images/content/2024_Advance_Camp.png"
                      alt={`Advance Camp 2024 T-Shirts`}
                      layout={"fill"}
                      width={0}
                      height={0}
                      priority={true}
                      className="object-cover rounded"
                    />
                  </div>
                  <h2 className="mb-4 text-lg  text-black font-bold text-center">{"Advance Camp T-Shirts"}</h2>
                  <p className="mb-4 text-base text-black text-center">{"Advance Camp T-Shirts for 2024"}</p>
                  <button
                    type="submit"
                    role="link"
                    className="px-16 py-3 mx-8 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent text-nowrap"
                  >
                    <a href="https://buy.stripe.com/5kAbLo3W53VV1b2fYY">Buy Now</a>
                  </button>
                  {/* <input
                      type="hidden"
                      name="priceId"
                      value={product.default_price}
                    />
                  </form> */}
                </li>

            </ul>
          }
        </div>
      </div>
    </div>
  );
};