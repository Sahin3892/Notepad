let titelList = [];
let notizList = [];
load();
function render() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML += `<h1 class="header">Notizblock</h1>`; // Generate the Header
  content.innerHTML += /*html*/ `
    <div class="buttons">
      <input placeholder="Titel" id="titel" type="text" class="titel" > <br>
      <textarea name="Notiz" id="notiz" cols="20" rows="5" class="textArea"></textarea> <!-- Changed the second input field with a Text Area to see the notes better -->
      <!-- <input placeholder="Notiz" id="notiz" type="text" > -->
      <button class="buttons"  onclick="addNote()">Hinzufügen</button>
    `;

  for (let i = 0; i < titelList.length; i++) {
    // Generate the Divs from the Notes
    const titel = titelList[i];
    const notiz = notizList[i];

    content.innerHTML += /*html*/ ` 
      <div class="notes" >
        <b>Titel: </b> ${titel} <br>
        <b>Notiz: </b> <p class="insideNote"> ${notiz}</p> <br>
        <button class="buttons" onclick="deleteNote(${i})">Löschen</button>
        </div>
      `;
  }
}

function addNote() {
  //Here we can add new Notes
  let titel = document.getElementById("titel");
  let notiz = document.getElementById("notiz");

  if (titel.value == "" || notiz.value == "") {
    // User becomes a Alert if he doesent fill the Inputs
    alert("Keine Einträge vorhanden");
  } else {
    titelList.push(titel.value);
    notizList.push(notiz.value);
  }
  render();
  save();
}

function deleteNote(i) {
  //This Function ist for Delete the Notes.

  titelList.splice(i, 1);
  notizList.splice(i, 1);
  render();
  save();
}

function save() {
  //save the notes to LocalStorage
  let titelListAsText = JSON.stringify(titelList);
  let notizListAsText = JSON.stringify(notizList);

  localStorage.setItem("titel", titelListAsText);
  localStorage.setItem("notiz", notizListAsText);
}

function load() {
  //load the Notes from the localStorage
  let titelListAsText = localStorage.getItem("titel");
  let notizListAsText = localStorage.getItem("notiz");

  if (titelListAsText && notizListAsText) {
    titelList = JSON.parse(titelListAsText);
    notizList = JSON.parse(notizListAsText);
  } else {
    let titelList = [];
    let notizList = [];
  }
}
