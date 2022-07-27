export const criteresMap: Record<string, string> = {
    longueurVoirie: "Longueur Voirie",
    placesCaravanesAvantMajoration: "Places caravanes avant majoration",
    populationDgf: "Population DGF",
    populationEnfants: "Population enfants",
    potentielFinancierParHabitant: "Potentiel financier par habitant",
    residencesSecondaires: "Résidences secondaires",
    superficie: "Superficie",
    zoneDeMontagne: "Zone de montagne",
};

export const dotationsMap: Record<
    string,
    { description: string; title: string }
> = {
    dotationForfaitaire: {
        description:
            "Votre dotation forfaitaire est stable par rapport à l’année 2021",
        title: "Dotations Forfaitaire (DF)",
    },
    dotationNationalePerequation: {
        description: "Lorem Ipsum DNP",
        title: "Dotations Nationale de Péréquation (DNP)",
    },
    dotationSolidariteRurale: {
        description: "Légère augmentation en 2022 dû à la part Bourg Centre",
        title: "Dotations Solidarité Rurale (DSR)",
    },
    dsuMontant: {
        description: "Dotation pour les communes urbaines",
        title: "Dotations Solidarité Urbaine (DSU)",
    },
};

export const sousDotationsMap: Record<
    string,
    { description: string; title: string }
> = {
    dsrFractionBourgCentre: { description: "", title: "Part Bourg Centre" },
    dsrFractionCible: { description: "", title: "Part Cible" },
    dsrFractionPerequation: { description: "", title: "Part Péréquation" },
};
