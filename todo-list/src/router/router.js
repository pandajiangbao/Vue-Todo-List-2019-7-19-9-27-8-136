import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Home from '../components/Home'
import TodoList from '../components/TodoList';
import Name from '../components/Name'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children:[{
                path:'todolist',
                name:'todolist',
                component:TodoList
            },{
                path: 'name',
                name: 'name',
                component: Name,
            }]
        },
    ]
})