const panels = document.querySelectorAll(".panel");
// console.log(panels);


// if u want to do with id do like this
// const panel2 = document.getElementById("panel2");
// panel2.addEventListener("click", (e) => {
//   console.log("event in panel2", e);
//   removeActiveClassFromAll();
//   e.target.classList.add("active");
//   test();
// });
// removeActiveClassFromAll();

panels.forEach((panel) => {
  console.log('current panel: ' + panel.outerHTML);
  panel.addEventListener('click',  () => {
      removeActiveClassFromAll();
      panel.classList.add('active');
  })
});

function removeActiveClassFromAll() {
  panels.forEach((panels) => {
    panels.classList.remove("active");
  });
}

function test() {
  console.log("hello there");
}
