<template>
    <div class="todo-list-container">
        <Header />
        <TodoItems />
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import TodoItems from "./TodoItems.vue";
import Footer from "./Footer.vue";
export default {
    components: {
        Header,
        TodoItems,
        Footer
    },
    data() {
        return {};
    }
};
</script>

<style lang="" scoped>
</style>