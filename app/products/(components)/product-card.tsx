"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductType } from "../(types)/products-type";

export default function ProductCard({ product }: { product: ProductType }) {
  const router = useRouter();

  const goToDetails = () => {
    router.push(`/products/${product.id}`);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      `https://wa.me/22967277436?text=Je suis intéressé par le produit ${product.name}`,
    );
  };

  return (
    <div
      onClick={goToDetails}
      className="rounded-lg w-full cursor-pointer shadow-lg p-4 flex justify-end flex-col hover:scale-105 transition"
    >
      {/* Image Session */}
      <div className="relative h-40 w-full flex items-center justify-center bg-gray-100 rounded">
        <Image
          src={product.mainPoster}
          alt={product.name}
          width={170}
          height={170}
        />

        {product.promo && (
          <div className="absolute top-2 left-2">
            <Image
              src="/badge-promo.svg"
              alt="En promo"
              width={70}
              height={70}
            />
            <div className="absolute top-5 left-5 text-white text-xs">
              Promo 15%
            </div>
          </div>
        )}
      </div>

      {/* Info Session */}
      <div className="flex items-center justify-between mt-3">
        <h4 className="text-sm font-medium">{product.name}</h4>

        <div className="flex items-center gap-2">
          <span className="font-bold">${product.price}</span>

          {product.promo && (
            <span className="text-gray-400 line-through text-sm">
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>

      <p className="text-xs mb-6 text-gray-500 mt-1">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      {/* Contact US */}
      <button
        onClick={handleWhatsApp}
        className="mt-3 border border-primary sm:w-40 w-full text-primary cursor-pointer px-3 py-1 rounded flex items-center justify-center sm:justify-between gap-2 text-sm hover:bg-blue-50"
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
  );
}
