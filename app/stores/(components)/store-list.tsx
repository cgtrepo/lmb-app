import { StoresType } from "../(types)/stores-type";
import StoreCard from "./store-card";

// components/stores/StoreList.tsx
export default function StoreList({
  stores,
  selectedStore,
  onSelect,
}: {
  stores: StoresType[];
  selectedStore: StoresType;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onSelect: Function;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
      {stores.map((store) => (
        <StoreCard
          key={store.id}
          store={store}
          isActive={store.id === selectedStore.id}
          onClick={() => onSelect(store)}
        />
      ))}
    </div>
  );
}
