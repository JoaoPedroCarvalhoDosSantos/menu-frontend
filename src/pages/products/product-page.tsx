import {useCategory } from "@/cases/categories/hooks/use-category";
import { useSearchParams } from "react-router-dom"

export function ProductPage(){

 const [searchParams] = useSearchParams();
 const CategoryId = searchParams.get(categoryId);

 const { data: selectedcategory = []} = useCategory(CategoryId ?? '');


    return(
        <div className="flex flex-col gap-6">
            {selectedcategory && (
        <h2 className="text-2xl font-semibold uppercase">
            {selectedcategory.name}
        </h2>
            )}
        </div>
    )
}