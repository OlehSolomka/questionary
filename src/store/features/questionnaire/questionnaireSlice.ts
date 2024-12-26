import { InfoBreakData, Question, UserAnswer, UserResult } from '@/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuestionnaireSlicState {
  answers: UserResult;
  currentQuestion: Question | null;
  isCompleted: boolean;
  infoBreak: InfoBreakData | null;
}

const initialState: QuestionnaireSlicState = {
  answers: {},
  currentQuestion: null,
  isCompleted: false,
  infoBreak: null,
};

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: (create) => ({
    answerQuestion: create.reducer((state, action: PayloadAction<UserAnswer>) => {
      state.answers[action.payload.question.id] = {
        question: action.payload.question,
        answer: action.payload.answer,
      };
    }),
    updateCurrentQuestion: create.reducer((state, action: PayloadAction<Question | null>) => {
      state.currentQuestion = action.payload;
    }),
    updateIsCompleted: create.reducer((state, action: PayloadAction<boolean>) => {
      state.isCompleted = action.payload;
    }),
    updateInfoBreakData: create.reducer((state, action: PayloadAction<InfoBreakData | null>) => {
      state.infoBreak = action.payload;
    }),

    resetQuestionnaire: create.reducer((state) => {
      state.answers = {};
      state.infoBreak = null;
      state.isCompleted = false;
    }),
  }),

  selectors: {
    getAnswers: (state) => state.answers,
    getCurrentQuestion: (state) => state.currentQuestion,
    getIsCompleted: (state) => state.isCompleted,
    getInfoBreakData: (state) => state.infoBreak,
  },
});

export const {
  answerQuestion,
  updateCurrentQuestion,
  resetQuestionnaire,
  updateIsCompleted,
  updateInfoBreakData,
} = questionnaireSlice.actions;

export const { getAnswers, getCurrentQuestion, getIsCompleted, getInfoBreakData } =
  questionnaireSlice.selectors;
