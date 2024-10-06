"use client"

import { useRef, useEffect } from "react";
// COMPONENTS
import { Button, buttonVariants } from "@/src/components/ui/Button";
import { Comments } from "@/src/components/Comments";
import { ItemInfo } from "@/src/components/Item";
import { Dialog, DialogHeader, DialogPanel, DialogTitle, DialogDescription } from "@/components/Dialog";
// HOOKS
import { useCollectionSnapshot } from "@/src/hooks/useCollectionSnapshot";
// UTILS
import { cn } from "@/src/utils/helpers";
// TYPES
import { ICommentItem, IQueryItem } from "@/src/types/db";
import { QuickViewDialogProps } from "./types";
// STYLES
import styles from './styles.module.css';

export const QuickViewDialog = ({ item, isOpen, toggleDialog }: QuickViewDialogProps) => {
    // STATE && VARIABLES
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { data: realtimeComments } = useCollectionSnapshot(`queries/${item.id}/comments`, { sort: 'asc' });

    // USE EFFECTS
    useEffect(() => {
        if(isOpen) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [isOpen,dialogRef])

    return (
        <Dialog ref={dialogRef}>
            <DialogPanel>
                <DialogHeader className={`${styles.header}`}>
                    <DialogTitle>
                        <Button 
                            className={cn(buttonVariants({ variant: "primary" }))}
                            onClick={() => toggleDialog(false)}
                        >
                            Close
                        </Button>
                    </DialogTitle>
                    <ItemInfo item={item as IQueryItem} />
                </DialogHeader>
                <DialogDescription>
                    <div className={`${styles.commentsContainer}`}>
                        <Comments
                            id={item.id}
                            status={item.status}
                            comments={realtimeComments as ICommentItem[]}
                            canAddComments={true}
                        />
                    </div>
                </DialogDescription>
            </DialogPanel>
        </Dialog>
    )
}