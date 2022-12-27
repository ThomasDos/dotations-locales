import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Commune } from "models/commune/commune.interface";

import type { RootState } from ".";

export interface CommuneComparer extends Commune {
    commune: string;
}

interface CommunesComparer {
    communes: CommuneComparer[];
}

const initialState: CommunesComparer = {
    communes: [],
};

const communesComparerSlice = createSlice({
    initialState,
    name: "communesComparer",
    reducers: {
        addCommune: (state, { payload }: PayloadAction<CommuneComparer>) => {
            const isAlreadyAdded = state.communes.find(
                com => com.codeInsee === payload.codeInsee
            );
            if (isAlreadyAdded) {
                return;
            }
            state.communes.push(payload);
        },
        removeCommune: (
            state,
            { payload: codeInsee }: PayloadAction<string>
        ) => {
            state.communes = state.communes.filter(
                commune => commune.codeInsee !== codeInsee
            );
        },
        resetCommunesComparer: () => ({
            communes: [],
        }),
    },
});

export const { addCommune, removeCommune, resetCommunesComparer } =
    communesComparerSlice.actions;

const selectSelf = (state: RootState) => state[communesComparerSlice.name];

export const selectComparerCommunes = createSelector(
    selectSelf,
    state => state
);
export const selectCommunes = createSelector(
    selectSelf,
    state => state.communes
);

export default communesComparerSlice.reducer;
