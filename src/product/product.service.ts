import { Product } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts(): Promise<Product[] | null> {
    return this.prisma.product.findMany();
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async createProduct(data: {
    name: string;
    description: string;
    price: number;
  }): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  async updateProduct(data: {
    id: number;
    name: string;
    description: string;
    price: number;
  }): Promise<Product> {
    return this.prisma.product.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
      },
    });
  }
}
