<template>
    <div class="app-wrapper">
        <div class="drawer-bg" @click="handleClickOutside" />
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <div :class="{'fixed-header':fixedHeader}">
                <navbar />
            </div>
            <app-main />
        </div>
    </div>
</template>

<script>
    import { Sidebar, Navbar, AppMain } from './components';
    export default {
        name: "Layout",
        components: {
            Sidebar,
            Navbar,
            AppMain
        },
        computed: {
            fixedHeader() {
                return false;
            }
        },
        methods: {
            handleClickOutside() {
                // this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
            position: fixed;
            top: 0;
        }
    }
</style>
