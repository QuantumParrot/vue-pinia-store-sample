<template>

<nav class="navbar bg-warning-subtle py-3 mb-3">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">🍍 Pinia Store ( ? )</span>
        <div class="d-flex align-items-center gap-2">
            <span>購物車</span>
            <span class="badge bg-danger text-white">{{ carts.length }}</span>
        </div>
    </div>
</nav>

</template>

<script>

import { mapState } from "pinia";

import cartStore from "@/stores/cartStore";

export default {

    computed: {

        ...mapState(cartStore, ["carts", "cartDetail"]) // 兩種都可以 !!

    }

};

</script>