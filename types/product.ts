export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    price: number;
    capacityProduct: string;
    active: boolean;
    isFeatured: boolean;
    images: {
      id: number;
      url: string;
    }[]; // images es un array de objetos, cada objeto con id y url.
    category: {
      data: {
        id: number;
        attributes: {
          categoryName: string;
        };
      };
    };
  };