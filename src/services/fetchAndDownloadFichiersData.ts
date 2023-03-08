import axios from "axios";
import { FICHIERS_DISPONIBLES } from "constants/fichiersDisponiblesMap";

const fetchAndDownloadFichiersData = (
    fichier: keyof typeof FICHIERS_DISPONIBLES
) =>
    axios
        .get(
            `${process.env.NEXT_PUBLIC_DOTATIONS_API_URL}/files/${FICHIERS_DISPONIBLES[fichier]}`,
            {
                responseType: "blob",
            }
        )
        .then(response => {
            const href = URL.createObjectURL(response.data);
            const link = document.createElement("a");
            link.href = href;
            link.setAttribute("download", fichier);
            link.click();
            URL.revokeObjectURL(href);
        });

export default fetchAndDownloadFichiersData;
