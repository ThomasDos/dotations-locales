import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import LabelProchainement from "components/ui/LabelText/LabelProchainement";
import styled from "styled-components";

import type { LawAvailable } from ".";

const ContainerRadioStyled = styled.div<{ disabled: boolean }>`
    border: ${({ disabled }) =>
        !disabled && "2px solid var(--blue-france-113)"};
    background-color: ${({ disabled }) => disabled && "var(--grey-950)"};
    padding: 16px;
    gap: 10px;
    border-radius: 4px;
    flex: 1;
    display: flex;
    align-items: center;
`;

const ProchainementStyled = styled.div`
    font-size: 14px;
    background-color: var(--blue-france-925);
    padding: 3px 10px 4px;
    gap: 4px;
    border-radius: 30px;
    flex: 1;
`;

const StyledLoiSpan = styled.span`
    flex: 2;
`;

interface RadioGroupContainerProps {
    radioButtonLawAvailable: LawAvailable[];
    selectLoiSimulation: string;
    setSelectLoiSimulation: (loi: LawAvailable) => void;
}

export default function RadioGroupContainer({
    radioButtonLawAvailable,
    selectLoiSimulation,
    setSelectLoiSimulation,
}: RadioGroupContainerProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;
        const disabled: boolean =
            radioButtonLawAvailable.find(
                (lawAvailable: LawAvailable) => value === lawAvailable.value
            )?.disabled ?? false;
        setSelectLoiSimulation({ disabled, value });
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
                        ({ value, disabled }: LawAvailable) => (
                            <FormControlLabel
                                key={value}
                                value={value}
                                sx={{ flex: 1 }}
                                control={
                                    <ContainerRadioStyled disabled={disabled}>
                                        <Radio
                                            disabled={disabled}
                                            checked={
                                                selectLoiSimulation === value
                                            }
                                            onChange={handleChange}
                                            value={value}
                                            name="radio-buttons"
                                            inputProps={{
                                                "aria-label": value,
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
                                        <div className="flex flex-1 items-center justify-between">
                                            <StyledLoiSpan>
                                                {disabled
                                                    ? "Projet de loi"
                                                    : "Loi en vigueur"}{" "}
                                                {value}
                                            </StyledLoiSpan>
                                            {disabled && <LabelProchainement />}
                                        </div>
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
