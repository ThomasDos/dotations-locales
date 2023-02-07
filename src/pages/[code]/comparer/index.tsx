import EmptySelectionComparer from "components/comparer/EmptySelectionComparer";
import SearchInputComparer from "components/comparer/SearchInputComparer";
import TabsContainerComparer from "components/comparer/TabsComparer";
import { SubHeader } from "components/dashboard";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEntity, selectEntities } from "store/entitiesComparer.slice";
import { selectInitialEntity } from "store/initialEntity.slice";
import styled from "styled-components";

const StyledComparerBody = styled.div`
    padding: 24px 16px 0;
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

    const currentEntity = useSelector(selectInitialEntity);
    const entities = useSelector(selectEntities);

    useEffect(() => {
        if (!entities.length) {
            dispatch(addEntity({ ...currentEntity, libelle }));
        }
    }, [entities]);

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
                    <EmptySelectionComparer />
                )}
            </StyledComparerBody>
        </>
    );
};

export default Comparer;
