import { ref } from "vue";

export function useQuiz() {
    const quiz = ref(null);

    const loadQuiz = async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        quiz.value = await response.json();
    };

    const getQuizArray = () => {
        return quiz.value ? quiz.value.results : [];
    };

    return { quiz, loadQuiz, getQuizArray };
}
