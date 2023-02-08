import { SearchInput } from "components/ui";
import { useDispatch, useSelector } from "react-redux";
import {
    resetEntitiesComparer,
    selectEntities,
} from "store/entitiesComparer.slice";
import LabelEntity from "./LabelEntity";

const SearchInputComparer = () => {
    const entities = useSelector(selectEntities);
    const dispatch = useDispatch();

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
            {entities.length > 1 && (
                <>
                    <div className="flex flex-wrap items-center">
                        {entities.map(({ libelle, code }, index) => {
                            if (!index) return null;

                            return (
                                <LabelEntity
                                    key={code}
                                    code={code}
                                    libelle={libelle}
                                />
                            );
                        })}
                        <div
                            className="text-sm cursor-pointer hover:underline text-color-primary"
                            onClick={() => dispatch(resetEntitiesComparer())}
                        >
                            Tout effacer
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default SearchInputComparer;
