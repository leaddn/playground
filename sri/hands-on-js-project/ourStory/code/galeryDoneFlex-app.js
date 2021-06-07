//variables
const items = document.querySelectorAll(".item");

// loop through the array items
items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("test");
    // each time you click on the next picture
    // it'll remove the current one to show the next one
    items.forEach((item) => item.classList.remove("show"));
    item.classList.add("show");
  });
});
