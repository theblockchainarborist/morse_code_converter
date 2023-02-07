<template>
    <div id="result-panel-div">
        <div class="scrollbar">
            <div>
                <p class="input-p nowrap">
                    <strong>Input:</strong> &nbsp; {{ getInput }}
                </p>
            </div>
            <div id="result-output-div">
                <p class="typingEffect input-p" :key="getOutput">
                <strong>Output:</strong> &nbsp; {{ getOutput }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store/index'

export default {
    name: 'result-output',
    data() {
        return {
        }
    },
    computed: {
        getOutput() {
            return store.state.output;
        },
        getInput() {
            return store.state.input;
        }
    } 
}
</script>

<style>

#result-output-div {
    border-radius: 4px;
    height: auto;
    color: rgb(5, 5, 5);
    text-align: left;
  }

  .typingEffect {
    width: 0;
    font-size: 16px;
    white-space: pre; /* Keeps the text on a single line */
    animation: typing 3s steps(30) forwards;
  }




  #result-panel-div {

    flex-direction: column;
    border: solid 1px black;
    text-align: left;
    width: 85%;
    align-self: center;
    border-radius: 20px;
    margin-top: 3%;
    background-color:aliceblue;
  }

  .input-p {
    margin-top: 1%;
    margin-bottom: 1%;
    font-size: 25px;
    margin-left: 2%;
  }

  .scrollbar {
    overflow-x: scroll;
    margin: 1px 2%;
  }

  ::-webkit-scrollbar {
    width: 50px;
    background-color: none;
  }
  
  
  ::-webkit-scrollbar-thumb {
    background-color: #7575754d;
    border-radius: 10px;
  }

  .nowrap {
    white-space: nowrap;
  }

</style>