"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "Congélateur ",
  "Réfrigérateur ",
  "TV",
  "Machine à laver ",
  "Gazinière ",
  "Moulinet ",
  "Micro-ondes ",
  "Fontaine d'eau ",
  "Air Fryer /Friteuse",
  "Four électrique ",
  "Climatiseur ",
  "Lave vaisselle ",
  "Régulateur ",
  "Onduleur ",
  "Chauffe eau ",
  "Fer à repasser ",
  "Batteuse électrique ",
  "Cuisinière à table ",
  "Raccord ",
  "Machine à coudre ",
  "Machine sulfureuse ",
  "Machine à broder ",
  "Machine piqueuse",
  "Brasseur ",
  "Ventilateur ",
  "Rice Cooker/cuiseur de riz",
  "Woofer/baffle",
  "Rallonge",
];

const prices = [
  "All price",
  "Under $20",
  "$25 to $100",
  "$100 to $300",
  "$300 to $500",
  "$500 to $1,000",
];

export default function SideBarFilter() {
  const [openCategory, setOpenCategory] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const toggleSelection = (
    value: string,
    list: string[],
    setList: (val: string[]) => void,
  ) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
      return;
    }
    setList([...list, value]);
  };

  return (
    <div className="space-y-6">
      <div className="border space-y-3 rounded-lg p-4">
        {/* CATEGORY */}
        <div>
          <button
            onClick={() => setOpenCategory(!openCategory)}
            className="w-full flex justify-between mb-3 items-center font-semibold"
          >
            Categorie
            <span>
              {openCategory ? (
                <Image
                  src="/arrow-down.svg"
                  className="cursor-pointer"
                  alt=""
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/arrow-right.svg"
                  className="cursor-pointer"
                  alt=""
                  width={20}
                  height={20}
                />
              )}
            </span>
          </button>

          {openCategory && (
            <div className="space-y-2 text-sm">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="accent-primary"
                    checked={selectedCategories.includes(cat)}
                    onChange={() =>
                      toggleSelection(
                        cat,
                        selectedCategories,
                        setSelectedCategories,
                      )
                    }
                  />
                  {cat}
                </label>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setOpenPrice(!openPrice)}
            className="w-full flex justify-between mb-3 items-center font-semibold"
          >
            Fourchette de prix
            <span>
              {openPrice ? (
                <Image
                  src="/arrow-down.svg"
                  className="cursor-pointer"
                  alt=""
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/arrow-right.svg"
                  className="cursor-pointer"
                  alt=""
                  width={20}
                  height={20}
                />
              )}
            </span>
          </button>

          {openPrice && (
            <div className="space-y-2 text-sm">
              {prices.map((price) => (
                <label
                  key={price}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="accent-primary"
                    checked={selectedPrices.includes(price)}
                    onChange={() =>
                      toggleSelection(price, selectedPrices, setSelectedPrices)
                    }
                  />
                  {price}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
