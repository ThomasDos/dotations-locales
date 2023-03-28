import { Dotation } from "models/entity/entity.interface";

type DotationMap = Omit<Dotation, "annees" | "criteres" | "sousDotations">;

export const criteresMap: Record<string, string> = {
    beneficiairesApl: "Nombre de bénéficiaires des APL",
    beneficiairesRsa: "Nombre de foyers bénéficiaires du RSA",
    bureauCentralisateur: "Bureau centralisateur",
    chefLieuArrondissement: "Chef-lieu d'arrondissement au 31 décembre 2014",
    chefLieuDepartementDansAgglomeration:
        "Appartenance à une agglomération avec le chef-lieu de département",
    coefficientIntegrationFiscale: "Coefficient d'intégration fiscale",
    communeChefLieuCanton:
        "Nom commune chef-lieu de canton au 1er janvier 2014",
    dacomSocle: "Montant de DACOM socle",
    densitePopulation: "Densité de population",
    departement: "Numéro de département",
    departementUrbain: "Département urbain",
    dfEvolutionPartDynamique: "Part dynamique de la population des communes",
    dfMontantEcretement: "Montant de l'écrêtement",
    dnpMontantPartMajoration: "Montant part majoration",
    dnpMontantPartPrincipale: "Montant part principale",
    dotationDeBase: "Dotation de base",
    dotationDePerequation: "Dotation de péréquation",
    dpom: "Montant de dotation de péréquation (DPOM)",
    ecretementDotationForfaitaire: "Ecrêtement de la dotation forfaitaire",
    effortFiscal: "Effort fiscal",
    epci: "Nom de l'EPCI",
    garantie: "Garantie",
    insulaire: "Commune insulaire",
    logementsTh: "Nombre de logements soumis à TH",
    longueurVoirie: "Longueur de voirie",
    natureJuridique: "Nature juridique",
    nombreBeneficiairesAidesAuLogement:
        "Nombre de bénéficiaires des aides au logement",
    nombreFoyersBeneficiairesRsa: "Nombre de bénéficiaires du RSA",
    nombreLogements: "Nombre de logements",
    nombreLogementsSociaux: "Nombre de logements sociaux",
    partDynamiquePopulation: "Part dynamique de la population",
    partPopulationCanton:
        "Pourcentage de la population communale dans le canton d'appartenance en 2014",
    placesCaravanesApresMajoration: "Places caravanes après majoration",
    placesCaravanesAvantMajoration: "Places caravanes avant majoration",
    plafonnement: "Plafonnement",
    populationDgf: "Population DGF",
    populationDgfAgglomeration:
        "Population DGF des communes de l'agglomération",
    populationDgfMajoree: "Population DGF majorée",
    populationEnfants: "Population 3 à 16 ans",
    populationInsee: "Population INSEE",
    populationQpv: "Population QPV",
    populationZfu: "Population ZFU",
    potentielFinancier: "Potentiel financier",
    potentielFinancierMajoreMer:
        "Potentiel financier majoré de l'octroi de mer",
    potentielFinancierMajoreMerParHabitant:
        "Potentiel financier majoré de l'octroi de mer par habitant",
    potentielFinancierParHabitant: "Potentiel financier par habitant",
    potentielFiscal: "Potentiel fiscal",
    potentielFiscalParHabitant: "Potentiel fiscal par habitant",
    rangIndiceSynthetique: "Rang DSR Cible",
    rangIndiceSynthetiqueDsuSeuilBas:
        "Rang de classement à la DSU des communes mét de 5000 à 9999 habitants",
    rangIndiceSynthetiqueDsuSeuilHaut:
        "Rang de classement à la DSU des communes mét de plus de 10000 habitants",
    realimentation: "Réalimentation",
    recettesReellesFonctionnement: "Recettes réelles fonctionnement",
    regimeFiscal: "Régime fiscal",
    residencesSecondaires: "Résidences secondaires",
    revenuEpci: "Revenu EPCI",
    revenuParHabitant: "Revenu par habitant",
    revenuTotal: "Revenu total",
    superficie: "Superficie",
    tauxUrbanisation: "Taux urbanisation",
    voirieHorsMontagne: "Voirie hors montagne",
    voirieMontagne: "Voirie en montagne",
    zoneDeMontagne: "Zone de montagne",
    zrr: "Commune située en ZRR",
};

