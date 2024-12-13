export default function useQuiz(quiz) {
    const score = ref(0);
    const currentQuestionIndex = ref(0);

    const nextQuestion = () => {
        if (currentQuestionIndex.value < quiz.questions.length - 1) {
            currentQuestionIndex.value += 1;
        }
    };

    const checkAnswer = () => {
        const currentQuestion = quiz.questions[currentQuestionIndex.value];
        if (selectedAnswerIndex.value === currentQuestion.correctAnswer) {
            score.value += 1;
        }
    }

    const selectedAnswerIndex = ref(null);

    return {
        quiz,
        score,
        currentQuestionIndex,
        questions: quiz.questions,
        nextQuestion,
        selectedAnswerIndex,
        checkAnswer,
    };
}
