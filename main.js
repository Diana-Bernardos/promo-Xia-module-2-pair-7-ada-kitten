'use strict';

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;

document.querySelector (".js-list").innerHTML = kittenOne + kittenTwo + kittenThree;

const menuAdd = document.querySelector(".js-btn-add");
const formAdd = document.querySelector(".js-form");
const btnCancel = document.querySelector(".js-btn-cancel");

menuAdd.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("add click");
    formAdd.classList.toggle("collapsed");

});

btnCancel.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("estoy cancelando");
    formAdd.classList.toggle("collapsed");
})

const input_search_desc = document.querySelector('.js_in_search_desc');

const kittenList = document.querySelector(".js-list");
const btnSearch = document.querySelector(".js-btn-search");

btnSearch.addEventListener("click", (event) => {
  const descrSearchText = input_search_desc.value;
  kittenList.innerHTML = "";
if( kittenOne.includes(descrSearchText) ) {

    kittenList.innerHTML = kittenOne; 
  //Completa el código
  }
  
  if( kittenTwo.includes(descrSearchText) ) {
    kittenList.innerHTML += kittenTwo;
  //Completa el código
  }
  
  if( kittenThree.includes(descrSearchText) ) {
    kittenList.innerHTML += kittenThree;
  //Completa el código
  }
})
