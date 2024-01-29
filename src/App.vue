<template>

<div class="container my-3">

<NavbarComponent></NavbarComponent>
<CartComponent></CartComponent>
<ProductsComponent></ProductsComponent>

</div>

</template>

<style lang="scss">

/* scoped 似乎會影響樣式 */

@import "./assets//all.scss";

</style>

<script>

import NavbarComponent from './components/NavbarComponent.vue';
import CartComponent from './components/CartComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';

export default {

    components: { NavbarComponent, CartComponent, ProductsComponent }

}

</script>