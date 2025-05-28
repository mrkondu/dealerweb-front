"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useGetCategories } from "@/api/getProducts";
import { useGetAllProducts } from "@/api/getAllProducts";
import { ProductType } from "@/types/product";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";

export default function ProductsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Todas las categorías"
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [selectedCameras, setSelectedCameras] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  const { result: products, loading: productsLoading }: ResponseType =
    useGetAllProducts();
  const { result: categories, loading: categoriesLoading }: ResponseType =
    useGetCategories();

  // Calcular el rango de precios dinámicamente
  useEffect(() => {
    if (products) {
      const prices = (products as ProductType[]).map((p) => p.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setPriceRange([minPrice, maxPrice]);
    }
  }, [products]);

  // Extraer valores únicos para los filtros
  const uniqueCapacities = Array.from(
    new Set(products?.map((p: ProductType) => p.capacityProduct) || [])
  ) as string[];
  const uniqueCameras = ["12MP", "48MP", "64MP", "108MP"]; // Ejemplo, ajustar según datos reales
  const uniqueSizes = ['5.5"', '6.1"', '6.5"', '6.7"']; // Ejemplo, ajustar según datos reales

  const filteredProducts = (products as ProductType[] | null)?.filter(
    (product: ProductType) => {
      const matchesSearch = product.productName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "Todas las categorías" ||
        product.category?.data?.attributes?.categoryName === selectedCategory;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCapacity =
        selectedCapacities.length === 0 ||
        selectedCapacities.includes(product.capacityProduct);
      const matchesFeatured = !showOnlyFeatured || product.isFeatured;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesCapacity &&
        matchesFeatured
      );
    }
  );

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity)
        ? prev.filter((c) => c !== capacity)
        : [...prev, capacity]
    );
  };

  const handleCameraChange = (camera: string) => {
    setSelectedCameras((prev) =>
      prev.includes(camera)
        ? prev.filter((c) => c !== camera)
        : [...prev, camera]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleProductClick = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  if (productsLoading || categoriesLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="pl-10 w-full"
            />
          </div>

          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                {/* Categorías */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Categoría
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todas las categorías">
                        Todas las categorías
                      </SelectItem>
                      {(categories as CategoryType[] | null)?.map(
                        (category: CategoryType) => (
                          <SelectItem
                            key={category.id}
                            value={category.categoryName}
                          >
                            {category.categoryName}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* Rango de Precio */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Rango de Precio
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={priceRange[1]}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Capacidades */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Capacidad
                  </label>
                  <div className="space-y-2">
                    {uniqueCapacities.map((capacity) => (
                      <div
                        key={capacity}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`capacity-${capacity}`}
                          checked={selectedCapacities.includes(capacity)}
                          onCheckedChange={() => handleCapacityChange(capacity)}
                        />
                        <label
                          htmlFor={`capacity-${capacity}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {capacity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cámaras */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Cámara
                  </label>
                  <div className="space-y-2">
                    {uniqueCameras.map((camera) => (
                      <div key={camera} className="flex items-center space-x-2">
                        <Checkbox
                          id={`camera-${camera}`}
                          checked={selectedCameras.includes(camera)}
                          onCheckedChange={() => handleCameraChange(camera)}
                        />
                        <label
                          htmlFor={`camera-${camera}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {camera}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tamaños */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Tamaño de Pantalla
                  </label>
                  <div className="space-y-2">
                    {uniqueSizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox
                          id={`size-${size}`}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => handleSizeChange(size)}
                        />
                        <label
                          htmlFor={`size-${size}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solo Destacados */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="featured"
                    checked={showOnlyFeatured}
                    onCheckedChange={(checked) =>
                      setShowOnlyFeatured(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="featured"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Solo Destacados
                  </label>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts?.map((product: ProductType) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleProductClick(product.slug)}
            >
              {product.image?.[0] && (
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.image[0].url}
                    alt={product.productName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 hover:scale-105 transition-all duration-300 ease-in-out"
                    priority
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    {product.productName}
                  </h3>
                  {product.isFeatured && (
                    <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                      Destacado
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-600 dark:text-gray-400">
                    {product.category?.data?.attributes?.categoryName}
                  </p>
                  <p className="text-sm text-gray-500">
                    Capacidad: {product.capacityProduct}
                  </p>
                  <p className="text-lg font-bold mt-2">${product.price}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
