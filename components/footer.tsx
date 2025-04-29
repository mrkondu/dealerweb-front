import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
  {
    id: 1,
    name: "Sobre Nosotros",
    link: "#",
  },
  {
    id: 2,
    name: "Productos ",
    link: "#",
  },
  {
    id: 3,
    name: "Mi cuenta ",
    link: "#",
  },
  {
    id: 4,
    name: "Política de privacidad",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">DealerTech® </span>
            E-commerce
          </p>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500">
            {dataFooter.map((item) => (
              <li key={item.id} className="ml-4 sm:ml-0">
                <Link
                  href={item.link}
                  className="text-gray-600 hover:text-gray-900 hover:underline me-4  md:me-6"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
          &copy; Copyright 2025
          <Link href="#"> DealerTech</Link>. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
