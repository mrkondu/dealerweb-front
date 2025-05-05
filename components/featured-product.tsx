/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  // console.log("Esto es result: ", result);
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result != null &&
            result.map((product: ProductType) => {
              const {
                id,
                slug,
                image,
                productName,
                capacityProduct,
                category,
              } = product;
              const categoryName = category?.data?.attributes?.categoryName;
              // console.log("IMAGE", image[0]?.url);
              console.log("IMAGE", image?.[0]?.url || "No image");
              const imageUrl =
                image || "/public/logo/DEALERTECH-BLANCO-PNG-1.png";

              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-2 ">
                        <img
                          src={`${imageUrl[0]?.url}`}
                          alt="Image Featured"
                          className="h-60 object-cover"
                        />

                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => console.log("add item...")}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8 mb-2">
                        <h3 className="text-lg font-bold"> {productName}</h3>
                      </div>
                      <div className="flex justify-between gap-4 px-8">
                        <p className="">{capacityProduct}</p>
                      </div>
                      <div className="flex justify-center pb-2 ">
                        <p className="text-sm rounded-full bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                          {categoryName}
                        </p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
