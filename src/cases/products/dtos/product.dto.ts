import type { CategoryDTO } from "@/cases/categories/dtos/category.dto";

export interface ProductDTO {
  id: string;
  name: string;
  description: string | null;
  price: number | string; // numeric do Postgres chega como string no JSON
  picture?: string | null;
  active: boolean;
  category: CategoryDTO | null;
}