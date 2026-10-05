// Find the three elements we need and keep them in named variables
const form = document.getElementById("quiz");
const foodInput = document.getElementById("favfood");
const result = document.getElementById("result");

// When the form is submitted, run this function
form.addEventListener("submit", function (event) {

  event.preventDefault();               /* don't reload the page */

  const food = foodInput.value;         /* read what's in the text box */
  const petInput = document.querySelector('input[name="fav_pet"]:checked');
  const placeInput = document.querySelectorAll('input[name="continents"]:checked')
  const pet = petInput.value;           /* read the checked radio */
  const places = Array.from(placeInput).map(box => box.value).join(", ");     /* collect the checked boxes */

  const message = "My favourite food is " + food +
                  ". The best pet is " + pet +
                  ". I've been to " + places + ".";

  result.textContent = message;
});