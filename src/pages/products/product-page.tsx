import { useCategory } from "@/cases/categories/hooks/use-category";
import { useSearchParams } from "react-router-dom";
import { ProductList } from "./product-list";


export function ProductPage(){

 const [searchParams] = useSearchParams();
 const CategoryId = searchParams.get('categoryId');

 const { data: selectedCategory } = useCategory(CategoryId ?? '');


    return(
        <div className="flex flex-col gap-6">
            {selectedCategory && (
        <h2 className="text-2xl font-semibold uppercase">
            {selectedCategory.name}
        </h2>
            )}

            <ProductList/>
        </div>
    )
}