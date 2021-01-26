let questao = document.getElementById('inQuestProv');
let alter = document.getElementById('inAltQuestProv');
let enviar = document.getElementById('envGab');
var letra = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let row = 0;
let cell = 0;
var cont = 0;

questao.addEventListener('focusout', function () {
    if (alter != null) {
        InserirQuestao(questao.value, alter.value);
    }
})

alter.addEventListener('focusout', function () {
    InserirQuestao(questao.value, alter.value);
});

enviar.addEventListener('click', function () {
    enviarGab();
})

function InserirQuestao(quest, alt) {
    var tabela = document.getElementById('tabela');
    if (temQuestao()) {
    }

    document.getElementById('prova').hidden = false;
    for (let index = 0; index < quest; index++) {

        var linha = tabela.insertRow(index);
        linha.innerHTML = "Questão " + (index + 1)+" - Valor: " + '<input class="ValorQ" type="number" name="ValorQuestao" id="inValQuest'+index+'" step="1" min="1" max=10 required>';
        row++;

        for (let j = 0; j < alt; j++) {
            var coluna = linha.insertCell(j);

            coluna.innerHTML = '<label for="Questao' + index + '">' + letra[j] + '<input type="radio" name="Questao' + index + '"id="Questao' + cont + '" value="' + letra[j] + '" required/>';
            cont++;
            cell++;
        }
    }
}

function temQuestao() {
    if (row > 0) {
        for (let a = 0; a <= row; a++) {
            tabela.deleteRow(-1);
        }
    }
}

function enviarGab() {
    var formulario = document.getElementById('form_CadGab');

    var qtdQuestoes = formulario.inQuestProv.value;
    var qtdAlter = formulario.inAltQuestProv.value;
    var total = qtdQuestoes*qtdAlter;
    var nome = formulario.inNomeProva.value;
    var respostas = [];
    var ValorQuestao = [];

    for (let index = 0; index < total; index++) {
        if((document.getElementById('Questao' + index + '').checked) == true){
            respostas.push(document.getElementById('Questao' + index + '').value);
        }
    }

    for (let index = 0; index < qtdQuestoes; index++) {
    ValorQuestao.push((document.getElementById('inValQuest' + index + '').value));
    }
    
    console.log("Prova - " + nome);
    console.log("Gabarito =" + respostas.toString());
    console.log("Valores =" + ValorQuestao.toString());

}




