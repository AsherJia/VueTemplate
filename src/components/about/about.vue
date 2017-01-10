<template>
    <div>
        <h1>{{ msg }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: 'about',
            msg: 'Welcome to About Page!'
        }
    }
}
</script>
