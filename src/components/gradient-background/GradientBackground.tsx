import { memo, type PropsWithChildren } from 'react'
import styles from './GradientBackground.module.css'

interface GradientBackgroundProps {

}

const GradientBackground = ({children}: PropsWithChildren<GradientBackgroundProps>) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default memo(GradientBackground);