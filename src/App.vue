<script setup>

    import {RouterView} from "vue-router"

</script>

<template>
    <main>
        <div class="links">
            <a class="px-2" href="/">Home</a>
            <a class="px-2" href="/about">About</a>
        </div>
        <RouterView />
    </main>

</template>


