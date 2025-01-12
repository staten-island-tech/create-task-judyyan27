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
};

var inputs = [];

function remove_button() {
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.parentElement;
      const cardTitle = card.querySelector(".card-title").textContent;
      card.remove();

      inputs = inputs.filter((item) => item !== cardTitle);
      console.log(inputs);
    });
  });
}

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
  DOMSelectors.user_input.value = "";
  remove_button();
});

DOMSelectors.return_button.addEventListener("click", function (event) {
  event.preventDefault();
  DOMSelectors.container.innerHTML = "";
  inputs.forEach((object) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h1 class="card-title">${object}</h1> 
        <button type="remove" class="remove">Remove</button>
      </div>`
    )
  );
  remove_button();
});

DOMSelectors.activate_button.addEventListener("click", function (event) {
  event.preventDefault();
  let times = parseInt(DOMSelectors.user_activate.value);

  if (inputs.length === 0) {
    DOMSelectors.container.innerHTML = `<h2 class=text>There are currently no inputs. Add inputs before choosing random object(s)</h2>`;
    DOMSelectors.user_activate.value = "";
    return;
  } else if (times > inputs.length) {
    DOMSelectors.container.innerHTML = `<h2 class=text>Cannot pick more items than the total number of inputs --(${inputs.length}).</h2>`;
    DOMSelectors.user_activate.value = "";
    return;
  } else {
    let numitems = inputs.length;
    DOMSelectors.container.innerHTML = "";

    var chosen_objects = [];
    for (let i = 0; i < times; i++) {
      let chosen = Math.floor(Math.random() * numitems);

      if (chosen_objects.includes(chosen)) {
        i--;
        continue;
      } else {
        chosen_objects.push(chosen);
      }
    }
    DOMSelectors.container.innerHTML = `<h2 class="text">Selected Objects:</h2>`;

    chosen_objects.forEach((object) => {
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class="card-chosen">
          <h1 class="card-title">${inputs[object]}</h1> 
          <button type="remove" class="remove">Remove</button>
        </div>`
      );
    });
    remove_button();
    DOMSelectors.user_activate.value = "";
  }
});
