let img1= "fotos/primeiraLimao.jpg";
let img2 = "fotos/segundaTrufa.jpg";
let img3 = "fotos/teceiraTrufa.jpg";

function foi(){
    
    let aux= img1;
    img1 = img2;
    img2 = img3;
    img3=aux;
    document.getElementById("frutas1").src=img1;
}

function voltou(){
    let aux1 = img3;
    aux1=img2;
    img2=img1;
    img1=aux1;
    document.getElementById("frutas1").src=img3;
}
