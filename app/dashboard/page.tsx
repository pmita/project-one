// DATA
import { getCollectionData } from "@/data/db";
import { ItemCard } from "./_components/ItemCard/ItemCard";


export default async function DashboardPage() {
  // SERVERLAND
  const items = await getCollectionData('queries');

  console.log(items);
  return (
    <div className="grid grid-cols-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8 mt-4">
      {items && items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}