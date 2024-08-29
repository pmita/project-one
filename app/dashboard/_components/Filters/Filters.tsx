"use client"

// NEXT
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// REACT
import { useCallback, useState } from "react"
// COMPONENTS
import { Button, buttonVariants } from "@/components/Button";
// UTILS
import { cn } from "@/utils/helpers";
// STYLES
import styles from './styles.module.css';

const baseOptions = ['INITIAL', 'PROGRESSED', 'COMPLETED'];


export const FilterOptions = ({ option }: { option: string }) => {
  // STATE & VARIABLES
  const [currentOption, setCurrentOption] = useState(option || 'ALL');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // EVENTS
  const updateSearchParams = useCallback((filterOption: string) => {
    const params = new URLSearchParams(searchParams);

    baseOptions.includes(filterOption)
      ? params.set('status', filterOption)
      : params.set('status', 'ALL');

      setCurrentOption(filterOption);
    replace(`${pathname}?${params.toString()}`);
  }, [replace, searchParams, pathname]);

  return (
    <div className={`${styles.container}`}>
      {['ALL', ...baseOptions].map((filterOption: string) => (
        <Button
          key={filterOption}
          className={cn(buttonVariants({
            variant: (currentOption === filterOption ? 'primary' : 'primaryOutlined'),
            size: 'sm',
          }))}
          onClick={() => updateSearchParams(filterOption)}
        >
          {filterOption}
        </Button>
      ))}
    </div>
  )
}