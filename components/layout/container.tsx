import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" && "max-w-[1240px] xl:px-0",
        size === "narrow" && "max-w-[960px]",
        size === "wide" && "max-w-[1380px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
