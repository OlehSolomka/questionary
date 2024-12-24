import { SCREEN_TYPES } from './constants';

export type Config = {
  questionaree: Questionnaire;
  theme: Theme;
};

export type Theme = {
  backgroundColour: string;
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
  sub_description: string | null;
  dynamic_values: Record<string, DynamicValue> | null;
  info_break: InfoBreakData | null;
  screen_type: ScreenType;
  options: Option[];
};

export type DynamicValue = {
  question_id: string;
  match_option: boolean;
  insert_value?: Record<string, string>;
};

export type Option = {
  id: string;
  description: string;
  next: string | null;
};

export type OptionElementProps = {
  option: Option;
};

export type InfoBreakData = {
  title: string;
  description: string;
};

export type UserResult = Record<Question['id'], Option>;

export type ScreenType = (typeof SCREEN_TYPES)[keyof typeof SCREEN_TYPES];
