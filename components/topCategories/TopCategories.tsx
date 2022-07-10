import { getCategories } from "lib/constants";
import { CardCategory } from "./cardCategory/CardCategory";

export function TopCategories() {
  const categories = getCategories();
  return (
    <section>
      <h2 className="font-cursive mb-10 mt-12 text-redCrayola text-lg">
        Top Categories
      </h2>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <CardCategory key={category} label={category} />
        ))}
      </div>
    </section>
  );
}
