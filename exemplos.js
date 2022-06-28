function calculaArea2(){
    //recuperação de entrada de dados
    var  base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    //processamneto
    var area = (base * altura)/2;
    //saida
    document.getElementById("area").value = area;
}