"use client";

import React from "react";
import Image from "next/image";

const ImageGallery = () => {
  const NAV_ITEMS = ["Vector", "Illustration", "Images", "Icons"];
  const IMG_PATHS = [
    "/assets/image-gallery/image1.jpg",
    "/assets/image-gallery/image2.jpg",
    "/assets/image-gallery/image3.jpg",
    "/assets/image-gallery/image4.jpg",
    "/assets/image-gallery/image5.jpg",
    "/assets/image-gallery/image6.jpg",
  ];

  return (
    <div className="flex flex-col p-10 m-10 space-y-3 rounded-2xl bg-white md:p-20 lg:30">
      {/* Navigation bar */}
      <nav className="flex flex-col py-2 px-10 items-center space-y-3 mb-20 justify-center md:flex-row md:space-y-0 md:justify-end md:space-x-5">
        {NAV_ITEMS.map((navItemName, i) => (
          <div key={i} className="group">
            <a href="#">{navItemName}</a>
            <div className="mx-2 bg-black border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500"></div>
          </div>
        ))}
      </nav>

      {/* search and upload button */}
      <section className="flex flex-col space-y-5 !mb-10 justify-center md:flex-row md:space-y-0 md:justify-between">
        <div className="flex items-center justify-between border-x-0 border-t-0 border-b-2">
          <input
            type="text"
            placeholder="Search"
            className="px-4 focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 text-gray-300 duration-200 hover:scale-110"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </div>
        <button className="p-3 px-16 bg-black text-white text-lg rounded-lg hover:bg-white hover:text-black border hover:border-black">
          Upload
        </button>
      </section>

      {/* Image gallery */}
      <section className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
        {IMG_PATHS.map((imgUrl, i) => (
          <div key={i} className="relative group">
            <Image
              src={imgUrl}
              height="0"
              width="0"
              alt="gallery item"
              className="w-72"
              unoptimized
            />
            <div className="absolute bg-black text-white p-2 px-4 opacity-0 left-0 bottom-0 right-0 group-hover:opacity-100 bg-opacity-40 duration-200">
              <div className="flex justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="inline-block text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/image-gallery/bookmark.svg"
                    height="0"
                    width="0"
                    alt="gallery item"
                    className="h-5 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ImageGallery;
