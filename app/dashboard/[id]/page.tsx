// DATA
import { getDocumentData } from "@/data/db";

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
        <div className="rounded-lg bg-neutral flex flex-col justify-center items-stretch gap-4 p-2 lg:p-4">
          <h1>Item status will go here</h1>
        </div>
        <div className="rounded-lg bg-neutral flex flex-col justify-center items-stretch gap-4 p-2 lg:p-4">
          <h1>Status update will go here</h1>
        </div>
        <div className="rounded-lg bg-neutral lg:col-span-2 p-4 flex flex-col gap-4">
          <h1>Comments will go here</h1>
        </div>
      </div>
    </section>
  )
}