import { configureStore } from "@reduxjs/toolkit";

import initialCommuneReducer from "./initialCommune/initialCommune.slice";
import simulationCommuneReducer from "./simulationCommune/simulationCommune.slice";

const store = configureStore({
    reducer: {
        initialCommune: initialCommuneReducer,
        simulationCommune: simulationCommuneReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
