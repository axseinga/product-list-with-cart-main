import { ProductItem } from "../components/product-item";
import { data } from "../data";

type ProductListProps = {
  title: string;
};

export const ProductsList = ({ title }: ProductListProps) => {
  return (
    <div className="w-full">
      <h1 className="mb-7 text-3xl font-bold">{title}</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item, index) => (
          <ProductItem key={`${index}_${item.name}`} item={item} />
        ))}
      </div>
    </div>
  );
};
