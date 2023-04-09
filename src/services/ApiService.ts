import axios from 'axios';

import { Category, ProductDetail, ProductSummary } from '../types';

const API_BASE_URL = process.env.API_BASE_URL || 'https://shop-demo-api-01.fly.dev';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  // TODO #1: fetchProducts
  async fetchProducts({ categoryId }:{
    categoryId?: string;
  } = {}): Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products', {
      params: {
        categoryId,
      },
    });
    const { products } = data;
    return products;
  }

  // TODO #2: fetchCategories
  async fetchCategories():Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }

  // TODO #3: fetchProduct
  async fetchProduct({ productId }: {
    productId: string;
  }): Promise<ProductDetail> {
    const { data } = await this.instance.get(`/products/${productId}`);
    return data;
  }

  // TODO #4: fetchCart
  // TODO #5: addProductToCart
}

export const apiService = new ApiService();
