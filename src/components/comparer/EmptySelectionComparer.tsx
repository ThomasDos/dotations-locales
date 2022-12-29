import { ImageFixed } from "components/ui";

const EmptySelectionComparer = () => {
    return (
        <div className="py-14 text-center">
            <div className="flex justify-center">
                <ImageFixed
                    src="/icons/AB-comparer.svg"
                    width={64}
                    height={64}
                    alt="Deux rectangle avec A et B à l'intérieur"
                />
            </div>
            <h3 className="text-2xl	mx-0 p-0 text-grey-625 my-3">
                Votre comparateur est vide.
            </h3>
            <div className="text-grey-625">
                Ajoutez une ou plusieurs collectivités avec le champs de
                recherche
            </div>
        </div>
    );
};

export default EmptySelectionComparer;
