<template>
  <div id="app">
    <div id="header-div">
      <header>
        <h1>Morse Code Converter</h1>
      </header>
    </div>
    <main-view />
  </div>
</template>

<script>
import MainView from './views/MainView.vue'

export default {
  name: 'App',
  components: {
    MainView
  }
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: rgb(67, 170, 211);
  min-height: 99%;
  padding-top: 10px;
}
header {
  display: flex;
  width: fit-content;
  height: auto;
  justify-content: center;
  align-content: center;
  border: solid 1px rgba(0, 0, 0, 0.568);
  border-radius: 20px;
  margin: 0% 2% 0px 2%;
  padding: 0% 1%;
  background-color:aliceblue;
}

#header-div {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
