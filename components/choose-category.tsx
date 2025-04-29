/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getProducts";
import { ResponseType } from "@/types/response";
import Link from "next/link";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
  const { result, loading, error }: ResponseType = useGetCategories();

  if (loading) {
    return <p className="flex justify-center">Cargando categorías...</p>; // Puedes agregar un spinner aquí
  }

  if (error) {
    return (
      <p className="flex justify-center text-red-600">
        Hubo un error al cargar las categorías. Por favor, inténtalo más tarde.
      </p>
    );
  }

  // Validación adicional para result
  if (!result || result.length === 0) {
    return (
      <p className="flex justify-center text-gray-500">
        No hay categorías disponibles en este momento.
      </p>
    );
  }

  try {
    return (
      <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-4 pb-4 text-3xl sm:pb-8">Elige tu categoria</h3>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {!loading &&
            result !== undefined &&
            result.map((category: CategoryType) => {
              const imageUrl = category.mainimage
                ? `${category.mainimage.url}`
                : "placeholder.jpg"; // Imagen placeholder en caso de no tener una imagen

              const imageCategory = category;
              console.log(`Image category: ${imageCategory}`);
              // console.warn(imageUrl);
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                >
                  <div className="flex items-center justify-center w-[250px] h-[150px] bg-black">
                    <img
                      src={imageUrl}
                      alt={category.categoryName || "Categoría"}
                      className="max-w-[250px] max-h-[150] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                    />
                    <p className="absolute w-full py-2 text-lg text-center text-white bottom-2 backdrop-blur-lg">
                      {category.categoryName}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    );
  } catch (e) {
    console.error("Error renderizando las categorías:", e);
    return (
      <p className="flex justify-center text-red-600">
        Ocurrió un error inesperado al mostrar las categorías. Por favor,
        inténtalo más tarde.
      </p>
    );
  }
};

export default ChooseCategory;
