<template>
  <div class="container homepage">
    <section class="hero container-inner full-height">
      <div class="hero-greeting">Hi there, my name is</div>
      <h1 class="hero-name">
        <span class="typing"></span>
      </h1>
      <div :class="[{ visible: type_completed }, 'hero-content']">
        <h2 class="hero-spec">Junior frontend developer.</h2>
        <div class="hero-info">
          <p class="hero-info-text">
            I'm an engineer specializing in building websites and web
            <br />
            applications using such technologies as HTML, CSS, SASS, SCSS, basic
            knowledge of Javascript. <br />
          </p>
          <p class="hero-info-text">
            ...loving movies, Dungeons and Dragons and heavy metal music.
          </p>
          <div class="btn-group btn-group-row">
            <button class="btn btn-primary">View resume</button>
            <button class="btn btn-secondary">Read more</button>
          </div>
        </div>
      </div>
    </section>
    <section class="about container-inner full-height">
      <h3 class="section-heading">Few things about me</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          corporis cum dignissimos dolore ducimus, eaque error, est explicabo
          harum in ipsa minus nemo odio placeat quos rerum soluta tenetur!
          Minus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          corporis cum dignissimos dolore ducimus, eaque error, est explicabo
          harum in ipsa minus nemo odio placeat quos rerum soluta tenetur!
          Minus?
        </p>
      </div>
    </section>
  </div>
  <!--CONTAINER HOMEPAGE-->
</template>

<script>
import Typed from "typed.js";
export default {
  name: "home-page",
  data() {
    return {
      type_completed: false,
    };
  },
  mounted() {
    const typed_options = {
      strings: ["Harry Potter", "Lord Voldemort", "Viktor"],
      smartBackspace: true,
      typeSpeed: 50,
      onComplete: () => {
        this.type_completed = true;
      },
    };

    new Typed(".typing", typed_options);
  },
};
</script>
