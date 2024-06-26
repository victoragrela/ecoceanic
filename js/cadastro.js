var dadosCadastro = localStorage.getItem('dadosCadastro');
if (dadosCadastro) {
    usuariosCadastrados = JSON.parse(dadosCadastro);
}

var usuariosCadastrados = [
    { email: "exemplo@email.com", senha: "senha123" },
    { email: "outro@email.com", senha: "outrasenha456" }
];

document.getElementById('cpf').addEventListener('input', function(e) {
    var cpf = e.target.value.replace(/\D/g, '');
    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11);
    }
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    e.target.value = cpf;
});

document.getElementById('mostrarSenha').addEventListener('change', function(e) {
    var senhaInput = document.getElementById('senha');
    if (e.target.checked) {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }
});

document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    var senha = document.getElementById('senha').value;

    var emailJaCadastrado = usuariosCadastrados.some(function(usuario) {
        return usuario.email === email;
    });

    if (emailJaCadastrado) {
        alert("Email já cadastrado!");
        return;
    }

    console.log("Nome Completo: " + nomeCompleto);
    console.log("Email: " + email);
    console.log("CPF: " + cpf);
    console.log("Senha: " + senha);

    usuariosCadastrados.push({ email: email, senha: senha });

    localStorage.setItem('dadosCadastro', JSON.stringify(usuariosCadastrados));

    document.getElementById('cadastroForm').reset();
    alert("Cadastro realizado com sucesso!");
    window.location.href = "../html/login.html";
});
