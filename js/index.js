const alldata=[
  {//1
    name:`Cherry MX 8.0 Black`,
    productCode:101,
    imageUrl:`img/cherry/cherry-black-1.jpg`,
    color:`black`,
    brand:`cherry`,
    price:200,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:50,
    light:`light`
  },{//2
    name:`Cherry G80 Black`,
    productCode:102,
    imageUrl:`img/cherry/cherry-black-2.jpg`,
    color:`black`,
    brand:`cherry`,
    price:100,
    rating:4.5,
    category:`business`,
    sale:`on sale`,
    stock:180,
    light:`nolight`
  },{//3
    name:`Cherry MX 6.0 Black`,
    productCode:103,
    imageUrl:`img/cherry/cherry-black-3.jpg`,
    color:`black`,
    brand:`cherry`,
    price:170,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:26,
    light:`light`
  },{//4
    name:`Cherry MX 8.0 Pink`,
    productCode:104,
    imageUrl:`img/cherry/cherry-pink-4.jpg`,
    color:`pink`,
    brand:`cherry`,
    price:220,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:6,
    light:`nolight`
  },{//5
    name:`Cherry MX 8.0 White`,
    productCode:105,
    imageUrl:`img/cherry/cherry-white-5.jpg`,
    color:`white`,
    brand:`cherry`,
    price:200,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:30,
    light:`light`

  },{//6
    name:`Cherry G90 White`,
    productCode:106,
    imageUrl:`img/cherry/cherry-white-6.jpg`,
    color:`white`,
    brand:`cherry`,
    price:100,
    rating:4.5,
    category:`gaming`,
    sale:`on sale`,
    stock:10,
    light:`nolight`

  },{//7
    name:`Corsair K63`,
    productCode:108,
    imageUrl:`img/corsair/corsair-black-1.jpg`,
    color:`black`,
    brand:`corsair`,
    price:120,
    rating:3.8,
    category:`gaming`,
    sale:`on sale`,
    stock:20,
    light:`light`
  },{//8
    name:`Corsair K65`,
    productCode:109,
    imageUrl:`img/corsair/corsair-black-1.jpg`,
    color:`black`,
    brand:`corsair`,
    price:150,
    rating:3.6,
    category:`gaming`,
    sale:`on sale`,
    stock:10,
    light:`light`
  },{//9
    name:`Corsair K69`,
    productCode:110,
    imageUrl:`img/corsair/corsair-black-1.jpg`,
    color:`black`,
    brand:`corsair`,
    price:170,
    rating:4.0,
    category:`gaming`,
    sale:`on sale`,
    stock:0,
    light:`light`
  },{//10
    name:`Corsair K70`,
    productCode:111,
    imageUrl:`img/corsair/corsair-black-1.jpg`,
    color:[`black`, `white`],
    brand:`corsair`,
    price:220,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:20,
    light:`light`
  },{//11
    name:`logitech G610`,
    productCode:112,
    imageUrl:`img/logitech/logitech-black-1.jpg`,
    color:`black`,
    brand:`logitech`,
    price:160,
    rating:4.7,
    category:`gaming`,
    sale:`on sale`,
    stock:0,
    light:`light`
  },{//12
    name:`logitech M32`,
    productCode:113,
    imageUrl:`img/logitech/logitech-black-2.jpg`,
    color:`black`,
    brand:`logitech`,
    price:80,
    rating:3.2,
    category:`business`,
    sale:`on sale`,
    stock:200,
    light:`nolight`,
  },{//13
    name:`logitech G913`,
    productCode:114,
    imageUrl:`img/logitech/logitech-black-3.jpg`,
    color:`black`,
    brand:`logitech`,
    price:240,
    rating:4.7,
    category:`gaming`,
    sale:`on sale`,
    stock:3,
    light:`light`,
  },{//14
    name:`logitech K510`,
    productCode:115,
    imageUrl:`img/logitech/logitech-white-4.jpg`,
    color:`white`,
    brand:`logitech`,
    price:80,
    rating:4.7,
    category:`business`,
    sale:`on sale`,
    stock:0,
    light:`nolight`,
  },{  //15
    name:`razer Huntsman Black`,
    productCode:116,
    imageUrl:`img/razer/razer-black-1.jpg`,
    color:`black`,
    brand:`razer`,
    price:120,
    rating:4.7,
    category:`gaming`,
    sale:`on sale`,
    stock:20,
    light:`light`
  },{//16
    name:`razer Blackwodow Black`,
    productCode:117,
    imageUrl:`img/razer/razer-black-2.jpg`,
    color:`black`,
    brand:`razer`,
    price:120,
    rating:4.7,
    category:`gaming`,
    sale:`on sale`,
    stock:20,
    light:`light`,
  },{//17
    name:`razer Onata Pink`,
    productCode:117,
    imageUrl:`img/razer/razer-pink-3.jpg`,
    color:`pink`,
    brand:`razer`,
    price:220,
    rating:4.7,
    category:`gaming`,
    sale:`on sale`,
    stock:2,
    light:`light`,
  },{//18
    name:`razer Blackwidow white`,
    productCode:119,
    imageUrl:`img/razer/razer-white-4.jpg`,
    color:`white`,
    brand:`razer`,
    price:120,
    rating:4.2,
    category:`gaming`,
    sale:`on sale`,
    stock:50,
    light:`light`,
  }
]



