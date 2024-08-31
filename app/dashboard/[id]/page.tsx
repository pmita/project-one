// DATA
import { getDocumentData } from "@/data/db";
// COMPONENTS
import { ItemInfo } from "./_components/ItemInfo";
import { Status } from "@/components/Status";
// TYPES
import { IQueryItem } from "@/types/db";
import { UpdateStatus } from "./_components/ItemStatus";

interface DashboardItemPageProps {
  params: {
    id: string;
  }
}

export default async function ItemPage({ params }: DashboardItemPageProps) {
  // SERVER LAND
  const { id: itemId } = params;
  const item =  await getDocumentData('queries', itemId);

  if (!item) return null;

  return (
    <section className="flex flex-col justify-center items-stretch gap-4 p-8">
      <div className="grid grid-cols-1 grid-rows-[250px] gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg bg-neutral gap-4 p-2 lg:p-4">
          <ItemInfo item={item as IQueryItem} />
        </div>
        <div className="rounded-lg bg-neutral flex flex-col justify-center items-stretch gap-4 p-2 lg:p-4">
          <div className="flex flex-row justify-center items-center gap-4">
            <span>Status:</span>
            <Status status={item.status} />
          </div>
          <UpdateStatus id={item.id} status={item.status} />
        </div>
        <div className="rounded-lg bg-neutral lg:col-span-2 p-4 flex flex-col gap-4">
          <h1>Comments will go here - realtime details</h1>
        </div>
      </div>
    </section>
  )
}