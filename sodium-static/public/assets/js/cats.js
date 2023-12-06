function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var cats = document.getElementsByClassName("column");

  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    var categories = cat.getAttribute("data-category").split(" ");

    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      cat.style.display = "block";
    } else {
      cat.style.display = "none";
    }
  }
}

function searchcats() {
  var input = document.getElementById("catearch");
  var filter = input.value.toLowerCase();
  var cats = document.getElementsByClassName("column");

  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    var name = cat.getElementsByTagName("p")[0].textContent.toLowerCase();

    if (name.includes(filter)) {
      cat.style.display = "block";
    } else {
      cat.style.display = "none";
    }
  }
}
