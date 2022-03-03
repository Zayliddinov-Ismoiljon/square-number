var elForm= document.querySelector(".form");
var elInput= document.querySelector(".form-control");
var elResult= document.querySelector(".result");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    elResult.textContent= elInput.value * elInput.value;
    elInput.value=" ";
})