//LANDING PAGE 
//I'd like tdisplay the nav-bar on mouse hover. I couldn't finish it

$(document).ready(function() {

  const navBar = `<nav class="navbar navbar-light" style="background-color: #e3f2fd" id="nav-bar">
  <div class="container-fluid" id="nav-container">
    <a class="navbar-brand" href="#">Studio Victor Vera</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Equipo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Tienda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Reserva Tu Hora</a>
        </li>
        <li>
          <a class="nav-link active" href="#">Carrito</a>
          <span id="nav-shopping-cart">
            <i class="fas fa-shopping-cart" id="nav-shopping-cart-img"></i> 
            <span class="badge rounded-pill bg-danger position-absolute top-50 start-40" >1</span>
          </span>
        </li>
      </ul>
    </dio v>
  </div>
  </nav>`

$('#landing-page-img').click(function() {
  $('#landing-page').prepend(navBar);
  $('#nav-bar').show();
})

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

allProducts.map((product, index) => {
  $('#all-products').append(`<div class="product-wrapper" id="card-border" key={index}>
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
  )})


//THIS FUNCTION GETS THE INFO FROM A SELECTED PRODUCT. IT TAKES WHAT'S IN THE INDEX WHICH IS LINKED TO THE BUTTON AND THEN SEARCH THE ARRAY OF PRODUCTS 
const displayCart = document.getElementById('display-cart-screen')

const verIdProductSelected = (key) => {
  let selectedProduct = allProducts.find((p, index) => index === key)
  let productName = selectedProduct['productName']
  let productImage = selectedProduct['image']
  let productPrice = selectedProduct['price']

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

const shippingForm = $('#shipping-form')
const buyerName = $('#buyer-name')
const buyerAddress = $('#address')
const buyerPayment = $('#payment')
const buyerCard = $('#card-number')
const submitOrder = $('#btn-delivery-details') //this triggers the flow
const shipDetails = $('#shipping-details-confirmed') //where info will be displayed

shippingForm.on('submit', addDataLocalStorage);
let arr = new Array();

function addDataLocalStorage(e) {
    e.preventDefault()
    deleteData()
    getData()
    arr.push({
      buyerName: buyerName.val(), //this could be done with a constructor as well
      buyerAddress: buyerAddress.val(),
      buyerPayment: buyerPayment.val(),
      buyerCard: buyerCard.val()
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
  let deliveryDetails = new Array();
  deliveryDetails = JSON.parse(localStorage.getItem("localData"));

  
console.log(deliveryDetails)
  deliveryDetails.map(details => {
    $('#shipping-confirmation').append(`<div class="shipping-summary"> 
    <h2>Revisa los detalles de tu envio</h2>
    <ul> 
    <li><strong>Nombre:</strong><span>${details.buyerName}</span></li>
    <li><strong>Direccion:</strong><span>${details.buyerAddress}</span></li>
    <li><strong>Medio de Pago:</strong><span>${details.buyerPayment}</span></li>
    <li><strong>Numero de Tarjeta:</strong><span>${details.buyerCard}</span></li>
    </ul>
    </div>`)
  })}

  const verifyOrderBtn = $('#check-order-btn')
  verifyOrderBtn.on('click', displayData)


        
//RESERVATION SECTION
//FUNCTION THAT DISPLAY A TEMPLATE TO MAKE RESERVATION AFTER USER HAS CLICK A BUTTON ON THE NAV BAR OR PAGE

const reservationBtn = $('#reservationBtn')
reservationBtn.on('click', displayReservationForm);   

function displayReservationForm() {
  $('#reservation-form').append(`<div id="reservation-form-wrapper">
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
  )}
})



let modalWrap = null;

const showModal = (title, description, yesBtnLabel = 'Yes', noBtnLabel = 'Cancel', callback) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = $(document.createElement('div'));
  modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>${description}</p>
          </div>
          <div class="modal-footer bg-light">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${noBtnLabel}</button>
            <button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">${yesBtnLabel}</button>
          </div>
        </div>
      </div>
    </div>
  `;

  modalWrap.querySelector('.modal-success-btn').onclick = callback;

  document.body.append(modalWrap);

  let modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}

// showModal(title, description, yesBtnLabel = 'Yes', noBtnLabel = 'Cancel', callbackAfterClickingYesBtn);
document.getElementById('reservationBtn').onclick = () => showModal('Paso 1', 'Do you want to delete this file?', "Yes", "No", () => {
  console.log('lalalal');
});

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



