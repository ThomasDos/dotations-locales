import { Criteres } from "models/entity/entity.interface";

const criteresMocked: Criteres = {
    populationDgf: {
        annees: [
            {
                "2022": {
                    valeur: "112712",
                    unite: null,
                },
            },
            {
                "2021": {
                    valeur: "111261",
                    unite: null,
                },
            },
            {
                "2020": {
                    valeur: "111100",
                    unite: null,
                },
            },
        ],
        description: "Population DGF",
    },
    populationInsee: {
        annees: [
            {
                "2022": {
                    valeur: "111810",
                    unite: null,
                },
            },
            {
                "2021": {
                    valeur: "110465",
                    unite: null,
                },
            },
            {
                "2020": {
                    valeur: "110474",
                    unite: null,
                },
            },
        ],
        description: "Population INSEE",
    },
    populationEnfants: {
        annees: [
            {
                "2022": {
                    valeur: "19468",
                    unite: null,
                },
            },
            {
                "2021": {
                    valeur: "19697",
                    unite: null,
                },
            },
            {
                "2020": {
                    valeur: "19472",
                    unite: null,
                },
            },
        ],
        description: "Population 3 à 16 ans",
    },
    revenuTotal: {
        annees: [
            {
                "2022": {
                    valeur: "1736450722.0",
                    unite: "€",
                },
            },
            {
                "2021": {
                    valeur: "1680900482",
                    unite: "€",
                },
            },
            {
                "2020": {
                    valeur: "1596092059",
                    unite: "€",
                },
            },
        ],
        description: "Revenu total",
    },
    potentielFinancierParHabitant: {
        annees: [
            {
                "2022": {
                    valeur: "1299.20744",
                    unite: "€",
                },
            },
            {
                "2021": {
                    valeur: "1305.179704",
                    unite: "€",
                },
            },
            {
                "2020": {
                    valeur: "1285.151791",
                    unite: "€",
                },
            },
        ],
        description: "Potentiel financier par habitant",
    },
    superficie: {
        annees: [
            {
                "2022": {
                    valeur: "892.0",
                    unite: "ha",
                },
            },
            {
                "2021": {
                    valeur: "892",
                    unite: "ha",
                },
            },
            {
                "2020": {
                    valeur: "892",
                    unite: "ha",
                },
            },
        ],
        description: "Superficie",
    },
    longueurVoirie: {
        annees: [
            {
                "2022": {
                    valeur: "108801.0",
                    unite: "m",
                },
            },
            {
                "2021": {
                    valeur: "108801",
                    unite: "m",
                },
            },
            {
                "2020": {
                    valeur: "108801",
                    unite: "m",
                },
            },
        ],
        description: "Longueur de voirie",
    },
};

export default criteresMocked;
