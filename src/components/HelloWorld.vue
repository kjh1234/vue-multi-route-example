<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <!-- <li><a href="/">홈</a></li> -->
      <li><ext-router-link app="index" to="/">Home</ext-router-link></li>
      <li><ext-router-link app="index" to="/about">About</ext-router-link></li>
      <li><ext-router-link app="some" to="/some">모듈</ext-router-link></li>
      <li><ext-router-link app="todo" to="/todo#todos">Todo</ext-router-link></li>
    </ul>
  </div>
</template>

<script>
import ExtRouterLink from './ExtRouterLink.vue'

export default {
  name: 'HelloWorld',
  components: {
    ExtRouterLink
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
