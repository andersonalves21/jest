function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    if (username === "usuario" && password === "1234") {
      message.textContent = "Login bem-sucedido";
    } else {
      message.textContent = "Usuário ou senha incorretos";
    }
  }
  
  module.exports = login; // Exporta a função para ser testada com Jest
  