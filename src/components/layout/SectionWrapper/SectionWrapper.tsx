import React from 'react'

type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
}
 
export const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
   return (
     <div
      className={`'w-full py-10 px-24 w-[1440px] mx-auto' ${className ?? ''}`}
     >
      {children}
     </div>
   )
 }
 
 export default SectionWrapper