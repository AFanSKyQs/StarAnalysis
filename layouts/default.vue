<template>
    <nuxt />
</template>

<script>
  export default {
    components: {
    },
    head(){
      return {
        title: "星探 - Web端APK在线分析系统"
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>

<style>
</style>
