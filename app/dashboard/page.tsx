// DATA
import { getCollectionData } from "@/data/db";
import { ItemCard } from "./_components/ItemCard/ItemCard";
// TYPES 
import { IQueryItem } from "@/types/db";

type SearchParams = {
  [key: string]: string | string[] | undefined;
}


export default async function DashboardPage({ searchParams }: { searchParams: SearchParams }) {
  // SERVERLAND
  const items = await getCollectionData('queries', searchParams);

  console.log(searchParams);

  return (
    <div className="grid grid-cols-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8 mt-4">
      {items && items.map((item) => (
        <ItemCard key={item.id} item={item as IQueryItem | null} />
      ))}
    </div>
  )
}