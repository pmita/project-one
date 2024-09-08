// COMPONENTS
import { Skeleton } from "@/components/Skeleton";

export default async function DashboardPageLoading() {
  return (
    <section className="flex flex-row justify-between items-stretch flex-wrap">
        <Skeleton className="h-full w-full bg-primary" />
        <Skeleton className="h-full w-full bg-primary" />
        <Skeleton className="h-full w-full bg-primary" />
        <Skeleton className="h-full w-full bg-primary" />
      <div className="grid grid-cols-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8 mt-4">
        <Skeleton className="h-full w-full bg-primary" />
        <Skeleton className="h-full w-full bg-primary" />
        <Skeleton className="h-full w-full bg-primary" />
        <Skeleton className="h-full w-full bg-primary" />
        <Skeleton className="h-full w-full bg-primary" />
      </div>
  </section>
  )
}