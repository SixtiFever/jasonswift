import { memo, type PropsWithChildren } from "react";
import styles from "./exoplanet.module.css"


interface ExoplanetProps {
    x?: number;
    y?: number;
    size: number;
    color: string;
    angle: number;
    texture: string;
    rotation: 'forward' | 'reverse';
    label?: string;
}

const Exoplanet = ({x = 0, y = 0, size = 100, color = 'black', texture, rotation = 'forward', label}: PropsWithChildren<ExoplanetProps>) => {
    return (
        <div
            className={styles.wrapper}
            style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)', // centers component
            }}>
            <div 
                className={styles.container} 
                style={{
                    backgroundColor: color,
                    height: size,
                    width: size,
                }}>
                <div
                    className={rotation === 'forward' ? styles.textureForward : styles.textureReverse}
                    style={{
                        background: `${texture}, ${color}`,
                        backgroundSize: '200% 100%',
                    }}>
                </div>
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </div>
    )
}

export default memo(Exoplanet);