import { initDtoMocked, initEntityMocked } from "__fixtures__/initMocked";
import { InitEntityDto } from "../init.interface";
import { initEntitySerializer } from "../init.serializer";

describe("initEntitySerializer", () => {
    it("should return an empty object if rawInitEntity is an empty object", () => {
        const rawInitEntity = {};
        const result = initEntitySerializer(rawInitEntity);
        expect(result).toEqual({});
    });

    it("should return a formatted object following the interface InitEntity from InitEntityDto", () => {
        const rawInitEntity = initDtoMocked.sources_donnees.commune;
        const result = initEntitySerializer(rawInitEntity);
        expect(result).toEqual(initEntityMocked);
    });

    it("should return a formatted object following the interface InitEntity from InitEntityDto with sous_dotations", () => {
        const rawInitEntity = initDtoMocked.sources_donnees.commune;
        const rawInitEntityEnrichedWithSousDotatation = {
            ...rawInitEntity,
            dotation_solidarite_rurale: {
                ...rawInitEntity.dotation_solidarite_rurale,
                fichiers: {
                    ...rawInitEntity.dotation_solidarite_rurale.fichiers,
                    sous_dotations: [
                        {
                            dotation_forfaitaire:
                                rawInitEntity.dotation_forfaitaire,
                        },
                    ],
                },
            },
        };

        const result = initEntitySerializer(
            rawInitEntityEnrichedWithSousDotatation as InitEntityDto
        );
        expect(result).toEqual({
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
                liensExternes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=168",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000041426784/#LEGISCTA000041426784",
                    },
                ],
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
                liensExternes: [],
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
                liensExternes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=165",
                    },
                ],
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
                liensExternes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=188",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046873855/2023-01-01",
                    },
                ],
            },
            dotationNationalePerequation: {
                fichiers: {
                    nationalCriteres: null,
                    nationalMontants: {
                        label: "DGF - DNP toutes communes (2023)",
                        nomFichier:
                            "commune_dotation_nationale_perequation_2023.csv",
                    },
                    sousDotations: null,
                },
                liensExternes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=190",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044980613/2023-01-01",
                    },
                ],
            },
            dotationSolidariteRurale: {
                fichiers: {
                    nationalCriteres: null,
                    nationalMontants: null,
                    sousDotations: [
                        {
                            dotationForfaitaire: {
                                fichiers: {
                                    nationalCriteres: null,
                                    nationalMontants: {
                                        label: "DGF - DF toutes communes (2023)",
                                        nomFichier:
                                            "commune_dotations_forfaitaires_2023.csv",
                                    },
                                    sousDotations: null,
                                },
                                liensExternes: [
                                    {
                                        label: "Note DGCL",
                                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=188",
                                    },
                                    {
                                        label: "Article Legifrance",
                                        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046873855/2023-01-01",
                                    },
                                ],
                            },
                        },
                    ],
                },
                liensExternes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=181",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/id/LEGIARTI000046873852/2023-01-01/",
                    },
                ],
            },
            dsuMontant: {
                fichiers: {
                    nationalCriteres: null,
                    nationalMontants: {
                        label: "DGF - DSU toutes communes (2023)",
                        nomFichier:
                            "commune_dotations_solidarite_urbaine_2023.csv",
                    },
                    sousDotations: null,
                },
                liensExternes: [
                    {
                        label: "Note DGCL",
                        url: "http://www.dotations-dgcl.interieur.gouv.fr/consultation/documentAffichage.php?id=179",
                    },
                    {
                        label: "Article Legifrance",
                        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070633/LEGISCTA000006197674/#LEGISCTA000006197674",
                    },
                ],
            },
        });
    });
});
