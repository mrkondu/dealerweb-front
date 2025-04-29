"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Cpu, Laptop, Shield, Smartphone, Tablet, Wrench } from "lucide-react";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envíos a todo el País",
    description: "Consultá por envíos a tu localidad.",
    link: "#!",
  },
  {
    id: 2,
    title: "Reparaciones Garantizadas 100%",
    description: "Todas nuestras reparaciones cuentan con garantia de 30 días.",
    link: "#!",
  },
  {
    id: 3,
    title: "Ofertas Exclusivas",
    description:
      "Mirá las ofertas y obtené hasta un 35% de descuento en nuestra web.",
    link: "#!",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, description, link }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-white">
                      {title}
                    </p>
                    <p className="sm:text-xm text-xs text-wrap dark:text-gray-300">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <section
        id="servicios"
        className="flex w-full py-12 md:py-24 lg:py-32 bg-muted/50 justify-center items-center"
      >
        <div className="container px-4 md:px-6 justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center " >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Nuestros Servicios
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Ofrecemos soluciones completas para tus dispositivos
                electrónicos
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Laptop className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Reparación de Computadoras</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reparamos laptops y computadoras de escritorio. Solucionamos
                  problemas de hardware y software.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Smartphone className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Reparación de Smartphones</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reemplazo de pantallas, baterías, reparación de puertos de
                  carga y solución de problemas de software.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Tablet className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Reparación de Tablets</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Servicio especializado para tablets de todas las marcas.
                  Reparamos pantallas, baterías y más.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Cpu className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Actualización de Hardware</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mejoramos el rendimiento de tu equipo con actualizaciones de
                  memoria, almacenamiento y procesador.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Wrench className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Mantenimiento Preventivo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Limpieza de componentes, optimización de software y revisión
                  general para prevenir fallos.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-8 w-8" />
                <div className="grid gap-1">
                  <CardTitle>Recuperación de Datos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Recuperamos información de discos duros dañados, memorias USB
                  y otros dispositivos de almacenamiento.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
    
  );
};
export default CarouselTextBanner;
