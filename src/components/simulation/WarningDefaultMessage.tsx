import warningMessages from "constants/warningMessages.json";

export default function WarningDefaultMessage() {
    return (
        <>
            <div className="text-error-425 font-bold mb-1">
                {warningMessages.precisionSimulation.default.title}
            </div>
            <div className="text-sm">
                {warningMessages.precisionSimulation.default.text}
            </div>
        </>
    );
}
