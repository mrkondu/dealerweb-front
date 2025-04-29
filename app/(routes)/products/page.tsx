"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Smartphone, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Producto } from "./types/product";

// Datos de ejemplo para los productos
const productos: Producto[] = [
  {
    id: 1,
    nombre: "iPhone 15 Pro",
    marca: "Apple",
    precio: 999,
    os: "iOS",
    almacenamiento: 256,
    ram: 8,
    color: "Negro",
    imagen:
      "https://th.bing.com/th/id/OIP.nFN72SFHTQXZrySl-CrUZAHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    destacado: true,
    fecha: "2023-09-22",
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S23",
    marca: "Samsung",
    precio: 799,
    os: "Android",
    almacenamiento: 128,
    ram: 8,
    color: "Azul",
    imagen:
      "https://th.bing.com/th/id/OIP.5o_cf_BQcYBl8QYrQBTbuAHaHk?w=179&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    destacado: true,
    fecha: "2023-02-01",
  },
  {
    id: 3,
    nombre: "Google Pixel 7",
    marca: "Google",
    precio: 599,
    os: "Android",
    almacenamiento: 128,
    ram: 8,
    color: "Blanco",
    imagen:
      "https://th.bing.com/th/id/OIP.CbWA4mu-B36k25wcRRidxAHaEK?w=252&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    destacado: false,
    fecha: "2022-10-13",
  },
  {
    id: 4,
    nombre: "Xiaomi 13",
    marca: "Xiaomi",
    precio: 499,
    os: "Android",
    almacenamiento: 256,
    ram: 12,
    color: "Negro",
    imagen:
      "https://th.bing.com/th/id/OIP.5PBbKErkupXagtxbcNCuoAHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    destacado: false,
    fecha: "2023-03-15",
  },
  {
    id: 5,
    nombre: "iPhone 14",
    marca: "Apple",
    precio: 799,
    os: "iOS",
    almacenamiento: 128,
    ram: 6,
    color: "Rojo",
    imagen:
      "https://th.bing.com/th/id/OIP.fZwlRpnbRfh4bXgY9xLTPgHaKI?w=139&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    destacado: false,
    fecha: "2022-09-16",
  },
  {
    id: 6,
    nombre: "Samsung Galaxy A54",
    marca: "Samsung",
    precio: 449,
    os: "Android",
    almacenamiento: 128,
    ram: 6,
    color: "Verde",
    imagen:
      "https://th.bing.com/th/id/OIP.mDTIyX9nIxBQUE_Gz1s5wAHaJf?w=127&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    destacado: false,
    fecha: "2023-03-24",
  },
  {
    id: 7,
    nombre: "OnePlus 11",
    marca: "OnePlus",
    precio: 699,
    os: "Android",
    almacenamiento: 256,
    ram: 12,
    color: "Negro",
    imagen:
      "https://th.bing.com/th/id/OIP.N0c8v9ZCyr9A-Ym18Rp9ZwHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    destacado: true,
    fecha: "2023-02-07",
  },
  {
    id: 8,
    nombre: "Motorola Edge 40",
    marca: "Motorola",
    precio: 599,
    os: "Android",
    almacenamiento: 256,
    ram: 8,
    color: "Azul",
    imagen:
      "https://th.bing.com/th/id/OIP.0TICIgj7G53oBTJskdfEoAHaE8?w=304&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    destacado: false,
    fecha: "2023-05-02",
  },
];

// Opciones para los filtros
const opciones = {
  marcas: ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus", "Motorola"],
  colores: ["Negro", "Blanco", "Azul", "Rojo", "Verde"],
  os: ["iOS", "Android"],
  almacenamiento: [64, 128, 256, 512],
  ram: [4, 6, 8, 12, 16],
};

