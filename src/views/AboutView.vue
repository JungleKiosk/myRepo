<script setup>
import { ref, onMounted } from 'vue';

const introVisible = ref(false);

const textToShow = ref('');
const introText = "Hi, I'm FRA";
const typingDelay = 80; // Milliseconds between each character

onMounted(() => {
    setTimeout(() => {
        introVisible.value = true;
        startTyping();
    }, 300);
    setTimeout(() => {
        borderVisible.value = true;
    }, 300 + introText.length * typingDelay);
});

function startTyping() {
    let index = 0;
    const typingInterval = setInterval(() => {
        textToShow.value += introText[index];
        index++;
        if (index >= introText.length) {
            clearInterval(typingInterval);
        }
    }, typingDelay);
}
</script>


<template>
    <main>
        <section id="about">
            <div class="container my-5">
                <div class="row justify-content-center align-items-center">

                    <div class="col-12 col-lg-8 bg_intro rounded-4 py-5 my-2 align-content-center">

                        <h1 class="txt_initial" :class="{ 'typing': introVisible }">
                            <strong><span class="colored-yellow">{{ textToShow.slice(0, 7) }}</span></strong><span
                                class="txt_fra">{{ textToShow.slice(7) }}</span>
                        </h1>

                        <br>
                        <p class="fade-in" v-if="introVisible">
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

                        </p>
                    </div>

                    <div class="col-12 col-lg-4">

                        <div class="circle">
                            <div class="inner-circle">
                                <img class="fade-in" src="../assets/img/dec/me-no-bkg.png" alt="">
                            </div>
                            <div class="border_rotate_1"></div>
                            <div class="border_rotate_2"></div>
                            <div class="border_rotate_3"></div>

                        </div>


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
    width: 100%;
}

.circle {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: 5px solid transparent;
    overflow: hidden;
}

.border_rotate_1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 1px solid transparent;
    border-bottom: 15px solid #041c42;
    animation: rotate 20s linear infinite, fade-out 5s ease forwards;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.border_rotate_2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 1px solid transparent;
    border-top: 5px solid #93b0b8;
    animation: rotate 18s linear infinite, fade-out 5s ease forwards;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}


.border_rotate_3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 1px solid transparent;
    border-top: 12px solid #ff6518;
    animation: rotate 10s linear infinite, fade-out 5s ease forwards;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}


.fade-in {
    opacity: 0;
    animation: fade-in 2s ease forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.bg_intro {
    border-left: 3px solid transparent;
    animation: border-left-appear 2s 1000ms forwards;
}

@keyframes border-left-appear {
    from {
        border-left-color: transparent;
    }

    to {
        border-left-color: #ff6518;
    }
}
</style>
