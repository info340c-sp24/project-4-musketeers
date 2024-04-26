document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
      if (event.target.closest(".save")) {
        var path =
          event.target.querySelector("svg path") ||
          event.target.closest(".save").querySelector("svg path");
        path.classList.toggle("saved");
      }
    });
   });
   
let products = {
  data: [
    {
      className: "Itzhak perlman",
      category: "violin",
      skill: "beginner",
      image: "/images/mc-1.jpeg",
    },
    {
      className: "Ringo Starr",
      category: "drums",
      skill: "intermediate",
      image: "/images/mc-2.jpg",
    },
    {
      className: "Mariah Carey",
      category: "vocals",
      skill: "intermediate",
      image: "/images/mc-3.jpeg",
    },
    {
      className: "Alicia Keys",
      category: "vocals",
      skill: "beginner",
      image: "/images/mc-4.jpeg",
    },
    {
      className: "Timbaland",
      category: "edm",
      skill: "professional",
      image: "/images/mc-5.webp",
    },
    {
      className: "Questlove",
      category: "edm",
      skill: "intermediate",
      image: "/images/mc-6.jpeg",
    },
    {
      className: "Tom Morello",
      category: "e-guitar",
      skill: "beginner",
      image: "/images/mc-7.jpeg",
    },
    {
      className: "Comfy Gray Pants",
      category: "Bottomwear",
      skill: "49",
      image: "/images/mc-8.jpeg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.className.toUpperCase();
  container.appendChild(name);
  //skill
  let skill = document.createElement("h6");
  skill.innerText = "$" + i.skill;
  container.appendChild(skill);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};