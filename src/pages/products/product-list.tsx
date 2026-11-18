import { ProductCard } from "@/cases/products/components/product-card";
import type { ProductDTO } from "@/cases/products/dtos/product.dto";
import { useProducts } from "@/cases/products/hooks/use-product";

type ProductListProps = {
    categoryId?: string;
}

export function ProductList({categoryId}: ProductListProps) {

    const { data: products = [] } = useProducts(categoryId);

    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
        {products.map( (product: ProductDTO) => (
            <li key={product.id}>
                <ProductCard product={product} />
            </li>
        ))}

        </ul>
    )
}