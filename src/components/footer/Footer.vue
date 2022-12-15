<template>
  <footer class="main-footer">
    <div class="container">
      <div class="socials">
        <a
          :href="item.link"
          class="socials-item"
          v-for="(item, index) in socials"
          :key="'social' + index"
        >
          <i :class="item.icon"></i>
        </a>
      </div>
    </div>
    <!--CONTAINER-->
  </footer>
  <!--MAIN FOOTER BLOCK-->
</template>

<script>
export default {
  name: "main-footer",
  data() {
    return {
      socials: [
        {
          link: "#",
          icon: "lab la-facebook",
        },
        {
          link: "#",
          icon: "lab la-instagram",
        },
        {
          link: "#",
          icon: "lab la-linkedin",
        },
        {
          link: "#",
          icon: "lab la-github",
        },
        {
          link: "#",
          icon: "lab la-telegram",
        },
        {
          link: "#",
          icon: "lab la-discord",
        },
      ],
    };
  },
};
</script>
