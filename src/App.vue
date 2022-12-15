<template>
  <div class="main-wrapper">
    <main class="main-content">
      <router-view />
      <!--ROUTER VIEW RENDERS 1ST LEVEL PAGE HERE-->
    </main>
    <!--MAIN CONTENT BLOCK-->
    <main-footer />
    <!--MAIN FOOTER COMPONENT-->
  </div>
  <!--MAIN WRAPPER-->
</template>

<script>
import MainFooter from "@/components/footer/Footer";

export default {
  components: {
    MainFooter,
  },
};
</script>

<style lang="scss">
//GLOBAL PROJECT STYLE IMPORT HERE
//THIS FILE CONTAINS ALL THE SCSS FOR THIS APPLICATION
@import "@/assets/scss/style";
</style>
