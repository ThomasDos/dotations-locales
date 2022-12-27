import { ImageFixed } from "components/ui";
import { useDispatch } from "react-redux";
import { removeCommune } from "store/communesComparer.slice";

interface LabelCommuneProps {
    codeInsee: string;
    commune: string;
}

const LabelCommune = ({ commune, codeInsee }: LabelCommuneProps) => {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center rounded bg-blue-france-113 text-white w-fit py-1 pl-4 pr-3 mr-2 mb-2">
            <span>{commune}</span>
            <ImageFixed
                className="ml-1 cursor-pointer"
                onClick={() => dispatch(removeCommune(codeInsee))}
                src="/icons/cross-white.svg"
                width={24}
                height={24}
                alt="une icone de croix"
            />
        </div>
    );
};

export default LabelCommune;
