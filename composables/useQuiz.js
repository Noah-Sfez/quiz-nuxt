export default function useQuiz(quiz) {
    const score = ref(0); 
    const maxScorePerQuestion = 5; 
    const currentQuestionIndex = ref(0);
    const selectedAnswerIndex = ref(null);
    let questionStartTime = null;

    const nextQuestion = () => {
        currentQuestionIndex.value += 1;
        questionStartTime = new Date(); 
    };

    const checkAnswer = (selectedAnswerIndex) => {
        const currentQuestion = quiz.questions[currentQuestionIndex.value];
        const questionEndTime = new Date(); 
        const responseTimeInSeconds =
            (questionEndTime - questionStartTime) / 1000; 

        if (selectedAnswerIndex === currentQuestion.correctAnswer - 1) {
            let points = 1;
            if (responseTimeInSeconds <= 1) {
                points = maxScorePerQuestion;
            } else if (responseTimeInSeconds >= 5) {
                points = 1;
            } else {
                points =
                    maxScorePerQuestion -
                    ((responseTimeInSeconds - 1) / 4) *
                        (maxScorePerQuestion - 1);
            }
            score.value += points; 
        }
        score.value = parseFloat(score.value.toFixed(3));
        nextQuestion();
    };

    const resetQuiz = () => {
        score.value = 0;
        currentQuestionIndex.value = 0;
        selectedAnswerIndex.value = null;
        questionStartTime = null;
    };

    questionStartTime = new Date();
    return {
        quiz,
        score,
        currentQuestionIndex,
        questions: quiz.questions,
        nextQuestion,
        selectedAnswerIndex,
        checkAnswer,
        resetQuiz,
    };
}
