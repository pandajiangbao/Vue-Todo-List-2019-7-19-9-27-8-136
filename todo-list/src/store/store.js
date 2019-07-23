import Vue from 'vue'
import Vuex from 'vuex'
import { fly } from '../main'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        itemList: [],
        type: "All"
    },
    mutations: {
        getTodoList(state, todoList) {
            state.itemList = todoList
        },
        changeType(state, type) {
            state.type = type
        }
    },
    actions: {
        getTodoList({ commit }) {
            fly.get('/todos').then((response) => {
                commit('getTodoList', response.data)
            })
        },
        addTodo({ dispatch }, todo) {
            fly.post('/todos', todo).then(() => {
                dispatch('getTodoList')
            })
        },
        updateTodo({ dispatch }, todo) {
            fly.put(`/todos/${todo.id}`, todo).then(() => {
                dispatch('getTodoList')
            })
        },
        deleteTodo({ dispatch }, id) {
            fly.delete(`/todos/${id}`).then(() => {
                dispatch('getTodoList')
            })
        },
    }
})
export default store