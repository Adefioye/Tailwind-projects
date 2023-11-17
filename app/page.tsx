"use client";

import Link from "next/link";

export default function Home() {
  const projectLinks = [
    { name: "Email Subscribe", href: "/email-subscribe" },
    { name: "Pricing cards", href: "/pricing-cards" },
    { name: "Product Modal", href: "/pricing-modal" },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-700">
      <>
        {projectLinks.map((projectLink) => (
          <Link
            key={projectLink.name}
            href={projectLink.href}
            className="p-2 px-4 rounded-md cursor-pointer text-zinc-400 border border-zinc-300"
          >
            {projectLink.name}
          </Link>
        ))}
      </>
    </div>
  );
}
