import { memo, useMemo } from "react"
import styles from './background.module.css'
import { Group, Layer, Stage } from "react-konva";
import StaticStar from "../star/static-star";
import BlackHole from "../blackhole/blackhole";
import Exoplanet from "../planets/exoplanet";
import Textbox from "../text/textbox";

const Background = () => {

    const planetColors = [
        "#FFFFFF", // pure white
        "#FFF8E7", // warm white (slight yellow)
        "#E8F0FF", // cool white (slight blue)
        "#FFF0F0", // rose white (slight pink)
        "#F0FFF4", // mint white (slight green)
    ];

    const planetTextures = [
        // existing
        'radial-gradient(circle at 35% 30%, rgba(0,0,0,0.15) 0%, transparent 8%), radial-gradient(circle at 55% 65%, rgba(0,0,0,0.12) 0%, transparent 6%), radial-gradient(circle at 70% 40%, rgba(0,0,0,0.4) 0%, transparent 10%), radial-gradient(circle at 25% 70%, rgba(0,0,0,0.08) 0%, transparent 5%), radial-gradient(circle at 45% 45%, rgba(255,255,255,0.06) 0%, transparent 7%)',
    
        // rocky/cratered
        'radial-gradient(circle at 60% 25%, rgba(0,0,0,0.3) 0%, transparent 7%), radial-gradient(circle at 30% 55%, rgba(0,0,0,0.2) 0%, transparent 9%), radial-gradient(circle at 75% 70%, rgba(0,0,0,0.15) 0%, transparent 5%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.05) 0%, transparent 6%), radial-gradient(circle at 50% 15%, rgba(0,0,0,0.25) 0%, transparent 8%)',
    
        // smooth with highlights
        'radial-gradient(circle at 20% 40%, rgba(255,255,255,0.1) 0%, transparent 12%), radial-gradient(circle at 65% 30%, rgba(0,0,0,0.12) 0%, transparent 6%), radial-gradient(circle at 50% 75%, rgba(0,0,0,0.18) 0%, transparent 9%), radial-gradient(circle at 80% 55%, rgba(255,255,255,0.04) 0%, transparent 5%), radial-gradient(circle at 35% 60%, rgba(0,0,0,0.08) 0%, transparent 7%)',
    
        // heavily scarred
        'radial-gradient(circle at 45% 20%, rgba(0,0,0,0.35) 0%, transparent 6%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.3) 0%, transparent 8%), radial-gradient(circle at 25% 45%, rgba(0,0,0,0.2) 0%, transparent 11%), radial-gradient(circle at 55% 80%, rgba(0,0,0,0.25) 0%, transparent 5%), radial-gradient(circle at 15% 70%, rgba(0,0,0,0.15) 0%, transparent 9%)',
    
        // icy/reflective
        'radial-gradient(circle at 30% 35%, rgba(255,255,255,0.12) 0%, transparent 10%), radial-gradient(circle at 60% 50%, rgba(255,255,255,0.08) 0%, transparent 7%), radial-gradient(circle at 45% 70%, rgba(0,0,0,0.1) 0%, transparent 6%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.06) 0%, transparent 8%), radial-gradient(circle at 20% 60%, rgba(0,0,0,0.14) 0%, transparent 5%)',
    
        // volcanic/dark patches
        'radial-gradient(circle at 55% 35%, rgba(0,0,0,0.4) 0%, transparent 7%), radial-gradient(circle at 30% 70%, rgba(0,0,0,0.3) 0%, transparent 10%), radial-gradient(circle at 70% 55%, rgba(255,255,255,0.05) 0%, transparent 4%), radial-gradient(circle at 40% 45%, rgba(0,0,0,0.2) 0%, transparent 8%), radial-gradient(circle at 65% 80%, rgba(0,0,0,0.35) 0%, transparent 6%)',
    ];

    const planets = useMemo(() => {

        const items: {x: number, y: number, color: string, size: number, opacity: number}[] = []

        for ( let i = 0; i < 100; i++) {
            const r = Math.random()
            let color = ''

            if (r <= 0.7) color = planetColors[0];
            else if (r <= 0.8) color = planetColors[1];
            else if (r <= 0.9) color = planetColors[2];
            else if (r <= 0.95) color = planetColors[3];
            else color = planetColors[4];

            const x = Math.random() * window.innerWidth
            const y = Math.random() * window.innerHeight

            const size = Math.random() * .1

            items.push({
                x: x,
                y: y,
                color: color,
                size: size,
                opacity: Math.random(),
            })
        }
        return items;
    }, [])


    return (
        <div className={styles.container}>
            <Textbox x={20} y={20}>
                <h3>Jason Swift</h3>
                <p>Currently working as a M365 consultant. Have a passion for creative problem solving and
                    building prototypes. Tech stack is TypeScript, React, React-Native, Firebase, Expo. Have good experience
                    across range of packages including React Flow, React Konva, React Native Vision Camera, 
                    React Native Video and more. I studied Computer Science at Exeter, achieving a 1st, thus confident with any tech stack. 
                    I believe software engineering is incredibly creative in an unconventional sense, instead of
                    brushes, pencils or graphics we can use numbers and logic to create any idea of the mind. My
                    portfolio proves this, where each project was conceptualised, designed and built solely by me
                    in response to a certain problem. Outside of my technical persona, I have an interest in cosmology and occasionally lament that I 
                    did not study it. I'm increasingly interested in certain aspects philosophy that relates to my cosmic intrigue. 
                    I also have a huge interest in start-ups and bringing ideas to life that can add genuine value to people lives.
                    I firmly believe in an increasingly fractured world, it's crucial to advocate and practice tech for good in a way
                    that unites people, harmonises society and benefits humanity and our planet.
                </p>
                {/* <p>I'm a react native developer with who enjoys 
                    conceptualising, designing and building end-to-end applications from ideation to MVP.
                    I'm highly creative, and enjoy using this creativity to bridge the gap between solution concept and 
                    technical implementation.</p> */}
                {/* <p>After a knee injury forced me out of military training at 19, I moved to London to work 
                    as a Sys Admin. From there, I worked in Customer Support for a start-up before becoming a Software Recruitment
                    Consultant. Then COVID happened...
                </p>
                <p>
                    I spent time reflecting in lockdown and decided to pursue a Computer Science degree
                </p> */}
            </Textbox>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Group>
                        {/* stars */}
                        { planets && 
                            planets.map(
                                (item, i) => 
                                <StaticStar 
                                    key={i} 
                                    x={item.x}
                                    y={item.y}
                                    color={item.color}
                                    size={item.size}
                                    opacity={item.opacity}
                                />
                            )
                        }
                    </Group>
                </Layer>
            </Stage>
            <Exoplanet x={window.innerWidth / 8} y={window.innerHeight / 1.3} size={200} texture={planetTextures[0]} color="#BBCEA8" angle={0} rotation="forward" label="Projects"/>
            {/* <Exoplanet x={window.innerWidth / 6} y={window.innerWidth / 2.5} size={80} texture={planetTextures[1]} color="#1E2EDE" angle={0} rotation="forward" label="Portfolio"/> */}
            <Exoplanet x={window.innerWidth / 1.8} y={window.innerHeight / 1.8} size={100} texture={planetTextures[2]} color="#FF9FB2" angle={0} rotation="forward" label="CV"/>
            <Exoplanet x={window.innerWidth / 1.1} y={window.innerHeight / 10} size={40} texture={planetTextures[3]} color="#D64933" angle={0} rotation="forward" label="Contact"/>
            {/* black hole (DOM overlay) */}
            <BlackHole x={window.innerWidth / 1.2} y={window.innerHeight / 1.2} size={100} />
            {/* shooting stars (DOM overlay) */}
            <span className={styles.star1} />
            <span className={styles.star2} />
            <span className={styles.star3} />
            <span className={styles.star4} />
            <span className={styles.star5} />
            <span className={styles.star6} />
            <span className={styles.star7} />
            <span className={styles.star8} />
            <span className={styles.star9} />
            <span className={styles.star10} />
        </div>
    )
}

export default memo(Background);