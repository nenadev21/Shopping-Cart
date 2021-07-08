products = [
    {
        id: 1,
        productName: "Tintura Evolution Alfaparf",
        size: "60ml",
        price: 13990, 
        description: "Una fórmula de vanguardia enriquecida con ácido hialurónico y sin PPD.Potencia de elevación, hasta 3 niveles, una cobertura excepcional y longevidad del color, porcentaje baja de AMMONIA (máx. 1% durante la aplicación), NO PPD, para una fórmula menos sensibilizante, para el cuidado del cuero cabelludo, cabello único y extraordinario de cualidad y brillo.",
        image: "https://images.jumpseller.com/store/palumbo-store/4157201/tintura-evolution2.jpg?1622243641"
    }, 
    {
        id: 2, 
        productName: "Shampoo Absolut Repair",
        size: "300ml",
        price: 12990,
        description: "El Shampoo Absolut Repair Lipidium repara y fortalece las áreas más dañadas del cabello. El cabello queda instantáneamente reconstruido y transformado desde el interior. ", 
        image: "https://images.jumpseller.com/store/palumbo-store/2284726/2.jpg?1617493135"
    },
    {
        id: 3,
        productName: "Serum Absolut Repair Puntas",
        size: "50ml",
        price: 18990,
        description: "Con este sérum reconstructor profesional, tu cabello dañado luce suave y brillante al momento. Su fórmula no grasa facilita el styling aportando un tacto sedoso. ",
        image: "https://images.jumpseller.com/store/palumbo-store/2284712/7003_SERUM_ABSOLUT_REPAIR_PUNTAS_50_ML.png?1622300054"
    },
    {
        id: 4,
        productName: "Serum Liss Control Plus", 
        size: "50ml",
        price: 15990, 
        description: "Serum que controla el frizz hasta 24 hrs., con acabado suave y perfecto para cabello rizado, ondulado o rebelde",
        image: "https://images.jumpseller.com/store/palumbo-store/2294957/7002_SERUM_LISS_CONTROL_%2B_50ML.png?1617493288"
    }
]


const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  })

products.map((product, index) => {
    let displayProductList = document.querySelector("#section-products")
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
    <button class="add-to-kart"> Agregar al Carro </button>
    </div>
    </div>`
})


function firstOrder() {
    let item = prompt(`que producto quieres comprar?`);
    let price = prompt(`cual es el precio del producto?`)
    let quantity = prompt(`cuantas unidades quieres llevar?`)
    let cost = price * quantity;
    alert(`tu total por ${quantity} unidades de ${item} es ${cost} CLP`)
}

function continueBuying() {
    let continueBuying = prompt(`Quieres seguir comprando?. Opciones: SI, NO, NO SE`)
    if (continueBuying.toLowerCase() === "si") {
        firstOrder()
    } else if (continueBuying.toLowerCase() === "no") {
        alert(`ingresa los datos de tu tarjeta y finaliza tu compra`)
    } else {
        alert(`sigue revisando nuestros productos, no hay apuro!`)
    }
}

firstOrder();
continueBuying();

//updated
