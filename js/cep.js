var cep = document.getElementById('inCepAlu');
var cidade;
var bairro;
var rua;
var comp;

cep.addEventListener('focusout', function () {
    buscarCep(cep.value)
    console.log(cep.value);

})

function buscarCep(cep) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://viacep.com.br/ws/" + cep + "/json/");

    xhr.addEventListener('load', function () {
        var resposta = xhr.responseText;
        console.log(resposta);

        var resp = JSON.parse(resposta);
        cidade = resp.localidade;
        var campoCidade = document.getElementById('inCidAlu').value = cidade;

        bairro = resp.bairro;
        var campoBairro = document.getElementById('inBaiAlu').value = bairro;

        rua = resp.logradouro;
        var campoRua = document.getElementById('inRuaAlu').value = rua;

        comp = resp.complemento;
        var campoComp = document.getElementById('inCompAlu').value = comp;
    })

    xhr.send();
}