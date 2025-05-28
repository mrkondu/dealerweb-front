const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface Product {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    category: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface Category {
  id: number;
  attributes: {
    name: string;
    description?: string;
  };
}

export async function getProducts() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/products?populate=*`);
    const data = await response.json();
    return data.data as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getFeaturedProducts() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`);
    const data = await response.json();
    return data.data as Product[];
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`);
    const data = await response.json();
    return data.data[0] as Product;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/categories?populate=*`);
    const data = await response.json();
    return data.data as Category[];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getProductsByCategory(categoryId: number) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/products?filters[categories][id][$eq]=${categoryId}&populate=*`);
    const data = await response.json();
    return data.data as Product[];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
} 