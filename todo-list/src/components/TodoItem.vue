<template>
    <div class="item-list">
        <span v-if="!item.isSelected&&(type=='All'||type=='Active')">
            {{index+1}}.
            <span class="color-zone" @dblclick="item.isEdited=true">
                <input
                    type="text"
                    v-if="item.isEdited"
                    v-model="item.value"
                    @blur="item.isEdited=false"
                />
                <span v-if="!item.isEdited">
                    <input type="checkbox" v-model="item.isSelected" @click="$store.dispatch('updateTodo',item)" />
                    {{item.value}}
                </span>
            </span>
        </span>
        <del v-if="item.isSelected&&(type=='All'||type=='Complete')">
            {{index+1}}.
            <del class="color-zone" @dblclick="item.isEdited=true">
                <input
                    type="text"
                    v-if="item.isEdited"
                    v-model="item.value"
                    @blur="item.isEdited=false"
                />
                <del v-if="!item.isEdited">
                    <input type="checkbox" v-model="item.isSelected" @click="$store.dispatch('updateTodo',item)" />
                    {{item.value}}
                </del>
            </del>
        </del>
        <button @click="$store.dispatch('deleteTodo',item.id)" class="delete-button">X</button>
    </div>
</template>

<script>
export default {
    props:["index","item","type"]
};
</script>

<style>
</style>
