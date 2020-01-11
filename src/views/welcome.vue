<template>
    <div class="app-container">
        欢迎页内容{{$store.state.user.count}}
        <el-button type="primary" @click="addAction">自增</el-button>
        <el-button type="primary" @click="reduceAction">自减</el-button>
    </div>
</template>

<script>
    export default {
        name: "welcome",
        methods: {
            addAction() {
                this.$store.dispatch('user/addAction');
            },
            reduceAction() {
                this.$store.dispatch('user/reduceAction');
            }
        }
    }
</script>

<style scoped>

</style>
