<template>
  <div id="app">
    <div id="header-div">
      <header>
        <h1 id="title">Morse Code Converter</h1>
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
  box-shadow: 0px 0px 15px #f8f8f8;
}

#header-div {
  display: flex;
  justify-content: center;
  width: 100%;
}

#title {
  font-size: 50px;
}

@media all and (max-width:800px) {
  #title {
    font-size: 40px;
  }
}
</style>
