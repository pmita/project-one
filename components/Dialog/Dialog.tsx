// REACT
import React from "react"
// UTILS
import { cn } from "@/utils/helpers"
// TYPES
import { IDialog, IDialogPanel } from "./types"
// STYLES
import styles from "./styles.module.css"

export const Dialog = React.forwardRef<HTMLDialogElement, IDialog>(({ className, children, ...props }, ref) => {
    return (
      <dialog className={cn(
       `${styles.container}`,
        className
      )}
      {...props}
      ref={ref}
      >
        {children}
      </dialog>
    )
  })
  Dialog.displayName = "Dialog";

  export const DialogPanel = ({ className, children, ...props }: IDialogPanel) => {
    return (
      <div className={cn(
        `${styles.panel}`,
        className
      )}
      {...props}
      >
        {children}
      </div>
    )
  }

  export const DialogHeader = ({ className, ...props }: IDialogPanel) => {
    return (
      <div className={cn(
       `${styles.header}`,
        className
        )}
        {...props}
      />
    )
  }
  
  export const DialogTitle = ({ className, ...props }: IDialogPanel) => {
    return (
      <div className={cn(
       `${styles.title}`,
        className
        )}
        {...props}
      />
    )
  }
  
  export const DialogDescription = ({ className, ...props }: IDialogPanel) => {
    return (
      <div className={cn(
       `${styles.description}`,
        className
        )}
        {...props}
      />
    )
  }
  
  export const DialogFooter = ({ className, ...props }: IDialogPanel) => {
    return (
      <div className={cn(
       `${styles.footer}`,
        className
        )}
        {...props}
      />
    )
  }