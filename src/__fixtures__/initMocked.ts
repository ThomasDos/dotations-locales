import { InitDataDto, InitEntity } from "models/init/init.interface";

export const initDtoMocked: InitDataDto = {
    simulation_periodes: [
        {
            annee: "2022",
            label: "Règlementation 2022",
        },
    ],
    base_calcul: "Loi en vigueur 2023",
    sources_donnees: {
        commune: {
            dotation_forfaitaire: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=188",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046873855/2023-01-01",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - DF toutes communes (2023)",
                        nom_fichier: "commune_dotations_forfaitaires_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dsu_montant: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=179",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000006197674/#LEGISCTA000006197674",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - DSU toutes communes (2023)",
                        nom_fichier:
                            "commune_dotations_solidarite_urbaine_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_nationale_perequation: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=190",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044980613/2023-01-01",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - DNP toutes communes (2023)",
                        nom_fichier:
                            "commune_dotation_nationale_perequation_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_solidarite_rurale: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=181",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/id/LEGIARTI000046873852/2023-01-01/",
                    },
                ],
                fichiers: null,
            },
            dotation_amenagement_communes_outre_mer: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=168",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000041426784/#LEGISCTA000041426784",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - DACOM toutes communes (2023)",
                        nom_fichier:
                            "commune_dotation_amenagement_communes_outre_mer_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_elu_local: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=165",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DPEL toutes communes (2023)",
                        nom_fichier: "commune_dotation_elu_local_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_biodiversite: {
                liens_externes: [],
                fichiers: {
                    national_montants: {
                        label: "Dotation biodiversité et aménités rurales toutes communes (2023)",
                        nom_fichier: "commune_dotation_biodiversite_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
        },
        epci: {
            dotation_compensation: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=173",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000006192441/#LEGISCTA000006192441",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - Dotation de compensation tous EPCI (2023)",
                        nom_fichier: "epci_dotation_compensation_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_groupements_touristiques: {
                liens_externes: [],
                fichiers: {
                    national_montants: {
                        label: "DGF - Dotation des groupements touristiques tous EPCI (2023)",
                        nom_fichier:
                            "epci_dotation_groupements_touristiques_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_intercommunalite: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=182",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000006192441/#LEGISCTA000006192441",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - Dotation d'intercommunalité (DI) tous EPCI (2023)",
                        nom_fichier: "epci_dotation_intercommunalite_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
        },
        departement: {
            dotation_compensation: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=183",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000006192583/#LEGISCTA000006192583",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - Dotation de compensation tous départements (2023)",
                        nom_fichier:
                            "departement_dotation_compensation_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_forfaitaire: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=183",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000006192360/#LEGISCTA000006192360",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - DF tous départements (2023)",
                        nom_fichier:
                            "departement_dotation_forfaitaire_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_perequation_urbaine: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=183",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000006192361/#LEGISCTA000006192361",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - DPU tous départements (2023)",
                        nom_fichier:
                            "departement_dotation_perequation_urbaine_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
            dotation_fonctionnement_minimale: {
                liens_externes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=183",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044980696",
                    },
                ],
                fichiers: {
                    national_montants: {
                        label: "DGF - Dotation de fonctionnement minimale tous départements (2023)",
                        nom_fichier:
                            "departement_dotation_fonctionnement_minimale_2023.csv",
                    },
                    national_criteres: null,
                    sous_dotations: null,
                },
            },
        },
    },
    derniere_maj_donnees: "2023-03-31",
};

export const initEntityMocked: InitEntity = {
    dotationAmenagementCommunesOutreMer: {
        fichiers: {
            nationalCriteres: null,
            nationalMontants: {
                label: "DGF - DACOM toutes communes (2023)",
                nomFichier:
                    "commune_dotation_amenagement_communes_outre_mer_2023.csv",
            },
            sousDotations: null,
        },
        liensExternes: null,
    },
    dotationBiodiversite: {
        fichiers: {
            nationalCriteres: null,
            nationalMontants: {
                label: "Dotation biodiversité et aménités rurales toutes communes (2023)",
                nomFichier: "commune_dotation_biodiversite_2023.csv",
            },
            sousDotations: null,
        },
        liensExternes: null,
    },
    dotationEluLocal: {
        fichiers: {
            nationalCriteres: null,
            nationalMontants: {
                label: "DPEL toutes communes (2023)",
                nomFichier: "commune_dotation_elu_local_2023.csv",
            },
            sousDotations: null,
        },
        liensExternes: null,
    },
    dotationForfaitaire: {
        fichiers: {
            nationalCriteres: null,
            nationalMontants: {
                label: "DGF - DF toutes communes (2023)",
                nomFichier: "commune_dotations_forfaitaires_2023.csv",
            },
            sousDotations: null,
        },
        liensExternes: null,
    },
    dotationNationalePerequation: {
        fichiers: {
            nationalCriteres: null,
            nationalMontants: {
                label: "DGF - DNP toutes communes (2023)",
                nomFichier: "commune_dotation_nationale_perequation_2023.csv",
            },
            sousDotations: null,
        },
        liensExternes: null,
    },
    dotationSolidariteRurale: { fichiers: null, liensExternes: null },
    dsuMontant: {
        fichiers: {
            nationalCriteres: null,
            nationalMontants: {
                label: "DGF - DSU toutes communes (2023)",
                nomFichier: "commune_dotations_solidarite_urbaine_2023.csv",
            },
            sousDotations: null,
        },
        liensExternes: null,
    },
};
