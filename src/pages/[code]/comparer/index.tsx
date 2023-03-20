import AlertMessageComparer from "components/comparer/AlertMessageComparer";
import SearchInputComparer from "components/comparer/SearchInputComparer";
import TabsContainerComparer from "components/comparer/TabsComparer";
import { SubHeader } from "components/dashboard";
import { Spinner } from "components/ui";
import useDataEntityInit from "hooks/useDataEntityInit";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCommune } from "store/appSettings.slice";
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
    const entities = useSelector(selectEntities);

    //TODO: rétablir quand comparer EPCI prêt
    const isCommune = useSelector(selectIsCommune);

    useEffect(() => {
        if (!isCommune) {
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
                <SearchInputComparer />
                {entities.length > 1 ? (
                    <TabsContainerComparer />
                ) : (
                    <AlertMessageComparer />
                )}
            </StyledComparerBody>
        </>
    );
};

export default Comparer;
