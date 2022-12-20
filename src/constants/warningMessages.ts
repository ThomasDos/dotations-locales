const warningMessages = {
    precisionSimulation: {
        default: {
            title: "Mise en garde sur les résultats de votre simulation",
            text: "Les montants de votre simulation sont susceptibles de varier à la hausse ou à la baisse en fonction des évolutions des autres collectivités de la Métropole, toutes choses étant égales par ailleurs.",
        },
        alert: {
            title: "Incertitudes sur les résultats de votre simulation !",
            firstText: {
                normal: "Notre équipe travaille actuellement sur la précision des résultats de vos",
                bold: "dotations.",
            },
            secondText:
                "Les montants de votre simulation sont susceptibles de varier à la hausse ou à la baisse en fonction des évolutions des autres collectivités de la Métropole qui partagent la même enveloppe budgetaire.",
        },
    },
};

export default warningMessages;
