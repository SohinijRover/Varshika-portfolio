const ThemeToggle = document.querySelector('#theme-toggle-button');
const BodyDark = document.querySelector('.body-dark');
const BtN = document.querySelector('.fa-moon');
ThemeToggle.addEventListener('click',changeScreen);
function changeScreen() {
    console.log(BodyDark.classList.contains('body-dark'));
    if(BodyDark.classList.contains("body-dark")){
    BodyDark.classList.remove('body-dark');
    BodyDark.classList.add('body-light');
    BtN.classList.remove('fa-moon');
    BtN.classList.add('fa-sun');
    }
    else{
        BodyDark.classList.remove('body-light');
    BodyDark.classList.add('body-dark');
    BtN.classList.remove('fa-sun');
    BtN.classList.add('fa-moon');
    }
}
let images = [
    "./Vatsal Project1.png",
    "./fusion.png",
    "./stm.png"
  ];
  let currentImage = 0;
  const imageElement = document.querySelector('#find-me');
  function changeImage() {
    imageElement.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
    console.log(currentImage);
  }
  setInterval(changeImage, 10000);
   
  const contentList = [
  { title: "1st", description: "IIT KGP KShitij" },
  { title: "Global Top 15", description: "Oppo Innovation Challenge" },
  { title: "Runners Up", description: "Vegathon EEGCON" }
];

let currentContent = 0;
const h1Element = document.querySelector('#find-us h1');
const pElement = document.querySelector('#find-us p');

function changeContent() {
  const content = contentList[currentContent];
  h1Element.textContent = content.title;
  pElement.textContent = content.description;
  currentContent = (currentContent + 1) % contentList.length;
}

// Change the content every 5 seconds (5000 milliseconds)
setInterval(changeContent, 10000);