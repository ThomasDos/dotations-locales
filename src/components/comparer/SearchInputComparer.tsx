import { SearchInput } from "components/ui";
import { useSelector } from "react-redux";
import { selectCommunes } from "store/communesComparer.slice";
import LabelCommune from "./LabelCommune";

const SearchInputComparer = () => {
    const communes = useSelector(selectCommunes);

    return (
        <>
            <h2 className="text-2xl md:text-3xl	mb-4">
                Comparer vos dotations avec :
            </h2>
            <div className="mb-5 sm:mb-10">
                <SearchInput
                    fullWidth
                    placeholder={`Ajouter une collectivité ${
                        window.innerWidth > 480 ? "au comparateur" : ""
                    }`}
                    textIcon="Ajouter"
                />
            </div>
            {communes.length > 1 && (
                <div className="flex flex-wrap">
                    {communes.map((commune, index) => {
                        if (!index) return null;

                        return (
                            <LabelCommune
                                key={commune.codeInsee}
                                codeInsee={commune.codeInsee}
                                commune={commune.commune}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default SearchInputComparer;
