import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-blue-600 text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0": variant === "default",
            "bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-md active:scale-[0.98]": variant === "destructive",
            "border-2 border-slate-200 bg-transparent hover:bg-slate-50 hover:border-slate-300 text-slate-900 active:scale-[0.98]": variant === "outline",
            "bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-[0.98]": variant === "secondary",
            "hover:bg-slate-100/80 text-slate-700 hover:text-slate-900 active:scale-[0.98]": variant === "ghost",
            "text-blue-600 underline-offset-4 hover:underline active:scale-[0.98]": variant === "link",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-12 rounded-xl px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
