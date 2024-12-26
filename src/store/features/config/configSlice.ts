import { Questionnaire, Theme } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';
import config from '../../../config.json';

interface ConfigSliceState {
  questionnaire: Questionnaire;
  theme: Theme;
}

const initialState: ConfigSliceState = {
  questionnaire: config.questionnaire as Questionnaire,
  theme: config.theme,
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: () => ({}),

  selectors: {
    getQuestions: (stage) => stage.questionnaire.questions,
    getTheme: (state) => state.theme, //unused in this implementation, variables are hardcoded in global.css
    getCSSVariables: (state) => state.theme.variables, //unused in this implementation variables are hardcoded in global.css
  },
});

export const { getTheme, getQuestions, getCSSVariables } = configSlice.selectors;
