let dishes = document.getElementById("dishes");
let foods = document.getElementById("foods");
let orders = document.getElementById("orders");
let track = document.getElementById("track");
let logIn = document.getElementById("log");
let logPage = document.getElementById("logPage");
let logedBtn = document.getElementById("logedBtn");

foods.addEventListener("click", function () {
  dishes.style.color = "white";
  foods.style.color = "red";
  orders.style.color = "white";
});

orders.addEventListener("click", function () {
  dishes.style.color = "white";
  foods.style.color = "white";
  orders.style.color = "red";
});

track.addEventListener("click", function () {
  document.getElementById("food").style.display = "none";
  document.getElementById("order").style.display = "none";
  document.getElementById("dishe").style.display = "none";
  document.getElementById("food2").style.display = "none";
  document.querySelector(".main").style.display = "none";
});

logIn.addEventListener("click", function () {
  logPage.style.display = "block";
});

logedBtn.addEventListener("click", function () {
  let name = document.getElementById("name");
  let pass = document.getElementById("pass");

  if (name.value == "" || pass.value == "") {
    alert("Please Enter Email Password");
  } else {
    alert(name.value + "You Logged In");
    logPage.style.display="none"
  }
});


// restaurant cards and cart logic

const restaurantList = [
  {
    id: 1,
    name: "Swaad Vegetarian Restaurant",
    image: "bkskggmaajzvhmah1gw4",
    cuisines: ["North Indian", "South Indian", "Chinese"],
    rating: "4.2",
    menu: [
      { item: "Paneer Tikka", price: "₹200" },
      { item: "Veg Biryani", price: "₹250" },
      { item: "Dal Makhani", price: "₹180" },
      { item: "Aloo Gobi", price: "₹150" },
      { item: "Veg Manchurian", price: "₹220" },
      { item: "Gulab Jamun", price: "₹100" },
      { item: "Rasgulla", price: "₹120" },
      { item: "Kulfi", price: "₹80" },
    ],
  },
  {
    id: 2,
    name: "Green Leaf Restaurant",
    image: "invnxtil7y6rt0fvdvq9",
    cuisines: ["Indian", "Continental", "Italian"],
    rating: "4.5",
    menu: [
      { item: "Veg Pizza", price: "₹300" },
      { item: "Pasta Alfredo", price: "₹280" },
      { item: "Paneer Butter Masala", price: "₹220" },
      { item: "Veg Pulao", price: "₹200" },
      { item: "Masala Dosa", price: "₹150" },
      { item: "Veg Burger", price: "₹180" },
      { item: "Veg Fried Rice", price: "₹220" },
      { item: "Tiramisu", price: "₹120" },
    ],
  },
  {
    id: 3,
    name: "Spice Garden",
    image: "qpyo7gfxn5nfcpejodvu",
    cuisines: ["North Indian", "Rajasthani", "Gujarati"],
    rating: "4.0",
    menu: [
      { item: "Dhokla", price: "₹60" },
      { item: "Kadhi", price: "₹70" },
      { item: "Gatte ki Sabzi", price: "₹120" },
      { item: "Poha", price: "₹50" },
      { item: "Kachori", price: "₹40" },
      { item: "Jalebi", price: "₹80" },
      { item: "Malpua", price: "₹90" },
      { item: "Kheer", price: "₹100" },
    ],
  },
  {
    id: 4,
    name: "Flavors of India",
    image: "f01666ac73626461d7455d9c24005cd4",
    cuisines: ["Punjabi", "Rajasthani", "Bengali"],
    rating: "4.3",
    menu: [
      { item: "Chole Bhature", price: "₹180" },
      { item: "Rajma Chawal", price: "₹200" },
      { item: "Macher Jhol", price: "₹250" },
      { item: "Shorshe Ilish", price: "₹220" },
      { item: "Rasgulla", price: "₹100" },
      { item: "Sandesh", price: "₹80" },
      { item: "Mishti Doi", price: "₹60" },
      { item: "Pithe", price: "₹120" },
    ],
  },
  {
    id: 5,
    name: "Veggie Delight",
    image: "cmfruzqw8ib4r392rlsa",
    cuisines: ["North Indian", "Chinese", "Street Food"],
    rating: "4.1",
    menu: [
      { item: "Pav Bhaji", price: "₹120" },
      { item: "Vada Pav", price: "₹80" },
      { item: "Chowmein", price: "₹150" },
      { item: "Manchurian", price: "₹180" },
      { item: "Momos", price: "₹100" },
      { item: "Gulab Jamun", price: "₹100" },
      { item: "Rabri", price: "₹120" },
      { item: "Kulfi", price: "₹80" },
    ],
  },
  {
    id: 6,
    name: "Tasty Treats",
    image: "bb7ae131544c7d37e10fc5faf76f09d6",
    cuisines: ["South Indian", "Fast Food", "Snacks"],
    rating: "4.4",
    menu: [
      { item: "Idli", price: "₹60" },
      { item: "Dosa", price: "₹70" },
      { item: "Vada", price: "₹50" },
      { item: "Bonda", price: "₹60" },
      { item: "Pakora", price: "₹50" },
      { item: "Samosa", price: "₹40" },
      { item: "Pav Bhaji", price: "₹120" },
      { item: "Jalebi", price: "₹80" },
    ],
  },
  {
    id: 7,
    name: "Flavoursome Fusion",
    image: "7dbbe1948a28781e10d223bc44064fee",
    cuisines: ["Indian", "Chinese", "Mughlai"],
    rating: "4.2",
    menu: [
      { item: "Butter Chicken", price: "₹220" },
      { item: "Paneer Tikka", price: "₹200" },
      { item: "Hakka Noodles", price: "₹180" },
      { item: "Manchurian", price: "₹190" },
      { item: "Biryani", price: "₹250" },
      { item: "Rasmalai", price: "₹100" },
      { item: "Gulab Jamun", price: "₹80" },
      { item: "Kulfi", price: "₹90" },
    ],
  },
  {
    id: 8,
    name: "Spicy Bites",
    image: "mjvjrrgeubpdesb1vx7z",
    cuisines: ["North Indian", "Street Food", "Snacks"],
    rating: "4.3",
    menu: [
      { item: "Samosa", price: "₹20" },
      { item: "Kachori", price: "₹30" },
      { item: "Aloo Tikki", price: "₹40" },
      { item: "Chole Bhature", price: "₹120" },
      { item: "Pav Bhaji", price: "₹100" },
      { item: "Gol Gappe", price: "₹30" },
      { item: "Rabri", price: "₹50" },
      { item: "Jalebi", price: "₹40" },
    ],
  },
  {
    id: 9,
    name: "Green Garden Cafe",
    image: "sn2ha1n5kmm3rpl7x7u9",
    cuisines: ["Continental", "Italian", "Mediterranean"],
    rating: "4.5",
    menu: [
      { item: "Margherita Pizza", price: "₹300" },
      { item: "Pasta Primavera", price: "₹250" },
      { item: "Greek Salad", price: "₹200" },
      { item: "Falafel Wrap", price: "₹180" },
      { item: "Bruschetta", price: "₹150" },
      { item: "Tiramisu", price: "₹120" },
      { item: "Cannoli", price: "₹100" },
      { item: "Gelato", price: "₹80" },
    ],
  },
  {
    id: 10,
    name: "Vegetarian Delights",
    image: "ogquasea896sdlbjhsqj",
    cuisines: ["North Indian", "Gujarati", "Rajasthani"],
    rating: "4.1",
    menu: [
      { item: "Dhokla", price: "₹60" },
      { item: "Khandvi", price: "₹70" },
      { item: "Undhiyu", price: "₹160" },
      { item: "Gujarati Kadhi", price: "₹80" },
      { item: "Dal Baati Churma", price: "₹200" },
      { item: "Ghevar", price: "₹100" },
      { item: "Malpua", price: "₹90" },
      { item: "Basundi", price: "₹120" },
    ],
  },
];
const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

 let restaurantsDiv = document.querySelector(".restaurants");

 let cart = [];





  const getRestaurantData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(restaurantList);
      }, 1000);
    });
  };


  // main asynchronous task handler
