import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <ChevronDown />
      </PopoverTrigger>

      <PopoverContent>
        <Link href="/" className="block" target="_blank">
          Sobre Nosotros
        </Link>
        <Link
          href="https://www.ordendereparacion.com"
          className="block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Servicio Técnico
        </Link>
        <Link href="/" className="block">
          Tienda Iphone
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
