import { memo, type PropsWithChildren } from 'react'
import styles from './textbox.module.css'

interface TextboxProps {
    x?: number;
    y?: number;
}

const Textbox = ({ x = 0, y = 0, children }: PropsWithChildren<TextboxProps>) => {
    return (
        <div
            className={styles.container}
            style={{
                left: x,
                top: y,
            }}>
            <div className={styles.textbox}>
                {children}
            </div>
        </div>
    )
}

export default memo(Textbox);