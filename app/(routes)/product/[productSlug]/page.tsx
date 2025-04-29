"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Share2 } from "lucide-react";

export default function PhoneDetails() {
  const [selectedColor, setSelectedColor] = useState("Midnight Black");
  const [selectedStorage, setSelectedStorage] = useState("128GB");

  const colors = [
    { name: "Midnight Black", hex: "#000000" },
    { name: "Stellar Blue", hex: "#0047AB" },
    { name: "Cosmic Silver", hex: "#C0C0C0" },
  ];

  const storageOptions = ["128GB", "256GB", "512GB"];

  const phoneSpecs = [
    { name: "Processor", value: "Snapdragon 8 Gen 2" },
    { name: "RAM", value: "8GB LPDDR5" },
    { name: "Display", value: '6.7" AMOLED, 120Hz' },
    { name: "Camera", value: "50MP Main + 12MP Ultra + 10MP Telephoto" },
    { name: "Battery", value: "5000mAh, 45W Fast Charging" },
    { name: "OS", value: "Android 13" },
    { name: "Dimensions", value: "146.3 x 70.9 x 7.6mm" },
    { name: "Weight", value: "168g" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
            <Image
              src="https://m.media-amazon.com/images/I/71+uDstZNwL._AC_SL1500_.jpg"
              alt="Galaxy Ultra S23"
              fill
              className="object-cover"
              priority
            />
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
              -15% OFF
            </Badge>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-md border bg-muted cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src="https://m.media-amazon.com/images/I/71+uDstZNwL._AC_SL1500_.jpg"
                  alt={`Galaxy Ultra S23 view ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Galaxy Ultra S23</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground mt-1">Model: SM-S918B/DS</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl font-bold">$1299.99</span>
              <span className="text-muted-foreground line-through">
                $1,059.99
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Publication date: February 17, 2023
            </p>
            <p className="text-sm">
              Experience the ultimate smartphone with the Galaxy Ultra S23.
              Featuring a powerful Snapdragon 8 Gen 2 processor, stunning
              6.7&quot AMOLED display, and professional-grade camera system.
            </p>
          </div>

          <Separator />

          {/* Color Selection */}
          <div>
            <h2 className="font-medium mb-3">Color</h2>
            <div className="flex gap-3">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`relative cursor-pointer rounded-full p-1 ${
                    selectedColor === color.name
                      ? "ring-2 ring-primary ring-offset-2"
                      : ""
                  }`}
                >
                  <div
                    style={{ backgroundColor: color.hex }}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="sr-only">{color.name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm mt-2">{selectedColor}</p>
          </div>

          {/* Storage Selection */}
          <div>
            <h2 className="font-medium mb-3">Storage</h2>
            <div className="flex gap-3">
              {storageOptions.map((storage) => (
                <Button
                  key={storage}
                  variant={selectedStorage === storage ? "default" : "outline"}
                  onClick={() => setSelectedStorage(storage)}
                  className="min-w-[80px]"
                >
                  {storage}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Add to Cart */}
          <div className="flex gap-4">
            <Button className="flex-1" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg">
              Buy Now
            </Button>
          </div>

          {/* Delivery Info */}
          <Card>
            <CardContent className="p-4">
              <p className="text-sm">
                <span className="font-medium">Free delivery</span> available for
                this product
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Estimated delivery: 2-3 business days
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Specifications Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="specifications">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Technical Specifications
                </h3>
                <div className="space-y-2">
                  {phoneSpecs.map((spec) => (
                    <div
                      key={spec.name}
                      className="grid grid-cols-2 py-2 border-b"
                    >
                      <span className="text-muted-foreground">{spec.name}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">In the Box</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Galaxy Ultra S23 Smartphone</li>
                  <li>USB-C to USB-C Cable</li>
                  <li>Ejection Pin</li>
                  <li>Quick Start Guide</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Professional-grade camera system with 50MP main sensor</li>
                <li>Snapdragon 8 Gen 2 for lightning-fast performance</li>
                <li>All-day battery life with 45W fast charging</li>
                <li>
                  Stunning 6.7&quot AMOLED display with 120Hz refresh rate
                </li>
                <li>IP68 water and dust resistance</li>
                <li>Enhanced night mode photography</li>
                <li>Advanced AI features for optimal performance</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium">
                Customer Reviews Coming Soon
              </h3>
              <p className="text-muted-foreground mt-2">
                Be the first to review this product
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