export default function ProductListing() {
  // Estado para los filtros
  const [filtros, setFiltros] = useState({
    marcas: [],
    colores: [],
    os: [],
    almacenamiento: [],
    ram: [],
    precioRango: [0, 1000],
  });

  // Estado para la ordenación
  const [ordenar, setOrdenar] = useState("destacados");

  // Función para manejar cambios en los filtros de checkbox
  const manejarCambioFiltro = (categoria, valor) => {
    setFiltros((prevFiltros) => {
      const nuevosFiltros = { ...prevFiltros };

      if (nuevosFiltros[categoria].includes(valor)) {
        nuevosFiltros[categoria] = nuevosFiltros[categoria].filter(
          (item) => item !== valor
        );
      } else {
        nuevosFiltros[categoria] = [...nuevosFiltros[categoria], valor];
      }

      return nuevosFiltros;
    });
  };

  // Función para manejar cambios en el rango de precios
  const manejarCambioPrecio = (valor) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      precioRango: valor,
    }));
  };

  // Función para limpiar todos los filtros
  const limpiarFiltros = () => {
    setFiltros({
      marcas: [],
      colores: [],
      os: [],
      almacenamiento: [],
      ram: [],
      precioRango: [0, 1000],
    });
  };

  // Filtrar y ordenar productos
  const productosFiltrados = useMemo(() => {
    return productos
      .filter((producto: Producto) => {
        // Filtrar por marca
        if (
          filtros.marcas.length > 0 &&
          !filtros.marcas.includes(producto.marca)
        ) {
          return false;
        }

        // Filtrar por color
        if (
          filtros.colores.length > 0 &&
          !filtros.colores.includes(producto.color)
        ) {
          return false;
        }

        // Filtrar por sistema operativo
        if (filtros.os.length > 0 && !filtros.os.includes(producto.os)) {
          return false;
        }

        // Filtrar por almacenamiento
        if (
          filtros.almacenamiento.length > 0 &&
          !filtros.almacenamiento.includes(producto.almacenamiento)
        ) {
          return false;
        }

        // Filtrar por RAM
        if (filtros.ram.length > 0 && !filtros.ram.includes(producto.ram)) {
          return false;
        }

        // Filtrar por rango de precio
        if (
          producto.precio < filtros.precioRango[0] ||
          producto.precio > filtros.precioRango[1]
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        // Ordenar productos
        switch (ordenar) {
          case "destacados":
            return b.destacado - a.destacado;
          case "precio-asc":
            return a.precio - b.precio;
          case "precio-desc":
            return b.precio - a.precio;
          case "mas-nuevos":
            return new Date(b.fecha) - new Date(a.fecha);
          default:
            return 0;
        }
      });
  }, [filtros, ordenar]);

  // Contar filtros activos
  const contarFiltrosActivos = () => {
    let count = 0;
    count += filtros.marcas.length;
    count += filtros.colores.length;
    count += filtros.os.length;
    count += filtros.almacenamiento.length;
    count += filtros.ram.length;
    if (filtros.precioRango[0] > 0 || filtros.precioRango[1] < 1000) {
      count += 1;
    }
    return count;
  };

  const filtrosActivos = contarFiltrosActivos();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Smartphones</h1>
            <p className="text-muted-foreground">
              Encuentra el celular perfecto para ti
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtros
                  {filtrosActivos > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {filtrosActivos}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                  <SheetDescription>
                    Filtra los productos según tus preferencias
                  </SheetDescription>
                </SheetHeader>

                <div className="flex justify-between items-center mt-4 mb-2">
                  <span className="text-sm font-medium">
                    {filtrosActivos} filtros aplicados
                  </span>
                  {filtrosActivos > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={limpiarFiltros}
                      className="h-8"
                    >
                      Limpiar todos
                    </Button>
                  )}
                </div>

                <div className="mt-4 space-y-4">
                  <Accordion type="multiple" defaultValue={["precio"]}>
                    <AccordionItem value="precio">
                      <AccordionTrigger>Precio</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 px-1">
                          <Slider
                            defaultValue={[0, 1000]}
                            max={1000}
                            step={50}
                            value={filtros.precioRango}
                            onValueChange={manejarCambioPrecio}
                            className="mt-6"
                          />
                          <div className="flex items-center justify-between">
                            <span>${filtros.precioRango[0]}</span>
                            <span>${filtros.precioRango[1]}</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="marca">
                      <AccordionTrigger>Marca</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {opciones.marcas.map((marca) => (
                            <div
                              key={marca}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`marca-${marca}`}
                                checked={filtros.marcas.includes(marca)}
                                onCheckedChange={() =>
                                  manejarCambioFiltro("marcas", marca)
                                }
                              />
                              <label
                                htmlFor={`marca-${marca}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {marca}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="os">
                      <AccordionTrigger>Sistema Operativo</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {opciones.os.map((sistema) => (
                            <div
                              key={sistema}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`os-${sistema}`}
                                checked={filtros.os.includes(sistema)}
                                onCheckedChange={() =>
                                  manejarCambioFiltro("os", sistema)
                                }
                              />
                              <label
                                htmlFor={`os-${sistema}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {sistema}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="color">
                      <AccordionTrigger>Color</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {opciones.colores.map((color) => (
                            <div
                              key={color}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`color-${color}`}
                                checked={filtros.colores.includes(color)}
                                onCheckedChange={() =>
                                  manejarCambioFiltro("colores", color)
                                }
                              />
                              <label
                                htmlFor={`color-${color}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {color}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="almacenamiento">
                      <AccordionTrigger>Almacenamiento (GB)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {opciones.almacenamiento.map((gb) => (
                            <div
                              key={gb}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`almacenamiento-${gb}`}
                                checked={filtros.almacenamiento.includes(gb)}
                                onCheckedChange={() =>
                                  manejarCambioFiltro("almacenamiento", gb)
                                }
                              />
                              <label
                                htmlFor={`almacenamiento-${gb}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {gb} GB
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ram">
                      <AccordionTrigger>RAM (GB)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {opciones.ram.map((ram) => (
                            <div
                              key={ram}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`ram-${ram}`}
                                checked={filtros.ram.includes(ram)}
                                onCheckedChange={() =>
                                  manejarCambioFiltro("ram", ram)
                                }
                              />
                              <label
                                htmlFor={`ram-${ram}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {ram} GB
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>

            <Select value={ordenar} onValueChange={setOrdenar}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="destacados">Destacados</SelectItem>
                <SelectItem value="precio-asc">
                  Precio: Menor a Mayor
                </SelectItem>
                <SelectItem value="precio-desc">
                  Precio: Mayor a Menor
                </SelectItem>
                <SelectItem value="mas-nuevos">Más nuevos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filtros activos */}
        {filtrosActivos > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {filtros.marcas.map((marca) => (
              <Badge
                key={`badge-marca-${marca}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {marca}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => manejarCambioFiltro("marcas", marca)}
                />
              </Badge>
            ))}
            {filtros.colores.map((color) => (
              <Badge
                key={`badge-color-${color}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {color}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => manejarCambioFiltro("colores", color)}
                />
              </Badge>
            ))}
            {filtros.os.map((sistema) => (
              <Badge
                key={`badge-os-${sistema}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {sistema}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => manejarCambioFiltro("os", sistema)}
                />
              </Badge>
            ))}
            {filtros.almacenamiento.map((gb) => (
              <Badge
                key={`badge-almacenamiento-${gb}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {gb} GB
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => manejarCambioFiltro("almacenamiento", gb)}
                />
              </Badge>
            ))}
            {filtros.ram.map((ram) => (
              <Badge
                key={`badge-ram-${ram}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {ram} GB RAM
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => manejarCambioFiltro("ram", ram)}
                />
              </Badge>
            ))}
            {(filtros.precioRango[0] > 0 || filtros.precioRango[1] < 1000) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                ${filtros.precioRango[0]} - ${filtros.precioRango[1]}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => manejarCambioPrecio([0, 1000])}
                />
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={limpiarFiltros}
              className="h-8"
            >
              Limpiar todos
            </Button>
          </div>
        )}

        {/* Lista de productos */}
        <div className="mt-6">
          {productosFiltrados.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Smartphone className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">
                No se encontraron productos
              </h3>
              <p className="text-muted-foreground mt-1">
                Intenta ajustar los filtros para ver más resultados
              </p>
              <Button
                variant="outline"
                onClick={limpiarFiltros}
                className="mt-4"
              >
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {productosFiltrados.map((producto) => (
                <Card
                  key={producto.id}
                  className={cn(
                    "overflow-hidden transition-all hover:shadow-md",
                    producto.destacado && "border-primary/50"
                  )}
                >
                  <div className="relative pt-4 px-4">
                    {producto.destacado && (
                      <Badge className="absolute top-6 right-6 z-10">
                        Destacado
                      </Badge>
                    )}
                    <Image
                      src={producto.imagen || "/placeholder.svg"}
                      alt={producto.nombre}
                      width={300}
                      height={300}
                      className="object-contain h-48 w-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-1.5">
                      <h3 className="font-semibold text-lg line-clamp-1">
                        {producto.nombre}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {producto.marca}
                      </p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline">{producto.os}</Badge>
                        <Badge variant="outline">
                          {producto.almacenamiento} GB
                        </Badge>
                        <Badge variant="outline">{producto.ram} GB RAM</Badge>
                        <Badge variant="outline">{producto.color}</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <span className="text-xl font-bold">
                      ${producto.precio}
                    </span>
                    <Button size="sm">Ver detalles</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
