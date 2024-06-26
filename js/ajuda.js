document.getElementById("formReceptor1").addEventListener("submit", function(event) {
    event.preventDefault();
    var duvida = document.getElementById("duvida").value;

    var duvidasArmazenadas = JSON.parse(localStorage.getItem('duvidas')) || [];
    duvidasArmazenadas.push(duvida);

    localStorage.setItem('duvidas', JSON.stringify(duvidasArmazenadas));

    document.getElementById("formReceptor1").reset();
    alert("Dúvida enviada com sucesso!");
});

document.getElementById("formReceptor2").addEventListener("submit", function(event) {
    event.preventDefault();
    var critica = document.getElementById("critica").value;

    var criticasArmazenadas = JSON.parse(localStorage.getItem('criticas')) || [];
    criticasArmazenadas.push(critica);

    localStorage.setItem('criticas', JSON.stringify(criticasArmazenadas));

    document.getElementById("formReceptor2").reset();
    alert("Opinião enviada com sucesso!");
});