const shoppingCart = [
  {ID: 101, qty: 1}
];

const wishlist=[
  {
    ID:100, qty:1}
  ];

//functions




function getShoesAsHtml(alldata) {
  let heartButton=`<button type="button" class="heartBtn" data-code="${alldata.productCode}" id="heartBtn"><span class="material-icons">favorite</span></button>`;
  let sale='';
  let outOfStock=``;
  if(alldata.sale==`on sale` && alldata.stock > 0){
    sale=`<small class="onsale_banner">On Sale!</small>`;
    cartBtn=`<button type="button" class="productCardButton"  data-code="${alldata.productCode}" id="addtocart"> Add to Cart</button> `;
  
  }
  else{
    onsale=`<small class="outofstock">Out of stock</small>`
  }

  return `
    <section class="productsCard"> 
    <img src="${alldata.imageUrl}" alt="${alldata.name}">
    ${sale}
    <h1><strong>${alldata.name}</strong></h1>
        <ul>
          <li><h3>${alldata.category}</h3></li>
          <li><h3>Price: $${alldata.price}</h3></li>
          <li><p>Rating: ${alldata.rating}<p></li>
        </ul>
        ${cartBtn}
        </section>`;
}

document.getElementById(`app`).innerHTML = alldata
  .map(getShoesAsHtml)
  .join("\n");

  //search functionality
function LoadProductsByName(e){
  e.preventDefault();
  const search=document.getElementById('find').value;
  const lowerCase=search.trim().toLowerCase();
  const searchResultsArray=alldata.filter(p=> p.name.toLowerCase().includes(lowerCase));
  renderProducts(searchResultsArray);
}

//addto cart function
function handleClicksofBtns(){
  if (event.target.matches('button.productCardButton')) {
    const code = parseInt(event.target.dataset.code);
    addItemToCart(code);
  }

  if (event.target.closest('button').matches('button.heartBtn')) {
    const code = parseInt(event.target.closest('button').dataset.code);
      addToWishlist(code);
  }
  else{
    if(!event.target.matches('button.heartBtn') && !event.target.matches('button.productCardButton')){
      return;
    }
  
  
}}



const addToWishlist = pID => {
 

  const cartItem = wishlist.find(item => item.ID == pID);

  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
    alert("Item has been already added to wishlist ");
  } else {
    wishlist.push({ID: pID, qty: 1});
    alert("New wishlist item has been added wishlist");
  }
}

//add to wishlist

const addItemToCart = pID => {
  // [ {courseid: 101, qty: 1} ]

  const cartItem = shoppingCart.find(item => item.ID == pID);

  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
    alert("Another item has been added to your cart");
  } else {
    shoppingCart.push({ID: pID, qty: 1});
    alert("A new item has been added to your cart");
  }
}



