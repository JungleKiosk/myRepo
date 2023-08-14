<script setup>

    import {RouterView, RouterLink} from "vue-router"


</script>

<template>
    <main>
        <div class="container">
            <div class="links">
                <!-- use <RouterLink></RouterLink> instead <a></a> to save for each pagand not refreshe -->
                <RouterLink active-class=" active" class="page px-2 rounded-pill" to="/">Home</RouterLink>
                <RouterLink active-class=" active" class="page px-2 rounded-pill" to="/about">About</RouterLink>
                <RouterLink active-class=" active" class="page px-2 rounded-pill" to="/projects">Projects</RouterLink>
                <RouterLink active-class=" active" class="page px-2 rounded-pill" to="/pylearn">myColab</RouterLink>

            </div>
    
            <RouterView />

        </div>
    </main>

</template>

<style scoped>

.page{
    color: aqua;
    text-decoration: none;
}
.active{
    background-color:rgb(44, 43, 43);
    color: rgb(246, 197, 0);
}

</style>


