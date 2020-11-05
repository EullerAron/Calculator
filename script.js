//criação de variaveis de controle
var conta = ""
var resultado = 0
var apaga = false
var confirma = false
var nTemporario = ""
var énegativo = false
var controle = 0
var arr = []

//função para o controle dos dois visores
function paraCima(operacao) {
    arr.push(Number(document.querySelector("#lbVisor").textContent))

    //if e elses para as operações que não funcionam com o metodo eval
    if (operacao == "=") {
        document.querySelector("#lbVisorSec").textContent = document.querySelector("#lbVisorSec").textContent + document.querySelector("#lbVisor").textContent + " " + operacao + " "
        conta = conta + document.querySelector("#lbVisor").textContent
        mostrar(calcular())

    } else if (operacao == "** 2") {
        document.querySelector("#lbVisorSec").textContent = document.querySelector("#lbVisorSec").textContent + document.querySelector("#lbVisor").textContent + " " + operacao + " "
        conta = "(" + conta + document.querySelector("#lbVisor").textContent + ")"
        conta = conta + "** 2"
        mostrar(calcular())

    } else if (operacao == "√") {
        let nRad = document.querySelector("#lbVisor").textContent
        document.querySelector("#lbVisorSec").textContent = document.querySelector("#lbVisorSec").textContent + "√" + document.querySelector("#lbVisor").textContent + " "
        conta = conta + "Math.sqrt(" + nRad + ")"
        mostrar(calcular())

    } else if (operacao == "%") {
        //ifs para operação de porcentagem, com uma variavel de controle que se altera dependendo da operação anterior 
        if (controle == 1) {
            let temp = Number(arr[arr.length - 2] / 100 * arr[arr.length - 1])
            document.querySelector("#lbVisorSec").textContent = document.querySelector("#lbVisorSec").textContent + " " + temp + " "
            conta = conta + temp
            mostrar(calcular())

        } else if (controle == 2) {
            let temp = Number(arr[arr.length - 1] / 100)
            document.querySelector("#lbVisorSec").textContent = document.querySelector("#lbVisorSec").textContent + " " + temp + " "
            conta = conta + temp
            mostrar(calcular())

        } else {
            document.querySelector("#lbVisorSec").textContent = "0"
            document.querySelector("#lbVisor").textContent = "0"
        }
        controle = 0

    } else if (operacao == "1/") {
        document.querySelector("#lbVisorSec").textContent = operacao + document.querySelector("#lbVisor").textContent
        conta = operacao + "(" + document.querySelector("#lbVisor").textContent + ")"
        mostrar(calcular())

    }
    else {
        document.querySelector("#lbVisorSec").textContent = document.querySelector("#lbVisorSec").textContent + document.querySelector("#lbVisor").textContent + " " + operacao + " "
        conta = conta + document.querySelector("#lbVisor").textContent
        mostrar(calcular())
        conta = conta + operacao
    }
    apaga = true
}
//função para colocar os numeros nos visores
function numeros(aux) {
    if (apaga) {
        apaga = false
        document.querySelector("#lbVisor").textContent = aux
    } else {

        document.querySelector("#lbVisor").textContent = document.querySelector("#lbVisor").textContent + aux
    }


}


//função para alterar de positivo para negativo e vice-versa
document.querySelector("#±").addEventListener("click", function (event) {

    document.querySelector("#lbVisor").textContent = Number(document.querySelector("#lbVisor").textContent) * -1
    énegativo = !énegativo
})

//atribui o resultado da conta a uma variavel
function calcular() {
    console.log(conta)
    resultado = eval(conta);
    console.log(resultado);
    return resultado


}
//função para apagar apenas o visor primario
document.querySelector("#CE").addEventListener("click", function (event) {
    document.querySelector("#lbVisor").textContent = "0"
    apaga = true
})

//função para resetar a calculadora
document.querySelector("#C").addEventListener("click", function (event) {
    document.querySelector("#lbVisor").textContent = "0"
    document.querySelector("#lbVisorSec").textContent = ""
    conta = ""
    apaga = true
})

//função backspace
document.querySelector("#apagar").addEventListener("click", function (event) {
    let pTemp = document.querySelector("#lbVisor").textContent.slice(0, -1)
    document.querySelector("#lbVisor").textContent = pTemp
})
//limpa o visor secundario
function limpaVisorSec() {
    document.querySelector("#lbVisorSec").textContent = ""
}

//exibe o resultado no visor primario
function mostrar(resultado) {
    document.querySelector("#lbVisor").textContent = resultado
}

//função para resetar a calculadora
function limpar() {
    resultado = 0
    conta = ""
}

//função de controle para a operação '%'
function controlar(param) {
    if (param == 1) {
        controle = 1
    } else {
        controle = 2
    }

}