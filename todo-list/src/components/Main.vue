<template>
    <div class="main">
        <a-button type="danger" @click="toHome">开始使用</a-button>
        <br />
        <a-input type="text" placeholder="请输入姓名" v-model="name" />
        <a-modal title="温馨提示" v-model="isAlerted" @ok="isAlerted=false">输入姓名不能为空</a-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAlerted:false
        };
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
            if(this.name===""){
                this.isAlerted=true
            }
            else this.$router.push('/home/todolist')
        }
    }
};
</script>

<style>
.main {
    text-align: center;
}
</style>