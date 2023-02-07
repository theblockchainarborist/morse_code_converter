<template>
    <div>
        <div id="morse-to-text-div">
            <morse-code-to-text />
            <text-to-morse-code />
        </div>
        <div id="result-output-div-main">
            <result-output />
        </div>
        <div>
            <morse-code-description />
        </div>
    </div>
</template>


<script>
import MorseCodeToText from '@/components/MorseCodeToText.vue';
import TextToMorseCode from '../components/TextToMorseCode.vue';
import ResultOutput from '../components/ResultOutput.vue';
import MorseCodeDescription from '../components/MorseCodeDescription.vue';

export default {
  components: {MorseCodeToText, TextToMorseCode, ResultOutput, MorseCodeDescription  },
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

@media all and (max-width:800px) {
    #morse-to-text-div {
        flex-direction: column;
        align-items: center;
    }
}
</style>