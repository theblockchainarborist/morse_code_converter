<template>
    <div id="text-to-morse-code-main-div">
      <h1>Text to Morse Code</h1>
      <div class="input-div">
        <p class="bold label">Input Text: &nbsp;</p>
        <div
          class="text-input-box"
          ref="input"
          @input="updateTextInput"
          @keyup.enter="textToMorseCode"
          contentEditable="true"
        >
        </div>
      </div>
      <input
        class="convert-btn bold"
        type="button"
        value="Convert to Morse Code"
        @click="textToMorseCode"
      />
    </div>
  </template>
  
  <script>
import store from "../store/index";
import morse from 'morse-code-converter'

  
  export default {
    name: "text-to-morse-code",
    data() {
      return {
        input: "",
        output: ""
      };
    },
    methods: {
      textToMorseCode() {
        let morseCodeOutput = morse.textToMorse(this.input);
        this.output = morseCodeOutput;
        store.commit("SET_INPUT", this.input);
        store.commit("SET_OUTPUT", morseCodeOutput);
        this.$refs.input.innerText = "";
      },
      updateTextInput() {
        this.input = this.$refs.input.innerText;
      }
    }
  };
  </script>
  
  <style>
  #text-to-morse-code-main-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px black;
    width: 35%;
    height: fit-content;
    margin-top: 2%;
    border-radius: 18px;
  }

  #text-to-morse-code-main-div:hover {
    box-shadow: 0px 0px 15px #f8f8f8;
  }

  .text-input-box {
    border: solid 2px black;
    font-size: 20px;
    width: 70%;
    max-width: 550px;
    margin-right: 20px;
    height: fit-content;
    white-space: wrap;
    border-radius: 4px;
    padding-left: 1%;
    text-align: left;
    overflow: auto;
}

.input-div {
    display: flex;
    width: 100%;
    justify-content: left;
    padding-left: 2%;
    align-items: center;
}

.convert-btn {
    width: 100%;
    height: 50px;
    border: solid 1px black;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    cursor: pointer;
    font-size: 20px;
}

.bold {
    font-weight: 600;
}


@media all and (max-width:800px) {
  #text-to-morse-code-main-div {
    width: 60%;
  }
}

@media all and (max-width:390px) {
  .convert-btn {
      font-size: 14px;
  }
}
  
  </style>