
<template>
  <div class="hello">
    <h1 class="a">{{this.msg}}</h1>
    <fileUpload></fileUpload>
  </div>
</template>

<script>
import fileUpload from './FileUpload'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    fileUpload
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
