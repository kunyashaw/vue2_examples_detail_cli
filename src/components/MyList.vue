<template>
    <div>
        <img src="../assets/img/logo.png" alt="">
        <input type="text" v-model.number="kw">
        <span v-bind:class="{myAlertColor:hasRepeatData}">有重复数据</span>
        <button class="btn btn-success" v-bind:disabled="hasRepeatData" @click="addToList">add</button>
        <ul id='myUnorderList'>
            <li @click="jumpToDetail(index)" v-for="(item,index) in productList" v-bind:key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
import '../assets/css/bootstrap.css';
import '../assets/js/jquery.js'
export default {
    methods: {
        jumpToDetail(index) {
            this.$router.push('/item/' + index)
        },
        addToList() {
            console.log(this.productList.indexOf(this.kw));
            this.productList.push(this.kw);
        }
    },
    watch: {
        kw: function() {
            if (this.productList.indexOf(this.kw) == -1) {
                this.hasRepeatData = false;
            }
            else {
                this.hasRepeatData = true;
            }

        }
    },
    data() {
        return {
            productList: [10, 20, 30, 40],
            kw: '',
            hasRepeatData: false
        }
    },
    mounted() {
        $('#myUnorderList').css({ color: 'green' });
    }
}
</script>

<style>
ul {
    background-color: red
}

.myAlertColor {
    color: red
}
</style>


