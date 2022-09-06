import { IconVectorDown, IconVectorUp } from "components/ui";

interface TagDataProps {
    percentage: number;
    valeur?: string;
}

const TagData = ({ percentage, valeur }: TagDataProps) => {
    const percentageIsPositive = percentage >= 0;

    return (
        <div className="text-sm flex">
            {percentageIsPositive ? <IconVectorUp /> : <IconVectorDown />}
            <span className="ml-1 font-bold">{valeur}</span>
        </div>
    );
};

export default TagData;
