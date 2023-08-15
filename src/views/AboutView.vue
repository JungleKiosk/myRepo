<script setup>
import { ref } from "vue";

const text_swich = ref("QGIS");
const text_Key = ref(0);

const alternatives = ["QGIS", "Python", "RStudio", "Google Earth Engine", "HTML - CSS - JS", "Leaflet", "Vite + Vuejs 3", "VueLeafle, VueRouter, VueChart", "Sass", "SQL", "QGIS"];
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % alternatives.length;
    text_swich.value = alternatives[currentIndex];
    text_Key.value++;
}, 2000);

</script>


<template>
    <main>
        <section id="about">
            <div class="container my-5">
                <div class="row justify-content-center align-items-center">

                    <div class="col-12 col-lg-12 bg_intro rounded-4 py-5 my-2 align-content-center">

                        <h1 class="txt_initial"><strong>Hi, I'm </strong><span class="txt_fra">FRA</span></h1>

                        <br>
                        <p>
                            I have a master's degree in Planning and Management of Agro-Territorial, Forest and Landscape:

                            <a href="https://corsi.unibo.it/2cycle/LandscapePlanningManagement" class="link_efct"
                                target="_blank"><span class="txt_thin">
                                    PROGESA</span></a>
                            <br>
                            The study program contributes to the pursuit of the <br>
                            UN 2030 Agenda for
                            <a href="https://www.un.org/sustainabledevelopment/" class="link_efct" target="_blank"><span
                                    class="txt_thin" target="_blank">Sustainable
                                    Development Goals.</span> </a> <br>
                            I have a passion for the environment and for technology.
                            <br>
                            I have acquired a solid knowledge in GIS analysis, Remote Sensing and I broadened my skills by
                            attending a full-stack web development course.
                            <transition>
                                <h1 class="py-3">My Stack: <span class="txt_swich" :key="textKey">{{ text_swich }}</span>
                                </h1>
                            </transition>
                        </p>
                    </div>
                    


                    <!-- <div class="col-12 col-lg-4 d-flex flex-wrap goals mx-4 col_goals_onu">
            <div class="col-3 text-center p-2" v-for="goal in goalsArray" :key="goal.img">
                  <a :href="goal.link" target="_blank">
                    <img class="rounded-4 zoom-effect-goals" :src="getImagePath(goal.img)" alt="Goal Image">
                  </a>
                  
            </div>
          </div> -->

                </div>
            </div>
        </section>
    </main>
</template>


<style scoped>
img {
    width: 500px;
}

.txt_swich {
    font-size: larger;
    transition: opacity 0.5s, transform 0.5s;
}
</style>

