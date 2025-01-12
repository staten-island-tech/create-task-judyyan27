
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
// while the random button is clicked: document.history.textContent = previously_chosen (append chosen object)
// also give option to pick multiple random objects
// items.forEach((el) => (el.style.color = "red")); (make each card animate with different colors)
// catches if there are no objects on screen then prints "There are no items to randomly select"