var modal = document.getElementById("myModal"); //obtem o modal
var btn = document.getElementById("myBtn"); //obtem o botao que abre o modal
var span = document.getElementsByClassName("close")[0];//obtem o elemento que fecha o modal

//quando o usuario clicar no botao, abre o modal
btn.onclick = function(){
    modal.style.display = "block";
}

//quando o usuario clicar no <span> (x) , fecha o modal

span.onclick = function(){
    modal.style.display = "none";
}

//quando o usuario clicar fora do modal , fecha o modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

