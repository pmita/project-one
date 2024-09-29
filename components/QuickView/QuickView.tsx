"use client"

import { useState, useCallback } from "react";
// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/Button";
import { QuickViewDialog } from "./QuickViewDialog";
// UTILS
import { cn } from "@/utils/helpers";
// TYPES
import { IQueryItem } from "@/types/db";

export const QuickView = ({ item }: { item: IQueryItem }) => {
    // STATE && VARIABLES
    const [isOpen, setIsOpen]= useState(false);

    // EVENTS
    const toggleDialog = useCallback((option: boolean) => {
        setIsOpen(option)
    }, [setIsOpen])

    return (
        <>
            {isOpen ? <QuickViewDialog item={item} isOpen={isOpen} toggleDialog={toggleDialog} /> : null}
            <Button 
                className={cn(buttonVariants({ variant: "primaryOutlined", size: "sm" }))}
                onClick={() => toggleDialog(true)}
            >
                Quick View
            </Button>
        </>
    )
}