//PLACEHOLDER WITH AN ARRAY OF PRODUCTS
products = [
    {
        id: 1,
        productName: "Acondicionador All Soft Mega",
        brand: "redken",
        size: "250ml",
        price: 24990, 
        costOfShip: 500,
        category: "acondicionador",
        inStock: true,
        membersDiscount: true,
        reviewStars: 4.5,
        description: "Suavidad Profunda. Nuevo All Soft Mega con Superfood Nutri-Complex, una mezcla de extracto de cactus, aloe vera y aceite de sacha inchi, ofrece una alimentación intensa y una reposición inmediata para el cabello severamente seco y grueso. La máxima suavidad en tan solo una ducha.",
        image: "https://cdnx.jumpseller.com/palumbo-store/image/4100097/resize/200/200?1617494517"
    }, 
    {
        id: 2, 
        productName: "Shampoo Absolut Repair",
        brand: "l'oreal professionnel",
        size: "300ml",
        price: 18990,
        costOfShip: 500,
        category: "shampoo",
        inStock: true,
        membersDiscount: true,
        reviewStars: 3.5,
        description: "El Shampoo Absolut Repair Lipidium repara y fortalece las áreas más dañadas del cabello. El cabello queda instantáneamente reconstruido y transformado desde el interior. ", 
        image: "https://images.jumpseller.com/store/palumbo-store/2284726/2.jpg?1617493135"
    },
    {
        id: 3,
        productName: "Máscara Absolut Repair",
        brand: "l'oreal professionnel",
        size: "250ml",
        price: 26990,
        costOfShip: 500,
        category: "mascara",  
        inStock: false,
        membersDiscount: false,
        reviewStars: 4.0,
        description: "Potenciado con Quinoa dorada + proteína,  repara instantáneamente todo el cabello sin apelmazar. Su textura en gel, deja el cabello 7x más brillante y suave. Sin residuo en la fibra del cabello.",
        image: "https://cdnx.jumpseller.com/palumbo-store/image/7564279/resize/200/200?1619653438"
    },
    {
        id: 4,
        productName: "Serum Cicaplasme Blond Absolu", 
        brand: "kerastase",
        size: "150ml",
        price: 28990, 
        costOfShip: 500,
        category: "serum",
        inStock: true,
        membersDiscount: false,
        reviewStars: 4.1,
        description: "Trata instantáneamente las zonas dañadas de la fibra. Cicaplasme proporciona protección contra el calor hasta 230°C para proteger el cabello de las herramientas de peinado con calor. Consigue un cabello suave y luminoso.",
        image: "https://cdnx.jumpseller.com/palumbo-store/image/6885303/resize/200/200?1619654030"
    }
]

//THIS FUNCTION HELPS FORMAT THE PRICE DISPLAYED

const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  })

//THIS FUNCTION MAP THE PRODUCT ARRAY AND DISPLAY THE LIST OF PRODUCTS IN THE HTML

products.map((product, index) => {
    let displayProductList = document.querySelector("#all-products")
    displayProductList.innerHTML +=
    `<div class="card" id="card-border" key=${index}>
    <img src="${product.image}" alt="product-image" style="width:100%"/>
    <div class="container">
    <h4><b>${product.productName}</b></h4>
    <h4>${product.size}</h4>
    <h4>${formatter.format(product.price)}</h4>
    <label for="quantity">Cantidad:</label>
    <select name="quantity" id="quantity">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <button class="add-to-cart" onClick="addToCart"> Agregar al Carro </button>
    </div>
    </div>`
})


//THIS CREATE AN OBJECT WITH USER'S DELIVERY INFORMATION

// class DeliveryFields {
//     constructor() {
// this.clientName = "clientName"
// this.address = "address"
// this.pago = "pago"
//     }
// }

// const delivery1 = new DeliveryFields()
// const deliveryInfoArr = [];
// const questions = ["Ingresa tu nombre", "Ingresa tu direccion", "Ingresa tu medio de pago"]

// //AQUI ME PIERDO - NO SE COMO USAR LA FUNCION CONSTRUCTORA PARA CREAR EL NUEVO OBJETO CON LAS KEYS CORRESPONDIENTES
// for (let question of questions) {
//     let responses = prompt(question)
//     deliveryInfoArr.push(delivery1, responses)
//     console.log(deliveryInfoArr)
// }

//THIS CHANGE THE "NUMBER" OF PRODUCTS DISPLAYED IN THE CART

let cartTitle = document.getElementById("cart-title")
let productQuantity = prompt('cuantos productos quieres agregar a tu carro?')
cartTitle.innerHTML = `Muy bien! Tienes ${productQuantity} productos en tu carro de compras`


