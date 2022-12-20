import warningMessages from "constants/warningMessages";

export default function WarningPrecisionAlert() {
    return (
        <>
            <div className="text-error-425 font-bold mb-1">
                {warningMessages.precisionSimulation.alert.title}
            </div>
            <div className="text-sm">
                <div className="my-3">
                    {warningMessages.precisionSimulation.alert.firstText.normal}{" "}
                    <b>
                        {
                            warningMessages.precisionSimulation.alert.firstText
                                .bold
                        }
                    </b>
                </div>
                <div>
                    {warningMessages.precisionSimulation.alert.secondText}
                </div>
            </div>
        </>
    );
}
