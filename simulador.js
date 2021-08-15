//DB WITH AN ARRAY OF PRODUCTS
let allProducts = [{"id":1,"productName":"Acondicionador All Soft Mega","brand":"redken","size":"250ml","price":24990,"costOfShip":500,"category":"acondicionador","inStock":"TRUE","membersDiscount":"TRUE","reviewStars":4.5,"description":"Suavidad Profunda. Nuevo All Soft Mega con Superfood Nutri-Complex, una mezcla de extracto de cactus, aloe vera y aceite de sacha inchi, ofrece una alimentación intensa y una reposición inmediata para el cabello severamente seco y grueso. La máxima suavidad en tan solo una ducha.","image":"https://cdnx.jumpseller.com/palumbo-store/image/4100097/resize/200/200?1617494517"},
{"id":2,"productName":"Shampoo Absolut Repair","brand":"l'oreal professionnel","size":"300ml","price":18990,"costOfShip":700,"category":"shampoo","inStock":"FALSE","membersDiscount":"FALSE","reviewStars":3,"description":"El Shampoo Absolut Repair Lipidium repara y fortalece las áreas más dañadas del cabello. El cabello queda instantáneamente reconstruido y transformado desde el interior.","image":"https://images.jumpseller.com/store/palumbo-store/2284726/2.jpg?1617493135"},
{"id":3,"productName":"Máscara Absolut Repair","brand":"l'oreal professionnel","size":"250ml","price":26990,"costOfShip":300,"category":"mascara","inStock":"TRUE","membersDiscount":"TRUE","reviewStars":4,"description":"Potenciado con Quinoa dorada + proteína, repara instantáneamente todo el cabello sin apelmazar. Su textura en gel, deja el cabello 7x más brillante y suave. Sin residuo en la fibra del cabello.","image":"https://cdnx.jumpseller.com/palumbo-store/image/7564279/resize/200/200?1619653438"},
{"id":4,"productName":"Serum Cicaplasme Blond Absolut","brand":"kerastase","size":"150ml","price":28990,"costOfShip":200,"category":"serum","inStock":"FALSE","membersDiscount":"TRUE","reviewStars":5,"description":"Trata instantáneamente las zonas dañadas de la fibra. Cicaplasme proporciona protección contra el calor hasta 230°C para proteger el cabello de las herramientas de peinado con calor. Consigue un cabello suave y luminoso.","image":"https://cdnx.jumpseller.com/palumbo-store/image/6885303/resize/200/200?1619654030"}]

//THIS FUNCTION HELPS FORMAT THE PRICE DISPLAYED
const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  })

//THIS FUNCTION MAP THE PRODUCT ARRAY AND DISPLAY THE LIST OF PRODUCTS IN THE HTML FILE

$('#all-products').append(allProducts.map((product, index) => 
    `<div class="product-wrapper" id="card-border" key={index}>
    <div class="img-border">
      <img id="product-image" src=${product.image} alt="product-image"/>
      </div>
      <div class="product-details-container">
        <div id="product-name">${product.productName}</div>
        <div id="product-quantity">${product.size}</div>
        <div id="product-brand">${product.brand}</div>
        <div id="product-price">${formatter.format(product.price)}</div>
        <div id="rating"> 
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      <label for="quantity">Cantidad:</label>
      <select name="quantity" class="productQuantity">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      </select>
      <button class="add-to-cart" id="addToCart-btn" onclick="verIdProductSelected(${index})"> Agregar al Carro </button>
      </div>
  </div>`
))

//THIS FUNCTION GETS THE INFO FROM A SELECTED PRODUCT. IT TAKES WHAT'S IN THE INDEX WHICH IS LINKED TO THE BUTTON AND THEN SEARCH THE ARRAY OF PRODUCTS 
const displayCart = document.getElementById('display-cart-screen')

const verIdProductSelected = (key) => {
  // console.log('key', key);
  let selectedProduct = allProducts.find((p, index) => index === key)
  // id.innerHTML += `<div>${productName}</div>`
  let productName = selectedProduct['productName']
  let productImage = selectedProduct['image']
  let productPrice = selectedProduct['price']
  console.log(selectedProduct)

  addToCart(productName, productImage, productPrice, displayCart)
  
} 
//THIS FUNCTION TAKES THE DATA FROM THE PRODUCT SELECTED AND DISPLAYS IT ON THE SCREEN
//I will need to write a function to save selected products in storage
//I will need to make buttons to change quantity and remove products from cart

const addToCart = (product, image, price, element3) => {
  let productListSoFar = document.createElement('div')
  productListSoFar.innerHTML = 
  `<div id="card-border">
  <h2>Tienes<span> x </span>productos en tu carrito</h2>
  <div class="container" id="cart-list">
    <div class="row align-items-center">
      <div class="col">
        <img id="cart-product-image" src=${image}> </img>
      </div>
      <div class="col">
        ${product}
      </div>
      <div class="col">
        Unidades TODO
      </div>
      <div class="col">
        ${price}
      </div>
    </div>
  </div>
</div>`
element3.append(productListSoFar)

}
displayCart.addEventListener('change', addToCart)

//THIS TAKES WHAT AN USER HAS SELECTED ON THE PRODUCT LIST 
//IT GAVE ME AN ERROR AFTER ADDING JQUERY. ALSO IT DOESN'T LET ME GET THE UNITS FOR EACH PRODUCT ONLY FOR THE FIRST ONE. WHY?

// const btnAddProductQuantity = document.querySelector('.productQuantity')
// btnAddProductQuantity.addEventListener('change', handleQuantityEvent)
// let quantitySelected = document.getElementById('products-added-to-cart')

// function handleQuantityEvent(e) {
// let quantity = e.target.value
// displayQuantity(quantity, quantitySelected)
// }

