import { PRODUCTDATA } from "./const.js";


export const PRODUCTS = JSON.parse(localStorage.getItem(PRODUCTDATA)) || [
    {
        id: "1",
        name: "Banana",
        quantity: 15,
        unit: "kg",
        price: 19000,
        img: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/banana-day1-scaled.jpg"
    },
    {
        id: "2",
        name: "Milk",
        quantity: 30,
        unit: "litr",
        price: 13000,
        img: "https://media.post.rvohealth.io/wp-content/uploads/2022/05/soy-milk-bottle-732-549-feature-thumb.jpg"
    },
    {
        id: "3",
        name: "pen",
        quantity: 50,
        unit: "dona",
        price: 20000,
        img: "https://i0.wp.com/www.wellappointeddesk.com/wp-content/uploads/2020/10/microgels-scaled.jpg?fit=960%2C762&ssl=1"
    }
]