function LoadFilterMenu(){
  const x = document.getElementById("filtermenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//filter functions

// function LoadProductsByPriceFilter(){
//  const price=document.getElementById('PriceFilter').value;
//  const searchResultsArray=alldata.filter(p=> p.price <= price);
//  renderProducts(searchResultsArray);
// }



function LoadProductsByFilters(){
  //heirarchy category>rating >brand> colour > size >  discount 
  // let category;
  // let brand;
  // let color;
  let arrayByCategory=[];
  let arrayByBrand=[];
  let arrayByColor=[];  
  let arrayByLight=[];

  if(document.querySelector('input[name="category"]:checked')){
    let category=document.querySelector('input[name="category"]:checked').value;
    arrayByCategory=alldata.filter(p=>p.category.toLowerCase()==category.toLowerCase());
  }
  else {
    arrayByCategory=alldata;
  }

  if(document.querySelector('input[name="brand"]:checked')){
    let brand=document.querySelector('input[name="brand"]:checked').value;
    arrayByBrand=arrayByCategory.filter(p=>p.brand.toLowerCase() == brand.toLowerCase());
  }
  else{
    arrayByBrand=arrayByCategory;
  }

  // if(document.querySelector('input[name="price"]:checked') != null){
  //   let price=document.querySelector('input[name="price"]:checked').value;
  //   arrayByPrice=arrayByCategory.filter(p=>p.price<=price);
  // }
  // else{
  //   arrayByPrice=arrayByCategory;
  // }

  if(document.querySelector('input[name="color"]:checked')){
    let color=document.querySelector('input[name="color"]:checked').value;
    arrayByColor=arrayByBrand(p=>p.color.toLowerCase() == color.toLowerCase());
  }
  else{
    arrayByColor=arrayByBrand;
  }


  if(document.querySelector('input[name="light"]:checked')){
    let light=document.querySelector('input[name="light"]:checked').value;
    arrayByLight=arrayByColor.filter(p=>p.light.toLowerCase()==light.toLowerCase());
  }
  else{
    arrayByLight=arrayByColor;
  }

  renderProducts(arrayByLight);
}


//sorting functions
function LoadProductsPriceHighTolow() {
  //alert("in high to low");
  const PriceHighToLowArray = alldata
    .slice(0)
    .sort((a, b) => (a.price < b.price ? 1 : -1));
  renderProducts(PriceHighToLowArray);
}

function LoadProductsPriceLowToHigh() {
  //alert("in low to high");
  const PriceLowToHighArray = alldata
    .slice(0)
    .sort((a, b) => (a.price > b.price ? 1 : -1));
  renderProducts(PriceLowToHighArray);
}

function LoadProductsByAvailability() {
  //alert("in availability function");
  const availabilityArray = alldata
    .slice(0)
    .sort((a, b) => (a.stock < b.stock ? 1 : -1));
  renderProducts(availabilityArray);
}


function renderProducts(arr) {
  document.getElementById(`app`).innerHTML = arr.map(getShoesAsHtml).join("\n");
  let res = 'Products';
  if (arr.length == 1) {
    res = 'Product'
    document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
  }
 if(arr.length==0){
  res = 'Products'
    document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
    document.getElementById(`app`).innerHTML=`<h1>O RESULTS found!</h1>`
 }
 
}




//execution
window.addEventListener('load', () => {
document.getElementById(`find`).addEventListener("change",LoadProductsByName);
document.getElementById(`PriceHighToLow`).addEventListener("click", LoadProductsPriceHighTolow);
document.getElementById(`PriceLowToHigh`).addEventListener("click", LoadProductsPriceLowToHigh);
document.getElementById(`availability`).addEventListener("click", LoadProductsByAvailability);

document.getElementById(`filter`).addEventListener("click", LoadFilterMenu);
document.getElementById('app').addEventListener("click", handleClicksofBtns);
document.querySelectorAll('[name="category"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="brand"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="color"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="light"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="price"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));

//start
getShoesAsHtml(alldata);

});