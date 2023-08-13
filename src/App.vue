<script setup>

    import {RouterView, RouterLink} from "vue-router"


</script>

<template>
    <main>
        <div class="container">
            <div class="links">
                <!-- use <RouterLink></RouterLink> instead <a></a> to save for each pagand not refreshe -->
                <RouterLink active-class="links active" class="px-2 rounded-pill" to="/">Home</RouterLink>
                <RouterLink active-class="links active" class="px-2 rounded-pill" to="/about">About</RouterLink>
            </div>
    
            <RouterView />

        </div>
    </main>

</template>

<style scoped>

.active{
    background-color:rgb(44, 43, 43);
    color: rgb(246, 197, 0);
}

</style>


