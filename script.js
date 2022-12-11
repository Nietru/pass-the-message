/* 1 - store it in the constant variable "messageInput" and retrieve it from html file with getElementById*/
const messageInput = document.getElementById("message-input");

/* 3 - this makes it so the user can hit the Enter key as an alternative to clicking the Submit button*/
messageInput.addEventListener("keydown", function(event) {
    if(event.key == "Enter")
    getMessage();
})
/* 2 - add a function to the submit button: we called that "getMessage" in the html file, where we also decided it would display in the p tag with message-output*/
function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = ""; /*clears the input field after hitting submit button*/
}