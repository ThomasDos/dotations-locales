import { LinkIcon } from "components/ui";
import styled from "styled-components";

const HeaderDashboardContainer = styled.div`
    padding: 32px 40px 32px 120px;
`;

interface SubHeaderProps {
    commune: string;
}

const SubHeader = ({ commune }: SubHeaderProps) => {
    return (
        <>
            <HeaderDashboardContainer className="flex justify-between">
                <div className="left-header">
                    <div className="breadcrumb">ACCUEIL</div>
                    <div className="header-title">{commune}</div>
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
