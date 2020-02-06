<template>
    <div class="app">
        Hello!

        <router-link :to="{ name: 'Home' }">Go to Home</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>