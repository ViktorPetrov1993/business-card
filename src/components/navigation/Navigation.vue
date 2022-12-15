<template>
  <header class="main-header">
    <nav class="container">
      <ul class="navigation">
        <li class="navigation-link navigation-logo">
          <router-link to="/">A</router-link>
        </li>
        <!--NAVIGATION LOGO-->
        <li
          class="navigation-link"
          v-for="(link, index) in navigation"
          :key="'navigation-link' + index"
        >
          <router-link :to="link.url">
            <i :class="link.icon"></i>
            {{ link.name }}
          </router-link>
        </li>
        <!--NAVIGATION LINK-->
      </ul>
      <!--NAVIGATION-->
    </nav>
    <!--CONTAINER-->
  </header>
  <!--MAIN HEADER BLOCK-->
</template>

<script>
export default {
  name: "main-navigation",
  data() {
    return {
      navigation: [
        {
          url: "/",
          name: "Home",
          icon: "las la-home",
        },
        {
          url: "/cases",
          name: "Cases",
          icon: "las la-briefcase",
        },
        {
          url: "#",
          name: "About",
          icon: "las la-id-card",
        },
      ],
    };
  },
};
</script>
