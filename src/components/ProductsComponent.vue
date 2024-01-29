<template>

<div class="row row-cols-3 my-3 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
        <div class="card">
            <img :src="product.image" class="card-img-top" :alt="product.title">
            <div class="card-body">
                <h5 class="card-title mt-1 mb-4">
                {{ product.title }}
                <span class="float-end">NT$ {{ product.price }} 元</span>
                </h5>
                <button type="button" class="w-100 btn btn-success" @click.prevent="addToCart(product.id)"
                        :disabled="!product.enabled">加入購物車</button>
            </div>
        </div>
    </div>
</div>

</template>

<style>

.card-img-top {

    height: 250px;
    object-fit: cover;

}

</style>

<script>

import { mapState, mapActions } from "pinia";

import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";

export default {

    computed: {

        ...mapState(productStore, ['sortProducts'])

    },

    methods: {
    
        ...mapActions(cartStore, ['addToCart'])
    
    },

    // mounted() { console.log(this.sortProducts) }

}

</script>