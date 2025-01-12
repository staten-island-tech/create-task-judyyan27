import "../CSS/style.css";

const DOMSelectors = {
  container: document.querySelector(`#container-box`),
  card: document.querySelector(`.card`),
  input_section: document.querySelector(`#input`),

  user_input: document.querySelector(`#user_input`),
  input_button: document.querySelector(`.input_button`),

  user_activate: document.querySelector(`#user_activate`),
  activate_button: document.querySelector(`.activate_button`),
  return_button: document.querySelector(`.return`),
  clear_button: document.querySelector(`.clear_input`),

  history: document.querySelector(`.history`),
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

function choose_items(times) {
  let numitems = inputs.length;

  for (let i = 0; i < times; i++) {
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
      }
    }
    remove_button();
  }
}

DOMSelectors.activate_button.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputs.length === 0) {
    DOMSelectors.container.innerHTML = `<h2 class=text>There are currently no inputs. Add inputs before choosing random object</h2>`;
  } else {
    let times = DOMSelectors.user_activate.value;
    choose_items(times);

    DOMSelectors.return_button.addEventListener("click", function (event) {
      inputs.forEach((object) =>
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <h1 class="card-title">${object}</h1> 
            <button type="remove" class="remove">Remove</button>
          </div>`
        )
      );
    });
  }
});
