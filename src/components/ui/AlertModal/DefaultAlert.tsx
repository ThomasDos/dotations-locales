import warningMessages from "constants/warningMessages";

export default function DefaultAlert() {
    return (
        <>
            <div className="text-3xl font-bold my-6">
                {warningMessages.precisionSimulation.default.title}
            </div>
            <div className="mb-6">
                {warningMessages.precisionSimulation.default.text}
            </div>
        </>
    );
}
