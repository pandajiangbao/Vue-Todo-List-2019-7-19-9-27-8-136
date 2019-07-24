<template>
    <div class="home-container">
        <a-layout>
            <a-layout-header theme="light">
                <a-button type="danger" class="back-button" @click="isConfrim=true">返回</a-button>
                <span style="float:right;color:white;">{{$store.state.name}}</span>
            </a-layout-header>
            <a-layout>
                <a-layout-sider style="height:940px" theme="light">
                    <a-menu theme="light" :defaultSelectedKeys="['1']" mode="inline">
                        <a-menu-item key="1">
                            <a-icon type="pie-chart" />
                            <router-link to="/home/todolist" style="display:inline;">TodoList</router-link>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <a-icon type="user" />
                            <router-link to="/home/name" style="display:inline;">我的</router-link>
                        </a-menu-item>
                    </a-menu>
                </a-layout-sider>
                <a-layout-content>
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout>
        <a-modal title="温馨提示" v-model="isConfrim" @ok="back">确认返回？</a-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isConfrim:false
        }
    },
    components: {},
    methods: {
        back() {
            this.isConfrim=false
            this.$router.push("/") 
        }
    }
};
</script>

<style>
</style>
