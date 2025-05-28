import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";
import { Product } from "@/lib/api";

export function useGetAllProducts() {
  const [result, setResult] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await getProducts();
        setResult(products);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error fetching products"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { result, loading, error };
}
