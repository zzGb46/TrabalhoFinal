let img1= "fotos/maracujaOrig.jpg";
let img2 = "fotos/maracujaOrig2.jpg";
let img3 = "fotos/maracujaOrig3.jpg";

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
