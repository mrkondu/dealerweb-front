"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Share2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useGetProductBySlug } from "@/api/getProductBySlug";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

interface Specification {
  name: string;
  value: string;
}

export default function PhoneDetails() {
  const params = useParams();
  const router = useRouter();
  const {
    result: product,
    loading,
    error,
  } = useGetProductBySlug(params.productSlug as string);

  const handleWhatsAppRedirect = () => {
    if (!product) return;

    const whatsappNumber = "3764585715";
    const message =
      "¡Hola! Me interesa el siguiente producto:\n\n" +
      `*${product.productName}*\n` +
      `Capacidad: ${product.capacityProduct}\n` +
      `Precio: ${formatPrice(product.price)}\n\n` +
      `Ver producto: ${window.location.origin}/product/${product.slug}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
        <p className="text-red-500">Error al cargar el producto</p>
      </div>
    );
  }

  const mainImage =
    product.image?.data?.[0]?.attributes?.url || "/placeholder.svg";
  const hasAdditionalImages = product.image?.data?.length > 1;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
            <Image
              src={mainImage}
              alt={`Imagen principal de ${product.productName}`}
              fill
              className="object-contain p-4"
              priority
              unoptimized={mainImage === "/placeholder.svg"}
            />
            {product.isFeatured && (
              <Badge className="absolute top-4 left-4 bg-yellow-400 text-black hover:bg-yellow-500">
                Destacado
              </Badge>
            )}
          </div>
          {hasAdditionalImages && (
            <div className="grid grid-cols-4 gap-2">
              {product.image.data.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md border bg-muted cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={img.attributes.url}
                    alt={`Vista ${index + 1} de ${product.productName}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{product.productName}</h1>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Agregar a favoritos"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Compartir producto"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground mt-1">
              Categoría:{" "}
              {product.category?.data?.attributes?.categoryName ||
                "Sin categoría"}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl font-bold">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Capacidad: {product.capacityProduct || "No especificada"}
            </p>
            <p className="text-sm">{product.description}</p>
          </div>

          <Separator />

          {/* Add to Cart */}
          <div className="flex gap-4">
            <Button className="flex-1" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Agregar al Carrito
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsAppRedirect}
            >
              Comprar Ahora
            </Button>
          </div>

          {/* Delivery Info */}
          <Card>
            <CardContent className="p-4">
              <p className="text-sm">
                <span className="font-medium">Envío gratis</span> disponible
                para este producto
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Tiempo estimado de entrega: 2-3 días hábiles
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Specifications Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="specifications">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="features">Características</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Especificaciones Técnicas
                </h3>
                <div className="space-y-2">
                  {product.specifications?.map(
                    (spec: Specification, index: number) => (
                      <div
                        key={index}
                        className="grid grid-cols-2 py-2 border-b"
                      >
                        <span className="text-muted-foreground">
                          {spec.name}
                        </span>
                        <span>{spec.value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">En la Caja</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{product.productName}</li>
                  <li>Cable USB-C</li>
                  <li>Pin de expulsión</li>
                  <li>Guía de inicio rápido</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                Características Principales
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features?.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium">
                Reseñas de Clientes Próximamente
              </h3>
              <p className="text-muted-foreground mt-2">
                Sé el primero en reseñar este producto
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
