import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { FICHIERS_DISPONIBLES } from "constants/fichiersDisponiblesMap";
import { useEffect, useState } from "react";
import fetchAndDownloadFichiersData from "services/fetchAndDownloadFichiersData";
import { toastPromise } from "utils/customToasts";

const FichiersDisponiblesSelect = () => {
    const [fichier, setFichier] = useState("");

    const handleChange = (e: SelectChangeEvent<string>) => {
        setFichier(e.target.value);
    };

    useEffect(() => {
        if (!fichier) return;

        toastPromise(
            fetchAndDownloadFichiersData(
                fichier as keyof typeof FICHIERS_DISPONIBLES
            ),
            {
                loading:
                    "Préparation du fichier, merci de patienter jusqu'au téléchargement...",
                success: "Fichier téléchargé",
                error: "Une erreur est survenue, merci de réessayer",
            }
        );
    }, [fichier]);

    return (
        <FormControl fullWidth>
            <InputLabel id="selector-file-download-label">
                Téléchargez les données
            </InputLabel>
            <Select
                labelId="selector-file-download-label"
                id="selector-file-download"
                value={fichier}
                label="Téléchargez les données"
                onChange={handleChange}
            >
                {Object.keys(FICHIERS_DISPONIBLES).map((fichier: string) => {
                    return (
                        <MenuItem
                            value={
                                FICHIERS_DISPONIBLES[
                                    fichier as keyof typeof FICHIERS_DISPONIBLES
                                ]
                            }
                            key={fichier}
                        >
                            {fichier}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default FichiersDisponiblesSelect;
