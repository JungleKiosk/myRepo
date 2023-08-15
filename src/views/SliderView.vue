<script>
import { ref, watchEffect, onMounted } from "vue";
import { imgProj } from "../data/img_proj.js";

export default {
    props: {
        getImagePath: Function,
    },
    setup() {
        const currentIndex = ref(0);
        let timer = null;

        const startSlider = () => {
            timer = setInterval(() => {
                currentIndex.value = (currentIndex.value + 1) % imgProj.length;
            }, 2000); // Ogni 4 secondi
        };
        onMounted(() => {
            startSlider();
        });
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
    <div class="text-center">
        <div class="slider-container">
            <div ref="slider" class="slider">
                <div
                    class="slide"
                    v-for="(imgproj, index) in imgProj"
                    :key="imgproj.id"
                    :style="{ transform: `translateX(-${currentIndex * 100}%)`, opacity: currentIndex === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }">

                    <div class="image-container">
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
    height: 200px;
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
.image-container {
    background-color: transparent;
}
</style>
