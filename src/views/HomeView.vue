<script>


import { goalsArray } from "../data/goals_onu.js"

export default {
  name: "AppFooter",
  data() {
    return {
      goalsArray,
    }
  },
  methods: {
    getImagePath: function (name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href
    }
  }
}

</script>

<template>
  <footer>

    <section id="footer">

      <div class="container">
        <div class="row justify-content-center align-items-center">

          <div class="col-12 col-lg-6 bg_intro rounded-4 py-5 my-2 align-content-center introduce">
            <h1><strong>Hi, I'm </strong><span class="txt_thin">FRA</span></h1>
            <p>
              I have a master's degree in Planning and Management of Agro-Territorial, Forest and Landscape: <a
                href="https://corsi.unibo.it/2cycle/LandscapePlanningManagement" target="_blank"><span
                  class="txt_primary color_txt_link"> PROGESA</span> </a><br>
              The study program contribute to the pursuit of the <br>
              UN 2030 Agenda for
              <a href="https://www.un.org/sustainabledevelopment/" target="_blank"><span
                  class="txt_primary color_txt_link" target="_blank">Sustainable
                  Development Goals.</span> </a> <br>
              I have a passion for the environment and for technology.<br>
            </p>

          </div>

          <div class="col-12 col-lg-4 d-flex flex-wrap goals mx-4 col_goals_onu">

            <div class="col-3 text-center p-2" v-for="goal in goalsArray" :key="goal.img">
              <a :href="goal.link" target="_blank">
                <img class="rounded-4 zoom-effect-goals" :src="getImagePath(goal.img)" alt="Goal Image">
              </a>

            </div>

          </div>

        </div>



      </div>

    </section>

  </footer>
</template>