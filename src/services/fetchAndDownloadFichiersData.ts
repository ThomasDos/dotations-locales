import axios from "axios";

const fetchAndDownloadFichiersData = (fichier: string) =>
    axios
        .get(`${process.env.NEXT_PUBLIC_DOTATIONS_API_URL}/files/${fichier}`, {
            responseType: "blob",
        })
        .then(response => {
            const href = URL.createObjectURL(response.data);
            const link = document.createElement("a");
            link.href = href;
            link.setAttribute("download", fichier);
            link.click();
            URL.revokeObjectURL(href);
        });

export default fetchAndDownloadFichiersData;
