import { sectionWrapperStyles as styles } from '@/components/layout/SectionWrapper/styles'
import React from 'react'

type SectionWrapperProps = {
  children: React.ReactNode
}
 
export const SectionWrapper = ({ children }: SectionWrapperProps) => {
   return (
     <div
      className={styles.base}
     >
      {children}
     </div>
   )
 }
 
 export default SectionWrapper