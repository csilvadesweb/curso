const btn = document.getElementById("btnLogin");

if (btn) {
  btn.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
      alert("Preencha email e senha");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.senha === senha
    );

    if (user) {
      // LOGIN
      localStorage.setItem("userLogged", JSON.stringify(user));
      window.location.href = "home.html";
    } else {
      // CADASTRO AUTOMÁTICO
      const newUser = { email, senha };
      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("userLogged", JSON.stringify(newUser));

      window.location.href = "home.html";
    }
  });
}