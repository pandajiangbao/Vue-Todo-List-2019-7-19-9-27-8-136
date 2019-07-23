<template>
    <div class="">
        <div class="item-list-container">
            <todo-item
                v-for="(item,index) in $store.state.itemList"
                :key="index"
                :index="index"
                :item="item"
                :type="$store.state.type"
            />
        </div>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    components: {
        TodoItem
    },
    mounted() {
        console.log('this :', this);
        this.$store.dispatch('getTodoList')
    }
};
</script>
