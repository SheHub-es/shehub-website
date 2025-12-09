import React, { CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  id?: string
  style?: CSSProperties
  innerClassName?: string
}

const SectionWrapper = ({
  children,
  id,
  style,
  innerClassName,
  ...props
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      style={style}
      {...props}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-6 md:px-4",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper