import { cn } from "cn"
import { useCategories } from "../hooks/use-category"
import { Utensils } from "lucide-react"

export function CategoryNav(){

const { data: categories = []} = useCategories()

    return(
        <nav className="w-full">
            <ul className="overflow-hidden rounded-xl border-border/70 bg-transparent">
            <Link
            to={`/products?categoryId=${CategoryNav.id}`}
            className={cn(
                'relative flex w-full items-center px-5 py-5 gap-3',
                'font-menu text-lg font-semibold uppercase tracking-tight',
                'border-xl border border-transparent',
                'transition-colors duration-200',
                'hover:z-10 hover:text-[#B86A2C]'
            )}
            >

                {CategoryNav.icon ? (
                    <span>ICON</span>
                ) : (
                    <Utensils
                    className="size-10 text-brand"
                    />
                )}
            <span className="leading-tight">{CategoryNav.name}</span>
            </Link>
            {categories.map((category) => (<li key={category.id} className="relative">
                {category.name}</li>))}
            </ul>
        </nav>
    )
}