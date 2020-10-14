function noscroll() {
    window.scrollTo(0,0);
}
window.addEventListener("scroll",noscroll);


function Mostrar() {
    document.getElementById('MA').style.animation = "fly 0.5s"
    document.getElementById('MA').style.display = 'Block'
    document.getElementById('abrir').style.display = 'none'
    document.getElementById('produtores').style.display = 'none'
    
};
function Fechar() {
    window.scrollTo(0,0);
    document.getElementById('MA').style.animation = "backfly 0.5s"
    let i = 0 
    const timer = setInterval(function() {
if (i >= 5) {
    document.getElementById('MA').style.display = 'none'// aborta a execução caso a condição seja atingida
    document.getElementById('produtores').style.display = 'block'
    document.getElementById('abrir').style.display = 'block'
    clearInterval(timer)
}   else{}
    i = 5
}, 200)
document.form.h.value = ''
document.form.textbox.value = ''
}   
function insert(num){ //cria uma função insert, que recebe um valor num
        document.form.textbox.value = document.form.textbox.value + num; //atribui ao objeto textbox, dentro do form, o valor dele mesmo mais o num.
    
};
function clean(){ //cria uma função clean.
    var x = document.form.textbox.value; //cria uma váriavel x e dentro dela atribui-se o valor do objeto textbox.
    document.form.h.value = x
    document.form.textbox.value = ''; //atribui um valor de string vazia ao objeto textbox.
};

function total(){ //cria uma função total.
    var x = document.form.textbox.value; //cria uma váriavel x e dentro dela atribui-se o valor do objeto textbox.
    if(x){ //Verifica se X é verdadeiro.
        document.form.textbox.value = eval(x);
        //console.log(x) //Se for, realiza uma operação usando os valores presentes no objeto textbox.
    };
};