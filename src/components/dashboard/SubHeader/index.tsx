import { BreadCrumbsTwoLink, LinkIcon } from "components/ui";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderDashboardContainer = styled.div`
    padding: 32px 40px 32px 120px;
`;

interface SubHeaderProps {
    commune: string;
}

const SubHeader = ({ commune }: SubHeaderProps) => {
    const router = useRouter();
    const { codeInsee } = router.query;

    const communeWithCodeInsee = `${commune} (${codeInsee})`;

    return (
        <>
            <HeaderDashboardContainer className="flex justify-between">
                <div className="flex flex-col">
                    <BreadCrumbsTwoLink
                        firstLink="Accueil"
                        secondLink={communeWithCodeInsee}
                    />

                    <h2 className="p-0 m-0 ">{communeWithCodeInsee}</h2>
                </div>
                <div className="flex right-header mt-8">
                    <LinkIcon icon="simulation" text="Simulation" path="#" />
                    <LinkIcon icon="historique" text="Historique" path="#" />
                    <LinkIcon icon="comparer" text="Comparer" path="#" />
                    <LinkIcon icon="alerter" text="M'alerter" path="#" />
                </div>
            </HeaderDashboardContainer>
            <hr />
        </>
    );
};

export default SubHeader;
