export const criteresMap: Record<string, string> = {
    bureauCentralisateur: "Bureau centralisateur",
    chefLieuArrondissement: "Chef-lieu d'arrondissement au 31 décembre 2014",
    chefLieuDepartementDansAgglomeration:
        "Appartenance à une agglomération avec le chef-lieu de département",
    effortFiscal: "Effort fiscal",
    insulaire: "Commune insulaire",
    longueurVoirie: "Longueur de voirie",
    nombreBeneficiairesAidesAuLogement:
        "Nombre de bénéficiaires des aides au logement",

    nombreLogements: "Nombre de logements",
    nombreLogementsSociaux: "Nombre de logements sociaux",
    partPopulationCanton:
        "Pourcentage de la population communale dans le canton d'appartenance en 2014",
    placesCaravanesAvantMajoration: "Places caravanes avant majoration",
    populationDgf: "Population DGF",
    populationDgfAgglomeration:
        "Population DGF des communes de l'agglomération",
    populationDgfMajoree: "Population DGF majorée",
    populationEnfants: "Population 3 à 16 ans",
    populationInsee: "Population INSEE",
    populationQpv: "Population QPV",
    populationZfu: "Population ZFU",
    potentielFinancier: "Potentiel financier",
    potentielFinancierParHabitant: "Potentiel financier par habitant",
    potentielFiscal: "Potentiel fiscal",
    recettesReellesFonctionnement: "Recettes réelles fonctionnement",
    residencesSecondaires: "Résidences secondaires",
    revenuTotal: "Revenu total",
    superficie: "Superficie",
    zoneDeMontagne: "Zone de montagne",
    zrr: "Commune située en ZRR",
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
    dsrFractionBourgCentre: {
        description: "Montant de la commune éligible",
        title: "Part Bourg Centre",
    },
    dsrFractionCible: {
        description: "Non éligible à la Part Cible",
        title: "Part Cible",
    },
    dsrFractionPerequation: {
        description: "Montant de la commune éligible à la Péréquation",
        title: "Part Péréquation",
    },
};
