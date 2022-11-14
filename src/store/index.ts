import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appSettingsReducer from "./appSettings.slice";
import initialCommuneReducer from "./initialCommune.slice";
import simulationCommuneReducer from "./simulationCommune.slice";

const reducers = combineReducers({
    appSettings: appSettingsReducer,
    initialCommune: initialCommuneReducer,
    simulationCommune: simulationCommuneReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
