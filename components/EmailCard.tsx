/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const EmailCard = () => {
  return (
    <div className="flex p-3 flex-col md:flex-row shadow-2xl rounded-xl bg-zinc-800">
      {/* Image */}
      <Image
        src="/assets/image.jpg"
        height="0"
        width="0"
        alt="Email picture"
        className="object-cover h-80 w-auto transform hover:scale-105 hover:rounded-xl rounded-l-xl cursor-pointer duration-200"
        unoptimized
      />
      {/* Content */}
      <div className="p-6 md:p-12">
        <h4 className=" font-serif text-xl mb-3 text-white text-center md:text-left font-medium">
          Get diet and fitness tips in your inbox
        </h4>
        <p className="text-center my-4 md:text-left text-xs text-white leading-5 tracking-wide font-light max-w-sm">
          Eat better and exercise better. Sign up for the Diet&Fitness
          newsletter.
        </p>
        <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-y-0 md:space-x-3">
          <input
            className="py-2 px-4 md:py-3 text-white border border-zinc-600 bg-zinc-800 focus:outline-none rounded-md placeholder:text-center placeholder:text-zinc-400 placeholder:text-xs md:placeholder:text-left"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="px-5 text-xs md:py-3 bg-lime-500 text-zinc-800 py-2 rounded-md hover:bg-lime-700 hover:text-white duration-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
