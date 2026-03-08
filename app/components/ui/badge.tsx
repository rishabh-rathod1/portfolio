import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'glow'
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const variants = {
      default: "bg-primary/10 text-primary border border-primary/20",
      secondary: "bg-secondary text-secondary-foreground border border-border/50",
      outline: "text-foreground border border-border bg-transparent",
      glow: "bg-primary/10 text-primary border border-primary/30 shadow-sm shadow-primary/10",
    }

    return (
      <div
        ref={ref}
        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 hover:scale-105 ${variants[variant]} ${className}`}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }