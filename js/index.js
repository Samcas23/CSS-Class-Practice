
function test(event){
    console.log(event.target);
    alert(`You clicked over ${event.target.textContent}`)
}

function inputHandeler(event){
    console.log(event.target.value);
}
function changeName(event){
    console.log(event.value);
}

function validateForm(event){
    console.log("Form just got submitted");
    console.log(event);
    event.preventDefault();

    return false;
}

let form = document.querySelector('form');
form.addEventListener('submit', validateForm);  

let listElements=document.querySelectorAll( 'li' ); 

for( let i=0; i < listElements.length; i++){
    listElements[i].addEventListener("click", test);
}

function countryChange(element){
    console.log(element.value);
}

let formElements = document.querySelectorAll( '.formElement');

for (let i = 0 ; i< formElements.length; i++){
    formElements[i].addEventListener('change', inputHandeler)
}
/*
console.log("This is linked correctly!" );

let listElements=document.querySelectorAll( 'li' ); 
console.log( listElements );


let formElements = document.querySelectorAll( '.formElement');
console.log( formElements );

let country = document.querySelector ('#userCountry');
console.log(country);

//input-text area-select elements
console.log(country.value);

console.log(listElements[0].textContent);

listElements[0].textContent="Changed through JS";

let menu = document.querySelector('ul.menu');

console.log(menu.innerHTML);

menu.innerHTML +=  `<li> Logout </>
                    <li> Part1 </li>
                    <li> Part2 </li>
`;

let hobby = "music";

let sentence = "I like to program";
sentence += "I also like to play " + hobby + ".";
console.log(sentence);

let sentenceTwo= `I like to program. I also like to play ${hobby}.
    Adding another sentence here.
`;

console.log(sentence);
*/