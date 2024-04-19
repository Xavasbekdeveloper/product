class PRODUCTS {
    constructor(quantity, price, img) {
        this.id = `${new Date().getTime()}`
        this.quantity = quantity
        this.price = price
        this.img = img
    }
}

export class Product extends PRODUCTS {
    constructor(quantity, price, img, name, unit) {
        super(quantity, price, img)
        this.name = name
        this.unit = unit
    }
}