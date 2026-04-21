"use client";
import Image from "next/image";
import { ProductType } from "../(types)/products-type";

export default function ProductOptions({ product }: { product: ProductType }) {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      `https://wa.me/22967277436?text=Je suis intéressé par le produit ${product.name}`,
    );
  };
  return (
    <div className="mt-6 w-full">
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <OthersDetailCard label="Couleur" value="Bleu, blan"></OthersDetailCard>
        <OthersDetailCard label="Garantie" value="6 mois"></OthersDetailCard>
        <OthersDetailCard label="Livraison" value="Gratuit"></OthersDetailCard>
        <OthersDetailCard label="Quantité" value="5"></OthersDetailCard>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-2 ">
          <h2 className="font-semibold">Prix</h2>
          <div className="bg-red-600 ml-0.5 w-16 h-0.5">&ensp;</div>
        </div>

        <div className="flex gap-3 items-center">
          <span className="text-xl font-bold">${product.price}</span>

          {product.promo && (
            <span className="line-through text-gray-400">
              ${product.oldPrice}
            </span>
          )}

          <button
            onClick={handleWhatsApp}
            className="mt-3 border border-primary text-primary cursor-pointer px-3 py-1 rounded flex items-center justify-between gap-2 text-sm hover:bg-blue-50"
          >
            <Image
              src="/WhatsApp.svg.webp"
              alt="WhatsApp Logo"
              width={30}
              height={30}
            />
            Contactez nous
          </button>
        </div>
      </div>
    </div>
  );
}

function OthersDetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center w-48 border pb-8 border-primary rounded-xl shadow-xl justify-center">
      <span className="bg-[#d9e1eb] text-center p-2 rounded-tl-xl font-bold text-primary rounded-tr-xl w-full mb-6">
        {label}
      </span>
      <span className="text-center font-bold"> {value} </span>
    </div>
  );
}
