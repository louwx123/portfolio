const alldata=[
  {//1
    name:`Cherry MX 8.0`,
    code:101,
    image:`img/cherry/cherry-black-1.jpg`,
    color:`black`,
    brand:`cherry`,
    price:200,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:50,
    light:`light`
  },{//2
    name:`Cherry G80`,
    code:102,
    image:`img/cherry/cherry-black-2.jpg`,
    color:`black`,
    brand:`cherry`,
    price:100,
    rating:4.5,
    category:`business`,
    sale:`on sale`,
    stock:180,
    light:`nolight`
  },{//3
    name:`Cherry MX 6.0`,
    code:103,
    image:`img/cherry/cherry-black-3.jpg`,
    color:`black`,
    brand:`cherry`,
    price:170,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:26,
    light:`light`
  },{//4
    name:`Cherry MX 8.0`,
    code:104,
    image:`img/cherry/cherry-pink-4.jpg`,
    color:`pink`,
    brand:`cherry`,
    price:220,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:6,
    light:`nolight`
  },{//5
    name:`Cherry MX 8.0`,
    code:105,
    image:`img/cherry/cherry-white-5.jpg`,
    color:`white`,
    brand:`cherry`,
    price:200,
    rating:4.8,
    category:`gaming`,
    sale:`on sale`,
    stock:30,
    light:`light`

  },{//6
    name:`Cherry G90`,
    code:106,
    image:`img/cherry/cherry-white-6.jpg`,
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
    code:108,
    image:`img/corsair/corsair-black-1.jpg`,
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
    code:109,
    image:`img/corsair/corsair-black-1.jpg`,
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
    code:110,
    image:`img/corsair/corsair-black-1.jpg`,
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
    code:111,
    image:`img/corsair/corsair-black-1.jpg`,
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
    code:112,
    image:`img/logitech/logitech-black-1.jpg`,
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
    code:113,
    image:`img/logitech/logitech-black-2.jpg`,
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
    code:114,
    image:`img/logitech/logitech-black-3.jpg`,
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
    code:115,
    image:`img/logitech/logitech-white-4.jpg`,
    color:`white`,
    brand:`logitech`,
    price:80,
    rating:4.7,
    category:`business`,
    sale:`on sale`,
    stock:0,
    light:`nolight`,
  },{  //15
    name:`razer Huntsman`,
    code:116,
    image:`img/razer/razer-black-1.jpg`,
    color:`black`,
    brand:`razer`,
    price:120,
    rating:4.7,
    category:`gaming`,
    sale:`on sale`,
    stock:20,
    light:`light`
  },{//16
    name:`razer Blackwodow`,
    code:117,
    image:`img/razer/razer-black-2.jpg`,
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
    code:117,
    image:`img/razer/razer-pink-3.jpg`,
    color:`pink`,
    brand:`razer`,
    price:220,
    rating:4.7,
    category:`gaming`,
    sale:`on sale`,
    stock:2,
    light:`light`,
  },{//18
    name:`razer Blackwidow`,
    code:119,
    image:`img/razer/razer-white-4.jpg`,
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
  {itemid: 101, qty: 1}
];
//functions

function getItemAsHtml(alldata) {
  let sale=``;
  if(alldata.sale==`on sale` && alldata.stock > 0){
    sale=`<small class="onsale">On Sale!!!</small>`;
    cartbtn=`<button type="button" class="cartbtn"  data-code="${alldata.code}" id="addtocart"> Add to Cart</button> `;
  }
  else{
    sale=`<small class="soldout">Sold out</small>`
  }

  return `
    <section class="item"> 
      <img src="${alldata.image}" alt="${alldata.name}">
      ${sale}
      <ul>
        <li><label class="itemname">${alldata.name}</label></li>
        <li><label>Price: $${alldata.price}</label></li>
        <li><label>${alldata.category} keyboard</label></li>
        <li><label>Rating: ${alldata.rating}<label></li> 
      </ul>
      ${cartbtn}
    </section>`;
} 

document.getElementById(`allitems`).innerHTML = alldata
  .map(getItemAsHtml)
  .join("\n");

  //search 
function LoadProducts(n){
  const search=document.getElementById('find').value.toLowerCase();
  const searchResultsArray=alldata.filter(item=> item.name.toLowerCase().includes(search));
  renderProducts(searchResultsArray);
}

//addto cart function

// const addItemToCart = itemid => {

//   const cartItem = shoppingCart.find(item => item.itemid == itemid);

//   if (cartItem) {  
//     cartItem.qty++;
//     alert("Another item has been added to your cart");
//   } else {
//     shoppingCart.push({ID: pID, qty: 1});
//     alert("A new item has been added to your cart");
//   }
// }

// const addItemToCart = courseid => {
//   // [ {courseid: 101, qty: 1} ]

//   const cartItem = shoppingCart.find(item => item.courseid == courseid);

//   if (cartItem) {  // if a cartItem was found
//     cartItem.qty++;
//   } else {
//     shoppingCart.push({courseid: courseid, qty: 1});
//   }


function hideFilter(){
  const hide = document.getElementById("filters");
  if (hide.style.display == "none") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }
}
function hideSorts(){
  const a = document.getElementById("sorts");
  if (a.style.display == "none") {
    a.style.display = "flex";
  } else {
    a.style.display = "none";
  }
}

