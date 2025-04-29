/* eslint-disable @next/next/no-img-element */
import BannerProduct from "@/components/banner-product";
import React from "react";

const page = () => {
  return (
    <>
      <BannerProduct />

      <div className="container mx-auto px-4 py-12">
        <section className="text-center py-10 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            ¿Donde nos encontramos?
          </h2>
          <p className="text-gray-600 mt-2">
            Dirección: Felix de azara 1890. Piso 1C.
          </p>

          <div className="w-full max-w-lg mx-auto mt-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 rounded-lg"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d526.5953668575936!2d-55.8938977!3d-27.3678014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457b90edf4759db%3A0xd11c6dfaa08c0b59!2sDealerTech%20Soporte%20T%C3%A9cnico!5e0!3m2!1ses!2sar!4v1711664821000"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
