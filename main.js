
let div= document.querySelector("div");
let input= document.querySelector("input");
let progress= document.querySelector(".progress");
let counter= document.querySelector(".counter");
let maxLength= input.getAttribute("maxLength");


counter.innerHTML= maxLength;

input.oninput= function(){
    counter.innerHTML= maxLength- this.value.length;
    if(counter.innerHTML==0){
        counter.classList.add("zero");
    }
    else{
        counter.classList.remove("zero");
    }
    progress.style.width= `${(this.value.length*100)/maxLength}%`;
}