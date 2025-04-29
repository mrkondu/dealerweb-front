import { ShoppingCart } from "./components/shopping-cart";

export default function CartPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>
      <ShoppingCart />
    </div>
  );
}
