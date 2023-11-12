import React from "react";
import page from "../page";
import PricingCard from "@/components/PricingCard";

const PricingCards = () => {
  const pricings = [
    {
      tier: "basic",
      quantity: 100,
      monthlyPrice: 1.99,
      borderActive: false,
    },
    {
      tier: "standard",
      quantity: 200,
      monthlyPrice: 3.99,
      borderActive: true,
    },
    {
      tier: "premium",
      quantity: 2000,
      monthlyPrice: 8.99,
      borderActive: false,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen gap-6 p-10 justify-center items-center md:flex-row bg-slate-800">
      {pricings.map((pricing) => (
        <PricingCard
          key={pricing.tier}
          tier={pricing.tier}
          quantity={pricing.quantity}
          monthlyPrice={pricing.monthlyPrice}
          borderActive={pricing.borderActive}
        />
      ))}
    </div>
  );
};

export default PricingCards;
