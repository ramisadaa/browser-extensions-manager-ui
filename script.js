const allButton = document.getElementById("AllBt");
const activeButton = document.getElementById("ActiveBt");
const inactiveButton = document.getElementById("InactiveBt");

const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("icon");
const mainLogo = document.getElementById("mainLogo");

const myChecks = document.querySelectorAll("input[type='checkbox']");
const removeButtons = document.querySelectorAll(".remove-button");

let currentFilter = "all";

function changeActiveButton(selectedButton) {
  allButton.classList.remove("active-filter");
  activeButton.classList.remove("active-filter");
  inactiveButton.classList.remove("active-filter");

  selectedButton.classList.add("active-filter");
}

function filterCards(filter) {
  currentFilter = filter;

  myChecks.forEach(function (check) {
    const card = check.closest(".card");

    if (filter === "all") {
      card.style.display = "flex";
    } else if (filter === "active" && check.checked) {
      card.style.display = "flex";
    } else if (filter === "inactive" && !check.checked) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

allButton.addEventListener("click", function () {
  changeActiveButton(allButton);
  filterCards("all");
});

activeButton.addEventListener("click", function () {
  changeActiveButton(activeButton);
  filterCards("active");
});

inactiveButton.addEventListener("click", function () {
  changeActiveButton(inactiveButton);
  filterCards("inactive");
});

myChecks.forEach(function (check) {
  check.addEventListener("change", function () {
    filterCards(currentFilter);
  });
});

removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    card.remove();
  });
});

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeIcon.src = "./assets/images/icon-moon.svg";
    mainLogo.src = "./assets/images/logo.svg";
  } else {
    themeIcon.src = "./assets/images/icon-sun.svg";
    mainLogo.src = "./assets/images/‏‏logo2.svg";
  }
});

