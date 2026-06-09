import type { EvolutionContributor, EvolutionEraSlug } from '@/data/evolution/types'

/**
 * Contributors per site era. `role` must include es, en, and ca to match the UI language.
 */

const monicaEstebanPonce: EvolutionContributor = {
  firstName: 'Mónica',
  lastName: 'Esteban Ponce',
  role: {
    es: 'Product Manager · Product marketing',
    en: 'Product Manager · Product marketing',
    ca: 'Product Manager · Product marketing',
  },
  roleGroup: 'productManager',
  linkedinUrl: 'https://www.linkedin.com/in/monicaestebanponce/',
}

const annaSarriaRole = {
  es: 'Mentora de liderazgo de producto',
  en: 'Product leadership mentor',
  ca: 'Mentora de lideratge de producte',
} as const

const annaSarriaTeaser: EvolutionContributor = {
  firstName: 'Anna',
  lastName: 'Sarria',
  role: annaSarriaRole,
  roleGroup: 'cohortMentor',
  linkedinUrl: 'https://www.linkedin.com/in/anna-sarria/',
}

const annaSarriaIntermediate: EvolutionContributor = {
  firstName: 'Anna',
  lastName: 'Sarria',
  role: annaSarriaRole,
  roleGroup: 'productManager',
  linkedinUrl: 'https://www.linkedin.com/in/anna-sarria/',
}

const jessicaArroyoDev: EvolutionContributor = {
  firstName: 'Jessica',
  lastName: 'Arroyo Lebrón',
  role: {
    es: 'Tech lead y desarrolladora front-end',
    en: 'Tech lead & front-end developer',
    ca: 'Tech lead i desenvolupadora front-end',
  },
  roleGroup: 'frontend',
  linkedinUrl: 'https://www.linkedin.com/in/jessica-arroyo-lebron/',
  githubUrl: 'https://github.com/jess-ar',
}

/** Teaser page team (first online presence). */
const teaser: EvolutionContributor[] = [
  monicaEstebanPonce,
  {
    firstName: 'Ludmila',
    lastName: 'Muiña',
    role: {
      es: 'Product Manager',
      en: 'Product Manager',
      ca: 'Product Manager',
    },
    roleGroup: 'productManager',
    linkedinUrl: 'https://www.linkedin.com/in/ludmila-muina/',
  },
  jessicaArroyoDev,
  {
    firstName: 'Khrystsina',
    lastName: 'Kozak',
    role: {
      es: 'Desarrolladora front-end',
      en: 'Front-end developer',
      ca: 'Desenvolupadora front-end',
    },
    roleGroup: 'frontend',
    linkedinUrl: 'https://www.linkedin.com/in/khrystsinakozak/',
    githubUrl: 'https://github.com/Tinunsky',
  },
  {
    firstName: 'Silvia',
    lastName: 'Anguera Roldán',
    role: {
      es: 'Diseño UX/UI',
      en: 'UX/UI design',
      ca: 'Disseny UX/UI',
    },
    roleGroup: 'design',
    linkedinUrl: 'https://www.linkedin.com/in/silvia-anguera-roldán-17320220/',
  },
  {
    firstName: 'Triana',
    lastName: 'Gracia',
    role: {
      es: 'Diseño UX/UI',
      en: 'UX/UI design',
      ca: 'Disseny UX/UI',
    },
    roleGroup: 'design',
    linkedinUrl: 'https://www.linkedin.com/in/triana-gracia/',
  },
  annaSarriaTeaser,
  {
    firstName: 'Solange',
    lastName: 'Molina Urrutia',
    role: {
      es: 'Mentora de experiencia de usuario (UX)',
      en: 'User experience (UX) mentor',
      ca: "Mentora d'experiència d'usuari (UX)",
    },
    roleGroup: 'cohortMentor',
    linkedinUrl: 'https://www.linkedin.com/in/smolina/',
  },
]

/** Placeholder copy on current-site cards until real data is filled in. */
const placeholderContributorRole = {
  es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
  en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
  ca: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
} as const

/** Express web era: minimal team — product management (Anna, Mónica) and development (Jessica) only. */
const intermediate: EvolutionContributor[] = [
  annaSarriaIntermediate,
  monicaEstebanPonce,
  jessicaArroyoDev,
]

/** Current site: same role groups as teaser (product, development, design, mentors); data TBD. */
const current: EvolutionContributor[] = [
  {
    firstName: 'Lorem',
    lastName: 'Ipsum Cuatro',
    role: placeholderContributorRole,
    roleGroup: 'productManager',
  },
  {
    firstName: 'Lorem',
    lastName: 'Ipsum Cinco',
    role: placeholderContributorRole,
    roleGroup: 'frontend',
  },
  {
    firstName: 'Lorem',
    lastName: 'Ipsum Seis',
    role: placeholderContributorRole,
    roleGroup: 'design',
  },
  {
    firstName: 'Lorem',
    lastName: 'Ipsum Siete',
    role: placeholderContributorRole,
    roleGroup: 'cohortMentor',
  },
]

export const evolutionContributorsByEra: Record<EvolutionEraSlug, EvolutionContributor[]> = {
  teaser,
  intermediate,
  current,
}

export function getContributorsForEra(era: EvolutionEraSlug): EvolutionContributor[] {
  return evolutionContributorsByEra[era]
}
