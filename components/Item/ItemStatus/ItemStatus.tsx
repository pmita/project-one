// COMPONENTS
import { itemStatusVariants } from "./itemStatusVariants";
// UTILS
import { cn } from "@/utils/helpers";
// TYPES
import { IStatus } from "./types";
import { QUERY_STATUS } from "@/types/db";

const selectVariant = (status: string) => {
  switch (status) {
    case QUERY_STATUS.PROGRESSED:
      return 'accent';
    case QUERY_STATUS.COMPLETED:
        return 'success';
    case QUERY_STATUS.INITIAL:
    default:
      return 'highlight';
  }
}

export function ItemStatus({ className, variant, size, status, ...props }: IStatus) {
  return (
    <span
      className={cn(itemStatusVariants({ variant:selectVariant(status), size, className}))}
      {...props}
    >
      {status}
    </span>
  );
}