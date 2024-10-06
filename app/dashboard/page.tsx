// DATA
import { getCollectionData } from "@/src/data/db";
// COMPONENTS
import { FilterOptions } from "@/src/components/Filters";
import { ItemsInGrid } from "@/src/components/Items";
// TYPES 
import { IQueryItem } from "@/src/types/db";

type SearchParams = {
  [key: string]: string | undefined;
}


export default async function DashboardPage({ searchParams }: { searchParams: SearchParams }) {
  // SERVERLAND
  const items = await getCollectionData('queries', searchParams);

  return (
    <>
      <section className="flex flex-row justify-between items-stretch flex-wrap">
        <FilterOptions option={searchParams.status || 'ALL'} />
      </section>
      {items && items.length 
        ? <ItemsInGrid items={items as IQueryItem[]} />
        : <div className="grid place-items-center min-h-[250px]">
            <h1>No items found</h1>
          </div>
      }
    </>
  )
}