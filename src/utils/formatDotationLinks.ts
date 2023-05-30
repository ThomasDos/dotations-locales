import { DgfLink, Dotation, Links } from "models/entity/entity.interface";
interface linksFormattedProps {
    links: Links | DgfLink | undefined;
    dotation: Dotation;
    isCommune: boolean;
    isDepartement: boolean;
    isEPCI: boolean;
}

const formatDotationLinks = ({
    links,
    dotation,
    isCommune,
    isDepartement,
    isEPCI,
}: linksFormattedProps): Links => {
    if (!links) {
        return [];
    }
    if (dotation.key !== "dotationGlobaleFonctionnement") {
        return links as Links;
    }

    if (isCommune) {
        return (links as DgfLink).commune as Links;
    }

    if (isDepartement) {
        return (links as DgfLink).departement as Links;
    }

    if (isEPCI) {
        return (links as DgfLink).epci as Links;
    }

    return [];
};

export default formatDotationLinks;
