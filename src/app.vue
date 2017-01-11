<template>
    <div id="app">
        <h1>APP</h1>
        <router-link to="/about">Go to About</router-link>
        <router-link to="/user/Asher">Go to User</router-link>
        <h1 v-on:click="goToAbout">GoTOAbout</h1>
        <h1 v-on:click="goToUser">GoTOUser</h1>
        <h1 v-on:click="goToCounter">Counter</h1>
        <router-view></router-view>
        <router-view name='header'></router-view>
        <router-view name='bottom'></router-view>
    </div>
</template>

<script lang='babel'>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App!'
        }
    },
    methods: {
        goToAbout: function() {
            this.$router.push('/about')
        },
        goToUser: function() {
            this.$router.push('/user/Asher')
        },
        goToCounter: function() {
            this.$router.push('/counter')
        }
    }
}
</script>

<style lang='sass'>
  @import "./app.scss"
</style>
