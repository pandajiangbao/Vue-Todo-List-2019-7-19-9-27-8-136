<template>
    <div class="main">
        <button @click="toHome">开始使用</button>
        <br />
        <input type="text" placeholder="请输入姓名" v-model="name" />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        name: {
            get() {
                return this.$store.state.name
            },
            set(newVal) {
                this.$store.commit("setName", newVal)
            }
        }
    },
    methods: {
        toHome() {
            this.$router.push('/home/todolist')
        }
    }
};
</script>

<style>
.main {
    text-align: center;
}
</style>