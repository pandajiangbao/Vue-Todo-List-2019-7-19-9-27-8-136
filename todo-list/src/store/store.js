import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        itemList: [],
        type: "All"
    },
    mutations: {
        addItem(state,content) {
            if (content.value != "") {
                state.itemList.push(content)
            }
        },
        changeType(state,type){
            state.type=type
        }
    }
})
export default store