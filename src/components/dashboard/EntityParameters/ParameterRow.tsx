interface EntityRowProps {
    text: string;
    data: string;
}

const ParameterRow = ({ text, data }: EntityRowProps) => {
    return (
        <>
            <hr />
            <div className="flex justify-between my-3 text-sm">
                <span>{text}</span>
                <span className="font-bold">{data}</span>
            </div>
        </>
    );
};

export default ParameterRow;
