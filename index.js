function onLoad() {
    //alert()
    console.log("Hello")

};

function maxImage() {
    document.getElementById("portrait").src="./IMG/Tim_Berners-Lee_Draw.png";
    // console.log(maxImage);
}

function minImage() {
    document.getElementById("portrait").src='./IMG/Tim_Berners-Lee-min-square.png';
    // console.log(minImage);
}

function changeRightArrow() {
    if (document.getElementById("right__full").className.match("right arrow full false")) {
        
        document.getElementById("right__full").src='IMG/image_fleches/fleche_droite_vide.png';
        document.getElementById("right__full").style.height='110px';
        document.getElementById("right__full").className= "true";

    }else{

        document.getElementById("right__empty").src='IMG/image_fleches/fleche_droite_pleine.png';
        document.getElementById("right__full").style.height='110px';
        document.getElementById("right__full").className= "right arrow full false";
        
    }
   
    

}


function changeLeftArrow () {

    if (document.getElementById("left__full").className.match("left arrow full false")) {
        
        document.getElementById("left__full").src='IMG/image_fleches/fleche_gauche_vide.png';
        document.getElementById("left__full").style.height='110px';

    }else{

        document.getElementById("left__empty").src='IMG/image_fleches/fleche_gauche_pleine.png';
        
    }
   

} 






















function afficherAge(anneeNaissance) { 
    var difference = Date.now() - anneeNaissance.getTime();
    var age = new Date(difference); 
    // console.log(age)
  
    return Math.abs(age.getFullYear() - 1970);
}

console.log(afficherAge(new Date(1955, 08, 5)));

document.getElementById('age').innerHTML = afficherAge(new Date(1955, 08, 5)) +  " ans";


