<template>
    <div class="item-list-button-container">
        <a-button type="danger" @click="$store.commit('changeType','All')">All</a-button>
        <a-button type="danger" @click="$store.commit('changeType','Active')">Active</a-button>
        <a-button type="danger" @click="$store.commit('changeType','Complete')">Complete</a-button>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
