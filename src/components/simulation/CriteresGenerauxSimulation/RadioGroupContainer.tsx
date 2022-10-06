import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import styled from "styled-components";

const ContainerRadioStyled = styled.div`
    border: 2px solid var(--blue-france-113);
    padding: 16px;
    gap: 10px;
    border-radius: 4px;
    flex: 1;
`;

interface RadioGroupContainerProps {
    radioButtonLawAvailable: string[];
    selectLoiSimulation: string;
    setSelectLoiSimulation: (loi: string) => void;
}

export default function RadioGroupContainer({
    radioButtonLawAvailable,
    selectLoiSimulation,
    setSelectLoiSimulation,
}: RadioGroupContainerProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectLoiSimulation(event.target.value);
    };

    return (
        <div className="pl-2">
            <FormControl fullWidth>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    row
                >
                    {radioButtonLawAvailable.map((anneeLoi: string) => (
                        <FormControlLabel
                            key={anneeLoi}
                            value={anneeLoi}
                            sx={{ flex: 1 }}
                            control={
                                <ContainerRadioStyled>
                                    <Radio
                                        checked={
                                            selectLoiSimulation === anneeLoi
                                        }
                                        onChange={handleChange}
                                        value={anneeLoi}
                                        name="radio-buttons"
                                        inputProps={{
                                            "aria-label": anneeLoi,
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
                                    <span>Loi en vigueur {anneeLoi}</span>
                                </ContainerRadioStyled>
                            }
                            label=""
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
}
