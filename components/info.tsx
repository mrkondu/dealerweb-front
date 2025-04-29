"use client";
import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    // <div className="relative h-screen justify-center py-12">
    <div className="mx-auto container relative flex flex-col justify-between items-center py-12 md:flex-row md:px-5">
      <div className="flex-none max-w-lg md:pr-4 md:ml-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Dealer
          <span className="text-violet-700">tech</span>
        </h1>
        <p className="font-semibold mb-2">Tu confidente tecnológico</p>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
          perferendis. Architecto esse neque deserunt fugiat accusantium, rem
          sit nemo atque corporis voluptate cumque voluptatem id veritatis ullam
          illum dolorum aspernatur?
        </p>
      </div>
      <div className="relative max-w-lg w-full mt-12 md:mt-0">
        <Image
          src="https://m.media-amazon.com/images/I/71+uDstZNwL._AC_SL1500_.jpg"
          alt="Galaxy Ultra S23"
          width={500}
          height={500}
          className="object-cover rounded-xl border"
          priority
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </div>
    </div>
    // </div>
  );
};

export default Info;
