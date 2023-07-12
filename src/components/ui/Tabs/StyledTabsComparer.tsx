import { Tabs } from "@dataesr/react-dsfr";
import styled from "styled-components";

const StyledTabsComparer = styled(Tabs)`
    height: auto;
    box-shadow: none;
    ul {
        align-items: center !important;
    }
    &::before {
        height: 1px;
    }

    button {
        padding: 12px !important;
        font-size: 16px !important;
    }

    @media (max-width: 1080px) {
        button {
            padding: 11px !important;
            font-size: 14px !important;
        }
    }

    @media (max-width: 900px) {
        button {
            padding: 8px !important;
        }
        ul {
            padding-left: 2px !important;
        }
    }

    @media (max-width: 540px) {
        button {
            font-size: 12px !important;
            padding: 8px !important;
        }
    }

    @media (max-width: 480px) {
        button {
            padding: 5px !important;
        }
    }

    @media (max-width: 440px) {
        button {
            padding: 1px !important;
            padding-bottom: 12px !important;
        }
    }

    @media (min-width: 640px) {
        padding: 0 !important;
    }
`;

export default StyledTabsComparer;
