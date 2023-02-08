import { ImageFixed } from "components/ui";
import { useDispatch } from "react-redux";
import { removeEntity } from "store/entitiesComparer.slice";

interface LabelEntityProps {
    code: string;
    libelle: string;
}

const LabelEntity = ({ libelle, code }: LabelEntityProps) => {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center rounded bg-blue-france-113 text-white w-fit py-1 pl-4 pr-3 mr-2 mb-2">
            <span>
                {libelle} ({code})
            </span>
            <ImageFixed
                className="ml-1 cursor-pointer"
                onClick={() => dispatch(removeEntity(code))}
                src="/icons/cross-white.svg"
                width={24}
                height={24}
                alt="une icone de croix"
            />
        </div>
    );
};

export default LabelEntity;
