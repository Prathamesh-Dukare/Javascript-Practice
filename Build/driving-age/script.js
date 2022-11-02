const ageInput = document.getElementById("age");
const submitBtn = document.getElementById("submit-btn");
const messageDiv = document.getElementById("message-div");

submitBtn.addEventListener("click", () => {
  let message = "";
  let messageClr = "black";
  let ageInputVal = ageInput.value;
  if (ageInputVal < 18) {
    message = `sorrry, you cant drive as your age is less by ${
      18 - ageInputVal
    } yrs`;
    messageClr = "red";
  } else {
    message = "Your are eligible";
    messageClr = "green";
  }
  messageDiv.classList.add(messageClr);
  messageDiv.innerText = message;
});
