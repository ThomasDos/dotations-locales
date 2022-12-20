import warningMessages from "constants/warningMessages";

export default function PrecisionAlert() {
    return (
        <>
            <div className="text-3xl font-bold my-6">
                {warningMessages.precisionSimulation.alert.title}
            </div>
            <div className="mb-6">
                <p>
                    {warningMessages.precisionSimulation.alert.firstText.normal}{" "}
                    <b>
                        {
                            warningMessages.precisionSimulation.alert.firstText
                                .bold
                        }
                    </b>
                </p>
                <p>{warningMessages.precisionSimulation.alert.secondText}</p>
            </div>
        </>
    );
}
