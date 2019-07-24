<template>
    <div class>
        <p class="todo-list-title">Todo List</p>
        <div>
            <i>Simple Todo List with adding and filter by diff isSelected.</i>
        </div>
        <div class="item-list-input-container">
            <a-input v-model="content.value" type="text" @keyup.enter="addItem" />
            <a-button type="danger" @click="addItem">Add</a-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: { value: "", isSelected: false, isEdited: false },
            msg:'',
            isException:false
        };
    },
    methods: {
        addItem() {
            if(this.content.value!=""){
            this.$store.dispatch("addTodo", this.content)
            this.content = {
                value: "",
                isSelected: false,
                isEdited: false
                }
            }
        }
    }
};
</script>

<style lang="" scoped>
</style>