//filte
function LoadProductsByFilters(){

  let arrayByCategory=[];
  let arrayByBrand=[];
  let arrayByColor=[];  
  let arrayByLight=[];

  if(document.querySelector('input[name="category"]:checked')){
    let category=document.querySelector('input[name="category"]:checked').value;
    arrayByCategory=alldata.filter(item=>item.category.toLowerCase()==category.toLowerCase());
  }
  else {
    arrayByCategory=alldata;
  }

  if(document.querySelector('input[name="brand"]:checked')){
    let brand=document.querySelector('input[name="brand"]:checked').value;
    arrayByBrand=arrayByCategory.filter(item=>item.brand.toLowerCase() == brand.toLowerCase());
  }
  else{
    arrayByBrand=arrayByCategory;
  }



  if(document.querySelector('input[name="color"]:checked')){
    let color=document.querySelector('input[name="color"]:checked').value;
    arrayByColor=arrayByBrand.filter(p=>p.color==color);
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

  if(document.querySelector('input[name="price"]:checked') != null){
    let price=document.querySelector('input[name="price"]:checked').value;
    arrayByPrice=arrayByLight.filter(item=>item.price>=price);
  }
  else{
    arrayByPrice=arrayByLight;
  }

  renderProducts(arrayByPrice);
}

//sort
function LoadProductsPriceLowToHigh() {
  const PriceLowToHighArray = alldata
    .slice(0)
    .sort((a, b) => (a.price > b.price ? 1 : -1));
  renderProducts(PriceLowToHighArray);
}

function LoadProductsPriceHighTolow() {
  const PriceHighToLowArray = alldata
    .slice(0)
    .sort((a, b) => (a.price < b.price ? 1 : -1));
  renderProducts(PriceHighToLowArray);
}

function LoadProductsByAvailability() {
  const availabilityArray = alldata
    .slice(0)
    .sort((a, b) => (a.stock < b.stock ? 1 : -1));
  renderProducts(availabilityArray);
}


function renderProducts(arr) {
  document.getElementById(`allitems`).innerHTML = arr.map(getItemAsHtml).join("\n");
  if (arr.length != 0) {
    document.getElementById(`result`).innerHTML=`<label>${arr.length} results have been found</label>`
  }
  else{
    document.getElementById(`result`).innerHTML=`<label>O result found!</label>`
 }
 
}




//execution
window.addEventListener('load', () => {
document.getElementById(`find`).addEventListener("change",LoadProducts);
document.getElementById(`pricehightolow`).addEventListener("click", LoadProductsPriceHighTolow);
document.getElementById(`pricelowtohigh`).addEventListener("click", LoadProductsPriceLowToHigh);
document.getElementById(`availability`).addEventListener("click", LoadProductsByAvailability);
document.getElementById(`filter`).addEventListener("click", hideFilter);
document.getElementById(`sort`).addEventListener("click", hideSorts);
document.querySelectorAll('[name="category"]').forEach(filterradio => filterradio.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="brand"]').forEach(filterradio => filterradio.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="color"]').forEach(filterradio => filterradio.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="light"]').forEach(filterradio => filterradio.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="price"]').forEach(filterradio => filterradio.addEventListener('change', LoadProductsByFilters));

getItemAsHtml(alldata);

});