import { useState, useCallback} from "react";

import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";
import Summary from './Summary';

export default function Quiz() {

    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    const [userAnswers, setUserAnswers] = useState([]);


    const activeQuestionIndex = userAnswers.length ;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;



    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    },[]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer])
        if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />
    }
    

    return(

        <div id="quiz">
           <Question 
           key={activeQuestionIndex}
           index={activeQuestionIndex}
        //    questionText={QUESTIONS[activeQuestionIndex].text}
        //    answers={QUESTIONS[activeQuestionIndex].answers}
           onSelectAnswer = {handleSelectAnswer}
        //    answerState={answerState}
        //    selectedAnswer={userAnswers[userAnswers.length - 1]}
           onSkipAnswer = {handleSkipAnswer}
           />
        </div>
    )
}