import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Clock,
  Cpu,
  Laptop,
  Link,
  Phone,
  Shield,
  Smartphone,
  Tablet,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import img from "@/public/logo/icon-profile.png";


const page = () => {
  return (
    <main className="flex-1">

      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 ">
              <div className="space-y-2 ">

                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Reparación y Mantenimiento de Equipos Electrónicos
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Servicio profesional y confiable para tus dispositivos.
                  Reparamos computadoras, smartphones, tablets y más.
                </p>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row ">

                <Button asChild size="lg">
                  <Link href="#servicios">Nuestros Servicios</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contacto">Solicitar Presupuesto</Link>
                </Button>
              </div>
            </div>
            <Image

              src={img}
              width={700}
              height={600}

              alt="Técnico reparando dispositivos electrónicos"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section
        id="servicios"

        className="flex w-full py-12 md:py-24 lg:py-32 bg-muted/50 justify-center items-center"
      >
        <div className="container px-4 md:px-6 justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center ">

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


      <section
        id="nosotros"
        className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center"
      >

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Sobre Dealer Tech
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Somos una empresa especializada en la reparación y mantenimiento
                de equipos electrónicos con más de 10 años de experiencia en el
                sector.
              </p>
              <p className="text-muted-foreground">
                Nuestro equipo de técnicos certificados está capacitado para
                resolver cualquier problema en tus dispositivos, ofreciendo
                soluciones rápidas y efectivas a precios competitivos.
              </p>
              <p className="text-muted-foreground">
                En Dealer Tech nos comprometemos con la calidad y la
                satisfacción del cliente, garantizando todas nuestras
                reparaciones y utilizando siempre repuestos originales.
              </p>
            </div>
            <Image

              src={img}

              width={600}
              height={400}
              alt="Equipo de técnicos de Dealer Tech"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section
        id="ventajas"

        className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 flex justify-center items-center"

      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                ¿Por qué elegirnos?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Nuestras ventajas que nos diferencian
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 pt-8">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Garantía en Reparaciones</h3>
              <p className="text-muted-foreground">
                Todas nuestras reparaciones incluyen garantía de 3 meses para tu
                tranquilidad.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Servicio Rápido</h3>
              <p className="text-muted-foreground">
                La mayoría de las reparaciones se completan en 24-48 horas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Técnicos Certificados</h3>
              <p className="text-muted-foreground">
                Nuestro equipo cuenta con certificaciones oficiales de los
                principales fabricantes.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section
        id="contacto"
        className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center"
      >

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Contáctanos
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Estamos aquí para ayudarte con tus dispositivos electrónicos
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Teléfono</h3>
                  <p className="text-muted-foreground">+123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Email</h3>
                  <p className="text-muted-foreground">
                    contacto@dealertech.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Dirección</h3>
                  <p className="text-muted-foreground">
                    Calle Principal #123, Ciudad
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Horario</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 - 18:00
                  </p>
                  <p className="text-muted-foreground">
                    Sábados: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold mb-4">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Asunto
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Escribe tu mensaje aquí"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
