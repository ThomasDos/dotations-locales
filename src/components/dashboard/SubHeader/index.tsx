import { BreadCrumbsTwoLinks, LinkIcon } from "components/ui";
import { useDispatch } from "react-redux";
import { updateIsSimulationTrue } from "store/appSettings.slice";
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
    const dispatch = useDispatch();

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
                    <LinkIcon
                        icon="simulation"
                        text="Simulation"
                        handleClick={() => dispatch(updateIsSimulationTrue())}
                    />
                    <LinkIcon icon="historique" text="Historique" disabled />
                    <LinkIcon icon="comparer" text="Comparer" disabled />
                    <LinkIcon icon="alerter" text="M'alerter" disabled />
                </div>
            </StyledHeaderDashboard>
            <hr />
        </>
    );
};

export default SubHeader;
