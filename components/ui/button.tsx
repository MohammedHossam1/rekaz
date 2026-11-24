import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        gold: "rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        goldOutline:
          "rounded-full border-foreground/25 bg-transparent text-foreground hover:border-primary hover:bg-primary/10",
        outline:
          "border-border bg-background hover:bg-surface-subtle hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-muted",
        ghost:
          "hover:bg-surface-subtle hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-brand-dark underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 gap-2 px-4",
        xs: "h-7 gap-1 px-2.5 text-xs",
        sm: "h-9 gap-1.5 px-3 text-sm",
        lg: "h-12 gap-2 px-6 text-base",
        pill: "h-12 gap-3 rounded-full ps-6 pe-1.5 text-base font-display font-bold",
        xl: "h-[52px] gap-2 rounded-full px-8 text-base font-display font-bold",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
