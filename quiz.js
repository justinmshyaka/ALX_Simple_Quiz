function checkAnsuer() {
    var correctAnsuer ="4";
    var userAnsuer = document.querySelector('input[name="quiz"]:checked');
    var feedback = document.getElementById('feedback');

    if(userAnsuer) {
        if(userAnsuer.value === correctAnsuer) {
            feedback.textContent ="Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again.";
        }
    } else {
        feedback.textContent ="Please select an ansuer ";
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnsuer);