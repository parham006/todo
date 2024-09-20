const q = (selector) => document.querySelector(selector);
const qAll = (selector) => document.querySelectorAll(selector);

const addNoteBtn = q(".addNoteBtn");
const overlay = q(".overlay");
const addNoteIcon = q("#addNoteIcon");
const planBox = q(".plan_box");
const removeBut = q(".remove_but");
const menu = q(".menu");
const arrow = q(".arrow");
const item = qAll(".item-row");
const descript = qAll(".plan_txt_descript");


// Show/hide overlay and plan box
addNoteIcon.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  planBox.classList.remove("hidden");
});

removeBut.addEventListener("click", () => {
  overlay.classList.add("hidden");
  planBox.classList.add("hidden");
});

// Toggle menu
arrow.addEventListener("click", () => menu.classList.toggle("hidden"));

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !arrow.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

// Handle item row hover effects
item.forEach((el, i) => {
  el.addEventListener("mousemove", () => {
    el.style.height = "170px";
    setTimeout(() => {
      descript[i].classList.remove("hidden");
    }, 1);
  });

  el.addEventListener("mouseleave", () => {
    el.style.height = "80px";
    descript[i].classList.add("hidden");
  });
});
function checkInput(input) {
  const button = document.querySelector('.add_bottom');
  button.disabled = input.value.trim() === '';
}
function checkSearchInput(input) {
  const button = document.querySelector('.search-icon');
  button.disabled = input.value.trim() === '';
}