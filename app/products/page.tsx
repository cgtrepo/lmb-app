"use client";

import ProductGrid from "./(components)/product-grid";
import SideBarFilter from "./(components)/sidebar-filter";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="relative w-full px-8 sm:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* FILTERS */}
        <aside className="lg:col-span-1">
          <SideBarFilter />
        </aside>

        {/* PRODUCTS */}
        <section className="lg:col-span-3">
          <div className="flex w-full flex-col space-x-4 space-y-4">
            {/*Top bar */}
            <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row w-full items-center justify-between border p-2 sm:mb-8">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  12,911 produits trouver
                </span>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Cherchez un produit"
                  className="bg-gray-200 px-4 py-2 w-64 md:w-80 sm:w-96 text-gray-700 placeholder-gray-500 
             rounded-full 
             focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <div className="absolute inset-y-0 right-5 z-0 flex items-center pointer-events-none">
                  <Image
                    src="/search.svg"
                    className=""
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <button className="bg-primary cursor-pointer text-white px-4 py-2 rounded">
                Sélectionnés pour vous
              </button>
              <button className="border px-4 text-primary border-primary cursor-pointer py-2 rounded">
                Nos meilleures ventes
              </button>
              <button className="border px-4 text-primary border-primary cursor-pointer py-2 rounded">
                Top produits LMB
              </button>
            </div>
          </div>

          <ProductGrid />
        </section>
      </div>
    </div>
  );
}
