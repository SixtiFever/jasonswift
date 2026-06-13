import { type ComponentType } from 'react'
import { Firebase, React as ReactAsset, ReactNative } from './logos'

const items: ComponentType[] = [
  ReactAsset,
  Firebase,
  ReactNative,
]

const TechStack = () => {
  return (
    <div className='stack-container'>
      {items.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  )
}

export default TechStack
