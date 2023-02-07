
import { createStore } from 'vuex';

export default createStore({
    state: {
        input: "",
        output: ""
    },
    mutations: {
        SET_INPUT(state, input) {
            state.input = input;
        },
        SET_OUTPUT(state, output) {
            state.output = output;
        }
    }
})

