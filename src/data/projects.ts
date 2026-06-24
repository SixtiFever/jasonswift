import type { CSSProperties } from 'react'
import loyalbeanScreenshot1 from '../assets/loyalbean/1.png'
import loyalbeanScreenshot2 from '../assets/loyalbean/2.png'
import loyalbeanScreenshot3 from '../assets/loyalbean/3.png'
import loyalbeanScreenshot4 from '../assets/loyalbean/4.png'
import loyalbeanScreenshot5 from '../assets/loyalbean/5.png'
import loyalbeanScreenshot6 from '../assets/loyalbean/6.png'
import loyalbeanScreenshot7 from '../assets/loyalbean/7.png'
import loyalbeanScreenshot8 from '../assets/loyalbean/8.png'
import tagScreenshot1 from '../assets/tag/tag1.png'
import tagScreenshot2 from '../assets/tag/tag2.png'
import tagScreenshot3 from '../assets/tag/31.png'
import tagScreenshot4 from '../assets/tag/32.png'
import tagScreenshot5 from '../assets/tag/33.png'
import qwibblScreenshot1 from '../assets/qwibbl/1.png'
import qwibblScreenshot2 from '../assets/qwibbl/2.png'
import qwibblScreenshot3 from '../assets/qwibbl/3.png'
import qwibblScreenshot4 from '../assets/qwibbl/4.png'
import qwibblScreenshot5 from '../assets/qwibbl/5.png'
import qwibblScreenshot6 from '../assets/qwibbl/6.png'
import priaDemoVideo from '../assets/pria/1.mov'
import priaScreenshot2 from '../assets/pria/2.png'
import priaScreenshot3 from '../assets/pria/3.png'
import priaScreenshot4 from '../assets/pria/4.png'
import priaScreenshot5 from '../assets/pria/5.png'
import priaScreenshot6 from '../assets/pria/6.png'

export interface Project {
  slug: string
  tabLabel: string
  number: string
  tag: string
  tagStyle?: CSSProperties
  title: string
  description: string
  problem: string
  solution: string
  outcome: string
  tech: string[]
  /** Image URLs — public paths or Vite-imported assets */
  screenshots?: string[]
  /** Mobile portrait carousel for apps; desktop widescreen for web projects */
  mediaLayout?: 'mobile' | 'desktop'
}

export const PROJECTS: Project[] = [
  {
    slug: 'pria',
    tabLabel: 'Pria',
    number: '01',
    tag: 'AI Platform',
    tagStyle: { background: 'var(--coral)', color: 'var(--white)' },
    mediaLayout: 'desktop',
    title: 'Pria — AI Project Management Platform',
    description:
      'An AI-powered project management platform for creative workflows.',
    problem:
      'Translating work statements to project plans in consulting is a manual, slow process. Project task tracking is also unintuitive, using boards, lists and excel.',
    solution:
      'Built Pria, a project management platform that uses an AI-pipeline to ingest and process work statements using Google Document Intelligence, generate tasks based on the Doc AI output using Gemini, and render phases, objectives and tasks as a clean node-based project tree. Making it quicker, easier and more intuitive for teams to go from statement to implementing',
    outcome:
      'Produced a working prototype that I demoed to development leads at FSP. It received some traction but ultimately wasn\'t pursued.',
    tech: [
      'React',
      'TypeScript',
      'Python',
      'Firebase (auth, storage, firestore)',
      'Document Intelligence',
      'Gemini Spark',
      'OpenGraph',
      'VSC',
      'Cursor',
    ],
    screenshots: [
      priaScreenshot2,
      priaDemoVideo,
      priaScreenshot3,
      priaScreenshot4,
      priaScreenshot5,
      priaScreenshot6,
    ],
  },
  {
    slug: 'tag',
    tabLabel: 'Tag',
    number: '02',
    tag: 'Mobile',
    title: 'Tag — Video Political Debates',
    description:
      'A video conversation app for small, good-faith political debates on specific topics. Built mainly for fun and upskilling.',
    problem:
      'Political discourse online is often toxic, polarised, and bad-faith — making it hard to have open, collaborative discussion on the issues that matter.',
    solution:
      'Built Tag, a video conversation app where users join small debates on specific topics — designed to encourage more collaborative, open, and good-faith discussion.',
    outcome:
      'Build an MVP and launched for internal testing on TestFlight and Google Play Console. Received positive feedack on concept and design.',
    tech: [
      'React Native',
      'TypeScript',
      'Cloudflare Stream',
      'Firebase (auth, storage, firestore, functions)',
      'Cursor IDE',
      'Expo',
    ],
    screenshots: [
      tagScreenshot1,
      tagScreenshot2,
      tagScreenshot3,
      tagScreenshot4,
      tagScreenshot5,
    ],
  },
  {
    slug: 'loyalbean',
    tabLabel: 'Loyal Bean',
    number: '03',
    tag: 'Final Year Project',
    title: 'LoyalBean — Digital Cafe Loyalty',
    description:
      'A loyalty app for independent cafes, conceptualised, designed and built for my Computer Science final year project.',
    problem:
      'Physical loyalty cards are easy to lose, forget, and provides a generic loyalty for all customers, despite differing preferences.',
    solution:
      'Designed and built LoyalBean, a mobile loyalty app that digitises stamp cards, offers personalised rewards, tracks loyalty campaigns, and helps cafes create loyal communities.',
    outcome:
      'Achieved grade of 86%, helping me graduate with 1st Class Honours. This was my first end-to-end project from original problem to working prototype. It confirmed that combining creative problem solving with technical build is what I want to do.',
    tech: [
      'React Native',
      'TypeScript',
      'Firebase (auth, storage, firestore)',
      'VSC',
      'Expo',
    ],
    screenshots: [
      loyalbeanScreenshot1,
      loyalbeanScreenshot2,
      loyalbeanScreenshot3,
      loyalbeanScreenshot4,
      loyalbeanScreenshot5,
      loyalbeanScreenshot6,
      loyalbeanScreenshot7,
      loyalbeanScreenshot8],
  },
  {
    slug: 'qwibbl',
    tabLabel: 'Qwibbl',
    number: '04',
    tag: 'Concept Design',
    title: 'Qwibbl — Second-Hand Trading',
    description:
      'A concept for trading second-hand items through flexible, wallet-friendly bidding.',
    problem:
      'Most people accumulate unwanted items that still have value to someone else — but traditional second-hand marketplaces often rely on fixed prices and rigid listings, making trades less flexible and less wallet-friendly.',
    solution:
      'Designed Qwibbl around the idea that one person\'s junk is another\'s treasure — a second-hand trading platform with a flexi-bid system that lets users make flexible offers on items instead of being locked into fixed listing prices. Concept design only, created in Sketch.',
    outcome:
      'Delivered a complete wireframe, logo and concept design that explored how flexible bidding could make second-hand trading more approachable, negotiable, and affordable for both buyers and sellers.',
    tech: ['Sketch App'],
    screenshots: [
      qwibblScreenshot1,
      qwibblScreenshot2,
      qwibblScreenshot3,
      qwibblScreenshot4,
      qwibblScreenshot5,
      qwibblScreenshot6,
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
