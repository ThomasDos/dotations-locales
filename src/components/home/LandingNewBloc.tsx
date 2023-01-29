import { Badge } from "@dataesr/react-dsfr";
import { ImageFixed } from "components/ui";

const LandingNewBloc = () => {
    return (
        <div className="my-20 md:mx-60 max-w-5xl flex flex-col items-center md:flex-row">
            <ImageFixed
                src="/images/landing-new-budget.png"
                height={176}
                width={176}
                alt="Rouleau de papier représentant le budget des dotations"
            />
            <div className="py-5 md:ml-14 flex flex-col items-center md:items-start text-center md:text-left">
                <Badge text="NOUVEAUTÉ 2023" hasIcon />
                <div className="my-4 text-2xl font-bold">
                    La nouvelle plateforme dédiée à vos dotations locales
                </div>
                <div>
                    Un service conçu et soutenu par l’Incubateur des Territoires
                    (ANCT) et par la Direction Générale des Collectivité Locales
                </div>
            </div>
        </div>
    );
};

export default LandingNewBloc;
