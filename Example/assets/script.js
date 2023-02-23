let div_boxes = document.querySelector(".boxes");

let counter = 1;

function addBox() {
  div_boxes.innerHTML += '<div class="box">' + counter + "</span></div>";
  counter++;
}

function addBox2() {
  let add_more_boxes = parseInt(prompt("Pila ka box imong gusto?"));

  function add_boxes(boxes) {
    for (i = 1; i <= boxes; i++) {
      div_boxes.innerHTML += '<div class="box">' + counter + "</span></div>";

      counter++;
    }
  }

  return add_boxes(add_more_boxes);
}

function addBoxWithImage() {
  let image_link = prompt("Enter image link");

  if (image_link == null) {
  } else {
    div_boxes.innerHTML += `<div class="box" style ="background-image: url(${image_link});"><span>${counter}</span></div>`;

    counter++;
  }
}
