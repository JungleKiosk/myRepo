
<script>

import colabProjectData from "../data/data_py.json";


export default {
    name: "PyLearnView",
    setup() {
        const colab_projects = colabProjectData;
        const upcoming_projects = [
            { name: "Project 1" },
            { name: "Project 2" },
            { name: "Project 3" },
        ];

        let currentIndex = 0;
        const timer = setInterval(() => {
            currentIndex = (currentIndex + 1) % upcoming_projects.length;
        }, 3000);
        return {
            colab_projects,
            upcoming_projects,
            timer,
            currentIndex
        };
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
};
</script>



<template>
    <div class="container p-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-12 text-center">
                <h1 class="txt_title_colab">myColab</h1>
                <div class="row p-5 justify-content-center">

                    <h1 class="py-3"> Go to the Colab projects</h1>

                    <div>

                    </div>
                    <a v-for="project in colab_projects" :key="project.id" :href="project.link"
                        class="col-lg-2 col-md-4 col-sm-6 link_colab" target="_blank">
                        <div class="project-card p-2 rounded-4 d-flex align-items-center justify-content-center">
                            <h5 class="mb-0 link_title">{{ project.name }}</h5>
                        </div>
                    </a>

                </div>

            </div>

            <div class="col-12 col-lg-12 txt_intro_colab">
                <p>
                    This section gives you a starting point for mastering Python, a powerful and versatile programming
                    language. We'll start by introducing the basics of using Python through Google Colab, an interactive
                    online development environment accessible from any device with a Google account. <br> <br>

                    We will differentiate between using Python in a local environment and the experience offered by Colab.
                    We'll start with an introduction to Colab, exploring its intuitive interface, and learning how to write
                    and run Python code right in the browser. Next, we'll design a smooth transition to installing Python
                    locally using tools like Jupyter and Visual Studio Code. <br> <br>

                    In the next few sections, we'll walk through how to set up Python on your computer and take advantage of
                    Jupiter Extensions and Visual Studio Code for a personalized development experience. Whether you're a
                    complete beginner or already have a foundation in programming, this section will walk you through the
                    empowering world of Python and prepare you for the more advanced adventures ahead.
                </p>
            </div>


        </div>
    </div>
</template>


<style scoped>

</style>
