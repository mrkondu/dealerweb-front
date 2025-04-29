import Link from "next/link";
import { buttonVariants } from "./ui/button";

function BannerDiscount() {
  return (
    <div className=" text-center sm:p-10 justify-center">
      <p className="uppercase font-black ">consigue hasta un -20%</p>
      <h3>Envío gratis a partir de $100.000 en nuestra web</h3>

      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="/shop" className={buttonVariants()}>
          Comprar
        </Link>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          Más Información
        </Link>
      </div>
    </div>
  );
}

export default BannerDiscount;
