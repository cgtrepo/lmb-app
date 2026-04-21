import { ProductType } from "../(types)/products-type";

export default function ProductInfo({ product }: { product: ProductType }) {
  return (
    <div className="flex flex-col w-full space-y-5">
      <h1 className="text-xl font-semibold mb-4">{product.name}</h1>

      <div className="flex flex-col justify-start items-start space-y-4">
        <div className="flex flex-col space-y-2 items-center justify-center">
          <h2 className="font-semibold">Description</h2>
          <div className="bg-red-600 ml-0.5 w-16 h-0.5">&ensp;</div>
        </div>

        <p className="text-sm text-gray-600 mb-6">{product.description}</p>
      </div>

      <div className="flex flex-col justify-start items-start space-y-4">
        <div className="flex flex-col space-y-2 items-center justify-center">
          <h2 className="font-semibold">Service après vente</h2>
          <div className="bg-red-600 ml-0.5 w-16 h-0.5">&ensp;</div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          {product.afterSalesService}
        </p>
      </div>
    </div>
  );
}
