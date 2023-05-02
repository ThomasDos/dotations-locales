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
                        nomFichier:
                            "commune_dotation_nationale_perequation_2023.csv",
                    },
                    sousDotations: null,
                },
                liensExternes: null,
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
                                liensExternes: null,
                            },
                        },
                    ],
                },
                liensExternes: null,
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
                liensExternes: null,
            },
        });
    });
});
