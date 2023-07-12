import AlertMessageComparer from "./AlertMessageComparer";
import SearchInputComparer from "./SearchInputComparer";
import TabsContainerComparer from "./TabsComparer";

interface ComparerPersonnalisationTabProps {
    entitiesLength: number;
}

const ComparerPersonnalisationTab = ({
    entitiesLength,
}: ComparerPersonnalisationTabProps) => {
    return (
        <div className="mt-10">
            <SearchInputComparer />
            {entitiesLength > 1 ? (
                <TabsContainerComparer />
            ) : (
                <AlertMessageComparer />
            )}
        </div>
    );
};

export default ComparerPersonnalisationTab;