// function displayQuantity(quantity, element) {
//     const quantityDisplay = document.createElement('div')
//     quantityDisplay.innerHTML = `<div> Seleccionaste ${quantity} unidades </div>`
//     element.append(quantityDisplay)
// }

//SHIPPING DETAILS SECTION
//FUNCTION THAT CREATES A BANNER WITH SHIPPING DETAILS. USER CAN VERIFY DETAILS BEFORE CONFIRMING 

const buyerName = document.getElementById('buyer-name')
const buyerAddress = document.getElementById('address')
const buyerPayment = document.getElementById('payment')
const buyerCard = document.getElementById('card-number')
const submitOrder = document.getElementById('btn-delivery-details') //this triggers the flow
const shipDetails = document.getElementById('shipping-details-confirmed') //where info will be displayed

submitOrder.addEventListener('click', addDataLocalStorage);
let arr = new Array();

function addDataLocalStorage(e) {
    e.preventDefault()
    deleteData()
    getData()
    arr.push({
      buyerName: buyerName.value,
      buyerAddress: buyerAddress.value,
      buyerPayment: buyerPayment.value,
      buyerCard: buyerCard.value
    })
   localStorage.setItem("localData", JSON.stringify(arr))
   
    }
    function getData(){
      let str = localStorage.getItem("localData");
      if (str!= null)
          arr = JSON.parse(str);
  }
  
  function deleteData(){
  localStorage.clear();
  }

//THIS DISPLAY THE DELIVERY DETAILS ON THE SCREEN

const displayData = () => {
  let arr1 = new Array();
  arr1 = JSON.parse(localStorage.getItem("localData"));

  let destiny= document.getElementById('shipping-details-confirmed');
console.log(arr1)
  for(i = 0; i < arr1.length; i++){
destiny.innerHTML += `<div class="shipping-summary"> 
<h2>Revisa los detalles de tu envio</h2>
<ul> 
<li><strong>Nombre:</strong><span>${arr1[i].buyerName}</span></li>
<li><strong>Direccion:</strong><span>${arr1[i].buyerAddress}</span></li>
<li><strong>Medio de Pago:</strong><span>${arr1[i].buyerPayment}</span></li>
<li><strong>Numero de Tarjeta:</strong><span>${arr1[i].buyerCard}</span></li>
</ul>
</div>`
}
}
const verifyOrderBtn = document.getElementById('check-order-btn')
verifyOrderBtn.addEventListener('click', displayData)
        
//RESERVATION SECTION
//FUNCTION THAT DISPLAY A TEMPLATE TO MAKE RESERVATION AFTER USER HAS CLICK A BUTTON ON THE NAV BAR OR PAGE

const reservationBtn = document.getElementById('reservationBtn')
reservationBtn.addEventListener('click', displayReservationForm);   

function displayReservationForm() {
  let reservationForm = document.getElementById('reservation-form')
  reservationForm.innerHTML += 
  `<div id="reservation-form-wrapper">
  <h2>Reserva tu hora</h2>
  <h3>Paso 1: Selecciona el tipo de servicio</h3>
  <ul class="list-group">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Corte Mujer
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Corte Hombre
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Peinado
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Extensiones
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Color
    </li>
      <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Balage
      </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Brillo
    </li>
  </ul>
  <div>Aqui quiero usar la opcion de "modals". Una vez que usuario clickea reservar hora, esto muestra calendario y horas disponibles. Boton siguiente</div>
  <button id="liveToastBtn" type="button" class="btn btn-success">Continuar</button>
  </div>`
}

// const reservationContinue1 = document.getElementById('reservationBtn1')
// reservationContinue1.addEventListener('click', displayReservationForm2);   

// function displayReservationForm2() {
//   //maybe this isn't working because DOM isn't ready yet???
//   let reservationForm = document.getElementById('reservation-form')
//   reservationForm.innerHTML += 
//   `<h3>Paso 2: Completa tus Datos</h3>
//   <form>
//     <div class="mb-3">
//       <div class="row">
//         <div class="col-6">
//           <label for="name" class="form-label">Nombre * </label>
//           <input type="text" class="form-control" id="name" placeholder="Juan" required>
//         </div>
//         <div class="col-6">
//           <label for="last-name" class="form-label">Apellido * </label>
//           <input type="text" class="form-control" id="last-name" placeholder="Vera" required>
//         </div>  
//       </div>
//       <div class="row">
//         <div class="col-6">
//           <label for="email" class="form-label">Email * </label>
//           <input type="email" class="form-control" id="email" placeholder="juan@gmail.com" required>
//         </div>
//         <div class="col-6">
//           <label for="phone" class="form-label">Celular * </label>
//           <input type="tel" class="form-control" id="phone" placeholder="56-X-XXXX-XXXX" required>
//         </div>  
//       </div>
//     </div>
//     <div class="dropdown">
//       <label for="dropdown-list">Como nos conociste?</label>
//       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-list">
//         Selecciona una opcion
//       </button>
//       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//         <li><a class="dropdown-item" href="#">Amigo/a</a></li>
//         <li><a class="dropdown-item" href="#">Instagram</a></li>
//         <li><a class="dropdown-item" href="#">Internet</a></li>
//         <li><a class="dropdown-item" href="#">Otro</a></li>
//       </ul>
//     </div>
//     <div class="mb-3">
//       <label for="comments" class="form-label">Comentarios</label>
//       <textarea class="form-control" id="comments" rows="2"></textarea>
//     </div>
//     <button id="reservation-continue1"type="button" class="btn btn-success">Reservar</button>
//   </form>
//   <div>Despues de que usuario confirma, se despliega resumen de hora y se le indica que un correo le fue enviado</div>`
// }



