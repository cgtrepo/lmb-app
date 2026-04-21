"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="flex flex-col gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelected(img)}
            className={`border p-2 cursor-pointer ${
              selected === img ? "border-red-500" : "border-gray-200"
            }`}
          >
            <Image src={img} alt="thumb" width={60} height={60} />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center p-6">
        <Image src={selected} alt="product" width={400} height={300} />
      </div>
    </div>
  );
}
