"use client"

// NEXT
import { useSearchParams } from "next/navigation";
// REACT
import { useState, useCallback, useEffect } from "react";
// COMPONENTS
import { ItemCard } from "../ItemCard";
import { Button, buttonVariants } from "@/components/Button";
// HOOKS
import { useFetchCollectionData } from "@/hooks/useFetchCollectionData";
// FIREBASE
import { fromMillis } from "@/firebase/client/config";
// UTILS
import { cn } from "@/utils/helpers";
// TYPES
import { IQueryItem } from "@/types/db";
// STYLES
import styles from "./styles.module.css";

const TEN_MORE_ITEMS = 10;

export const GridItems = ({ items }: { items: IQueryItem[] | null}) => {
  // STATE && VARIABLES
  const [currentItems, setCurrentItems] = useState<IQueryItem[] | null>(items);
  const { isLoading, fetchCollectionData } = useFetchCollectionData(); 
  const [hasMore, setHasMore] = useState(true);
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  useEffect(() => {
    setCurrentItems(items)
    setHasMore(true)
  }, [status]);

  if (!currentItems || !currentItems.length) return null;
  
  // EVENTS
  const loadMoreItems = useCallback(async () => {
    const lastItem = currentItems[currentItems.length - 1];
    const lastItemTimestamp = typeof lastItem?.createdAt === 'number'
    ? fromMillis(lastItem.createdAt)
    : lastItem?.createdAt;
    
    const filters = {
      sort: 'desc',
      startAfter: lastItemTimestamp,
      limit: TEN_MORE_ITEMS
    }
    
    const additionalItems = await fetchCollectionData('queries', filters);
    
    if (additionalItems) {
      setCurrentItems([...currentItems, ...additionalItems]);
    }
    
    if (additionalItems && additionalItems?.length < TEN_MORE_ITEMS) {
      setHasMore(false);
    }
  }, [currentItems]);
  
  return (
    <>
      <div className={`${styles.gridContainer}`}>
        {currentItems && currentItems.map((item:IQueryItem) => (
          <ItemCard key={item.id} item={item as IQueryItem | null} />
        ))}
      </div>

      <section className={`${styles.loadMore}`}>
        {hasMore 
          ? (
              <Button
                  className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), "text-center")}
                  onClick={loadMoreItems}
                  disabled={isLoading || !hasMore}
              >
                  {isLoading ? 'Loading...' : 'Load More'}
              </Button>)
          : <p className={`${styles.styledText}`}>No more items to load</p>
        }
      </section>    
    </>
  )
}