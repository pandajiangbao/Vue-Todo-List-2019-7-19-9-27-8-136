<template>
    <div class="todo-list-container">
        <p>Todo List</p>
        <div><i>Simple Todo List with adding and filter by diff status.</i></div>
        <div>
            <input v-model="content" type="text"><Button @click="addItem">Add</Button>
        </div>
        <div class="item-list-container">
            <div class="item-list" v-for="(item,index) in itemList" :key="index">
                {{index}}.<input type="checkBox">{{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            content:'',
            itemList:[]
        }
    },
    methods:{
        addItem(){
            this.itemList.push(this.content)
            this.content=''
        }
    }
 }
</script>
