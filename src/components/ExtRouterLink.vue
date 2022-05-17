<template>
  <router-link v-if="isRoute" :to="to"><slot/></router-link>
  <a v-else :href="process.env.BASE_URL + to"><slot/></a>
</template>

<script>
export default {
  name: 'ext-router-link',
  props: {
    to: String,
    app: String
  },
  computed: {
    isRoute () {
      if (this.$props.app === this.$root.appName && this.$router) {
        return this.$router.options.routes.filter(e => e.path === this.$props.to).length
      }
      return false
    }
  }
}
</script>
