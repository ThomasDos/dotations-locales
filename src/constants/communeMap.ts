import { Dotation } from "models/commune/commune.interface";

type DotationMap = Omit<Dotation, "annees" | "criteres" | "sousDotations">;

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
    placesCaravanesApresMajoration: "Places caravanes après majoration",
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

export const dotationsMap: Record<string, DotationMap> = {
    dotationForfaitaire: {
        key: "dotationForfaitaire",
        description:
            "Votre dotation forfaitaire est stable par rapport à l’année 2021",
        label: "DF",
        title: "Dotation Forfaitaire (DF)",
        info: "",
        links: [],
    },
    dotationNationalePerequation: {
        key: "dotationNationalePerequation",
        description: "Lorem Ipsum DNP",
        label: "DNP",
        title: "Dotation Nationale de Péréquation (DNP)",
        info: "",
        links: [],
    },
    dotationSolidariteRurale: {
        key: "dotationSolidariteRurale",
        description: "Légère augmentation en 2022 dû à la part Bourg Centre",
        label: "DSR",
        title: "Dotation Solidarité Rurale (DSR)",
        info: "La Dotation de solidarité rurale vise à soutenir certaines communes rurales de moins de 10 000 habitants, pour tenir compte des charges qu’elles supportent pour contribuer au maintien de la vie sociale en milieu rural et de l’insuffisance de leurs ressources fiscales. Elle comprend 3 fractions :",
        links: [
            {
                linkText: "Fraction Bourg-centre",
                dotationKey: "dsrFractionBourgCentre",
            },
            {
                linkText: "Fraction péréquation",
                dotationKey: "dsrFractionPerequation",
            },
            {
                linkText: "Fraction cible",
                dotationKey: "dsrFractionCible",
            },
        ],
    },
    dsuMontant: {
        key: "dsuMontant",
        description: "Dotation pour les communes urbaines",
        label: "DSU",
        title: "Dotation Solidarité Urbaine (DSU)",
        info: "",
        links: [],
    },
    dotationsGeneralesFonctionnement: {
        key: "dotationsGeneralesFonctionnement",
        description: "Evolution de votre montant total de dotations",
        label: "Résumé",
        title: "Dotations Générales de Fonctionnement (DGF)",
        links: [
            {
                linkText: "Dotation forfaitaire (DF)",
                dotationKey: "dotationForfaitaire",
            },
            {
                linkText: "Dotation nationale de péréquation (DNP)",
                dotationKey: "dotationNationalePerequation",
            },
            {
                linkText: "Dotation de solidarité rurale (DSR)",
                dotationKey: "dotationSolidariteRurale",
            },
            {
                linkText: "Dotation de solidarité urbaine (DSU)",
                dotationKey: "dsuMontant",
            },
        ],
        info: `La dotation globale de fonctionnement (DGF), instituée par la loi du 3 janvier 1979, est un prélèvement opéré sur le budget de l'État et distribué aux collectivités locales pour la première fois en 1979.
        <br>Son montant est établi selon un mode de prélèvement et de répartition fixé chaque année par la loi de finances. Elle est versée aux régions depuis 2004. Cette dotation est constituée d'une dotation forfaitaire et d'une dotation de péréquation.`,
    },
    dotationAmenagementCommunesOutreMer: {
        key: "dotation_amenagement_communes_outre_mer",
        description: "Lorem Ipsum DNP",
        label: "DACOM",
        title: "Dotation aménagement communes outre mer (DACOM)",
        info: "",
        links: [],
    },
    dotationEluLocal: {
        key: "dotation_elu_local",
        description: "Lorem Ipsum DNP",
        label: "DEL",
        title: "Dotation élu local (DEL)",
        info: "",
        links: [],
    },
};

export const sousDotationsMap: Record<string, DotationMap> = {
    dsrFractionBourgCentre: {
        key: "dsrFractionBourgCentre",
        description: "Montant de la commune éligible",
        label: "",
        title: "Part Bourg Centre",
        info: "La DSR fraction bourg centre est à destination des communes subissant des charges liées à leur rôle structurant par la qualité et le nombre d’équipements qu’elles regroupent et la capacité d’attraction qui en découle. Elle est attribuée aux communes de moins de 10 000 habitants, chef-lieu de canton, bureau centralisateur ou comprenant au minimum 15 % de la population du canton",
    },
    dsrFractionCible: {
        key: "dsrFractionCible",
        description: "Non éligible à la Part Cible",
        label: "",
        title: "Part Cible",
        info: "La DSR fraction cible est attribuée aux 10 000 communes les plus défavorisées du territoire national en fonction de deux indices financiers : le revenu par habitant et le potentiel financier par habitant.",
    },
    dsrFractionPerequation: {
        key: "dsrFractionPerequation",
        description: "Montant de la commune éligible à la Péréquation",
        label: "",
        title: "Part Péréquation",
        info: "La DSR fraction péréquation est attribuée aux communes de moins de 10 000 habitants dont le potentiel financier par habitant est inférieur au double du potentiel financier moyen de la strate démographique.",
    },
};
