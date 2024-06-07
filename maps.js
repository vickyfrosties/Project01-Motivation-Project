let mesImages = [
  { img: "./images.png/Wallpaper/Lotus-1.jpeg", title: "LOTUS"},
  
  {img: "./images.png/Wallpaper/Lotus-2.jpeg", title: "LOTUS"},
  
  { img: "./images.png/Wallpaper/Breeze-2.jpeg", title: "BREEZE"},  
  
  { img: "./images.png/Wallpaper/Breeze-3.jpeg", title: "BREEZE"},
  
  { img: "./images.png/Wallpaper/Icebox-3.jpeg", title: "ICEBOX"},

  { img: "./images.png/Wallpaper/Icebox-4.jpeg", title: "ICEBOX"},
  
  { img: "./images.png/Wallpaper/Ascent-1.jpeg", title: "ASCENT"},

  { img: "./images.png/Wallpaper/Sunset-1.webp", title: "SUNSET"},

  { img: "./images.png/Wallpaper/Sunset-2.png", title: "SUNSET"},

  { img: "./images.png/Wallpaper/Bind-1.jpeg", title: "BIND"},

  { img: "./images.png/Wallpaper/Bind-2.jpeg", title: "BIND"},
    
];

let currentIndex = 0;

const IMG_CAROUSEL_MAPS = document.getElementById("carousel-img-map");
const LEFT = document.getElementById("left");
const RIGHT = document.getElementById("right");
const NAMEMAP = document.getElementsByClassName("mapname");

const DOTS = document.getElementsByClassName("dot");

RIGHT.addEventListener("click", () => {
  DOTS[currentIndex].classList.toggle("active");

  currentIndex++;

  if(currentIndex === mesImages.length){
    currentIndex = 0;
  }
  IMG_CAROUSEL_MAPS.src = mesImages[currentIndex].img;
  NAMEMAP[0].textContent = mesImages[currentIndex].title;
  DOTS[currentIndex].classList.toggle("active");
})

  LEFT.addEventListener("click", () => {
    DOTS[currentIndex].classList.toggle("active");
    currentIndex--;

    if(currentIndex === -1){
      currentIndex = mesImages.length - 1;
    }
    IMG_CAROUSEL_MAPS.src = mesImages[currentIndex].img;
    NAMEMAP[0].textContent = mesImages[currentIndex].title;
    DOTS[currentIndex].classList.toggle("active");
})

const DIV_CAROUSEL_MAPS = document.getElementById("mapcontainer");
