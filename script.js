let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("password");
let loginButton = document.getElementById("login-button");
let forgotPasswordButton = document.getElementById("redefinir-senha");
let modal = document.getElementById("modal-esqueci-senha");
let closeButton = document.querySelector(".close");

forgotPasswordButton.addEventListener("click", function() {
    modal.classList.add("active");
})

closeButton.addEventListener("click", function() {
    modal.classList.remove("active");
});

loginButton.addEventListener("click", function() {
    let username = inputUsername.value;
    let password = inputPassword.value;

    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (inputUsername.value.length < 3) {
        alert("O nome do usuário deve conter no mínimo 3 caracteres.");
    } else if (inputPassword.value.length < 6) {
        alert("A senha deve conter no mínimo 6 caracteres.");
    } else {
        alert("Login bem-sucedido!");
    }


});
