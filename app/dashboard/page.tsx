// DATA
import { getCollectionData } from "@/data/db";
// COMPONENTS
import { FilterOptions } from "./_components/Filters";
// TYPES 
import { IQueryItem } from "@/types/db";
import { GridItems } from "./_components/GridItems";

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
      <GridItems items={items as IQueryItem[]} />
    </>
  )
}