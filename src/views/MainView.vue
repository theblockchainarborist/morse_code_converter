<template>
    <div>
        <div id="morse-to-text-div">
            <morse-code-to-text />
            <text-to-morse-code />
        </div>
        <div id="result-output-div-main">
            <result-output />
        </div>
    </div>
</template>


<script>
import MorseCodeToText from '@/components/MorseCodeToText.vue';
import TextToMorseCode from '../components/TextToMorseCode.vue';
import ResultOutput from '../components/ResultOutput.vue';

export default {
  components: {MorseCodeToText, TextToMorseCode, ResultOutput  },
    name: 'main-view',
    data() {
        return {
            morseCodeInput: ""
        }
    }
}
</script>


<style>
#morse-to-text-div {
    display: flex;
    justify-content: space-around;
}

#result-output-div-main {
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>