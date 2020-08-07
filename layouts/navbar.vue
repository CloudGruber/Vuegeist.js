<template lang="pug">
zi-card(shadow)
  nuxt-link(to="/")
    zi-button(type="abort") Home
  nuxt-link(to="/test/")
    zi-button(type="abort") Blog
</template>

<script>
export default {};
</script>