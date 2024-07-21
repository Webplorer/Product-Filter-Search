let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "images/white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "40",
      image: "images/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "images/sporty-smartwatch.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "images/pink-trousers.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "images/knitted-top.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "images/comfy-gray-pants.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "images/brown-jacket.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "images/black-leather-jacket.jpg",
    },
  ],
};
for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  //   Card Should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //   image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //   img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // container
  let container = document.createElement("div");
  container.classList.add("container");

  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  // price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Parameter passed from button(parameter same as category)
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      console.log(value, button.innerText);
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Select all cards
  let elements = document.querySelectorAll(".card");
  // Loop through All cards
  elements.forEach((element) => {
    // display all cards on "all button cllick"
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // check if element contains category class

      if (element.classList.contains(value)) {
        // display element based on category
        element.classList.remove("hide");
      } else {
        // hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// search button click

document.getElementById("search").addEventListener("click", () => {
  // initialization
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // loop through all elements
  elements.forEach((element, index) => {
    // check if text includes the searchh value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // display matching
      cards[index].classList.remove("hide");
    } else {
      // hide others
      cards[index].classList.add("hide");
    }
  });
});

// Initially Display All product

window.onload = () => {
  filterProduct("all");
};
