import type { CSSProperties } from 'react'

export interface Project {
  slug: string
  number: string
  tag: string
  tagStyle?: CSSProperties
  title: string
  description: string
  tech: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'loyalbean',
    number: '01',
    tag: 'Final Year Project',
    title: 'LoyalBean — Digital Cafe Loyalty',
    description:
      'A customer loyalty app for independent cafes, born from repeatedly losing physical loyalty cards. My Exeter final year project — the first time I fused original problem solving with technical implementation.',
    tech: ['React Native', 'TypeScript', 'Firebase'],
  },
  {
    slug: 'tag',
    number: '02',
    tag: 'Mobile',
    title: 'Tag — Video Social Media',
    description:
      'A video-first social media app built from concept to prototype — conceptualised, designed, and built entirely by me.',
    tech: ['React Native', 'TypeScript', 'Firebase'],
  },
  {
    slug: 'pria',
    number: '03',
    tag: 'AI',
    tagStyle: { background: 'var(--coral)', color: 'var(--white)' },
    title: 'Pria — AI Project Management Platform',
    description:
      'An AI-powered project management platform exploring how intelligent tooling can simplify creative workflows.',
    tech: ['React Native', 'TypeScript', 'Firebase'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
