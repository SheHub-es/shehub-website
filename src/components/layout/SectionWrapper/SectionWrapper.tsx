import { sectionWrapperStyles as styles } from '@/components/layout/SectionWrapper/styles'
import React from 'react'

type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
}
 
export const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
   return (
     <div
      className={`${styles.base} ${className ?? ''}`}
     >
      {children}
     </div>
   )
 }
 
 export default SectionWrapper