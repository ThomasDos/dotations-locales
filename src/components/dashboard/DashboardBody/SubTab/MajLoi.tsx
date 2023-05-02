import { ImageFixed } from "components/ui";
import { useSelector } from "react-redux";
import { selectDerniereMajDonneess } from "store/appSettings.slice";

function MajLoi() {
    const derniereMajDonnees = useSelector(selectDerniereMajDonneess);
    if (!derniereMajDonnees) return null;
    const dateFormatted = new Date(derniereMajDonnees).toLocaleDateString();
    return (
        <div className="flex ml-2 md:ml-0">
            <ImageFixed
                src="icons/clock.svg"
                alt="Mise à jour de la loi"
                width={16}
                height={16}
                className="h-4"
            />
            <span className="ml-2 text-xs text-color-primary flex items-center">
                Mise à jour le {dateFormatted}
            </span>
        </div>
    );
}

export default MajLoi;
