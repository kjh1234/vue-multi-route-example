<template>
  <div>
    <!-- HOME BUTTON -->
    <ext-router-link
      app="index"
      to="/"
      class="to-home"
    >
      <i class="material-icons">home</i>
    </ext-router-link>

    <!-- VIEWS -->
    <router-view />
  </div>
</template>

<style scoped>
  .to-home.router-link-exact-active {
    display: none;
  }
</style>
