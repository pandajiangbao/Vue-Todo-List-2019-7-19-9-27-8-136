<template>
    <div class="item-list">
        <span v-if="!item.isSelected&&(type=='All'||type=='Active')">
            {{index+1}}.
            <span class="color-zone" @dblclick="doubleClickEdit(item)">
                <a-input
                    type="text"
                    v-if="item.isEdited"
                    v-model="item.value"
                    ref="temp"
                    autofocus
                    @keyup.enter="$store.dispatch('updateTodo',item)"
                    @blur="item.isEdited=false"
                />
                <span v-if="!item.isEdited">
                    <a-checkbox style="margin:0 5px;" v-model="item.isSelected" @click="clickSelected(item)" />
                    {{item.value}}
                </span>
            </span>
            <a-button size="small" type="danger" @click="$store.dispatch('deleteTodo',item.id)" class="delete-button">X</a-button>
        </span>
        <del v-if="item.isSelected&&(type=='All'||type=='Complete')">
            {{index+1}}.
            <del class="color-zone" @dblclick="doubleClickEdit(item)">
                <a-input
                    type="text"
                    v-if="item.isEdited"
                    v-model="item.value"
                    ref="temp"
                    autofocus
                    @keyup.enter="$store.dispatch('updateTodo',item)"
                    @blur="item.isEdited=false"
                />
                <del v-if="!item.isEdited">
                    <a-checkbox style="margin:0 5px;" v-model="item.isSelected" @click="clickSelected(item)" />
                    {{item.value}}
                </del>
            </del>
            <a-button size="small" type="danger" @click="$store.dispatch('deleteTodo',item.id)" class="delete-button">X</a-button>
        </del>
    </div>
</template>

<script>
export default {
    props:["index","item","type"],
    methods: {
        clickSelected(item){
            item.isSelected=!item.isSelected
            this.$store.dispatch('updateTodo',item)
        },
        doubleClickEdit(item){
            item.isEdited=true
            this.$refs.temp.focus()
        }
    },
};
</script>

<style>
</style>
