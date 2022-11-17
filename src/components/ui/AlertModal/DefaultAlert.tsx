export default function DefaultAlert() {
    return (
        <>
            <div className="text-3xl font-bold my-6">
                Mise en garde sur les résultats de votre simulation
            </div>
            <div className="mb-6">
                Les montants de votre simulation sont susceptibles de varier à
                la hausse ou à la baisse en fonction des évolutions des autres
                collectivités de la Métropole qui partagent la même enveloppe
                budgetaire.
            </div>
        </>
    );
}
