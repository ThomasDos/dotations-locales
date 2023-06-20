import HorizontalBar from "./HorizontalBar";

interface HorizontalBarOnBarBackgroundProps {
    widthValueBar: number;
    widthEmptyBar: number;
}

function HorizontalBarOnBarBackground({
    widthValueBar,
    widthEmptyBar,
}: HorizontalBarOnBarBackgroundProps) {
    return (
        <div className="flex justify-center">
            <HorizontalBar
                width={widthValueBar}
                height={8}
                barPadding={0}
                barColor="#6969f4"
                radius={200}
            />
            <HorizontalBar
                width={widthEmptyBar}
                height={8}
                barPadding={0}
                barColor="#e3e3fd"
                radius={2}
            />
        </div>
    );
}

export default HorizontalBarOnBarBackground;
