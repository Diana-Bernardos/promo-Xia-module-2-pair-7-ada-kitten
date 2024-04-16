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


/* menuAdd.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("add click");
    formAdd.classList.toggle("collapsed");
}); */

btnCancel.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("estoy cancelando");
    formAdd.classList.toggle("collapsed");
    resetForm.reset();
})
const resetForm = document.querySelector(".js-form-add");
//resetForm solamente se puede aplicar a form, por lo que el querySelector debe estar sobre una etiqueta form. 

const input_search_desc = document.querySelector('.js_in_search_desc');

const kittenList = document.querySelector(".js_ul");
const btnSearch = document.querySelector(".js-btn-search");

btnSearch.addEventListener("click", (event) => {
 
  event.preventDefault();
  const descrSearchText = input_search_desc.value;

  kittenList.innerHTML = "";
if( kittenOne.includes(descrSearchText) ) {

    kittenList.innerHTML = kittenOne; 
  }
  
  if( kittenTwo.includes(descrSearchText) ) {
    kittenList.innerHTML += kittenTwo;
  }
  
  if( kittenThree.includes(descrSearchText) ) {
    kittenList.innerHTML += kittenThree;
  
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


const kittenOne = `<li class="card">${kittenOneImage + kittenOneName  + kittenOneRace + kittenOneDesc}</li>` ;
const kittenTwo = `<li class="card">${kittenTwoImage + kittenTwoName + kittenTwoRace + kittenTwoDesc}</li>` ;
const kittenThree = `<li class="card">${kittenThreeImage + kittenThreeName + kittenThreeRace + kittenThreeDesc}</li>` ;


document.querySelector (".js_ul").innerHTML = kittenOne + kittenTwo + kittenThree ; 



function showNewCatForm() {
  formAdd.classList.remove('collapsed');
}
function hiddeNewCatForm() {
  formAdd.classList.add('collapsed');
}

function hanndleclickNewCatForm(event){
  event.preventDefault();

  if (formAdd.classList.contains("collapsed")){
    showNewCatForm();
    console.log("hola");
  }else{
    hiddeNewCatForm();
  }
};

menuAdd.addEventListener("click", hanndleclickNewCatForm);

const inputUrl = document.querySelector(".js_input_url");
const inputName = document.querySelector(".js_input_name");
const inputRace = document.querySelector(".js_input_race");
const inputDescription = document.querySelector(".js_input_description");

const btnkittenadd = document.querySelector(".js-btn-addkitten");

//esqueleto, pintamos en el html la UL cuando añades el gatito

/* function renderKitten(url, desc, name, race) {
  kittenList.innerHTML += `<li class="card">
  <article>
    <img
      class="card_img"
      src="${url}"
      alt="siames-cat"
    />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">${desc}</p>
  </article>
</li>`;
    console.log("hola");
}; */

btnkittenadd.addEventListener("click", addNewKitten);
//1. Dar las clases a los input
//2. Pintarlo en el html
function addNewKitten(event){
  event.preventDefault(); 
  const valueUrl = inputUrl.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value; 
  const valueDescription = inputDescription.value; 
  console.log(valueName); //si pongo comillas me pone el string
  console.log(valueRace);
  console.log(valueDescription);
  //sustuimos los valores delos values 
  renderKitten(valueUrl, valueName, valueRace, valueDescription);
};

//Crear objetos de cada gato, convertir cada gatito en un objeto


const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};
  
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: ' Produce fascinación y curiosidad. Exótico, raro, bello,extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo',
  race: 'Sphynx',
};

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: ' PTienen la cabeza cuadrada y los ojos simétricos, por lo que subella mirada se ha convertido en una de sus señas de identidad.Sus ojos son grandes y las orejas resultan largas y en punta',
  race: 'Maine Coon',
};
const kittenDataList=[kittenData_1, kittenData_2, kittenData_3];
const kittenData={
  image:"",
  name:"",
  desc:"",
  race:"",
  
};
function renderKitten(kittenData){

  
kittenList.innerHTML+=`<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenData.image}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenData.name}</h3>
  <h4 class="card_race">${kittenData.race}</h4>
  <p class="card_description">${kittenData.desc}</p>
</article>
</li>`;
console.log("pintaalgo");
};
function renderKittenList(kittenDataList) {

  //Completa el código:
  //Vaciamos el innerHTML del <ul> de la página.
  kittenList.innerHTML="";
  //Iteramos sobre el listado de gatitos
  for(const KittenItem  of  kittenDataList ){
    kittenList.innerHTML+=renderKitten(KittenItem);
    
  }
  //Y por cada iteración pintamos un gatito.
  //utilizando la función renderKitten(kittenItem)
};

function filterKitten(event) {
  /* event.preventDefault(); */
  const descrSearchText = input_search_desc.value;
  kittenList.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    //Completa el código
    if(kittenItem.desc === valueInput){
      kittenList.innerHTML+= `<li class="card">
      <article>
        <img
          class="card_img"
          src="${kittenData.image}"
          alt="siames-cat"
        />
        <h3 class="card_title">${kittenData.name}</h3>
        <h4 class="card_race">${kittenData.race}</h4>
        <p class="card_description">${kittenData.desc}</p>
      </article>
      </li>`;
    //Comprueba si cada gatito contiene la descripción
    //Si la contiene pintamos un gatito
    //utilizando la función renderKitten(kittenItem)
  }
}
};
filterKitten();

//errores funcion filterkitten.

