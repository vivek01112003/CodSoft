const product = [{
        id: 1,
        image: 'Ecommerce/aa-1.jpg',
        title: 'Headphones',
        price: '14,990'
    },
    {
        id: 2,
        image: 'Ecommerce/bb-1.jpg',
        title: 'Rode NT1 Microphone',
        price: '24,599'
    },
    {
        id: 3,
        image: 'Ecommerce/cc-1.jpg',
        title: 'Smart Watch',
        price: '13,999'
    },
    {
        id: 4,
        image: 'Ecommerce/dd-1.jpg',
        title: 'HP Laptop Next Generation',
        price: '85,990'
    },
    {
        id: 5,
        image: 'Ecommerce/ee-1.jpg',
        title: '250D DSLR Camera',
        price: '83,262'
    },
    {
        id: 6,
        image: 'Ecommerce/ff-1.jpg',
        title: 'Metal Dask Lamp',
        price: '1,290'
    },
    {
        id: 7,
        image: 'Ecommerce/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: '1,64,999'
    },
    {
        id: 8,
        image: 'Ecommerce/hh-1.jpg',
        title: 'Ari Pods Pro',
        price: '23,999'
    },
]
const categories = [...new Set(product.map((item) => { return item }))]

let img = document.getElementById('root')
img.innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
        <div class="img-box">
            <img src=${image}></img>
        </div>
        <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
            <button>Add to Cart</button>    
        </div>
    </div>`)
}).join('')