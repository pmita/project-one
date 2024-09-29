// TYPES
import { IQueryItem } from "@/types/db"

export type QuickViewDialogProps = {
  item: IQueryItem
  isOpen: boolean
  toggleDialog: (option: boolean) => void
}