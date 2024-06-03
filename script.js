function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const btn = document.getElementById("modeToggle")
const btn2 = document.getElementById("modeToggle2")
const themeIcons = document.querySelectorAll(".icon")
const currentTheme = localStorage.getItem("theme")

if(currentTheme === "dark"){
  setDarkMode();
}

btn.addEventListener("click", () =>{
  setTheme();
})

btn2.addEventListener("click", () =>{
  setTheme();
})

function setTheme(){
  let currentTheme =document.body.getAttribute("theme");

  if(currentTheme === "dark"){
    setLightMode();
  }else {
    setDarkMode();
  }
}

function setDarkMode(){
  document.body.setAttribute("theme", "dark")
  localStorage.setItem("theme", "dark")
  themeIcons.forEach((icon) =>{
    icon.src = icon.getAttribute("src-dark"); 
  })
};

function setLightMode(){
  document.body.setAttribute("theme","light")
  localStorage.setItem("theme", "light")
  themeIcons.forEach((icon) =>{
    icon.src = icon.getAttribute("src-light"); 
  })
};
