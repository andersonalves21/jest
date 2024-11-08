/**
 * @jest-environment jsdom
 */

const login = require("./login");

describe("Teste de Login", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="login-form">
        <input type="text" id="username">
        <input type="password" id="password">
        <p id="message"></p>
      </form>
    `;
  });

  test("Deve exibir 'Login bem-sucedido' para credenciais corretas", () => {
    document.getElementById("username").value = "usuario";
    document.getElementById("password").value = "1234";

    login();

    expect(document.getElementById("message").textContent).toBe("Login bem-sucedido");
  });

  test("Deve exibir 'Usuário ou senha incorretos' para credenciais incorretas", () => {
    document.getElementById("username").value = "usuario";
    document.getElementById("password").value = "senha_incorreta";

    login();

    expect(document.getElementById("message").textContent).toBe("Usuário ou senha incorretos");
  });
});
