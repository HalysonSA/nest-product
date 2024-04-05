import { IsAlpha, IsNotEmpty, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @Min(1)
  price: number;
}
