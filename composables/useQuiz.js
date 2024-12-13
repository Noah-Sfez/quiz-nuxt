export default function useQuiz(quiz) {
    const score = ref(0);
    const currentQuestionIndex = ref(0);

    const nextQuestion = () => {
        currentQuestionIndex.value += 1;
    };
    
    const selectedAnswerIndex = ref(1);

    const checkAnswer = (selectedAnswerIndex) => {
        const currentQuestion = quiz.questions[currentQuestionIndex.value];
        if (selectedAnswerIndex === currentQuestion.correctAnswer - 1) {
            score.value += 1;
            console.log("Correct");
            console.log(score.value);
            nextQuestion();
        } else {
            console.log("Incorrect");
            console.log(score.value);
            nextQuestion();
        }
    };

    const resetQuiz = () => {
        score.value = 0;
        currentQuestionIndex.value = 0;
        selectedAnswersIndex.value = null;
    };
    

    return {
        quiz,
        score,
        currentQuestionIndex,
        questions: quiz.questions,
        nextQuestion,
        selectedAnswerIndex,
        checkAnswer,
        resetQuiz
    };
}
