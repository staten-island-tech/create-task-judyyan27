import "../CSS/style.css";

const DOMSelectors = {
  container: document.querySelector(`#container-box`),
  card: document.querySelector(`.card`),
  input_section: document.querySelector(`#input`),

  user_input: document.querySelector(`#user_input`),
  input_button: document.querySelector(`.input_button`),

  activate_button: document.querySelector(`.activate_button`),
  return_button: document.querySelector(`.return`),

  history: document.querySelector(`.history`),
  clearall_inputs: document.querySelector(`.clear_input`),
};

function remove_button() {
  const newcard = DOMSelectors.container.lastElementChild;
  const removeButton = newcard.querySelector(".remove");

  removeButton.addEventListener("click", function () {
    newcard.remove();
    inputs.splice(-1, 1);
    console.log(inputs);
  });
}

var inputs = [];

DOMSelectors.input_button.addEventListener("click", function (event) {
  event.preventDefault();
  const input = DOMSelectors.user_input.value;
  inputs.push(input);
  console.log(inputs);

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h1 class="card-title">${input}</h1> 
        <button type="remove" class="remove">Remove</button>
      </div>`
  );

  //DOMSelectors.user_input.textContent.remove();

  remove_button();
});

DOMSelectors.activate_button.addEventListener("click", function (event) {
  event.preventDefault();

  let numitems = inputs.length;
  let chosen = Math.floor(Math.random() * numitems);
  DOMSelectors.container.innerHTML = "";

  for (let i = 0; i < inputs.length; i++) {
    if (i === chosen) {
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
                <h1 class="card-title">${inputs[i]}</h1> 
                <button type="remove" class="remove">Remove</button>
                <button type="remove" class="return">Return</button>
              </div>`
      );

      DOMSelectors.return_button.addEventListener("click", function (event) {
        const input = DOMSelectors.user_input.value;
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
              <h1 class="card-title">${input}</h1> 
              <button type="remove" class="remove">Remove</button>
            </div>`
        );
      });
    } else if (inputs.length === 0) {
      DOMSelectors.container.innerHTML = `<h2 class=text>There are currently no inputs. Add inputs before choosing random object</h2>`;
    }
  }
});

/*   for (let i = 0; i < inputs.length; i++) {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
          <h1 class="card-title">${input[chosen]}</h1> 
          <button type="remove" class="remove">Remove</button>
        </div>`
    );
  }
 */

//** Algorithm Plan */
// while the random button is pressed: document.history.textContent = previously_chosen
// items.forEach((el) => (el.style.color = "red")); (make each card animate with different colors)
// catches if there are no objects on screen then prints "There are no items to randomly select"
