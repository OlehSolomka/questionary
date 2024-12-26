import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { OutputResultData, Question, UserAnswer, UserResult } from './types';
import { DEFAULT_KEY, ROUTES } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buildOrderedResultDataArray = (userResults: UserResult): OutputResultData[] => {
  const orderedUserAnswerFlow: OutputResultData[] = [];

  let rootQuestionId: string | null = null;
  for (const questionId in userResults) {
    const { question } = userResults[questionId];
    if (question.root) {
      rootQuestionId = questionId;
      break;
    }
  }

  //maintain current question order
  if (!rootQuestionId) {
    const result = [];

    for (const key in userResults) {
      const { question, answer } = userResults[key] as UserAnswer;
      result.push({
        description_short: question.description_short,
        answer_description: answer.description,
      });
    }
    return result;
  }

  //build question link from root
  let currentQuestionId: string | null = rootQuestionId;

  while (currentQuestionId) {
    const { question, answer } = userResults[currentQuestionId] as UserAnswer;

    orderedUserAnswerFlow.push({
      description_short: question.description_short,
      answer_description: answer.description,
    });

    currentQuestionId = answer.next || null;
  }
  return orderedUserAnswerFlow;
};

export const createQuestionRoutePath = (id: string | undefined | null) => {
  if (!id) return ROUTES.ROOT;
  return `/${ROUTES.QUESTION}/${id}`;
};

export const parseDynamicValues = (
  currentQuestion: Question,
  userAnswers: UserResult,
): string | false => {
  const { description, dynamic_values } = currentQuestion;

  if (!dynamic_values) return description;

  const result = description.replace(/{{(.*?)}}/g, (_, dynamicKey) => {
    const dynamicValue = dynamic_values[dynamicKey.trim()];

    if (!dynamicValue) {
      return `{{${dynamicKey}}}`;
    }

    const { question_id, match_option, insert_value } = dynamicValue;

    const userAnswer = userAnswers[question_id];

    if (!userAnswer) {
      return insert_value[DEFAULT_KEY];
    }

    const { answer } = userAnswer;

    if (match_option) {
      // If match_option is true, use the answer's description
      return answer.description;
    } else if (insert_value) {
      // If match_option is false, use the insert_value mapping
      return insert_value[answer.id] || insert_value[DEFAULT_KEY];
    }

    // Fallback to returning the placeholder if no logic applies
    return insert_value[DEFAULT_KEY];
  });

  return result;
};
