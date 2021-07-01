import { useState } from 'react';
import { Button, Card, makeStyles, Typography } from "@material-ui/core"
import QuestionCard from "./Question"
import { Difficulty, fetchQuizQuestions, QuestionState } from '../api/api';

const TOTAL_QUESTIONS = 10;
export type AnswerObj = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}
const useStyles = makeStyles(() => ({
    mainCarad: {
        padding: 50,
        color: 'rgb(131,58,180)',
        background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    },
    startBtn: {
        marginTop: 20,
        color: 'white',
        borderRadius: 10,
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,32,121,0.6530987394957983) 35%, rgba(0,212,255,1) 100%)'
    }
}))
const MainCard = () => {
    const {  mainCarad, startBtn } = useStyles();
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    
    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!gameOver) {

            // get user answer
            const answer = e.currentTarget.value;
            // check answer against correct answer
            const correct = questions[number].correct_answer === answer;

            // Add score if answer is correct
            if(correct) setScore(prev => prev + 1);

            //save answer in the array for user answers
            const answerObj = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }
            setUserAnswers((prev) => [...prev, answerObj]);
        }
    }
    
    const nextQuestion = () => {
        // Move on to the next question if not the last question;
        const nextQuestion = number + 1;
        if(nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        }
        else {
            setNumber(nextQuestion);
        }
    }

    return (
        <Card className={mainCarad}>
            <Typography variant="h4">
                React Quiz
            </Typography>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <Button className={startBtn} onClick={startTrivia}>Start</Button>
            ): null}
            {!gameOver ? <Typography>Score: {score}</Typography> : null}
            {loading && <Typography>Loading Questions ...</Typography>}
            {!loading && !gameOver && (
                <QuestionCard

                questionNr={number + 1}
                question={questions[number].question}
                answers={questions[number].answers}
                callback={checkAnswer}
                userAnswer={userAnswers ? userAnswers[number]: undefined}
                totalQuestions={TOTAL_QUESTIONS}
                />
            )}
            {!gameOver && !loading && 
            userAnswers.length === number + 1
            && number !== TOTAL_QUESTIONS - 1 ? 
            (
                <Button className={startBtn} fullWidth color="secondary"
                variant="outlined"
                onClick={nextQuestion}>
                Next Question</Button>
            ): null}
        </Card>
    )
}

export default MainCard;