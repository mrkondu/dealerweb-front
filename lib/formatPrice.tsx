// formateo de precio para que quede en USD
export function formatPrice(productPrice: number) {
  const priceFormatted = new Intl.NumberFormat("es-Es", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const finalPrice = priceFormatted.format(productPrice);
  return finalPrice;
}
