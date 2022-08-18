import { configureStore } from "@reduxjs/toolkit";

import simulationCommuneReducer from "./simulationCommune/simulationCommune.slice";

const store = configureStore({
    reducer: { simulationCommune: simulationCommuneReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
