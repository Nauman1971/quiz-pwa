import { Button, ButtonGroup, Card, CardContent, CardHeader, Checkbox, makeStyles, Typography } from '@material-ui/core';
import { AnswerObj } from '../components/MainCard';

export type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObj | undefined;
    questionNr: number;
    totalQuestions: number;
}
const useStyles = makeStyles(() => ({
    questionCard: {
        backgroundColor: 'rgb(37, 44, 74)',
        color: 'white'
    },
    typography: {
        color: 'rgb(138, 147, 187)'
    },
    answerBtns: {
        borderRadius: 15,
        color: 'white',
        border: '4px solid rgb(33, 72, 106)',
        backgroundColor: 'rgb(36, 50, 81)'
    },
}))
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    const { questionCard, typography, answerBtns } = useStyles();
    return (
        <Card className={questionCard}>
            <CardHeader
            title={question}
            />
            <CardContent>
                <Typography className={typography}>
                    Question: {questionNr} / {totalQuestions}
                </Typography>
            </CardContent>
            {answers.map(answer => (
                <CardContent key={answer}>
                <Button fullWidth color='secondary'
                value={answer}
                className={answerBtns}
                variant="contained"
                disabled={userAnswer ? true: false} 
                onClick={callback}>{answer}
                </Button>
                </CardContent>
            ))}
        </Card>
    )
}

export default QuestionCard;