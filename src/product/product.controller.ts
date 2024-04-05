import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/createProduct.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Promise<Product[] | null> {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Promise<Product | null> {
    return this.productService.getProductById(Number(id));
  }

  @HttpCode(201)
  @Post()
  @UsePipes(new ValidationPipe())
  createProduct(@Body() data: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(data);
  }
}
