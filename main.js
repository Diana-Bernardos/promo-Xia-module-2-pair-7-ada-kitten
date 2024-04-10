'use strict';

/* const kittenOne = `<li class="card">
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
</li>`;  */


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
    resetForm.reset();
})
const resetForm = document.querySelector(".js-form-add");
//resetForm solamente se puede aplicar a form, por lo que el querySelector debe estar sobre una etiqueta form. 

const input_search_desc = document.querySelector('.js_in_search_desc');

const kittenList = document.querySelector(".js-list");
const btnSearch = document.querySelector(".js-btn-search");

btnSearch.addEventListener("click", (event) => {
 
  event.preventDefault();
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
});
/*Hemos probado el btn de searchtext para buscar desde el formulario con una palabra (elegante) que solo salga el gato que tiene esa descripcion y funciona*/

const kittenOneImage = `<img
class="card_img"
src="https://dev.adalab.es/gato-siames.webp"
alt="siames-cat"
/>`;
const kittenOneName = `<h3 class="card_title">Anastacio</h3>`;
const kittenOneDesc = `<p>
Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.
</p>`;
const kittenOneRace = `<h4 class="card_race">Siamés</h4>`;

const kittenTwoImage = `<img
class="card_img"
src="https://dev.adalab.es/sphynx-gato.webp"
alt="sphynx-cat"
/>`;
const kittenTwoName = `<h3 class="card_title">Fiona</h3>`;
const kittenTwoDesc = `<p> Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.
</p>`;
const kittenTwoRace = `<h4 class="card_race">Sphynx</h4>`;

const kittenThreeImage = `<img
class="card_img"
src="https://dev.adalab.es/maine-coon-cat.webp"
alt="maine-coon-cat"
/>`;
const kittenThreeName = `<h3 class="card_title">Cielo</h3>`;
const kittenThreeDesc = `<p>
Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.
</p>`;
const kittenThreeRace = `<h4 class="card_race">Maine Coon</h4>`;


const kittenOne = `${kittenOneImage + kittenOneName + kittenOneDesc + kittenOneRace}` ;
const kittenTwo = `${kittenTwoImage + kittenTwoName + kittenTwoDesc + kittenTwoRace}` ;
const kittenThree = `${kittenThreeImage + kittenThreeName + kittenThreeDesc + kittenThreeRace}` ;


document.querySelector (".js-list").innerHTML = kittenOne + kittenTwo + kittenThree ; 



function showNewCatForm() {
  formAdd.classList.remove('collapsed');
}
function hideNewCatForm() {
  formAdd.classList.add('collapsed');
}





