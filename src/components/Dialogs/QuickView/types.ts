// TYPES
import { IQueryItem } from "@/src/types/db"

export type QuickViewDialogProps = {
  item: IQueryItem
  isOpen: boolean
  toggleDialog: (option: boolean) => void
}