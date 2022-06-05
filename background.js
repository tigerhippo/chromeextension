// background.js

let color = '#b04bb4';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

let isMenuOpen = false;
const seasonsbox = document.getElementById("seasonsbox");

function openHomeIcon() {
  if(!isMenuOpen) {
    isMenuOpen = true;
    seasonsbox.style = ""; //no style so displays default
  }
  else {
    isMenuOpen = false;
    seasonsbox.style = "display:none;"; //do not display element
  }
}

document.getElementById("homeicon").addEventListener("click", openHomeIcon);





let isSoundOff = false;
const soundicon = document.getElementById("soundicon");
const music = new Audio("IMG_0279.mp3");
music.loop = true;
music.play();

function turnSoundOff() {
  if(!isSoundOff) {
    isSoundOff = true;
    soundicon.src = "./volumeoff.webp";
    music.pause();
    //music.play();
  }
  else {
    isSoundOff = false;
    soundicon.src = "./sound.png";
    //music.play();
    music.play();
  }
}

document.getElementById("soundicon").addEventListener("click", turnSoundOff);



let isSettingsOpen = false;
const settingsbox = document.getElementById("settingsbox");

function openSettings() {
  if(!isSettingsOpen) {
    isSettingsOpen = true;
    settingsbox.style = "";
  }
  else {
    isSettingsOpen = false;
    settingsbox.style = "display:none;";
  }
}

document.getElementById("settingsicon").addEventListener("click", openSettings);





let isFlowerVisible = false;
const flowerBox = document.getElementById("flowerbox");

function makeFlowerVisible() {
  if(!isFlowerVisible) {
    isFlowerVisible = true;
    flowerBox.style = "";
  }
  else {
    isFlowerVisible = false;
    flowerBox.style = "display:none;";
  }
}

document.getElementById("flowerbox").addEventListener("click", makeFlowerVisible);







let isSpringBackground = false;
const springbox = document.getElementById("springbox");

function openSpringBox() {
  if(!isSpringBackground) {
    isSpringBackground = true;
    document.body.style.backgroundImage = "url('./spring.jpg')";
    //document.body.background-image = "./spring.jpg";
  }
  else {
    isSpringBackground = false;
    document.body.style.backgroundImage = "url('./spring.jpg')";
  }
}

document.getElementById("springbox").addEventListener("click", openSpringBox);


let isSummerBackground = false;
const summerbox = document.getElementById("summerbox");

function openSummerBox() {
  if(!isSummerBackground) {
    isSummerBackground = true;
    document.body.style.backgroundImage = "url('./summer.webp')";
  }
  else {
    isSummerBackground = false;
    document.body.style.backgroundImage = "url('./summer.webp')";
  }
}

document.getElementById("summerbox").addEventListener("click", openSummerBox);


let isFallBackground = false;
const fallbox = document.getElementById("fallbox");

function openFallBox() {
  if(!isFallBackground) {
    isFallBackground = true;
    document.body.style.backgroundImage = "url('./fall.jpeg')";
  }
  else {
    isFallBackground = false;
    document.body.style.backgroundImage = "url('./fall.jpeg')";
  }
}

document.getElementById("fallbox").addEventListener("click", openFallBox);

let isWinterBackground = false;
const winterbox = document.getElementById("winterbox");

function openWinterBox() {
  if(!isWinterBackground) {
    isWinterBackground = true;
    document.body.style.backgroundImage = "url('./winter.png')";
  }
  else {
    isWinterBackground = false;
    document.body.style.backgroundImage = "url('./winter.png')";
  }
}

document.getElementById("winterbox").addEventListener("click", openWinterBox);

