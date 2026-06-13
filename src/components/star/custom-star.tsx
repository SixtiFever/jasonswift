import { Shape } from 'react-konva';

interface CustomStarProps {
    x?: number;
    y?: number;
    longRadius?: number;
    shortRadius?: number;
    innerRadius?: number;
}

const CustomStar = ({
    x = 100,
    y = 100,
    longRadius = 6,
    shortRadius = 2,
    innerRadius = 2,
}: CustomStarProps) => {
    return (
        <Shape
            x={x}
            y={y}
            sceneFunc={(context, shape) => {
                context.beginPath();

                const points = 8;
                for (let i = 0; i < points; i++) {
                    const angle = (i * Math.PI * 2) / points - Math.PI / 2;
                    const midAngle = angle + Math.PI / points;

                    // Cardinal points (0°, 90°, 180°, 270°) get longRadius
                    // Diagonal points (45°, 135°, 225°, 315°) get shortRadius
                    const outerR = i % 2 === 0 ? longRadius : shortRadius;

                    const outerX = Math.cos(angle) * outerR;
                    const outerY = Math.sin(angle) * outerR;
                    const innerX = Math.cos(midAngle) * innerRadius;
                    const innerY = Math.sin(midAngle) * innerRadius;

                    if (i === 0) {
                        context.moveTo(outerX, outerY);
                    } else {
                        context.lineTo(outerX, outerY);
                    }
                    context.lineTo(innerX, innerY);
                }

                context.closePath();
                context.fillStrokeShape(shape);
            }}
            fill="rgb(255, 255, 255)"
            stroke="rgb(253, 234, 125)"
            strokeWidth={1}
            shadowColor="rgb(255, 202, 12)"
            shadowBlur={8}
            shadowOpacity={1}
            shadowEnabled={true}
        />
    );
};

export default CustomStar;