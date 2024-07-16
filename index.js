let img1= "fotos/maracujaOrig.jpg";
let img2 = "fotos/maracujaOrig2.jpg";
let img3 = "fotos/maracujaOrig3.jpg";

function foi(){
    document.getElementById("frutas1").src=img1;
    let aux= img1;
    img1 = img2;
    img2 = img3;
    img3=aux;
}

