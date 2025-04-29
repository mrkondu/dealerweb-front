/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductType } from "@/types/product";

type ProductCardProps = {
  product: ProductType;
};
const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  return <div>Product card</div>;
};

export default ProductCard;
