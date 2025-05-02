/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";


export default function Page() {
  const PRODUCTS_PER_PAGE = 6;
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading, error }: ResponseType = useGetCategoryProduct(categorySlug as string);
  console.log("Result de getCategory", result);
  const [currentPage, setCurrentPage] = useState(1);
  // Calcular productos paginados
  const paginatedProducts = result?.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );
  const totalPages = Math.ceil((result?.length || 0) / PRODUCTS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  if (error) return <p>Error al cargar productos</p>;
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium">
          Equipos {result[0].category.categoryName}
        </h1>
      )}
      <Separator />
      <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
        {loading && <p>Cargando productos...</p>}
        {paginatedProducts?.map((product: ProductType) => {
          const { id, slug, images, productName, capacityProduct, price } =
            product;

          return (
            <Card key={id} className="py-4 border border-gray-200 shadow-none">
              <Link href={`/product/${slug}`}>
                <CardContent className="relative flex items-center justify-center px-6 py-2">
                  <img
                    src={`${images[0].url}`}
                    alt={productName}
                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                  />
                </CardContent>
              </Link>
              <div className="flex justify-between gap-4 px-8 mb-2">
                <h3 className="text-lg font-bold">{productName}</h3>
              </div>
              <div className="flex justify-between gap-4 px-8">
                <p>{capacityProduct}</p>
              </div>
              <div className="flex justify-center pb-2 py-5">
                <p className="w-1/2 font-bold text-base rounded-full bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                  {formatPrice(price)}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Paginación */}
      {result && result.length > PRODUCTS_PER_PAGE && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white"
            }`}
          >
            Anterior|
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white"
            }`}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
