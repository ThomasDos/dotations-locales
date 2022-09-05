import { BreadCrumbsTwoLinks, LinkIcon } from "components/ui";
import styled from "styled-components";

const StyledHeaderDashboard = styled.div`
    padding: 32px 40px 32px 120px;
`;

interface SubHeaderProps {
    commune: string;
    codeInsee: string;
}

const SubHeader = ({ commune, codeInsee }: SubHeaderProps) => {
    const communeWithCodeInsee = `${commune} (${codeInsee})`;

    return (
        <>
            <StyledHeaderDashboard className="flex justify-between">
                <div className="flex flex-col">
                    <BreadCrumbsTwoLinks
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
            </StyledHeaderDashboard>
            <hr />
        </>
    );
};

export default SubHeader;