async function main() {
  let result = await getRestaurantData();
  renderRestaurantCard(result);
  let orderBtn = restaurantsDiv.querySelectorAll(".orderBtn");
  // console.log(orderBtn)
  orderBtn.forEach((button) => {
button.addEventListener("click",(event) => {
  openModal(event,result)
})
  })


}


function openModal(event,restaurantData){
  let result = getMenuItemById(event, restaurantData);
  let modal = document.createElement("div");
  
  let unorderdList = document.createElement("ul");
  modal.classList.add("modal");
  modal.style.display = "block";
  restaurantsDiv.appendChild(modal);

  let restaurantName = document.createElement("h2")
  restaurantName.classList.add("restaurantName")
  restaurantName.textContent = result.name
  unorderdList.appendChild(restaurantName)

  let closeBtn = document.createElement("div")
  closeBtn.textContent = "X"
  closeBtn.classList.add("close-btn")
  modal.appendChild(closeBtn)

  closeBtn.addEventListener("click",closeModal)

  result.menu.forEach((menuItem) => {
    let listItem = document.createElement("li");
    let itemDetail = document.createElement("div")
    let itemNameSpan = document.createElement("span")
    let itemPriceSpan = document.createElement("span")
    let itemAddbtn = document.createElement("button")

    listItem.classList.add("list-item")
    itemDetail.classList.add("item-div")

    itemAddbtn.textContent = "ADD"
    itemAddbtn.classList.add("add-item")
    itemNameSpan.textContent = menuItem.item
    itemPriceSpan.textContent = menuItem.price;

    itemDetail.appendChild(itemNameSpan)
    itemDetail.appendChild(itemPriceSpan);

    listItem.appendChild(itemDetail)
    listItem.appendChild(itemAddbtn);
    unorderdList.appendChild(listItem)
  })

  modal.appendChild(unorderdList)
  addToCart();

}

