"use client";
import Image from "next/image";

import { useState } from "react";
import { stores } from "./(data)/stores";
import StoreList from "./(components)/store-list";
import StoreDetails from "./(components)/store-details";
import StoreMap from "./(components)/store-map";

export default function StoresPage() {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  return (
    <>
      <div className="py-10 px-8 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Image
            src="/images/lmb-hero3.webp"
            width={200}
            height={200}
            className="rounded-xl w-full"
            alt={""}
          />

          <div className="flex flex-col justify-between space-y-4">
            <h2 className="text-xl font-bold mb-3">A propos de Nous</h2>
            <p className="text-sm overflow-auto h-40">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              ea fugit maiores numquam eius cumque inventore quaerat placeat,
              pariatur sunt magni error possimus, iste adipisci minus, dolores{" "}
              <br></br> <br></br>
              <span className="text-gray-500">
                exercitationem reprehenderit quae! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Provident eveniet voluptas totam
                quam in doloribus labore. Qui sit itaque pariatur doloremque
                saepe
              </span>
            </p>

            <button className="bg-transparent sm:w-32 w-full hover:bg-primary items-center justify-center text-primary font-semibold cursor-pointer hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded-xl">
              Lire plus
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full mb-4 gap-1">
          <Image
            src="/magazin-left-line.svg"
            width={30}
            height={0}
            className="border-[2.5px]"
            alt={""}
          />
          <span className="text-[#616161] ">Nos Magasins</span>
          <Image
            src="/magazin-rights-line.svg"
            width={30}
            height={0}
            className="border-[2.5px]"
            alt={""}
          />
        </div>

        <h2 className="text-center text-lg font-semibold mb-6">
          Explorez nos différents sites
        </h2>

        <StoreList
          stores={stores}
          selectedStore={selectedStore}
          onSelect={setSelectedStore}
        />

        <StoreDetails store={selectedStore} />
      </div>
      <StoreMap store={selectedStore} />
    </>
  );
}
