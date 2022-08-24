document.addEventListener("DOMContentLoaded", sidenErLoadet);

const alle = document.querySelectorAll("p");
const overskrifter = document.querySelectorAll("h3");

function sidenErLoadet(){
alle.forEach(typo => typo.addEventListener("click", Aktiver));
document.querySelector("button").addEventListener("click", knap);
overskrifter.forEach(typo2 => typo2.addEventListener("click", Aktiver2));
}

function Aktiver(){
this.classList.add("typo");  
}

function Aktiver2(){
    this.classList.add("typo2");
}
 

function knap() {
   alle.forEach(typoRemove => typoRemove.classList.remove("typo"));
   overskrifter.forEach(typoRemove2 => typoRemove2.classList.remove("typo2"));
}

