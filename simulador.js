//PLACEHOLDER WITH AN ARRAY OF PRODUCTS
products = [{"id":1,"productName":"Acondicionador All Soft Mega","brand":"redken","size":"250ml","price":24990,"costOfShip":500,"category":"acondicionador","inStock":"TRUE","membersDiscount":"TRUE","reviewStars":4.5,"description":"Suavidad Profunda. Nuevo All Soft Mega con Superfood Nutri-Complex, una mezcla de extracto de cactus, aloe vera y aceite de sacha inchi, ofrece una alimentación intensa y una reposición inmediata para el cabello severamente seco y grueso. La máxima suavidad en tan solo una ducha.","image":"https://cdnx.jumpseller.com/palumbo-store/image/4100097/resize/200/200?1617494517"},
{"id":2,"productName":"Shampoo Absolut Repair","brand":"oreal professionnel","size":"300ml","price":18990,"costOfShip":700,"category":"shampoo","inStock":"FALSE","membersDiscount":"FALSE","reviewStars":3,"description":"El Shampoo Absolut Repair Lipidium repara y fortalece las áreas más dañadas del cabello. El cabello queda instantáneamente reconstruido y transformado desde el interior.","image":"https://images.jumpseller.com/store/palumbo-store/2284726/2.jpg?1617493135"},
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
products.map((product, index) => {
    productList.innerHTML +=
    `<div class="card" id="card-border" key=${index}>
    <img src="${product.image}" alt="product-image" style="width:100%"/>
    <div class="container">
    <h4><b>${product.productName}</b></h4>
    <h4>${product.size}</h4>
    <h4>${formatter.format(product.price)}</h4>
    <label for="quantity">Cantidad:</label>
    <select name="quantity" class="productQuantity">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <button class="add-to-cart" id="addToCart-btn"> Agregar al Carro </button>
    </div>
    </div>`
})


//THIS TAKES WHAT AN USER HAS SELECTED ON THE PRODUCT LIST 

let btnAddProductQuantity = document.querySelector('.productQuantity')
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
const btnDeliveryDetails = document.getElementById('btn-delivery-details')
const clientName = document.getElementById('name')
const clientAddress = document.getElementById('address')
const paymentMethod = document.getElementById('payment')
const deliveryDetails = document.getElementById("shipping-details-confirmed")

btnDeliveryDetails.addEventListener('submit', handleUserInput);

const handleUserInput = (e) => {
e.preventDefault()
const inputClientName = clientName.value
console.log(inputClientName)
const inputClientAddress = clientAddress.value  
const inputPaymentMethod = paymentMethod.value

displayDeliveryDetails(inputClientName, inputClientAddress, inputPaymentMethod, deliveryDetails)
}

//THIS DISPLAY THE DELIVERY DETAILS ON THE SCREEN
const displayDeliveryDetails = (client, address, method, element2) => {
const card = document.createElement('div')
card.innerHTML =+
`<div> 
<h2>Revisa los detalles de tu envio</h2>
<ul> 
<li><strong>Nombre:</strong><span>${client}</span></li>
<li><strong>Direccion:</strong><span>${address}</span></li>
<li><strong>Metodo de Pago:</strong><span>${method}</span></li>
</ul>
</div>`

element2.appendChild(card);
}

