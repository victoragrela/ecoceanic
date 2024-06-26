var dadosCadastro = localStorage.getItem('dadosCadastro');
var usuariosCadastrados = [];
if (dadosCadastro) {
    usuariosCadastrados = JSON.parse(dadosCadastro);
}

document.getElementById('mostrarSenha').addEventListener('change', function(e) {
    var senhaInput = document.getElementById('senha');
    if (e.target.checked) {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var usuarioEncontrado = usuariosCadastrados.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");

        localStorage.setItem('dadosLogin', JSON.stringify({ email: email, senha: senha }));

        window.location.href = "../html/home.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});