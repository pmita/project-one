// DATA
import { getCollectionData, getDocumentData } from "@/src/data/db";
// COMPONENTS
import { ItemInfo } from "@/src/components/Item";
import { RealtimeItem } from "@/src/components/Item";
// TYPES
import { ICommentItem, IQueryItem } from "@/src/types/db";

interface DashboardItemPageProps {
  params: {
    id: string;
  }
}

export default async function ItemPage({ params }: DashboardItemPageProps) {
  // SERVER LAND
  const { id: itemId } = params;
  const item =  await getDocumentData('queries', itemId);
  const comments = await getCollectionData(`queries/${itemId}/comments`, { sort: 'asc'});

  if (!item) return null;

  return (
    <section className="flex flex-col justify-center items-stretch gap-4 p-8">
      <div className="grid grid-cols-1 grid-rows-[250px] gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg bg-neutral gap-4 p-2 lg:p-4">
          <ItemInfo item={item as IQueryItem} />
        </div>
        <RealtimeItem 
          item={item as IQueryItem} 
          comments={comments as ICommentItem[]}
        />
      </div>
    </section>
  )
}