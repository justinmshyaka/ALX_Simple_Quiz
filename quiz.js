function checkAnswer() {
    var correctAnswer ="4";
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    var feedback = document.getElementById('feedback');

    if(userAnswer) {
        if(userAnswer.value === correctAnswer) {
            feedback.textContent ="Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again.";
        }
    } else {
        feedback.textContent ="Please select an ansuer ";
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);