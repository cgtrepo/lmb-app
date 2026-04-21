// components/stores/StoreDetails.tsx
import Image from "next/image";

export default function StoreDetails({ store }: any) {
  return (
    <div className="mb-10 text-center">
      <h3 className="text-lg font-semibold mb-4">Boutique {store.name}</h3>

      <Image
        src={store.image}
        width={200}
        height={200}
        className="mx-auto w-full max-w-xl rounded"
        alt={""}
      />

      <div className="text-left max-w-xl mx-auto mt-4 text-sm text-gray-600">
        <p>{store.description}</p>

        <p className="mt-2">
          <strong>Contact</strong>
        </p>
      </div>
    </div>
  );
}
