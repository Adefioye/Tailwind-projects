"use client";

import React from "react";
import Image from "next/image";

const PricingModal = () => {
  return (
    <div className="w-[3/5] min-h-screen p-10 shadow-2xl rounded-2xl my-5 bg-white">
      <div className="flex flex-col md:flex-row">
        <Image
          src="/assets/headphone.png"
          height="0"
          width="0"
          alt="headphone"
          className="mx-auto h-auto w-72 mb-10 transform hover:scale-105 duration-200"
          unoptimized
        />
        <div className="max-w-md flex flex-col justify-center items-center md:items-start md:ml-5">
          <button className=" bg-zinc-600 p-1 text-white rounded-2xl mb-3">
            Free Shipping
          </button>
          <p className="font-serif font-bold text-2xl mb-3 text-center md:text-left">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </p>
          <p className="line-through mb-3">$799</p>
          <p className="text-5xl font-bold" mb-3>
            $599
          </p>
          <p className="font-light text-sm text-gray-400 mb-3 text-center md:text-left">
            This offer is valid until April 3rd or as long as stock lasts!
          </p>
          <div className="group w-full">
            <button className="bg-blue-700 w-full text-white border-b-8 border-b-blue-700 rounded-lg mb-3 shadow-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg transition-all duration-150">
              <div className="bg-blue-500 px-8 py-4 rounded-lg group-hover:bg-blue-700 duration-150">
                Add to cart
              </div>
            </button>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex items-center group mb-3">
              <div className="h-3 w-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
              <p className="ml-2">50+ pcs. in stock</p>
            </div>
            <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-start">
              <div className="flex justify-center items-center px-8 p-3 border mb-3 rounded-md shadow-md w-full hover:-translate-y-1 duration-200 cursor-pointer md:w-auto md:mb-0">
                <Image
                  src="/assets/weight.png"
                  height="0"
                  width="0"
                  alt="headphone"
                  className="object-cover h-10 w-auto"
                  unoptimized
                />
                <span className="ml-2">Add to cart</span>
              </div>
              <div className="flex justify-center items-center px-8 p-3 border w-full hover:-translate-y-1 duration-200 cursor-pointer md:w-auto rounded-md shadow-md md:ml-4">
                <Image
                  src="/assets/heart.png"
                  height="0"
                  width="0"
                  alt="headphone"
                  className="object-cover h-10 w-auto"
                  unoptimized
                />
                <span className="ml-2">Add to wishlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
