import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import styled from "styled-components";

import {
    InitSimulationPeriode,
    InitSimulationPeriodes,
} from "models/init/init.interface";
import LawCardBody from "./LawCardBody";

const ContainerRadioStyled = styled.div`
    border: 2px solid var(--blue-france-113);
    padding: 16px;
    gap: 10px;
    border-radius: 4px;
    flex: 1;
    display: flex;
    align-items: center;
`;

interface RadioGroupContainerProps {
    radioButtonLawAvailable?: InitSimulationPeriodes;
    selectLoiSimulation?: InitSimulationPeriode;
    setSelectLoiSimulation: (loi: InitSimulationPeriode) => void;
}

export default function RadioGroupContainer({
    radioButtonLawAvailable,
    selectLoiSimulation,
    setSelectLoiSimulation,
}: RadioGroupContainerProps) {
    if (!radioButtonLawAvailable) return null;

    const handleChange = (annee: string, label: string) => {
        setSelectLoiSimulation({ label, annee });
    };

    return (
        <div className="pl-4 sm:pl-2">
            <FormControl fullWidth>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    row
                    sx={{
                        "@media (max-width: 768px)": {
                            flexDirection: "column !important",
                            gap: "16px",
                            width: "100%",
                        },
                        display: "flex",
                    }}
                >
                    {radioButtonLawAvailable.map(
                        ({ annee, label }: InitSimulationPeriode) => (
                            <FormControlLabel
                                key={label}
                                value={annee}
                                sx={{ flex: 1 }}
                                control={
                                    <ContainerRadioStyled>
                                        <Radio
                                            checked={
                                                selectLoiSimulation?.annee ===
                                                annee
                                            }
                                            onChange={() =>
                                                handleChange(annee, label)
                                            }
                                            value={annee}
                                            name="radio-buttons"
                                            inputProps={{
                                                "aria-label": annee,
                                            }}
                                            sx={{
                                                "&.Mui-checked": {
                                                    color: "var(--blue-france-113)",
                                                },
                                                color: "var(--blue-france-113)",
                                                marginRight: "8px",
                                                padding: 0,
                                            }}
                                        />
                                        <LawCardBody
                                            annee={annee}
                                            label={label}
                                        />
                                    </ContainerRadioStyled>
                                }
                                label=""
                            />
                        )
                    )}
                </RadioGroup>
            </FormControl>
        </div>
    );
}
