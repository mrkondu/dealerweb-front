interface CarouselProductsProps {
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    };
  };
}
const CarouselProduct = (props: CarouselProductsProps) => {
  const { images } = props;
  return <div>CarouselProduct</div>;
};

export default CarouselProduct;
