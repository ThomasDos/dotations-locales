import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Entity } from "models/entity/entity.interface";
import type { RootState } from ".";

export type Entities = Entity[];

interface EntitiesComparerSlice {
    entities: Entities;
}

const initialState: EntitiesComparerSlice = {
    entities: [],
};

const entitiesComparerSlice = createSlice({
    initialState,
    name: "entitiesComparer",
    reducers: {
        addEntity: (state, { payload }: PayloadAction<Entity>) => {
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
