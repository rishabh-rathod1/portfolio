import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'glass'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    /* 
      Video aesthetics: 
      - default is vibrant orange pill
      - outline is white text with white/20 border pill
      - glass is transparent with blur
    */
    const baseClasses =
      "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer"

    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-[#ff8533] shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5",
      outline: "border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5",
      ghost: "hover:bg-white/10 hover:text-white text-white/80",
      glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:-translate-y-0.5 shadow-xl",
    }

    const sizes = {
      default: "h-12 px-6 py-2.5 text-sm",
      sm: "h-10 px-5 text-sm",
      lg: "h-14 px-8 text-base",
      icon: "h-12 w-12",
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    if (asChild) {
      const child = React.Children.only(props.children) as React.ReactElement<Record<string, unknown>>

      return React.cloneElement(child, {
        className: `${classes} ${child.props.className || ''}`,
        ref,
        ...props,
        children: child.props.children,
      })
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
