import { SCREEN_TYPES } from './constants';

export type Config = {
  questionnaire: Questionnaire;
  theme: Theme;
};

export type Theme = {
  variables: Record<string, string>;
};

export type Questionnaire = {
  question_inc: number;
  options_inc: number;
  questions: Question[];
};

export type Question = {
  id: string;
  root: boolean;
  description: string;
  description_short: string;
  helper_text: string | null;
  dynamic_values: Record<string, DynamicValue> | null;
  info_break: InfoBreakData | null;
  screen_type: ScreenType;
  options: Option[];
};

export type DynamicValue = {
  question_id: string;
  match_option: boolean;
  insert_value: Record<string, string> & { default: string };
};

export type Option = {
  id: string;
  description: string;
  next: string | null;
};

export type OptionElementProps = {
  option: Option;
  onOptionClick: (option: Option) => void;
};

export type InfoBreakData = {
  title: string;
  description: string;
};

export type UserAnswer = {
  question: Question;
  answer: Option;
};

export type UserResult = Record<Question['id'], UserAnswer>;

export type OutputResultData = { description_short: string; answer_description: string };

export type ScreenType = (typeof SCREEN_TYPES)[keyof typeof SCREEN_TYPES];
