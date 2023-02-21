interface ParameterCardTitleProps {
    criteresLength: number;
}

const ParameterCardTitle = ({ criteresLength }: ParameterCardTitleProps) => {
    if (!criteresLength) return null;

    const hasMoreThanOneCritere = criteresLength > 1;

    const textTitle = `${criteresLength} critère${
        hasMoreThanOneCritere ? "s" : ""
    } ${hasMoreThanOneCritere ? "principaux" : "principal"}`;
    return (
        <div className="bg-blue-france-950 py-4 px-8 text-sm">{textTitle}</div>
    );
};

export default ParameterCardTitle;
