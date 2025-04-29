"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "./cart-item";

// Datos de ejemplo para los productos
const initialCartItems = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    price: 999,
    image:
      "data:image/jpeg;base64,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",
    quantity: 1,
    color: "Grafito",
    storage: "128GB",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: 799,
    image:
      "data:image/jpeg;base64,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",
    quantity: 2,
    color: "Negro",
    storage: "256GB",
  },
  {
    id: 3,
    name: "Google Pixel 6",
    price: 599,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAM0AiwMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAABQQCAwYHCAH/2gAIAQEAAAAA3MHkAPA9CbV6AGio1hZjdyxUEjqqWAGkG1uItx1JD88r6ndgBoKQxmVWoytEhh9SugA0NGl3ZsqRejwcV3m6ADSk+Naj2ye0lpNlOQA0FRd9pppolPL2fuAA5uQ3r98polOJ+2WwAc2Y3cvF27RYkv8Ad7YAOaMXK5My7Xahyuj24Ac0Yt7V6SGcmOu6ZcABzVjPvntRSxaw+iW4Ac4Y8VluhvPg3OgHAAc9KY3lyqzJyzCoXTLkAOf41cKLfqYEJL0k5ADneLPvQ4cttJSY70e5ADnFUya311Mq8rX9BuQA5xx6S+cW4E5zaw/fDkAOeccsMcnl+VZvheP7vdABzutiRslfGSQ68V3A6ADnVTXYu5XcdZBha7cLoAOcU1dfj1s6yzD8d3A7ADm1FVXdlP29m6u247ADmlB7VXcYMZfirez8ANYa18AAHO/6gAAAAAA//8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQCAwUBBv/aAAoCAhADEAAAAA6WVnYS4HeAAxRp567ELYTpsomAML7eH3ldi7SzyDIAxTtZPK4yCm3G2QBmO9QR5TXQtPG1QC82bLo21RqXX89oAFjTXoZceUsxJ0eamATec92vVdB3DexvLpgHWZ+ru041OKOo+e8sAXzY2V93s5YzU8vzIAxLZZztPm8rhM9R8+AWmpPl1OxU4ulV58AAAAAAP//EAEwQAAECBAIFBgcMCQIHAAAAAAECAwAEBREGEiExQVGzExYgIjaDFFVhcXOR0TJCUnJ0gYKSlKGxshAjMzVTVGKjwRWTMDRAQ0TS4f/aAAgBAQABPwD9L0zLyzanX3kNNp1rWQlI+cxzqoGyfB8yFmOdFC/nf7TnsjnRQ/5z+057I514e8ZN+pUc68PeMm/UqOdeHvGLfqVAxTQTqngfM2sxzooX85/ac9kc6aF/O/2nPZEnWaXP5vBZxp0p1pSesPOP+BjGZn6/ildPZeKJWTukbklPu3DBoSUAZ5ycWd/KkQqkto1zM38bljE7TZ5oZpeZdUNxcJv5jC1vtqKV5graDeEOgoUVLVm2aYL7mxRgTc0kWS8sDcFER4dN/wAdz66o8Om/47n11RLVGeammJliZcRMtLBbXmMYdqhrVGk6gWw2Xgs5N1lFPTcKE4prVyAsuOhOmx/br1QDe4Ivv0WPzp9kKaQrSkwqWKb5OrfWLXSfmiapzEwmzzNvKOsPaImMOr0ql3Lj1w9ITbB67KvOnSII02i0WhkWea+On8YwQLYXpnmd4iunVS3zjq4WLgvO8dcMvvtgBCw4ke8XrHm2iETrKz+szNq/q/8AYQkXFwQU7xpHrEcmDshcq2s3KRffqMOSIVtJ8+mJijsu+6aSqJnDqNbZUgxM02blr5m7p3phofrWvSJ/GME9mKb3vEV06iw+/iKs8k2F5XXSRcA6X3ItyashzNK+A4LeoH/EBaxoUm/3/cYQttJulRQrek5fxtCJl8f9wK+Mn/IhM4ffM/Og3hD7C9AWAdytBgtA6xC5e41XEOyaFCxEVWjNNpM0gZShaCfL1gIwV2Ypve8RXTWvJiat+kd47kKdQtJSsJUncoXEGWlD7lGT4hIHq1QqWRsdPzgGDLqGlJbPrTCjMI0lCz5RZcInbnKqyt42+owxN20NuW3oOkeowzNoXZKwEKP1T5jBbC/PFbZyUub7viJjBXZmnd7xFdOqvhjEdWO957juQJ9PwoE6N8eF+WDNeWPCjvhcyhywdQFDywMp/ZOX/oWfwMNTagShYPlSrX/9iUnMoAJu3sO1PtEVwhdEnt4S1xUxg0Ww3Tx6XiK6eKlrRX58pNrzD/HXCZt4a7H5oTO70eqEzSD74iA6dio5VUF1UcsRthqfGhDwzJ2HaIZdLYDiFZ0Hb7YnZoKo843fQUt5f9xOiMHdnJDveIrp4tXkr0/oveYmOOuA82daDCVMK99bzxyNxdJvAQtGq8JcVti94UIVcRJzy5Ve9s+6TE0pPgLimzdp3k8vkOcG0YO7OSHe8RXTxh+/Z35RMcdf6UlSdKVEeaETbidCwFj1GG3GHtAVZW4xkKYCAqFtQtESs4pph6VVpQ6UZfIoLBjBpvhunn0vEV08Y/v2d+UTHHXF4uIEWgiGpp1rQeujcYadafF0HSNYOsQLK0K0HfDzJF9EZbON+kR+YRg3s3T+94iuni8Xrs78omOOuMsZI5PdojrJ1i4gZVaoKIsUkKBII1EQxOg2Q/YHYv2wkgjKvVsO6JhjIUK/rR+YRg3s3T+94iunilGevT/p3+OuOSEBBgI3wWdohTQOsWO+LLRrFxvijSLFRnSy6VZBKzLvVNtLTRWIMtRKTKSAqEg9OPzcsiZWUPloMNue5CN64qLJodTmJEuF5hBSpte3I4kLSfUYcWFS5scySpspP0xGDOzVO73iK6dfaS7iCpgk6Hn+OuFSSveLB8hhbS2zZaSIAI1i4hKNqDHJpX5DCminZ80Ut2ckp9l6QaQ6+rM0lpSM4XygylOWJ6SrNSepyHqXRw5JnIJZqZaSVi+YNKRniqrnZqfmn50K8JW6eVChlIUNGW2y0MuON2bBuha0XG7rA3EYL7M07veIrp1kjnFVPTP8dcARlCgQQCIelMgKkAlO0bRGUoIUICUrTmGz1iAArqL91sPsiivNU+qsvvKU2jI62pxGtAdQUZx5rwvDLSz+/aOhPww/pt8S14r0+xUKxOPtBXJKKEpUsWUoISEZz8a14W1lW2rZyiPzCMF9mad3vEV08Qdoal6d/jrhp7YqEEGAIelwk3A6ivuMAFlea2jaIU0kgWPVOlKvgk/4MUJlExPrZeZC1CVmTlKc2kNGxETTrlGlKc3KysuS/KpeeW8wHS8pZ0tnNqSnVYRiCQlpeqzbDAyBBSQjXkK0hRR9Em0XUjqKHv0fN1hGC+zNO73iK6eJ/wB/1H07/HXDb2bQrXEu9pyqhs3gthaSk6iIdZJBvrBsfOIl9rKhcEEp/wAiEF9taVMvLamGxdtxCikkecQuqVCaUwt+beU7LLzNlasxQqH21uqLmYl0kkqVpJJ0m++8PpStvNay0LRcbR1hGC+zNO73iK6eJ9NfqXyh/jr/AENO7DEo9nFjrENnMPKIcRdz44+8Q60UqCk6CDcQyy7OFtLDalOm5SEi5BGuKXSp8VWmzLkhMNZJhBcKmzbKIxQAa9PJ2gt/kETzQ5MuaiFIB8ozjQYwV2Zp3e8RXTr6ULxBVQr+O9x1w8wtvTrTvEAxKvEKBiXcBCTDo6t9xvC2g4m+/wDGKU/MyFQYXLNBx1RKEIte5ULQatiTwpUimWkTMpa5XLpsU+e8VJbtSmnpl1AambhK02IsUi2VQiezCWdStJCgW/ziMFdmKb3vEV08Qdoap6d/jLgKh6W982POn2Q2vKoRIu3AEIIUmGFa0mMMtNCstrXsZcywy7W/9bBWl8zSngFnKbZL6QdmSMTBsVp8o6pyN3OwnLtipgGRfzJFxkI+uNUYK7MU3veIrp4j7QVP07/GXAMBUPMhzrJ93+MSDxSvIdYhhegQvqLCxqOuKUh+ZnGES7obd0qSs6hlETeIqhKrelyzLl1tRQXBmtcbcsOuOuOuOOqK1rUVKJ2kxUf+QmPofnEYJ7MU3veIrp4lNsQVP5Q/xlwFQFQFQtFyHEe7H3xJPhxtKgYSQsZTGGrorcqnel38kTLuGvCZgPsoL4cUHP1RPWipmTXOPGTQEy/VyADLsF9Bipi0hMfQ/OIwR2Xpve8RXTxR2gqXyl/jLgKgKgKgLiXe5Jy+xXuvbDTwiSnXZWYRMM5eWQDlzC4NxaHpp92YdmFkco4srVYWFzCXkOjToVFVFpCZ+h+dMYI7L03veIrp4rJTiOqIOsTT33uFUZozQFjfAcG+EupHvhDE6hNkqcSIRUJfa+39aBUpNWhyZav8LNCp2TH/AJbP14qVWbcYEs0vOlTiCtewBJvYRgNWfCdKVvS7xFdPG+CZurzhq1KQC+UgPMas9tqYOFcRJ0GkTv8AsLMc18QeKZ37O5HNfEHimd+zuRzXxB4pnfs7kc18QeKZ37O5HNfEHimd+zuRzXxB4pnfs7kc18QeKZ37O5HNfEPimd+zuRSMAVupTLXhzDknJhQLil6FqG5CYlmGZVhDLLYbaQLJQNQ/6b//xAAvEQACAQIEAwcCBwAAAAAAAAABAgADEQQSITEgQbETI1FSYXGBIjQQMDNCcoKR/9oACAECAQE/AIASbCdi/pDRcTKZYy3BhVzV0EfDkbQqywqp3FoaQOxEamRe44MKSK6EQVfFYTTbeGijbR6BGojEhWB8DwYX9enLS34B+RmIpgozDwPBhPuaXuekyTKRMoMelGYqlRTsUbpwYY2r0z6npBV9YtYHeZQwupmo3mJpg0nI8p4KNzUW0Y1E3ESvrKVXmpj1M9UK7BVK+a215UR0w7Bte6PTgpmzgzPcafIjgXuNJRqFT68xM+Zu7P1EC49rwVUODdDt2JyH+vAN4HIMIDLmG0S+jcxoYlRaZLWB0jMHwzOBo1Im3xwYYBq6Ai4JPSYjCFbtTuR4TDtZih2Mbu6pU84bEkEDQc4tUii1tih0+ODC/cU/c9ITeYijZu0Qa8xKtMVaYYb7iZhf61l7of48FFglVGOwM7VfMP8AYXU/uEDKpIuLGVFRtbiaoCAbj8z/xAAsEQACAgECBgAEBwEAAAAAAAABAgADEQQSEyAhMUFRFDJxsQUiJDA0YYGh/9oACAEDAQE/AIek4iwOpmZnl1B20uYmp9wWI3mBj7zBZ7EVgeTVddPZCnowCwRbrllerB6NEIYgjkvUtS4HmGiweAZtZe4ghqDdRNPYyOqnsSByP8pm0GGsGPpx46GYKHBECBnRl7hhyBdxxPhmhoYeIUIjIrDBEFZrsX1kcmiTi6qpMdyftG0WzuhE+EVvEu0HnEvoNTTHXk/DG26/Tn+z9ojK4j0r3WbQQcj6zW0Dila+7KM/9l2m2orp8pGeTR/yavqftKLyCATN+RmE9ZdZQm5nVCQpODjMuQWaQ2hQA9O7HrI5KmK2KQcESnU7sBu/uae3euJZnbuHiarZdc+UrylQOXnH/RthcK1J/L66ci/MIrTSakowgcEA9wRNcEXVbWqNi8MMMDJGTLH3UOcYzWen+coaJZg95pdaoGxmEF1G4sShJGCcjtNXwEqdktXqCNucnr+5/9k=",
    quantity: 1,
    color: "Blanco",
    storage: "128GB",
  },
];

export function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.16;
  const total = subtotal + shipping + tax;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border rounded-lg">
            <h2 className="text-xl font-medium mb-2">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-6">
              Agrega productos para continuar con tu compra
            </p>
            <Button>Continuar comprando</Button>
          </div>
        )}
      </div>

      <div className="bg-muted/30 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-medium mb-4">Resumen de compra</h2>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Envío</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Impuestos</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-medium text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full" size="lg" disabled={cartItems.length === 0}>
          Proceder al pago
        </Button>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>Aceptamos múltiples métodos de pago</p>
          <p className="mt-2">Envío gratuito en compras mayores a $1000</p>
        </div>
      </div>
    </div>
  );
}
