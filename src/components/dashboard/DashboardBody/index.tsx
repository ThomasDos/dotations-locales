import Image from "next/image";
import styled from "styled-components";

import DotationCard from "./DotationCard";

const DashboardBodyContainer = styled.div`
    width: 75%;
    padding: 56px 80px 120px 120px;
`;

const InfoDateContainer = styled.div`
    width: 100%;
    background: var(--green-tilleul-verveine-975);
`;

const SpanMajContainer = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const DashboardBody = () => {
    return (
        <DashboardBodyContainer>
            <InfoDateContainer className="px-8 py-4 mb-10 flex justify-between">
                <span className="text-base font-bold">
                    Vos dotations connues à ce jour pour l&apos;année 2022
                </span>
                <div className="flex items-center">
                    <SpanMajContainer className="mr-1 text-sm">
                        Mise à jour hier à 08h45
                    </SpanMajContainer>
                    <Image
                        src="/icons/clock.svg"
                        height="16px"
                        width="16px"
                        layout="fixed"
                        alt="icone horloge"
                    />
                </div>
            </InfoDateContainer>
            <DotationCard
                dotationTotal={870967}
                title="Dotations Générales de Fonctionnement (DGC)"
                description="Evolution de votre montant total de dotations"
            />
        </DashboardBodyContainer>
    );
};

export default DashboardBody;
