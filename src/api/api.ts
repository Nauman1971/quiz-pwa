import { shuffleArray } from "../utils/utils";
import results from "./offline-data";
var isOnline = false;

window.addEventListener('online', onLine);
window.addEventListener('offline', offLine);
function onLine() {
    isOnline = true
}
function offLine() {
    isOnline = false;
}
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
        return data.results.map((question: Question) => {
        return {
            ...question,
            answers: shuffleArray([...question.incorrect_answers,
            question.correct_answer])
        }
    })
}