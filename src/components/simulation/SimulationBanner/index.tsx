import "dayjs/locale/fr";

import dayjs, { extend as dayjsExtend } from "dayjs";
import isToday from "dayjs/plugin/isToday";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

dayjsExtend(isToday);

const StyledSimulationBanner = styled.div`
    background: rgb(0, 0, 145);
    background: linear-gradient(
        90deg,
        rgba(0, 0, 145, 1) 0%,
        rgba(252, 93, 0, 1) 100%
    );
    padding: 32px 40px 32px 120px;
    color: var(--grey-1000);
    display: flex;
    justify-content: space-between;
`;

const StyledBannerTitle = styled.span`
    font-size: 28px;
    line-height: 36px;
`;

const StyledCancelButton = styled.div`
    padding: 8px 24px;
    border: 1px #fff solid;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SimulationBanner = () => {
    const timeCreated = dayjs();
    const hoursCreated = dayjs(timeCreated).format("HH[h]mm");
    const dayCreated = dayjs(timeCreated).locale("fr").format("ddddd");

    const timeCreatedIsToday = dayjs(timeCreated).isToday();
    const router = useRouter();
    const { codeInsee } = router.query as { codeInsee: string };

    return (
        <StyledSimulationBanner>
            <div className="flex">
                <div>
                    <Image
                        src={`/icons/calculator-banner.svg`}
                        width="48px"
                        height="48px"
                        layout="fixed"
                        alt="image de la simulation"
                    />
                </div>
                <div className="flex flex-col ml-3">
                    <StyledBannerTitle>
                        Simulation de dotation
                    </StyledBannerTitle>
                    <span className="text-sm">
                        Créé {timeCreatedIsToday ? "aujourd'hui" : dayCreated},{" "}
                        à {hoursCreated}
                    </span>
                </div>
            </div>
            <Link
                href={{
                    pathname: `/${codeInsee}`,
                    query: { ...router.query },
                }}
            >
                <StyledCancelButton>Abandonner</StyledCancelButton>
            </Link>
        </StyledSimulationBanner>
    );
};

export default SimulationBanner;
