import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Sobre Nosotros
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conoce nuestra historia, valores y el equipo que hace posible nuestra misión cada día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
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
                  className="h-6 w-6"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Proporcionar soluciones innovadoras que transformen la manera en que nuestros clientes abordan sus
                desafíos, creando valor sostenible y contribuyendo positivamente a la sociedad.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
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
                  className="h-6 w-6"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Ser reconocidos como líderes en nuestro sector, destacando por la excelencia, la innovación y el
                compromiso con nuestros clientes, colaboradores y el medio ambiente.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
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
                  className="h-6 w-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
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
                  <span>Integridad y transparencia</span>
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
                  <span>Excelencia e innovación</span>
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
                  <span>Responsabilidad social</span>
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
                  <span>Trabajo en equipo</span>
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
                  <span>Compromiso con el cliente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestra Historia</h2>
              <p className="text-muted-foreground">
                Fundada en 2010, nuestra empresa nació con la visión de transformar el sector a través de soluciones
                innovadoras y un enfoque centrado en el cliente. A lo largo de los años, hemos crecido de manera
                constante, expandiendo nuestras operaciones y diversificando nuestros servicios.
              </p>
              <p className="text-muted-foreground">
                Hemos superado desafíos, celebrado éxitos y aprendido valiosas lecciones que nos han permitido
                consolidarnos como referentes en nuestro campo. Cada etapa de nuestra historia ha contribuido a forjar
                la identidad y los valores que hoy nos definen.
              </p>
              <p className="text-muted-foreground">
                Miramos al futuro con optimismo, comprometidos con seguir innovando y creciendo, siempre fieles a
                nuestra misión y valores fundamentales.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Historia de la empresa"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestro Equipo</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conoce a los profesionales que hacen posible nuestra misión cada día.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {/* Miembro del Equipo 1 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Ana Martínez"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Ana Martínez</h3>
                <p className="text-sm text-muted-foreground">Directora General</p>
                <p className="text-sm text-muted-foreground">
                  Con más de 15 años de experiencia en el sector, lidera nuestra empresa con visión y determinación.
                </p>
              </div>
            </div>
            {/* Miembro del Equipo 2 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Carlos Rodríguez"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Carlos Rodríguez</h3>
                <p className="text-sm text-muted-foreground">Director de Operaciones</p>
                <p className="text-sm text-muted-foreground">
                  Especialista en optimización de procesos y gestión eficiente de recursos.
                </p>
              </div>
            </div>
            {/* Miembro del Equipo 3 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Laura Sánchez"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Laura Sánchez</h3>
                <p className="text-sm text-muted-foreground">Directora de Innovación</p>
                <p className="text-sm text-muted-foreground">
                  Impulsa el desarrollo de nuevas soluciones y la implementación de tecnologías emergentes.
                </p>
              </div>
            </div>
            {/* Miembro del Equipo 4 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Miguel Torres"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Miguel Torres</h3>
                <p className="text-sm text-muted-foreground">Director Comercial</p>
                <p className="text-sm text-muted-foreground">
                  Experto en desarrollo de negocio y creación de relaciones duraderas con clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestra Ubicación</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Dirección</h3>
                    <p className="text-muted-foreground">
                      Avenida Principal 123
                      <br />
                      Colonia Centro
                      <br />
                      Ciudad de México, CP 12345
                      <br />
                      México
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-muted-foreground">+52 (55) 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Correo Electrónico</h3>
                    <p className="text-muted-foreground">info@tuempresa.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Horario de Atención</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábados: 10:00 AM - 2:00 PM
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mapa de ubicación"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logros y Reconocimientos */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Logros y Reconocimientos</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A lo largo de nuestra trayectoria, hemos sido reconocidos por nuestro compromiso con la excelencia.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {/* Logro 1 */}
            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                  className="h-6 w-6"
                >
                  <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11" />
                  <path d="M15 7a3 3 0 1 0-6 0c0 1.66 1.34 3 3 3s3-1.34 3-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Premio a la Innovación 2022</h3>
              <p className="text-muted-foreground">
                Reconocidos por la Cámara de Comercio por nuestras soluciones innovadoras en el sector.
              </p>
            </div>
            {/* Logro 2 */}
            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                  className="h-6 w-6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h.01" />
                  <path d="M17 7h.01" />
                  <path d="M7 17h.01" />
                  <path d="M17 17h.01" />
                  <path d="M12 12h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Certificación ISO 9001</h3>
              <p className="text-muted-foreground">
                Obtuvimos la certificación que avala nuestro compromiso con la calidad en todos nuestros procesos.
              </p>
            </div>
            {/* Logro 3 */}
            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                  className="h-6 w-6"
                >
                  <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z" />
                  <path d="m3 3 18 18" />
                  <path d="M10.5 13.5 7 17" />
                  <path d="m14 10-3.5 3.5" />
                  <path d="M10 14H3" />
                  <path d="M21 10h-7" />
                  <path d="M17 17v4" />
                  <path d="M7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Empresa Socialmente Responsable</h3>
              <p className="text-muted-foreground">
                Reconocimiento por nuestras iniciativas de responsabilidad social y compromiso con la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Listo para trabajar con nosotros?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex h-10 items-center justify-center rounded-md bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

