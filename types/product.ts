export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    price: number;
    capacityProduct: string;
    active: boolean;
    isFeatured: boolean;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    category: {
      data: {
        id: number;
        attributes: {
          categoryName: string;
        };
      };
    };
    specifications?: {
      name: string;
      value: string;
    }[];
    features?: string[];
  };