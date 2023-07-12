interface HorizontalBarProps {
    barPadding: number;
    barColor: string;
    width: number;
    height: number;
    radius?: number;
}

function HorizontalBar({
    barPadding,
    barColor,
    width,
    height,
}: HorizontalBarProps) {
    return (
        <svg width={width} height={height}>
            <rect
                y={barPadding * 0.5}
                width={width}
                height={30 - barPadding}
                fill={barColor}
            />
        </svg>
    );
}

export default HorizontalBar;
