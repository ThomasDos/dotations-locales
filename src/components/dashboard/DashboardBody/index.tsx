import Image from "next/image";
import styled from "styled-components";

import DotationCard from "./DotationCard";
import ExportContainer from "./ExportContainer";

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
                hasInformation={false}
                percentage={8.4}
                dotationTotal={870967}
                title="Dotations Générales de Fonctionnement (DGC)"
                description="Evolution de votre montant total de dotations"
            />

            <ExportContainer />

            <DotationCard
                percentage={0.4}
                dotationTotal={424084}
                title="Dotations Forfaitaire (DF)"
                description="Votre dotation forfaitaire est stable par rapport à l’année 2021"
            />

            <DotationCard
                percentage={12.2}
                dotationTotal={366761}
                title="Dotations Solidarité Rurale (DSR)"
                description="Légère augmentation en 2022 dû à la part Bourg Centre"
            />

            <DotationCard
                percentage={-2}
                dotationTotal={79978}
                title="Dotations Nationale de Péréquation (DNP)"
                description="Légère réduction dû à la Lorem ipsum dolores"
            />

            <DotationCard
                percentage={0}
                dotationTotal={0}
                title="Dotations Nationale de Péréquation (DNP)"
                description="En cours d’analyse"
            />

            <DotationCard
                percentage={0}
                dotationTotal={0}
                title="Dotations Solidarité Urbaine (DSU)"
                description="Dotation pour les communes urbaines"
            />

            <DotationCard
                percentage={0}
                dotationTotal={0}
                title="Dotation Elu Local (DPEL)"
                description="Dotation pour les élus locaux"
            />

            <DotationCard
                percentage={0}
                dotationTotal={0}
                title="Dotation d’amorçage"
                description="Pour les nouvelles communes"
            />
        </DashboardBodyContainer>
    );
};

export default DashboardBody;
