 let checkboxes = document.querySelectorAll("#list input[type='checkbox']");
 let counter = document.getElementById("counter");

  function upDateCounter() {
  let checked = 0;

  checkboxes.forEach(function(box) {
    if (box.checked) {
       checked++;
     }
   });

   counter.textContent = "Elements checked : " + checked;
 }

 checkboxes.forEach(function(box) {
   box.addEventListener("change", upDateCounter);
 });
