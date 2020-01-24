


var contador = 0;
function inicio(){
    if (contador==1){
        document.getElementById("scroll").innerHTML("las comandas");
        contador = contador+1;
    }else if(contador == 2){
        document.getElementById("scroll").innerHTML("las ventas");
        contador = contador+1;
    }else if(contador == 3){
        document.getElementById("scroll").innerHTML("las reservas");
        contador =0;
    }
}

while(true){
    setInterval(inicio(),1000);
}
