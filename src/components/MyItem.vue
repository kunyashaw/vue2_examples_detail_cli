<template>
    <div>
        <button @click="back">返回</button>
        <h1>我是详情 我的id是{{id}}</h1>
        <button @click="next">获取下个详情</button>
    </div>
</template>

<script>
/** 提醒一下，当使用路由参数时，
 * 例如从 /user/foo 导航到 user/bar，
 * 原来的组件实例会被复用。
 * 因为两个路由都渲染同个组件，比起销毁再创建，
 * 复用则显得更加高效。
 * 不过，这也意味着组件的生命周期钩子不会再被调用。
 * 复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：
**/
export default {
    methods: {
        back() {
            console.log(this.$router);
            this.$router.go(-1);
        },
        next() {
            this.$router.push('/item/2')
        }
    },
    data() {
        return {
            id: 0
        }
    },
    created: function() {
        console.log('after created');
    },
    mounted() {
        console.log(this.$route.params);
        this.id = this.$route.params.id;
    },
    watch: {
        $route: function() {
            console.log('data changes', this.$route.params);
            this.id = this.$route.params.id;
        }
    }
}
</script>

<style>

</style>

