<template>
    <div class="default">
        {{this.$route.meta.title}}
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route)
    }
}
</script>

<style>

</style>
