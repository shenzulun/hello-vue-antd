<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a-button type="primary">Button-primary</a-button>
    <a-button type="default" disabled >Button-default</a-button>
    <a-button type="dashed">Button-dashed</a-button>
    <a-button type="danger">Button-danger</a-button>
    <br/>
    <ant-button-group>
      <a-button type="primary">Button-primary</a-button>
      <a-button type="default">Button-default</a-button>
    </ant-button-group>
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
