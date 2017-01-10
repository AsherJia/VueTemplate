<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>{{ $route.params.userName }}</h2>
        <div>
            <h3>{{userName}}</h3>
            <h3>{{userAge}}</h3>
            <input type='text' v-model="userName" />
            <input type='text' v-model="userAge"/>
        </div>
    </div>
</template>

<script lang='babel'>
import {mapGetters, mapActions } from 'vuex';

export default {
    data () {
        return {
            msg: 'Welcome to User Page!',
            name: this.$store.state.userName,
            age: this.$store.state.userAge
        }
    },
    methods: {
        ...mapActions ([
            'saveUser'
        ]),

        handleClick: () => {
            const user = {
                userName: this.userName,
                userAge: this.userAge
            }

            this.saveUser(user)
        }
    },
    computed: mapGetters({
        userName: 'userName',
        userAge: 'userAge',
    })
}
</script>
