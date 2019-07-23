<template>
    <div class="home-container">
        <button class="back-button" @click="back">返回</button>
        <span style="float:right;">{{$store.state.name}}</span>
        <router-link to="/home/todolist">TodoList</router-link><br>
        <router-link to="/home/name">我的</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    components: {
    },
    methods: {
        back(){
            confirm("确认返回？")?this.$router.push('/'):''
        }
    },
};
</script>

<style>
</style>
