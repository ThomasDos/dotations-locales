import Image from "next/image";
import styled from "styled-components";

const SpanExport = styled.span`
    color: var(--blue-france-sun-113-625);
`;
const ExportContainer = () => {
    return (
        <div className="flex text-sm justify-between my-10 cursor-pointer">
            <span>Votre commune est éligible à 3 dotations (composants)</span>
            <div className="flex">
                <SpanExport>Exporter</SpanExport>
                <div className="ml-1">
                    <Image
                        src="/icons/arrow-dropdown.svg"
                        width="12.73px"
                        height="7.78px"
                        alt="icone exporter"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExportContainer;
