// let serviceType = [{"id ":1,"category":"Peluquería","serviceName":"Alisado Brasil Cacau","description":"Tratamiento de alisado con brasil cacau","StartingPrice":55000,"duration":90},
// {"id ":2,"category":"Peluquería","serviceName":"Alisado Chocolate","description":"Tratamiento de alisado con producto alternativo a base de chocolate","StartingPrice":48000,"duration":90},
// {"id ":3,"category":"Peluquería","serviceName":"Alisado Coffee","description":"Tratamiento de alisado con producto alternativo a base de cafe","StartingPrice":48000,"duration":90},
// {"id ":4,"category":"Peluquería","serviceName":"Alisado Keratina","description":"Tratamiento de alisado con keratina","StartingPrice":54000,"duration":90},
// {"id ":5,"category":"Peluquería","serviceName":"Alisado Keratina Hidrolizada","description":"Tratamiento de alisado con producto alternativo a base de keratina hidrolizada","StartingPrice":48000,"duration":30},
// {"id ":6,"category":"Peluquería","serviceName":"Hidratacion Suave","description":"Tratamiento de hidratacion con cremas capilares","StartingPrice":12000,"duration":30},
// {"id ":7,"category":"Peluquería","serviceName":"Babylights","description":"Técnica que aporta luz al cabello de manera sutil intentando imitar el reflejo natural de los bebés en el cabello.","StartingPrice":42000,"duration":180},
// {"id ":8,"category":"Peluquería","serviceName":"Balayage ","description":"Barrido en el cabello para obtener un degradé natural","StartingPrice":60000,"duration":180},
// {"id ":9,"category":"Peluquería","serviceName":"Corte Mujer","description":"Corte de acuerdo a rostro","StartingPrice":18000,"duration":60},
// {"id ":10,"category":"Peluquería","serviceName":"Corte Hombre","description":"Corte de acuerdo a rostro","StartingPrice":12000,"duration":30},
// {"id ":11,"category":"Peluquería","serviceName":"Corte Infantil","description":"Corte de acuerdo a rostro","StartingPrice":10000,"duration":45},
// {"id ":12,"category":"Peluquería","serviceName":"Highlights","description":"Técnica que aporta luz al cabello a través del Visajismo.","StartingPrice":55000,"duration":180},
// {"id ":13,"category":"Peluquería","serviceName":"Olaplex","description":"Reparación y restauración de enlaces de disulfuro por procesos químicos","StartingPrice":48000,"duration":45},
// {"id ":14,"category":"Peluquería","serviceName":"Plasma","description":"Hidratación profunda a nivel de cortéx","StartingPrice":25000,"duration":25},
// {"id ":15,"category":"Peluquería","serviceName":"Tintura","description":"Tintura global sin amoniaco o tintura especial","StartingPrice":42000,"duration":60},
// {"id ":16,"category":"Peluquería","serviceName":"Tintura de Crecimiento","description":"Mantencion de Color","StartingPrice":25000,"duration":60},
// {"id ":17,"category":"Peluquería","serviceName":"Ondas al Agua","description":"Peinado con pinzas o tenazas, ondas naturales","StartingPrice":25000,"duration":30},
// {"id ":18,"category":"Rostro ","serviceName":"Maquillaje","description":"Maquillaje de fiesta u ocasion especial","StartingPrice":30000,"duration":60},
// {"id ":19,"category":"Rostro ","serviceName":"Maquillaje Novia","description":"Maquillaje de novia","StartingPrice":80000,"duration":120},
// {"id ":20,"category":"Rostro ","serviceName":"Facial Anti Age","description":"Procedimiento no quirúrgico que combate las arrugas y mejoran la apariencia de la piel del rostro ","StartingPrice":35000,"duration":90},
// {"id ":21,"category":"Rostro ","serviceName":"Facial Anti Stress","description":"Procedimiento de limpieza y exfoliacion","StartingPrice":15000,"duration":60}]

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
let productList = document.getElementById("all-products")
allProducts.map((product, index) => {
    productList.innerHTML +=
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
})

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




const addToCart = (product, image, price, element3) => {
  let productListSoFar = document.createElement('div')
  productListSoFar.innerHTML = 
  `<div>
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
        Unidades
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

//THIS DISPLAY WHAT'S IN THE SHOPPING CART ON THE NAV BAR
//I WANT TO DISPLAY A PAGE WITH THE PRODUCTOS IN THE CART
// const navShoppingCart = document.getElementById('nav-shopping-cart');
// navShoppingCart.onclick = (productListSoFar) => {
//   let sideBar = document.getElementById('cart-display')
//   sideBar.innerHTML = `<div>${productListSoFar}</div>`
// }


//THIS TAKES WHAT AN USER HAS SELECTED ON THE PRODUCT LIST 

const btnAddProductQuantity = document.querySelector('.productQuantity')
btnAddProductQuantity.addEventListener('change', handleQuantityEvent)
let quantitySelected = document.getElementById('products-added-to-cart')

function handleQuantityEvent(e) {
let quantity = e.target.value
displayQuantity(quantity, quantitySelected)
}

function displayQuantity(quantity, element) {
    const quantityDisplay = document.createElement('div')
    quantityDisplay.innerHTML = `<div> Seleccionaste ${quantity} unidades </div>`
    element.append(quantityDisplay)
}

//SHIPPING DETAILS SECTION
//FUNCTION THAT CREATES A BANNER WITH SHIPPING DETAILS. USER CAN VERIFY DETAILS BEFORE CONFIRMING 
//PENDING: I NEED TO SAVE INFO IN LOCAL STORAGE AND I NEED TO MAKE IT DISPLAY ONLY ONE CARD. DO NOT CREATE A SEPARATE CARD FOR EACH INPUT
const shippingForm = document.getElementById('shipping-form')
const buyerName = document.getElementById('buyer-name')
const buyerAddress = document.getElementById('address')
const buyerPayment = document.getElementById('payment')
const buyerCard = document.getElementById('card-number')
const shipDetails = document.getElementById('shipping-details-confirmed')
shippingForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault()
    let buyerNameValue = buyerName.value
    let buyerAddressValue = buyerAddress.value
    let buyerPaymentValue = buyerPayment.value
    let buyerCardValue = buyerCard.value

    displayDeliveryDetails(buyerNameValue, buyerAddressValue, buyerPaymentValue, buyerCardValue, shipDetails)

    }

//THIS DISPLAY THE DELIVERY DETAILS ON THE SCREEN
const displayDeliveryDetails = (user, address, payment, cardNumber, element2) => {
const card = document.createElement('div')
card.innerHTML =
`<div class="ship-WITH summary"> 
<h2>Revisa los detalles de tu envio</h2>
<ul> 
<li><strong>Nombre:</strong><span>${user}</span></li>
<li><strong>Direccion:</strong><span>${address}</span></li>
<li><strong>Medio de Pago:</strong><span>${payment}</span></li>
<li><strong>Numero de Tarjeta:</strong><span>${cardNumber}</span></li>
</ul>
</div>`

element2.append(card);
}

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



