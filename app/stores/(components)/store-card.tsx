// components/stores/StoreCard.tsx
import Image from "next/image";

export default function StoreCard({ store, isActive, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 ${
        isActive ? "scale-105 shadow-lg" : "hover:scale-105"
      }`}
    >
      <Image
        src={store.image}
        width={200}
        height={200}
        className="w-full h-40 object-cover"
        alt={""}
      />

      <div
        className={`text-center py-2 text-sm ${isActive ? "bg-primary text-white" : "bg-white text-black"}`}
      >
        {store.name}
      </div>
    </div>
  );
}
