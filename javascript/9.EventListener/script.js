function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe")
    .addEventListener("click", function abc() {
      console.log("button is clicked", ++count);
    });
}
attachEventListeners();