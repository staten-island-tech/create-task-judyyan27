import "../CSS/style.css";

const DOMSelectors = {
  container: document.querySelector(`#container-box`),

  user_input: document.querySelector(`#user_input`),
  input_button: document.querySelector(`.input_button`),

  /* 
  activate_button: document.querySelector(`#`),
  clear_inputs: document.querySelector(`#`),*/
};

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

  const newcard = DOMSelectors.container.lastElementChild;
  const removeButton = newcard.querySelector(".remove");

  removeButton.addEventListener("click", function () {
    newcard.remove();
  });
});
