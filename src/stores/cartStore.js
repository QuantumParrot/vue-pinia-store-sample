import { defineStore } from "pinia";

import productStore from "./productStore";

export default defineStore('cartStore', {

    state: () => ({

        carts: []

    }),

    actions: {

        addToCart(productId, qty = 1) {

            const currentCart = this.carts.find(item => item.productId === productId);
            
            if (currentCart) {

                currentCart.qty += qty;

            } else {

                this.carts.push({
                    id: new Date().getTime(),
                    productId,
                    qty,
                })

            }

            // console.log(this.carts);

        },

        removeCartItem(id) {

            const index = this.carts.findIndex(item => item.id === id);
            this.carts.splice(index, 1);

        },

        changeItemQty(id, evt) {

            const cart = this.carts.find(item => item.id === id);
            cart.qty = parseInt(evt.target.value);

        }

    },

    getters: {

        cartDetail: ({ carts }) => {

            const { products } = productStore();

            // console.log(products);

            const cartsList = carts.map(cart => {

                const product = products.find(item => item.id === cart.productId);

                return {

                ...cart, product, subtotal: product.price * cart.qty

                }

            });

            // console.log(cartList);

            return {

                cartsList,
                total: cartsList.reduce((acc, cur) => acc + cur.subtotal, 0),

            }

        },

    }

});