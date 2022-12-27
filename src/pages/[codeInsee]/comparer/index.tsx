import EmptySelectionComparer from "components/comparer/EmptySelectionComparer";
import SearchInputComparer from "components/comparer/SearchInputComparer";
import { SubHeader } from "components/dashboard";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommune, selectCommunes } from "store/communesComparer.slice";
import { selectInitialCommune } from "store/initialCommune.slice";
import styled from "styled-components";

const StyledComparerBody = styled.div`
    padding: 24px 16px 0;
    @media (min-width: 940px) {
        padding: 56px 80px 120px 120px;
    }
`;

const Comparer = () => {
    const router = useRouter();
    const { commune, codeInsee } = router.query as {
        commune: string;
        codeInsee: string;
    };

    const dispatch = useDispatch();

    const currentCommune = useSelector(selectInitialCommune);
    const communes = useSelector(selectCommunes);

    useEffect(() => {
        if (!communes.length) {
            dispatch(addCommune({ ...currentCommune, commune }));
        }
    }, []);

    return (
        <>
            <Head>
                <title>Comparer votre dotation</title>
            </Head>
            <SubHeader commune={commune} codeInsee={codeInsee} />
            <StyledComparerBody>
                <SearchInputComparer />
                {communes.length > 1 ? (
                    <div>more than one</div>
                ) : (
                    <EmptySelectionComparer />
                )}
            </StyledComparerBody>
        </>
    );
};

export default Comparer;
