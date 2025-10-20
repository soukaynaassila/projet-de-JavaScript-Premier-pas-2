
const input = document.getElementById("tach");
const btnAjouter = document.getElementById("add");
const list = document.getElementById("list");

let taches = JSON.parse(localStorage.getItem("mesTaches")) || [];

function afficherTaches() {
  list.innerHTML = "";
  taches.forEach((tach, index) => {
    const li = document.createElement("li");
    li.className = tach.completed ? "completed" : "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tach.completed;
    checkbox.addEventListener("change", () => {
      taches[index].completed = checkbox.checked;
      saveTaches();
      afficherTaches();
    });

    const label = document.createElement("label");
    label.textContent = tach.text;

    
    const btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "Supprimer";
    btnSupprimer.addEventListener("click", () => {
      taches.splice(index,1);
      saveTaches();
      afficherTaches();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(btnSupprimer);
    list.appendChild(li);
  });
}


btnAjouter.addEventListener("click", () => {
  const texte = input.value.trim();
  if(texte !== ""){
    taches.push({ text: texte, completed: false });
    saveTaches();
    afficherTaches();
    input.value = "";
  }
});

function saveTaches(){
  localStorage.setItem("mesTaches", JSON.stringify(taches));
}

afficherTaches();
