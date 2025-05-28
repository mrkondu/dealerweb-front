"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Wrench,
  Smartphone,
  Shield,
  Award,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                DealerTech
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Tu confidente tecnológico en Posadas. Especialistas en
                reparación y venta de dispositivos móviles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="flex justify-center items-center w-full py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-screen-lg px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Proporcionar soluciones técnicas confiables y accesibles para
                todos los dispositivos móviles, garantizando la satisfacción
                total de nuestros clientes con un servicio de calidad y precios
                justos.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Ser el referente en Posadas en servicios técnicos y venta de
                dispositivos móviles, reconocidos por nuestra excelencia
                técnica, atención personalizada y compromiso con la calidad.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Nuestros Valores</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
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
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Honestidad y transparencia</span>
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Excelencia técnica</span>
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Atención personalizada</span>
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Compromiso con la calidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Nuestra Historia
              </h2>
              <p className="text-muted-foreground">
                DealerTech nació en Posadas con la visión de ofrecer un servicio
                técnico profesional y confiable para dispositivos móviles.
                Comenzamos como un pequeño taller de reparación y hemos crecido
                hasta convertirnos en un centro de servicio completo.
              </p>
              <p className="text-muted-foreground">
                Hoy, además de nuestro servicio técnico especializado, ofrecemos
                una amplia gama de dispositivos móviles y accesorios, siempre
                con la garantía de calidad que nos caracteriza.
              </p>
              <p className="text-muted-foreground">
                Nuestro compromiso con la excelencia y la satisfacción del
                cliente nos ha permitido construir una sólida reputación en la
                comunidad de Posadas.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/store-front.jpg"
                alt="Nuestro local en Posadas"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Nuestros Servicios
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Ofrecemos soluciones completas para tus dispositivos móviles
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Reparación de Dispositivos</h3>
              <p className="text-muted-foreground">
                Reparamos todo tipo de smartphones y tablets, con garantía y
                repuestos originales.
              </p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Venta de Equipos</h3>
              <p className="text-muted-foreground">
                Amplia selección de smartphones y tablets de las mejores marcas.
              </p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Servicio Técnico Oficial</h3>
              <p className="text-muted-foreground">
                Reparaciones con garantía y seguimiento del estado de tu equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Nuestra Ubicación
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Dirección</h3>
                    <p className="text-muted-foreground">
                      Felix de Azara 1890, Piso 1C
                      <br />
                      Posadas, Misiones
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-muted-foreground">+54 376 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Correo Electrónico</h3>
                    <p className="text-muted-foreground">
                      info@dealertech.com.ar
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Horario de Atención</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 1:00 PM
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <iframe
                className="w-full h-[400px] rounded-lg"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d526.5953668575936!2d-55.8938977!3d-27.3678014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457b90edf4759db%3A0xd11c6dfaa08c0b59!2sDealerTech%20Soporte%20T%C3%A9cnico!5e0!3m2!1ses!2sar!4v1711664821000"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                ¿Necesitas ayuda con tu dispositivo?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Agenda una cita o consulta el estado de tu reparación
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-10 items-center justify-center rounded-md bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contactar
              </Link>
              <Link
                href="https://www.ordendereparacion.com"
                className="inline-flex h-10 items-center justify-center rounded-md bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Seguimiento de Reparación
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
