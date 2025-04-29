"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Quienes Somos?",
    href: "/about",
    description: "Conoce a nuestro equipo de profesionales",
  },
  {
    title: "Donde estamos",
    href: "/nosotros",
    description: "Conoce nuestro laboratorio y su ubicación.",
  },
  {
    title: "Sérvicio Técnico",
    href: "/services",
    description: "Necesitas realizar una reparación?",
  },
  {
    title: "Seguimiento",
    href: "https://www.ordendereparacion.com",
    description: "Consulta el estado de tu equipo.",
  },
  {
    title: "Accesorios",
    href: "/products",
    description: "Dale un toque personalizado a tu vida.",
  },
  {
    title: "Tienda",
    href: "/products",
    description: "Plan canje para actualizar tu equipo.",
  },
];

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      DealerTech
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Somos una empresa dedicada a brindar servicio técnico
                      profesional para dispositivos electrónicos y a ofrecer una
                      amplia gama de equipos móviles en venta.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="/shop" title="Dealerweb">
                Accede a toda tu información, pedidos y más.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                No te pierdas nuestras ofertas más picantes.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Redes Sociales"
              >
                Seguinos en Instagram y TikTok.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nuestros Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Tienda Iphone
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  const isExternal = title === "Seguimiento"; // Detecta si es "Seguimiento"
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          target={isExternal ? "_blank" : "_self"} // Abre "Seguimiento" en nueva pestaña
          rel={isExternal ? "noopener noreferrer" : ""}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuList;
