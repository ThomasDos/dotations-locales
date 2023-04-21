import { Badge } from "@dataesr/react-dsfr";
import { Button } from "components/ui";
import type { ComponentProps } from "react";

interface PlaceHolderCardProps {
    badgeText: string;
    badgeType?: ComponentProps<typeof Badge>["type"];
    bodyText: string;
    buttonText?: string;
    buttonOnClick?: () => void;
    buttonIcon?: string;
}

const PlaceHolderCard = ({
    badgeText,
    badgeType,
    bodyText,
    buttonText,
    buttonOnClick,
    buttonIcon,
}: PlaceHolderCardProps) => {
    return (
        <div className="flex flex-col items-center mb-4 md:mb-16">
            <div className="my-4">
                <Badge text={badgeText} type={badgeType} hasIcon />
            </div>
            <div className="text-center">{bodyText}</div>

            {buttonText && (
                <Button
                    text={buttonText}
                    icon={buttonIcon}
                    onClick={buttonOnClick}
                />
            )}
        </div>
    );
};

export default PlaceHolderCard;
