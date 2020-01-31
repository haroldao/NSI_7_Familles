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
    
    document.getElementById("right__full").src='IMG/image_fleches/fleche_droite_vide.png';
    

}


function changeLeftArrow () {

    document.getElementById("left__full").src='IMG/image_fleches/fleche_gauche_vide.png';

} 






















function afficherAge(anneeNaissance) { 
    var difference = Date.now() - anneeNaissance.getTime();
    var age = new Date(difference); 
    // console.log(age)
  
    return Math.abs(age.getFullYear() - 1970);
}

console.log(afficherAge(new Date(1955, 08, 5)));

document.getElementById('age').innerHTML = afficherAge(new Date(1955, 08, 5)) +  " ans";


