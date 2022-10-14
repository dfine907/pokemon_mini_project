// let newImage = document.createElement('img')
// newImage.src = "images/pokeball.png"
// newImage.classList.add("pokemon")
// document.body.append(newImage)

function toggleShake(element) {
    // Animations only occur when a new class is added to the element.
    // Since we want this to happen every time, 
    //we can switch between two different animations
    if (element.classList.contains("shake1")) {
      element.classList.remove("shake1");
      element.classList.add("shake2");
    } else {
      element.classList.remove("shake2");
      element.classList.add("shake1");
    }
  }

const eevee = document.getElementById("eevee")
const charmander = document.getElementById("charmander")
const flower = document.getElementById("flower")

class Flower {
  constructor() {
    this.flowerImageArray = [
      "images/flower/flower0.png",
      "images/flower/flower1.png",
      "images/flower/flower2.png",
    ]

    this.index = 0

    this.flowerImage = document.createElement("img")
    this.flowerImage.classList.add("flower")

    this.flowerImage.src = this.flowerImageArray[this.index]
    flower.append(this.flowerImage)

    this.flowerImage.addEventListener(
      "click",this.changeFlowerPicture.bind(this))
  }
  changeFlowerPicture() {
    if (this.index < 2) {
      this.index += 1
    } else {
      this.index[0]
    }
    this.flowerImage.src = this.flowerImageArray[this.index]
  }
}

let flower1 = new Flower()
let flower2 = new Flower()
let flower3 = new Flower()


class Charmander {
    constructor() {
      this.imageArray = [
        "images/pokeball.png",
        "images/charmander/charmander0.png",
        "images/charmander/charmander1.png",
        "images/charmander/charmander2.png",
      ];
      this.charIndex = 0;
      this.charmanderImage = document.createElement("img");
      this.charmanderImage.classList.add('char')
      this.charmanderImage.src = this.imageArray[this.charIndex];
      charmander.append(this.charmanderImage);
  
      this.charmanderImage.addEventListener("click", () => {
        if (Math.floor(Math.random() * 4) + 1 === 1) {
          this.evolePictures();
        } else {
          toggleShake(this.charmanderImage);
        }
      });
    }
  
    evolePictures = () => {
      if (this.charIndex < 3) {
        this.charIndex += 1;
      }
      this.charmanderImage.src = this.imageArray[this.charIndex];
    };
  }
  
  let firstCharmander = new Charmander();
  let secondCharmander = new Charmander();

  main.append(firstCharmander.charmanderImage)
  main.append(secondCharmander.charmanderImage)