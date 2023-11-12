import React from "react";

interface PricingProps {
  tier: string;
  quantity: number;
  monthlyPrice: number;
  borderActive: boolean;
}
const PricingCard = ({
  tier,
  quantity,
  monthlyPrice,
  borderActive,
}: PricingProps) => {
  return (
    <div
      className={`flex flex-col border-8 ${
        borderActive ? "border-purple-600" : "border-slate-600"
      } rounded-2xl justify-center items-center text-white`}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="uppercase mb-8 mt-5">{tier}</p>
        <p className="font-serif text-5xl font-bold mb-3">
          {quantity >= 1000 ? Number(quantity / 1000) : quantity}
          <span>{quantity >= 1000 ? "TB" : "GB"}</span>
        </p>
        <p className="mb-8">${monthlyPrice}/Month</p>
        <button
          className={`py-2 px-8 border border-purple-400 ${
            borderActive ? "bg-purple-600" : "bg-inherit"
          }  hover:bg-purple-700 
         duration-200 rounded-md mb-10`}
        >
          Purchase
        </button>
      </div>

      <div className="flex flex-col items-center p-8 border-t border-slate-500">
        <p className="">
          &#10003; {quantity >= 1000 ? Number(quantity / 1000) : quantity}{" "}
          <span>{quantity >= 1000 ? "TB" : "GB"}</span> of storage
        </p>
        <p>&#10003; Option to add members</p>
        <p>&#10003; Extra member benefits</p>
      </div>
    </div>
  );
};

export default PricingCard;
