export default function (quiz) {
    const score = ref(0);

    const currentQuestionIndex = ref(0);

    return { quiz, score, currentQuestionIndex, questions:quiz.questions };
}
