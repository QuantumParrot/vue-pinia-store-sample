<template>

<template v-if="!cartDetail.cartsList.length">
    <div class="alert bg-light text-center py-5">購物車內沒有商品</div>
</template>
<table class="table" v-else>
    <tbody class="align-middle">
        <tr v-for="cart in cartDetail.cartsList" :key="cart.id">
            <!-- 1 -->
            <td width="5%" class="text-center">
                <button type="button" class="btn border-0 text-danger fs-5 fw-bold"
                        @click="removeCartItem(cart.id)">X</button>
            </td>
            <!-- 2 -->
            <td>
                <div class="d-flex justify-content-between align-items-center">
                    <img class="cart-img" :src="cart.product.image" :alt="cart.product.title">
                    <div class="fw-bold">{{ cart.product.title }}</div>
                    <div>NT$ {{ cart.product.price }} 元 / 罐</div>
                </div>
            </td>
            <!-- 3 -->
            <td width="20%">
                <div class="float-end w-50">
                    <select class="form-select" :value="cart.qty" @change="changeItemQty(cart.id, $event)">
                    <option v-for="i in 20" :key="i" :value="i">{{ i }}</option>
                    </select>
                </div>
            </td>
            <!-- 4 -->
            <td width="20%" class="text-end">
            NT$ {{ cart.subtotal }} 元
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
        <td colspan="4" class="py-4 text-end fw-bold">總計 NT$ {{ cartDetail.total }} 元</td>
        </tr>
    </tfoot>
</table>

</template>

<style>

.cart-img {

    width: 200px;
    object-fit: cover;

}

</style>

<script>

import { mapState, mapActions } from "pinia";

import cartStore from "@/stores/cartStore";

export default {

    computed: {

        ...mapState(cartStore, ["cartDetail"])

    },

    methods: {

        ...mapActions(cartStore, ["removeCartItem", "changeItemQty"])

    },

    mounted() { console.log(this.cartDetail) }

}

</script>