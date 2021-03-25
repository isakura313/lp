let select = document.getElementById("select");
select.onfocus = () => {
  select.style.color = "black";
};

let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav_mobile");
burger.onclick = () => {
  if (nav.style.display == "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
};
