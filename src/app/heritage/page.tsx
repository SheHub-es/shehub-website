import HeritagePageContent from '@/sections/heritage/HeritagePageContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recorrido web',
  description:
    'Cómo ha evolucionado la presencia online de SheHub: teaser inicial, sitio intermedio y la web actual con design system.',
}

export default function HeritagePage() {
  return <HeritagePageContent />
}
