import { postSimulationMocked } from "__fixtures__/postSimulationMocked";
import { fetchEntitySerializerSimulation } from "../simulation.serializer";

describe("fetchEntitySerializer", () => {
    it("should return serialized commune", () => {
        expect(fetchEntitySerializerSimulation(postSimulationMocked)).toEqual({
            annees: ["2022", "2021"],
            anneesCriteres: ["2022", "2021"],
            avertissementPrecisionSimulation: false,
            code: "42113",
            criteresGeneraux: {
                longueurVoirie: {
                    annees: [
                        { "2022": { unite: "km", valeur: "9290" } },
                        { "2021": { unite: "km", valeur: "9290" } },
                    ],
                    description: "Longueur de voirie",
                },
                placesCaravanesAvantMajoration: {
                    annees: [
                        { "2022": { unite: null, valeur: "0" } },
                        { "2021": { unite: null, valeur: "0" } },
                    ],
                    description: "Places caravanes avant majoration",
                },
                populationDgf: {
                    annees: [
                        { "2022": { unite: null, valeur: "248" } },
                        { "2021": { unite: null, valeur: "248" } },
                    ],
                    description: "Population DGF",
                },
                populationEnfants: {
                    annees: [
                        { "2022": { unite: null, valeur: "43" } },
                        { "2021": { unite: null, valeur: "43" } },
                    ],
                    description: "Population 3 à 16 ans",
                },
                potentielFinancierParHabitant: {
                    annees: [
                        { "2022": { unite: "€", valeur: "742.818548" } },
                        { "2021": { unite: "€", valeur: "742.818548" } },
                    ],
                    description: "Potentiel financier par habitant",
                },
                residencesSecondaires: {
                    annees: [
                        { "2022": { unite: null, valeur: "14" } },
                        { "2021": { unite: null, valeur: "14" } },
                    ],
                    description: "Résidences secondaires",
                },
                superficie: {
                    annees: [
                        { "2022": { unite: "m²", valeur: "622" } },
                        { "2021": { unite: "m²", valeur: "622" } },
                    ],
                    description: "Superficie",
                },
                zoneDeMontagne: {
                    annees: [
                        { "2022": { unite: null, valeur: "Oui" } },
                        { "2021": { unite: null, valeur: "Oui" } },
                    ],
                    description: "Zone de montagne",
                },
            },
            dotations: {
                dotationForfaitaire: {
                    annees: [{ "2022": 15161 }, { "2021": 15993 }],
                    criteres: {},
                    description:
                        "Votre dotation forfaitaire est stable par rapport à l'année 2021",
                    info: "La dotation forfaitaire des communes (DF) est, avec la dotation d'aménagement, l'une des composantes majeures de la dotation globale de fonctionnement (DGF). La DF est  la principale dotation de l'État aux collectivités locales.\nIl s'agit d'une contribution de base à la couverture des charges de fonctionnement des communes.",
                    key: "dotationForfaitaire",
                    label: "DF",
                    links: [],
                    title: "Dotation Forfaitaire (DF)",
                },
                dotationSolidariteRurale: {
                    annees: [{ "2022": 8765 }, { "2021": 8795 }],
                    criteres: {},
                    description:
                        "Légère augmentation en 2022 dû à la part Bourg Centre",
                    info: "La Dotation de solidarité rurale vise à soutenir certaines communes rurales de moins de 10 000 habitants, pour tenir compte des charges qu'elles supportent pour contribuer au maintien de la vie sociale en milieu rural et de l'insuffisance de leurs ressources fiscales. Elle comprend 3 fractions :",
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
                    sousDotations: [
                        {
                            dsrFractionCible: {
                                annees: [{ "2022": 0 }, { "2021": 0 }],
                                criteres: {},
                                description: "Non éligible à la Part Cible",
                                info: "La DSR fraction cible est attribuée aux 10 000 communes les plus défavorisées du territoire national en fonction de deux indices financiers : le revenu par habitant et le potentiel financier par habitant.",
                                key: "dsrFractionCible",
                                label: "",
                                title: "Part Cible",
                            },
                        },
                        {
                            dsrFractionPerequation: {
                                annees: [{ "2022": 8765 }, { "2021": 8795 }],
                                criteres: {},
                                description:
                                    "Montant de la commune éligible à la Péréquation",
                                info: "La DSR fraction péréquation est attribuée aux communes de moins de 10 000 habitants dont le potentiel financier par habitant est inférieur au double du potentiel financier moyen de la strate démographique.",
                                key: "dsrFractionPerequation",
                                label: "",
                                title: "Part Péréquation",
                            },
                        },
                        {
                            dsrFractionBourgCentre: {
                                annees: [{ "2022": 0 }, { "2021": 0 }],
                                criteres: {},
                                description: "Montant de la commune éligible",
                                info: "La DSR fraction bourg centre est à destination des communes subissant des charges liées à leur rôle structurant par la qualité et le nombre d'équipements qu'elles regroupent et la capacité d'attraction qui en découle. Elle est attribuée aux communes de moins de 10 000 habitants, chef-lieu de canton, bureau centralisateur ou comprenant au minimum 15 % de la population du canton",
                                key: "dsrFractionBourgCentre",
                                label: "",
                                title: "Part Bourg Centre",
                            },
                        },
                    ],
                    title: "Dotation Solidarité Rurale (DSR)",
                },
                dsuMontant: {
                    annees: [{ "2022": 0 }, { "2021": 0 }],
                    criteres: {},
                    description: "Dotation pour les communes urbaines",
                    info: "La dotation de solidarité urbaine et de cohésion sociale (DSU) est une dotation d'aménagement de la dotation globale de fonctionnement (DGF) destinée aux communes urbaines confrontées à une insuffisance de leurs ressources et supportant des charges élevées.\nAprès prélèvement de la quote-part destinée aux communes des départements et collectivités d'outre-mer, les crédits de la DSU sont attribués à des communes de métropole de plus de 5000 habitants.",
                    key: "dsuMontant",
                    label: "DSU",
                    links: [],
                    title: "Dotation Solidarité Urbaine (DSU)",
                },
            },
        });
    });
});
