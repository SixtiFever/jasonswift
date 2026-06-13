import { ReactNativeLogo } from './logos/react-native/ReactNativeLogo'
import cursorLogo from '../assets/logos/cursor.svg'
import firebaseLogo from '../assets/logos/firebase.png'
import sketchLogo from '../assets/logos/sketch.png'
import typescriptLogo from '../assets/logos/typescript.png'
import vscodeLogo from '../assets/logos/vscode.png'

const SKILLS = [
  { name: 'React Native', Icon: ReactNativeIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'Cursor IDE', Icon: CursorIcon },
  { name: 'VSC', Icon: VSCodeIcon },
  { name: 'Firebase', Icon: FirebaseIcon },
  { name: 'Sketch App', Icon: SketchIcon },
] as const

const ICON_SIZE = 30

function SkillLogoImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="hero-skill-logo"
      aria-hidden="true"
    />
  )
}

function ReactNativeIcon() {
  return <ReactNativeLogo height={String(ICON_SIZE)} width={String(ICON_SIZE)} />
}

function FirebaseIcon() {
  return <SkillLogoImage src={firebaseLogo} />
}

function TypeScriptIcon() {
  return <SkillLogoImage src={typescriptLogo} />
}

function CursorIcon() {
  return <SkillLogoImage src={cursorLogo} />
}

function VSCodeIcon() {
  return <SkillLogoImage src={vscodeLogo} />
}

function SketchIcon() {
  return <SkillLogoImage src={sketchLogo} />
}

export default function HeroSkills() {
  return (
    <aside className="hero-skills" aria-label="Core skills">
      <p className="hero-skills-label">Skills & Stack</p>
      <ul className="hero-skills-list">
        {SKILLS.map(({ name, Icon }) => (
          <li key={name} className="hero-skill-item">
            <span className="hero-skill-icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="hero-skill-name">{name}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
