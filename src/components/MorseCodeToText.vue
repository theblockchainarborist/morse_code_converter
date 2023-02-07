<template>
  <div id="morse-code-to-text-main-div">
    <h1>
        Morse Code to Text
    </h1>
    <div class="input-div">
        <p class="bold">
            Input Code:
        </p>
        <div ref="morseInput" 
            name="morse-code-input" 
            id="morse-code-input" 
            placeholder="What's happening?" 
            @input="updateInput" 
            @keyup.enter="morseCodeToText"
            contentEditable="true" 
        >
        </div>
    </div>
    <input class="convert-btn bold" 
            type="button" 
            value="Convert to Text" 
            v-on:click="morseCodeToText" 
    />
  </div>
</template>


<script>
import store from '../store/index'
import morse from 'morse-code-converter'

export default {
    name: 'morse-code-to-text',
    data() {
        return {
            morseInput: "",
            output: ""
        }
    },
    methods: {
        morseCodeToText() {
            let codeOutput = morse.morseToText(this.morseInput + " ");
            this.output = codeOutput;
            store.commit("SET_INPUT", this.morseInput);
            store.commit("SET_OUTPUT", codeOutput);
            this.$refs.morseInput.innerText = "";
        },
        updateInput() {
            this.morseInput = this.$refs.morseInput.innerText;
        }
    }
}
</script>


<style>
#morse-code-to-text-main-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px black;
    width: 35%;
    height: fit-content;
    margin-top: 2%;
    border-radius: 18px;
}

#morse-code-input {
    border: solid 2px black;
    font-size: 18px;
    width: 100%;
    max-width: 550px;
    margin-right: 50px;
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
}

.convert-btn:hover {
    background-color: rgb(214, 214, 214);
}

</style>