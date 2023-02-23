import { Button } from "components/ui";
import HomeRowImageText from "./HomeRowImageText";

const HomeRowGuideDownload = () => {
    return (
        <HomeRowImageText
            src="/images/download-guide.png"
            badgeText="guide pratique"
            badgeType="info"
            imageHeight={200}
            imageWidth={200}
            imageAlt="guide pratique: la dotation globale de fonctionnement"
            titleContent="Le guide pratique de la Dotation Globale de Fonctionnement (DGF)"
        >
            Découvrez le guide de la DGCL qui vous aidera à mieux comprendre la
            DGF, le financement principal de l&apos;État pour les collectivités
            locales, comme les communes et les EPCI.
            <a
                href="https://www.collectivites-locales.gouv.fr/files/Finances%20locales/guide_dgfavril2022.pdf"
                download
                rel="noopener noreferrer"
                target="_"
            >
                <div className="w-fit flex m-auto md:m-0">
                    <Button text="Télécharger le guide" />
                </div>
            </a>
        </HomeRowImageText>
    );
};

export default HomeRowGuideDownload;
