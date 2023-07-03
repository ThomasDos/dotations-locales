import TabEchelon from "components/comparer/ComparerEchelon/TabEchelon";
import ComparerPersonnalisationTab from "components/comparer/ComparerPersonnalisationTab";
import { SubHeader } from "components/dashboard";
import { Spinner, Tab, TabsComparer } from "components/ui";
import useDataEntityInit from "hooks/useDataEntityInit";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectFeaturesComparer,
    selectIsCommune,
} from "store/appSettings.slice";
import { addEntity, selectEntities } from "store/entitiesComparer.slice";
import { selectInitialEntity } from "store/initialEntity.slice";
import styled from "styled-components";

const StyledComparerBody = styled.div`
    padding: 24px 16px 60px;
    @media (min-width: 940px) {
        padding: 56px 80px 60px 120px;
    }
`;

const Comparer = () => {
    const router = useRouter();
    const { libelle, code } = router.query as {
        libelle: string;
        code: string;
    };

    const dispatch = useDispatch();

    const { showSpinner } = useDataEntityInit(code);

    const currentEntity = useSelector(selectInitialEntity);
    const isCommune = useSelector(selectIsCommune);
    const entities = useSelector(selectEntities);

    const featuresComparer = useSelector(selectFeaturesComparer);

    useEffect(() => {
        if (!featuresComparer) {
            router.push(`/${code}?libelle=${libelle}`);
        }
        if (!entities.length) {
            dispatch(addEntity({ ...currentEntity, libelle }));
        }
    }, [entities]);

    if (showSpinner) {
        return (
            <>
                <Head>
                    <title>Comparer votre dotation</title>
                </Head>
                <SubHeader libelle={libelle} code={code} />
                <div className="w-auto my-40 flex justify-center">
                    <Spinner size="md" />
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Comparer votre dotation</title>
            </Head>
            <SubHeader libelle={libelle} code={code} />
            <StyledComparerBody>
                {isCommune ? (
                    <TabsComparer>
                        {/* @ts-ignore */}
                        <Tab label="Dans mon département">
                            <TabEchelon />
                        </Tab>

                        {/* @ts-ignore */}
                        <Tab label="Sélection personnalisée">
                            <ComparerPersonnalisationTab
                                entitiesLength={entities.length}
                            />
                        </Tab>
                    </TabsComparer>
                ) : (
                    <ComparerPersonnalisationTab
                        entitiesLength={entities.length}
                    />
                )}
            </StyledComparerBody>
        </>
    );
};

export default Comparer;
