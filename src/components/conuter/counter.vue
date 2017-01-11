<template>
    <div>
        <h1>Counter: {{ count }}</h1>
        <h1>COunt * 2: {{ doubleCount }}</h1>
        <button @click='increment'>increment</button>
    </div>
</template>

<script lang='babel'>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    data () {
        return { }
    },
    methods: {
        ...mapActions([
            'increment'
        ])
    },
    computed: {
        ...mapState({
            count: state => state.counter.count
        }),
        ...mapGetters({
            doubleCount: 'double'
        })
    }
}
</script>
