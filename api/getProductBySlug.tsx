import React, { useEffect, useState } from "react";
import { ProductType } from "@/types/product";

interface ImageData {
  id: number;
  url: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    thumbnail: {
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl: string | null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export function useGetProductBySlug(slug: string | string[]) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;
  const [result, setResult] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        console.log("Fetching product with URL:", url);
        const res = await fetch(url);
        const json = await res.json();
        console.log("API Response:", json);

        if (!json.data || json.data.length === 0) {
          setError("Product not found");
          setLoading(false);
          return;
        }

        const product = json.data[0];
        const formattedProduct: ProductType = {
          id: product.id,
          productName: product.productName || "",
          slug: product.slug || "",
          description: product.description || "",
          price: product.price || 0,
          capacityProduct: product.capacityProduct || "",
          active: product.active || false,
          isFeatured: product.isFeatured || false,
          image: {
            data:
              product.image?.map((img: ImageData) => ({
                id: img.id,
                attributes: {
                  url: img.url,
                },
              })) || [],
          },
          category: {
            data: {
              id: product.category?.id || 0,
              attributes: {
                categoryName: product.category?.categoryName || "",
              },
            },
          },
          specifications: product.specifications || [],
          features: product.features || [],
        };

        setResult(formattedProduct);
        setLoading(false);
      } catch (error: unknown) {
        console.error("Error fetching product:", error);
        setError(
          error instanceof Error ? error.message : "Error al cargar el producto"
        );
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}
