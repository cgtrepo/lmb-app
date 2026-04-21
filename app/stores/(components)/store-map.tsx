"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useRouter } from "next/navigation";
import { StoresType } from "../(types)/stores-type";

export default function StoreMap({ store }: { store: StoresType }) {
  const router = useRouter();
  return (
    <div className="h-100 w-full flex flex-col justify-center space-y-6 pb-6 items-center rounded overflow-hidden">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      >
        <GoogleMap
          center={{ lat: store.lat, lng: store.lng }}
          zoom={14}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={{ lat: store.lat, lng: store.lng }} />
        </GoogleMap>
      </LoadScript>

      <button
        onClick={() => router.push("/products")}
        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition"
      >
        Suivez la géolocalisation
      </button>
    </div>
  );
}
