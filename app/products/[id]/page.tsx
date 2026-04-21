import ProductGallery from "../(components)/product-gallery";
import ProductInfo from "../(components)/product-info";
import ProductOptions from "../(components)/product-options";
import Image from "next/image";
import { products } from "../(data)/products";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("ProductId : " + id);
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  const images = product.othersPoster;

  return (
    <>
      <div className="flex flex-col px-8 md:px-16 items-center">
        <div className="w-full  py-3 ">
          <Link
            href={"/products"}
            className="flex items-center gap-3 justify-start cursor-pointer"
          >
            <Image src="/arrow-left-broken.svg" alt="" width={30} height={30} />
            Continuez d&apos;explorer
          </Link>
        </div>

        <div className="max-w-4xl w-full flex flex-col space-y-4 p-6 justify-center items-center">
          <ProductGallery images={images} />
          <ProductInfo product={product} />
          <ProductOptions product={product} />
        </div>
      </div>
    </>
  );
}
