/**
document.addEventListener('click', function(){
    document.getElementById("contenido").style.marginTop = "2%";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("menu").style.display = "none";
})

function omHabilidades(){
    if (document.getElementById("habilidades").style.display == "none"){
        document.getElementById("habilidades").style.display = "block"
    }
    else {
        document.getElementById("habilidades").style.display = "none"
    }
}

function omExperiencias(){
    if (document.getElementById("experiencias").style.display == "none"){
        document.getElementById("experiencias").style.display = "block"
    }
    else {
        document.getElementById("experiencias").style.display = "none"
    }
}
*/
function mosOc(element){
    if (element.style.display == "none"){
        element.style.display = "block"
    }
    else {
        element.style.display = "none"
    }
}