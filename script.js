const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-window");

addBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("hide");
});
closeBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.add("hide");
});
