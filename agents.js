let modal = document.getElementById("myModal-video");
let perso1 = document.getElementById("Viper");
let video = document.getElementById("vid1");
let perso_card1 = document.getElementById("img1");

let characters = [
  { modalImgSrc: "./images.png/Wallpaper/VIPER_FULL_PNG.png", thumbnailImgSrc: "/images.png/Wallpaper/Viper_Dark.jpg", name: "VIPER"},

  { modalImgSrc: "./images.png/Wallpaper/Phoenix_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Phoenix_Dark.jpg", name: "PHOENIX"},

  { modalImgSrc: "./images.png/Wallpaper/SAGE_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Sage_dark.jpg", name : "SAGE"},

  { modalImgSrc: "./images.png/Wallpaper/RAZE_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Raze_Dark.jpg", name: "RAZE"},


  { modalImgSrc: "./images.png/Wallpaper/SOVA_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Sova_Dark.jpg", name: "SOVA"},


  { modalImgSrc: "./images.png/Wallpaper/GEKKO_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/Gekko_Dark_1.png", name: "GEKKO"},


  { modalImgSrc: "./images.png/Wallpaper/OMEN_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Omen_Dark.jpg", name: "OMEN"},


  { modalImgSrc: "./images.png/Wallpaper/CYPHER_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Cypher_Dark.jpg", name: "CYPHER"},


  { modalImgSrc: "./images.png/Wallpaper/BRIMSTONE_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Brimm_Dark.jpg", name: "BRIMSTONE"},


  { modalImgSrc: "./images.png/Wallpaper/JETT_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Jett_Dark.jpg", name: "JETT"},

  { modalImgSrc: "./images.png/Wallpaper/DEADLOCK_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Deadlock_Wallpapers_4k_Dark1.jpg", name:"DEADLOCK"},

  { modalImgSrc: "./images.png/Wallpaper/REYNA_Full_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Raze_Dark.jpg", name: "REYNA"},

  { modalImgSrc: "./images.png/Wallpaper/BREACH_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/VALORANT_Breach_Dark.jpg", name: "BREACH"},

  { modalImgSrc: "./images.png/Wallpaper/KILLJOY_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/KillJoy_Wallpapers_blue1.jpg", name: "KILLJOY"},

  { modalImgSrc: "./images.png/Wallpaper/SKYE_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/Skye_KeyArt_PR_2.jpg", name: "SKYE"},

  { modalImgSrc: "./images.png/Wallpaper/ISO_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/ISO_Wall.png", name: "ISO"},

  { modalImgSrc: "./images.png/Wallpaper/YORU_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/YORU_Wall.jpg", name: "YORU"},

  { modalImgSrc: "./images.png/Wallpaper/ASTRA_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/ASTRA_Wall.png", name: "ASTRA"},

  { modalImgSrc: "./images.png/Wallpaper/KAY_O_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/KAYO_Wall.png", name: "KAY/O"},

  { modalImgSrc: "./images.png/Wallpaper/CHAMBER_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/CHAMBER_Wall.png", name: "CHAMBER"},

  { modalImgSrc: "./images.png/Wallpaper/NEON_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/NEON_Wall.png", name: "NEON"},

  { modalImgSrc: "./images.png/Wallpaper/FADE_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/FADE_Wall.png", name: "FADE"},

  { modalImgSrc: "./images.png/Wallpaper/HARBOR_FULL_PNG.png", thumbnailImgSrc: "./images.png/Wallpaper/HARBOR_Wall.png", name: "HARBOR"},

  { modalImgSrc: "./images.png/Wallpaper/CLOVE_FULL_PNG.png", thumbnailImgSrc: "/images.png/EP8_Act_2_Article_1920x1080_Clove.jpg", name: "CLOVE"},
  ];



function openModal(indice) {
  let modal = document.getElementById("myModal-video");
  let modalImg = document.getElementById("characterImg");
  let modalName = document.getElementsByClassName("NAME");

    modal.style.display = "block";
    modalImg.src = characters[indice].modalImgSrc;
    modalName[0].textContent = characters[indice].name;
    document.body.style.overflowY = "hidden";
}


const DIV_CARD_AGENT = document.getElementsByClassName("card_agent");

document.querySelector(".modal").onclick = () => {
  document.querySelector(".modal").style.display = "none";
  document.body.style.overflowY = "scroll";
}

