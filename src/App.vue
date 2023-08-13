<script setup>

    import {RouterView, RouterLink} from "vue-router"
    import {ref} from "vue"
    const counter = ref(0)

</script>

<template>
    <main>
        <div class="links">
            <RouterLink class="px-2" to="/">Home</RouterLink>
            <RouterLink class="px-2" to="/about">About</RouterLink>
        </div>

        <h1>{{ counter }}</h1>
        <button @click = "counter++" >count</button>

        <RouterView />
    </main>

</template>


