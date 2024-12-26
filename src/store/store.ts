import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { questionnaireSlice } from './features/questionnaire';
import { configSlice } from './features/config';

const rootReducer = combineSlices(questionnaireSlice, configSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
