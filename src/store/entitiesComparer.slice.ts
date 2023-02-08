import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Entity } from "models/entity/entity.interface";

import type { RootState } from ".";

export interface EntityComparer extends Entity {
    libelle: string;
}
export type EntitiesComparer = EntityComparer[];

interface EntitiesComparerSlice {
    entities: EntitiesComparer;
}

const initialState: EntitiesComparerSlice = {
    entities: [],
};

const entitiesComparerSlice = createSlice({
    initialState,
    name: "entitiesComparer",
    reducers: {
        addEntity: (state, { payload }: PayloadAction<EntityComparer>) => {
            const isAlreadyAdded = state.entities.find(
                com => com.code === payload.code
            );
            if (isAlreadyAdded) {
                return;
            }
            state.entities.push(payload);
        },
        removeEntity: (state, { payload: code }: PayloadAction<string>) => {
            state.entities = state.entities.filter(
                entity => entity.code !== code
            );
        },
        resetEntitiesComparer: state => {
            state.entities = [];
        },
    },
});

export const { addEntity, removeEntity, resetEntitiesComparer } =
    entitiesComparerSlice.actions;

const selectSelf = (state: RootState) => state[entitiesComparerSlice.name];

export const selectComparerEntities = createSelector(
    selectSelf,
    state => state
);
export const selectEntities = createSelector(
    selectSelf,
    state => state.entities
);

export default entitiesComparerSlice.reducer;
