const formulario = 
document.querySelector('#formCadastro');
const mensagem = 
document.querySelector('#mensagemSucesso')


    document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const mensagem = document.getElementById("mensagemSucesso");

    mensagem.classList.remove("d-none");
    this.reset();

    setTimeout(function () {
        mensagem.classList.add("d-none");
    }, 3000);
    document.getElementById("data").min = new Date().toISOString().split("T")[0];
     formulario.reset();
});
