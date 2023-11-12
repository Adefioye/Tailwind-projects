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
      className={`flex flex-col p-8 border-8 ${
        borderActive ? "border-purple-600" : "border-slate-600"
      } rounded-2xl justify-center items-center`}
    >
      <p className="uppercase mb-5 text-slate-100">{tier}</p>
      <p className="font-serif text-5xl text-slate-100 font-bold mb-3">
        {quantity >= 1000 ? Number(quantity / 1000) : quantity}
        <span>{quantity >= 1000 ? "TB" : "GB"}</span>
      </p>
      <p className="mb-4 text-slate-100">${monthlyPrice}/Month</p>
      <button
        className={`py-2 px-8 border border-purple-400 ${
          borderActive ? "bg-purple-600" : "bg-inherit"
        } ${
          borderActive ? "hover:bg-purple-700" : "hover:bg-purple-600"
        } text-slate-100 duration-200 rounded-md mb-10`}
      >
        Purchase
      </button>
      <div className="flex flex-col items-center">
        <p className="text-slate-100">
          &#10003; {quantity >= 1000 ? Number(quantity / 1000) : quantity}{" "}
          <span>{quantity >= 1000 ? "TB" : "GB"}</span> of storage
        </p>
        <p className="text-slate-100">&#10003; Option to add members</p>
        <p className="text-slate-100">&#10003; Extra member benefits</p>
      </div>
    </div>
  );
};

export default PricingCard;
