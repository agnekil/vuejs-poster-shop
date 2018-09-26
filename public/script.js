let PRICE = 9.99;

new Vue({
    el: "#app",
    data: {
        total: 0,
        items: [
            {id: 1, title: "Item 1"},
            {id: 2, title: "Item 2"},
            {id: 3, title: "Item 3"}
        ],
        cart: [],
        search: ""
    },
    methods: {
        addItem: function (index) {
            this.total += PRICE;
            const item = this.items[index];
            let found = false;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === item.id) {
                    found = true;
                    this.cart[i].quantity++;
                    break;
                }
            }
            if (!found) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    quantity: 1,
                    price: PRICE
                });
            }
        },
        increment: function (item) {
            item.quantity++;
            this.total += PRICE

        },
        decrement: function (item) {
            item.quantity--;
            this.total -= PRICE;
            if (item.quantity <= 0) {
                for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].id === item.id) {
                        this.cart.splice(i, 1);
                        break;
                    }
                }
            }
        },
        onSubmit: function(){
            console.log(this.search)
        }
    },
    filters: {
        currency: function (price) { //filter måste alltid ha en parameter
            return "$".concat(price.toFixed(2)); //filter har alltid en return. toFixed är en inbyggd funktion som rundar ner till antalet decimaler du väljer i parentesen
        }
    }

})
;