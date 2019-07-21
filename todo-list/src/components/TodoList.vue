<template>
    <div class="todo-list-container">
        <p>Todo List</p>
        <div><i>Simple Todo List with adding and filter by diff status.</i></div>
        <input type="text"><Button>Add</Button>
        <div class="item-list-container">
            <div class="item-list" v-for="(item,index) in itemList" :key="index">
                {{index}}.<checkbox></checkbox>{{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            itemList:[123,456]
        }
    }
 }
</script>
