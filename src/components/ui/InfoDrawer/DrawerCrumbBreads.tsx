import { Links } from "models/entity/entity.interface";

interface DrawerCrumbBreadsProps {
    backLinks?: Links;
    handleChangeInfoDotation(dotationKey: string): void;
    currentDotationLabel: string;
}

export default function DrawerCrumbBreads({
    backLinks,
    handleChangeInfoDotation,
    currentDotationLabel,
}: DrawerCrumbBreadsProps) {
    if (!backLinks?.length) return null;
    return (
        <div className="flex flex-wrap text-grey-mayback text-sm ml-4">
            {backLinks.map(({ linkText, dotationKey }, index) => {
                return (
                    <div className="flex" key={dotationKey}>
                        <div
                            onClick={() =>
                                handleChangeInfoDotation(dotationKey)
                            }
                            className="underline cursor-pointer hover:text-grey-200-850"
                        >
                            {linkText}
                        </div>
                        {backLinks[index + 1] && (
                            <span className="mx-2">&gt;</span>
                        )}
                    </div>
                );
            })}
            <div className="ml-2">
                &gt; <span className="ml-1">{currentDotationLabel}</span>
            </div>
        </div>
    );
}
