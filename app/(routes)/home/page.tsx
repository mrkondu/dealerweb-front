"use client";

import BackgroundPaths from "@/components/background-paths";
import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/featured-product";
import BannerDiscount from "@/components/banner-discount";
import ChooseCategory from "@/components/choose-category";
import { motion } from "framer-motion";

/**
 * Home Page de DealerTech
 * Esta página combina el impacto visual del BackgroundPaths con secciones
 * informativas y de productos para una experiencia completa.
 */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        
        {/* SECCIÓN 1: Hero con BackgroundPaths */}
        <section className="relative">
          <BackgroundPaths />
          {/* El componente BackgroundPaths ya tiene su propio contenido z-10 
              con el título "DealerTech" y el botón principal. */}
        </section>

        {/* SECCIÓN 2: Información de confianza y envíos */}
        <section className="py-2 bg-slate-100 dark:bg-slate-900/50">
          <CarouselTextBanner />
             {/* Botón */}

        </section>

      

        {/* SECCIÓN 3: Productos Destacados */}
        <section id="productos" className="bg-white dark:bg-neutral-950">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeaturedProducts />
          </motion.div>
        </section>

        {/* SECCIÓN 4: Banner de Descuento / Promoción */}
        <section className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BannerDiscount />
          </motion.div>
        </section>

        {/* SECCIÓN 5: Categorías */}
        <section id="categorias" className="py-12 bg-gray-50 dark:bg-neutral-900/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ChooseCategory />
          </motion.div>
        </section>

      </main>
    </div>
  );
}
