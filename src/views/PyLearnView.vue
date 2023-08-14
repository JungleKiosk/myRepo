

<script>
import colabProjectData from "../data/data_py.json";

export default {
    name: "PyLearnView",
    setup() {
        const colab_projects = colabProjectData;
        return {
            colab_projects,
        };
    }
};
</script>



<template>
    <div id="my_proj" class="container p-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-12 text-center">
                <h1>myColab</h1>

                <div class="row m-5 p-5 justify-content-center">
                    <a v-for="project in colab_projects" :key="project.id" :href="project.link"
                        class="col-lg-2 col-md-4 col-sm-6 link_colab" target="_blank">

                        <div class="p-2 rounded-4 d-flex align-items-center justify-content-center">
                            <h6 class="mb-0 ">{{ project.name }}</h6>
                        </div>
                    </a>
                </div>

            </div>
            <div class="col-12 col-lg-8">
                <p>
                    Introduction to Python and its usage options:
                    <br><br>
                    Python is a versatile and powerful programming language that is widely used for the development of
                    web applications, data analytics, automation, artificial intelligence and much more. One of
                    Python's main feature is its readable and intuitive syntax, which makes it suitable for both
                    for beginners as well as experienced developers.
                    <br> <br>
                    Python can be used in several ways, both locally and in the cloud. Here are some of
                    most common usage options:
                    <br> <br>
                    Local download: You can download Python from the official site (https://www.python.org/) and install it
                    on
                    your computer. After installation, you can use the language directly from the command line of the
                    your operating system or through an integrated development environment (IDE).
                    <br> <br>
                    Usage via Terminal: Once Python is installed, you can open your terminal or dei prompt
                    commands and start the Python interpreter by typing python. This allows you to execute Python statements
                    interactively directly from the command line.
                    <br> <br>
                    Integrated Development Environment (IDE): IDEs are software tools that make it easier to write,
                    debugging and executing code. Some of the popular IDEs for Python development include
                    Visual Studio Code (VSC) and PyCharm. These IDEs offer advanced features such as recognition
                    automatic code, integrated debugging and integration with project management tools.F
                    <br> <br>
                    Google Colab (Colaboratory): Google Colab is a cloud-based service that allows you to write and
                    run Python code in browsers. Offers free access to Google's computing resources and
                    allows you to work on interactive notebooks. This is especially useful for sharing e
                    collaborate on Python projects without having to install anything locally.
                    <br> <br>
                    Usage differences between on-premises and cloud (such as Google Colab) may include the
                    management of system resources, access to external libraries and collaboration with others
                    developers. Also, using professional IDEs like VSC or PyCharm can offer more advanced tools
                    for writing and debugging code versus a simple terminal.
                    <br> <br>
                    Ultimately, Python offers multiple ways to use it, allowing developers to adapt
                    to their preferences and project requirements, whether through local installation or usage
                    in the cloud through services such as Google Colab.
                </p>
            </div>
        </div>
    </div>
</template>


<style scoped>
img {
    max-width: 100%;
    max-height: 150px;
}

.link_colab {
    text-decoration: none;
    color: rgb(255, 125, 33);
}
</style>
