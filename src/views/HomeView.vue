
<script>


</script>

<template>
  <div id="cont" class="container p-5">
    <div class="row">
      <h1 class="txt_about my-3">myRepo</h1>
      <div class="col-12 col-lg-8 jumbotron my-2">
        <p class="txt_intro_hello my-3">
          Hello nice people!
          <br>
          Welcome to my web app myRepo. <br>
          Here you will find a place to learn and share topics concerning environmental challenges, analysis
          techniques, technological tools, curiosities and news.
          <br>
          🌍🔬💻🌱
          <br>
        </p>
      </div>
      <div class="col-12 col-lg-4">
        <h1>test col-4</h1>
        <img class="gif" v-if="hide" :src="tobyfoxsleep" v-on:mouseover="toggleGif">
        <img class="gif" v-if="showdog" v-on:mouseleave="toggleGis" :src="tobyfox">
      </div>
      <div class="col-12 col-lg-12">
        <p class="txt_intro">
          <br>
          This project was born from my fervent desire to put my hand to technologies for the development of
          multipage web applications and to share my passions in the field of environmental analysis and
          monitoring, IT, coding and geospatial analysis.
          <br>
          Through the showcase of my projects, you will appreciate different markup and programming
          tricks, discover how web development technologies can be used to present and share the results.
        </p>
      </div>
      <div class="col-12 col-lg-12">
        <p class="txt_intro">
          Through my personal notes I have created some material for didactic purposes to start programming in
          Python.
          In the "My Colab" section, there will be a series of tutorials designed for those who are new to
          programming.
          Here I'll share step-by-step how to get started programming with Python, offering a resource for anyone
          who wants to get started with this flexible and powerful programming language.
        </p>
      </div>
      <div class="col-12 col-lg-12">
        <p class="txt_intro">
          I am excited to share my discoveries, challenges and successes with the huge community.
          <br>
          Through this
          project I want to do my part in raising awareness of respect for the environment, optimization of
          resources, continuous self-improvement and horizontal knowledge sharing.
          <br>
          You are all invited to participate and contribute, no limits!
          <br> <br>
          Thank you for being here and joining me on this exciting journey of discovering and understanding our
          cosmos.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
