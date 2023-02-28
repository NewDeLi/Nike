//toggle burger navigation
function handleClick() {
  const x = document.getElementById("myTopnav");
  const y = document.querySelector(".hamburger");

  if (x.className === "topnav" || y.className === "hamburger") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "topnav";
    y.className = "hamburger";
  }
}

document.getElementById("burger").addEventListener("click", handleClick);

// set current navigation
const linkContainer = document.getElementById("myTopnav");
const links = linkContainer.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    console.log("click");
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
