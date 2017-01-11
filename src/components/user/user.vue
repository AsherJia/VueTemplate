<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>{{ $route.params.userName }}</h2>
    </div>
</template>

<script lang='babel'>
export default {
    data () {
        return {
            msg: 'Welcome to User Page!',
        }
    }
}
</script>
