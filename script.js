const showContact = document.querySelector("[data-show-contact]");
const allContact = document.querySelector("[data-all-contact]");

showContact.addEventListener("click", () => {
  allContact.classList.toggle("active");
});
