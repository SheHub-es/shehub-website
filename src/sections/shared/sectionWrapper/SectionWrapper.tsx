import React, { CSSProperties } from "react"

type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
  id?: string
  style?: CSSProperties
}

export const SectionWrapper = ({ children, className = "", id, style }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      style={style}
      className={`w-full py-10 scroll-mt-[100px]`}
    >
      <div className={`max-w-7xl mx-auto px-6 ${className}`}>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
