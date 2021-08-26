var controle = 0;
function myFunction() {
    
    if(controle ==0){
        document.getElementById("demo").style.background = "black";
        controle++;
        }
    else{
        document.getElementById("demo").style.background = "green";
        controle--;
        }
}