export const dotationsMap: Record<string, DotationMap> = {
    dotationAmenagementCommunesOutreMer: {
        description: "Lorem Ipsum DNP",
        info: "",
        key: "dotationAmenagementCommunesOutreMer",
        label: "DACOM",
        links: [],
        title: "Dotation Aménagement Communes Outre Mer (DACOM)",
    },
    dotationBiodiversite: {
        description: "Lorem Ipsum DNP",
        info: "",
        key: "dotationBiodiversite",
        label: "DPB",
        links: [],
        title: "Dotation pour la Protection de la Biodiversité (DPB)",
    },
    dotationCompensation: {
        description: "Lorem Ipsum DNP",
        info: "",
        key: "dotationCompensation",
        label: "DC",
        links: [],
        title: "Dotation Compensation (DC)",
    },
    dotationEluLocal: {
        description: "Lorem Ipsum DNP",
        info: "",
        key: "dotationEluLocal",
        label: "DPEL",
        links: [],
        title: "Dotation Élu Local (DPEL)",
    },
    dotationFonctionnementMinimale: {
        description: "Dotation Fonctionnement Minimale",
        info: "",
        key: "dotationFonctionnementMinimale",
        label: "DFM",
        links: [],
        title: "Dotation Fonctionnement Minimale (DFM)",
    },
    dotationForfaitaire: {
        description:
            "Votre dotation forfaitaire est stable par rapport à l’année 2021",
        info: "",
        key: "dotationForfaitaire",
        label: "DF",
        links: [],
        title: "Dotation Forfaitaire (DF)",
    },
    dotationGlobaleFonctionnement: {
        description: "Evolution de votre montant total de dotations",
        info: `La dotation globale de fonctionnement (DGF), instituée par la loi du 3 janvier 1979, est un prélèvement opéré sur le budget de l'État et distribué aux collectivités locales pour la première fois en 1979.
                                                                                                                                <br>Son montant est établi selon un mode de prélèvement et de répartition fixé chaque année par la loi de finances. Elle est versée aux régions depuis 2004. Cette dotation est constituée d'une dotation forfaitaire et d'une dotation de péréquation.`,
        key: "dotationGlobaleFonctionnement",
        label: "Résumé",
        links: [
            {
                dotationKey: "dotationForfaitaire",
                linkText: "Dotation Forfaitaire (DF)",
            },
            {
                dotationKey: "dotationNationalePerequation",
                linkText: "Dotation Nationale de Péréquation (DNP)",
            },
            {
                dotationKey: "dotationSolidariteRurale",
                linkText: "Dotation de Solidarité Rurale (DSR)",
            },
            {
                dotationKey: "dsuMontant",
                linkText: "Dotation de Solidarité Urbaine (DSU)",
            },
        ],
        title: "Dotation Globale de Fonctionnement (DGF)",
    },
    dotationGroupementsTouristiques: {
        description: "Lorem Ipsum DNP",
        info: "",
        key: "dotationGroupementsTouristiques",
        label: "DGT",
        links: [],
        title: "Dotation Groupements Touristiques (DGT)",
    },
    dotationIntercommunalite: {
        description: "Lorem Ipsum DNP",
        info: "",
        key: "dotationIntercommunalite",
        label: "DI",
        links: [],
        title: "Dotation Intercommunalité (DI)",
    },
    dotationNationalePerequation: {
        description: "Lorem Ipsum DNP",
        info: "",
        key: "dotationNationalePerequation",
        label: "DNP",
        links: [],
        title: "Dotation Nationale de Péréquation (DNP)",
    },
    dotationPerequationUrbaine: {
        description: "Dotation péréquation urbaine",
        info: "",
        key: "dotationPerequationUrbaine",
        label: "DPU",
        links: [],
        title: "Dotation Péréquation Urbaine (DPU)",
    },
    dotationSolidariteRurale: {
        description: "Légère augmentation en 2022 dû à la part Bourg Centre",
        info: "La Dotation de solidarité rurale vise à soutenir certaines communes rurales de moins de 10 000 habitants, pour tenir compte des charges qu’elles supportent pour contribuer au maintien de la vie sociale en milieu rural et de l’insuffisance de leurs ressources fiscales. Elle comprend 3 fractions :",
        key: "dotationSolidariteRurale",
        label: "DSR",
        links: [
            {
                dotationKey: "dsrFractionBourgCentre",
                linkText: "Fraction Bourg-Centre",
            },
            {
                dotationKey: "dsrFractionPerequation",
                linkText: "Fraction Péréquation",
            },
            {
                dotationKey: "dsrFractionCible",
                linkText: "Fraction Cible",
            },
        ],
        title: "Dotation Solidarité Rurale (DSR)",
    },
    dsuMontant: {
        description: "Dotation pour les communes urbaines",
        info: "",
        key: "dsuMontant",
        label: "DSU",
        links: [],
        title: "Dotation Solidarité Urbaine (DSU)",
    },
};

export const sousDotationsMap: Record<string, DotationMap> = {
    dsrFractionBourgCentre: {
        description: "Montant de la commune éligible",
        info: "La DSR fraction bourg centre est à destination des communes subissant des charges liées à leur rôle structurant par la qualité et le nombre d’équipements qu’elles regroupent et la capacité d’attraction qui en découle. Elle est attribuée aux communes de moins de 10 000 habitants, chef-lieu de canton, bureau centralisateur ou comprenant au minimum 15 % de la population du canton",
        key: "dsrFractionBourgCentre",
        label: "",
        title: "Part Bourg Centre",
    },
    dsrFractionCible: {
        description: "Non éligible à la Part Cible",
        info: "La DSR fraction cible est attribuée aux 10 000 communes les plus défavorisées du territoire national en fonction de deux indices financiers : le revenu par habitant et le potentiel financier par habitant.",
        key: "dsrFractionCible",
        label: "",
        title: "Part Cible",
    },
    dsrFractionPerequation: {
        description: "Montant de la commune éligible à la Péréquation",
        info: "La DSR fraction péréquation est attribuée aux communes de moins de 10 000 habitants dont le potentiel financier par habitant est inférieur au double du potentiel financier moyen de la strate démographique.",
        key: "dsrFractionPerequation",
        label: "",
        title: "Part Péréquation",
    },
};
