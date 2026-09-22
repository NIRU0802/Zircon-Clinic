import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='w-'])]:h-4 [&_svg:not([class*='h-'])]:w-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white hover:bg-primary-700",
        outline:
          "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost:
          "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        destructive:
          "bg-red-50 text-red-700 hover:bg-red-100",
        link:
          "text-primary-600 underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5",
        xs:
          "h-6 gap-1 rounded-md px-2 text-xs",
        sm:
          "h-7 gap-1 rounded-md px-2.5 text-xs",
        lg:
          "h-10 gap-2 px-4",
        icon:
          "h-8 w-8",
        "icon-xs":
          "h-6 w-6 rounded-md",
        "icon-sm":
          "h-7 w-7 rounded-md",
        "icon-lg":
          "h-10 w-10",
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