import { ImageFixed } from "components/ui";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import {
    selectSimulationIsEnabled,
    updateIsSimulationTrue,
} from "store/appSettings.slice";
import { selectCurrentYear } from "store/simulationEntity.slice";
import PlaceHolderCard from "./PlaceHolderCard";

interface NoCriteresPlaceHolderProps {
    setDisplayMobileCriteresGeneraux: (value: boolean) => void;
}

const NoCriteresPlaceHolder = ({
    setDisplayMobileCriteresGeneraux,
}: NoCriteresPlaceHolderProps) => {
    const router = useRouter();
    const { libelle, code } = router.query as {
        libelle: string;
        code: string;
    };
    const dispatch = useDispatch();
    const simulationIsEnabled = useSelector(selectSimulationIsEnabled);
    const currentYear = useSelector(selectCurrentYear);

    return (
        <>
            <ImageFixed
                src="/icons/cross-filled.svg"
                height={48}
                width={48}
                alt="Icone de croix pour fermer les critères généraux"
                className="md:hidden flex justify-end mb-4"
                onClick={() => {
                    setDisplayMobileCriteresGeneraux(false);
                }}
            />
            <div className="flex flex-col">
                <PlaceHolderCard
                    badgeText="Nouveau"
                    bodyText="Découvrez le montant de votre Dotation pour la Protection de la Biodiversité (DPB)"
                />
                <PlaceHolderCard
                    badgeText="Prochainement"
                    bodyText={`Soyez alerté dès que les critères ${currentYear} seront en ligne ! Inscrivez-vous maintenant pour ne rien manquer.`}
                    buttonText="S'inscrire"
                    buttonIcon="alerter-white"
                    buttonOnClick={() =>
                        router.push(`/${code}/alerter?libelle=${libelle}`)
                    }
                />
                {simulationIsEnabled && (
                    <PlaceHolderCard
                        badgeText="En BETA"
                        bodyText="Vous connaissez les données et critères qui ont évolués pour votre collectivité"
                        buttonText="Testez le simulateur"
                        buttonIcon="calculator"
                        buttonOnClick={() => {
                            matomoTrackEvent([
                                "Simulation",
                                "Créer une simulation",
                            ]);
                            dispatch(updateIsSimulationTrue());
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default NoCriteresPlaceHolder;
