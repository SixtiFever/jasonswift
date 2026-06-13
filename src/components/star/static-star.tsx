import Konva from "konva";
import { useRef } from "react";
import { Circle } from "react-konva"

interface StaticStarProps {
    x: number;
    y: number;
    size: number;
    color: string;
    opacity: number;
}

const StaticStar: React.FC<StaticStarProps> = ({x = 40, y = 40, size = 1, color = "#FF7F11", opacity = 1}) => {

    const circleRef = useRef<Konva.Circle>(null);

    return (
        <Circle
            ref={circleRef}
            x={x}
            y={y}
            radius={size}
            fill={color}
            stroke={color}
            shadowColor={color}
            shadowBlur={5}
            shadowOpacity={0.8}
            shadowEnabled={true}
            opacity={opacity}
        />
    )
}

export default StaticStar;