<template>
    <el-menu :default-openeds="[]"
             background-color="#EFEEF0"
             class="el-menu-vertical-demo"
             text-color="#333"
             active-text-color="#409EFF"
             :collapse="isCollapse">
        <el-menu-item index="0" @click="routerChange('/')">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu :index="secMenu.id" v-for="secMenu in menuData">
            <template slot="title">
                <i :class="[secMenu.icon]"></i>
                <span slot="title">{{secMenu.title}}</span>
            </template>
            <el-menu-item :index="item.id" v-for="(item, i) in secMenu.children" @click="routerChange(item.url)">{{item.title}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        props: ["isCollapse"],
        data() {
            let menuData = [
                {
                    id: '2',
                    title: '用户管理',
                    icon: 'el-icon-s-custom',
                    children: [
                        {
                            id: '3',
                            title: '用户列表',
                            url: '/user/list'
                        }
                    ]
                },
                {
                    id: '4',
                    title: '订单管理',
                    icon: 'el-icon-s-goods',
                    children: [
                        {
                            id: '5',
                            title: '订单列表',
                            url: '/order/list'
                        }
                    ]
                }
            ];
            return {
                menuData: menuData
            }
        },
        methods: {
            routerChange(url) {
                console.log(this.$route.name);
                // 与当前页面路由相等则刷新页面
                if (url != this.$route.path) {
                    router.push(url)
                } else {
                    router.replace({ path: '/refresh', query: { name: this.$route.name }})
                }
            }
        }
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