function closeModal() {
  let modal = document.querySelector(".modal");
  modal.parentNode.removeChild(modal);
}

function addToCart() {
  let addBtn = document.querySelectorAll(".add-item")

  addBtn.forEach((button) => {
    button.addEventListener("click",function(event) {
      let parentNodeOfCurrentBtn = event.target.parentNode;
      let itemName =  parentNodeOfCurrentBtn.querySelector(".item-div span").textContent
      let itemPrice = parentNodeOfCurrentBtn.querySelector(
        ".item-div span:nth-child(2)"
      ).textContent;

      let item = {
        itemName,
       itemPrice
      }
      cart.push(item)
      // console.log(cart)
    })
  })
}

let flag = 0;
   let cartBtn = document.querySelector("#cart");
   let cartModal = document.querySelector(".cart-modal");
   cartBtn.addEventListener("click", function () {
     console.log("cart clicked");
    //  cartModal.classList.toggle("show-cart");
    if(flag == 0) {
       cartModal.classList.add("show-cart");
       console.log("modal is opened")
       console.log(cart)
       flag = 1
    } else {
       cartModal.classList.remove("show-cart");
      console.log("modal is closed");
      flag=0
    }
   });

function getMenuItemById(event,restaurantData) {
let currentCard = event.currentTarget.closest(".card");
let currentId = currentCard.querySelector("span").textContent;
let result = restaurantData.find((data) => data.id == currentId);
return result
}




function renderRestaurantCard(data) {
  if (data !== undefined) {
    data.forEach((itemInObject) => {
      let card = document.createElement("div");
      let name = document.createElement("h2");
      let id = document.createElement("span");
      let img = document.createElement("img");
      let cuisine = document.createElement("p");
      let rating = document.createElement("p");
      let orderNowBtn = document.createElement("button")

      card.classList.add("card")
      orderNowBtn.classList.add("orderBtn")

      id.textContent = itemInObject.id;
      name.textContent = itemInObject.name;
      img.src = `${IMG_CDN_URL}${itemInObject.image}`;
      cuisine.textContent = "Cuisines: " + itemInObject.cuisines.join(", ");
      rating.textContent = "Rating: " + itemInObject.rating;
      orderNowBtn.textContent = "order now"

      id.style.display = "none"
      card.appendChild(id);
      card.appendChild(name);
      card.appendChild(img);
      card.appendChild(cuisine);
      card.appendChild(rating);
      card.append(orderNowBtn)

      restaurantsDiv.appendChild(card);
    });
  } else {
    console.log("No data available");
   let loading =  document.createElement("h2")
   loading.textContent = "Loading....."
   loading.classList.add("loading")
    restaurantsDiv.appendChild(loading)
  }
}


// main function 
main();