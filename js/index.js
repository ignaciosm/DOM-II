// Logo Blue on hover

const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', () => {
  logo.style.backgroundColor= "blue";
});
logo.addEventListener('mouseout', () => {
  logo.style.backgroundColor= "white";
});


// Alert on Keypress
const noKey = document.querySelector('body');
noKey.addEventListener('keypress', ()=> {
  alert("WROOOOONG....There are no text fields here!");
})


// Zoom on Wheel
const imgZoom = document.querySelectorAll('.img-content img');
imgZoom.forEach( (img) => {
  img.onwheel = zoom;
})

let scale = 1;
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(.125, scale), 4);
  this.style.transform = `scale(${scale})`;
}

// Append Fontawesome
let fontawesome = document.createElement("script");

fontawesome.src ="https://kit.fontawesome.com/9ccde8153a.js";
fontawesome.crossorigin = 'anonymous'

let parentElement = document.querySelector('head');

parentElement.append(fontawesome)

// Add Cart
let cart = document.createElement("i");

cart.textContent ="Cart";
cart.classList ="fas fa-shopping-cart";
cart.style.fontSize = "2rem";
cart.id ="cart";

let parentCart = document.querySelector('.nav-container');

parentCart.append(cart)


// Drag and Drop
let dragfrom = document.querySelector('#img2');
let dragto = document.querySelector('#img1');


dragfrom.addEventListener('dragstart', dragStart);
dragfrom.addEventListener('dragend', dragEnd);

dragto.addEventListener('dragover', dragOver);
dragto.addEventListener('dragenter', dragEnter);
dragto.addEventListener('dragleave', dragLeave);
dragto.addEventListener('drop', dragDrop);

function dragStart() {
  console.log('start');
}

function dragEnd() {
  console.log('end');
}

function dragOver(e) {
  e.preventDefault();
  console.log('over');
}

function dragEnter(e) {
  e.preventDefault();
  console.log('enter');
}

function dragLeave() {
  console.log('leave');
}

function dragDrop() {
  dragto.src="img/fun.jpg"
  console.log('drop');
}
