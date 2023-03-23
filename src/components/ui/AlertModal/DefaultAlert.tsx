import warningMessages from "constants/warningMessages";

export default function DefaultAlert() {
    return (
        <>
            <div className="text-3xl font-bold my-6">
                Simulateur en phase expérimentale
            </div>
            <div className="font-bold mb-6">
                Vous pouvez modifier les critères qui définissent votre
                collectivité et observer l’impact sur les montants de vos
                dotations.
            </div>
            <div className="mb-6">
                {warningMessages.precisionSimulation.default.text}
            </div>
        </>
    );
}
