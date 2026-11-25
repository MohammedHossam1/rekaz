"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface FormDropdownOption {
  value: string;
  label: string;
}

interface FormDropdownProps {
  id?: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: readonly FormDropdownOption[];
  invalid?: boolean;
  className?: string;
}

export function FormDropdown({
  id,
  value,
  onValueChange,
  placeholder,
  options,
  invalid,
  className,
}: FormDropdownProps) {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        id={id}
        type="button"
        aria-invalid={invalid || undefined}
        className={cn(
          "flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-[12px] border-0 bg-card px-3.5 text-start text-sm text-foreground shadow-none outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 aria-invalid:ring-2 aria-invalid:ring-destructive/40 sm:h-[52px] sm:px-4 sm:text-base",
          className
        )}
      >
        <span className={cn("truncate", !selectedOption && "text-foreground/45")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-150 [[data-popup-open]_&]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={6}
        className="rounded-[12px] border border-border/60 bg-popover p-1.5 shadow-lg"
      >
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {options.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              value={opt.value}
              className="cursor-pointer rounded-lg py-2.5 text-sm font-medium"
            >
              {opt.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
