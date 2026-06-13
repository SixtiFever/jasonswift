import { memo, type PropsWithChildren } from "react";
import styles from "./blackhole.module.css";

interface BlackHoleProps {
    x?: number;
    y?: number;
    size?: number;
}

const BlackHole = ({
    x = 400,
    y = 300,
    size = 120,
    children
}: PropsWithChildren<BlackHoleProps>) => {
    const outerSize = size * 2.2;
    const diskSize = size * 1.8;
    const innerSize = size * 1.5;
    const sphereSize = size * 1.3;
    const coreSize = size;

    return (
        <div
            className={styles.blackhole}
            onClick={() => {}}
            style={{
                left: x,
                top: y,
                width: outerSize,
                height: outerSize,
                transform: "translate(-50%, -50%)",
            }}
        >
            {/* outermost accretion glow */}
            <div
                className={styles.accretionOuter}
                style={{ width: outerSize, height: outerSize }}
            />

            {/* main accretion disk */}
            <div
                className={styles.accretionDisk}
                style={{ width: diskSize, height: diskSize }}
            />

            {/* inner hot ring */}
            <div
                className={styles.accretionInner}
                style={{ width: innerSize, height: innerSize }}
            />

            {/* photon sphere glow */}
            <div
                className={styles.photonSphere}
                style={{ width: sphereSize, height: sphereSize }}
            />

            {/* event horizon — pitch black core */}
            <div
                className={styles.eventHorizon}
                style={{ width: coreSize, height: coreSize }}
            />
            {children}
        </div>
    );
};

export default memo(BlackHole);
