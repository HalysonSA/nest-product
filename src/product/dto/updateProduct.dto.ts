import { IsNotEmpty, IsOptional, Min } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  id: number;

  @IsOptional()
  name: string;

  @IsOptional()
  description: string;

  @IsOptional()
  @Min(1)
  price: number;
}
