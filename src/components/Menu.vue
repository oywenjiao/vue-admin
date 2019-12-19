<template>
    <el-menu default-active="2"
             :default-openeds="[]"
             background-color="#EFEEF0"
             class="el-menu-vertical-demo"
             text-color="#333"
             active-text-color="#409EFF"
             :collapse="isCollapse">
        <el-menu-item index="0">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span slot="title">导航二</span>
            </template>
            <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <span slot="title">分组二</span>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-menu-item index="2-4">选项4</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span slot="title">七天打卡营</span>
            </template>
            <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <span slot="title">分组二</span>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-menu-item index="2-4">七天打卡营统计数据</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        props: ["isCollapse"]
    }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 220px;
    }
    .el-menu {
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>
