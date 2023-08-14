<script>
import { ref, watchEffect, onMounted } from "vue";
import { imgProj } from "../data/img_proj.js";

export default {
    props: {
        getImagePath: Function,
    },
    setup(props) {
        const currentIndex = ref(0);
        let timer = null;

        const startSlider = () => {
            timer = setInterval(() => {
                currentIndex.value = (currentIndex.value + 1) % imgProj.length;
            }, 4000); // Ogni 3 secondi
        };

        // Avvia lo slider quando il componente è montato
        onMounted(() => {
            startSlider();
        });

        // Termina il timer quando il componente viene smontato
        watchEffect(() => {
            return () => {
                clearInterval(timer);
            };
        });

        return {
            imgProj,
            currentIndex,
        };
    },
};
</script>

<template>
    <div class="text-center p-2">
        <div class="slider-container">
            <div ref="slider" class="slider">
                <div
                    class="slide"
                    v-for="(imgproj, index) in imgProj"
                    :key="imgproj.id"
                    :style="{ transform: `translateX(-${currentIndex * 100}%)` }">

                    <div class="image-container">
                        <h6> {{ imgproj.title }}</h6>
                        <img class="rounded-4" :src="getImagePath(imgproj.img)" alt="Goal Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    max-width: 100%;
    max-height: 150px;
}

.slider-container {
    position: relative;
    overflow: hidden;
    max-width: 100%;
}

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    flex: 0 0 100%;
}

/* Stile per il contenitore dell'immagine */
.image-container {
    background-color: transparent;
    /* Rimuovi lo sfondo colorato */
}
</style>
