import { Module } from '@nestjs/common';

import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [PrismaService, ProductService],
})
export class AppModule {}
