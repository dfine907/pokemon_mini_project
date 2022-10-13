// let newImage = document.createElement('img')
// newImage.src = "images/pokeball.png"
// newImage.classList.add("pokemon")
// document.body.append(newImage)

let eevee = document.getElementById("eevee")
let charmander = document.getElementById("charmander")
let flower = document.getElementById("flower")

class Flower {
  constructor() {
    this.flowerImageArray = [
      "images/flower/flower0.png",
      "images/flower/flower1.png",
      "images/flower/flower2.png",
    ]

    this.index = 0

    this.image = document.createElement("img")
    this.image.classList.add("flower")

    this.image.src = this.flowerImageArray[this.index]
    flower.append(this.image)

    this.image.addEventListener(
      "click",
      this.changeFlowerPicture.bind(this)
    )
  }
  changeFlowerPicture() {
    if (this.index < 2) {
      this.index += 1
    } else {
      this.index[0]
    }
    this.image.src = this.flowerImageArray[this.index]
  }
}

let flower1 = new Flower()
let flower2 = new Flower()
let flower3 = new Flower()

