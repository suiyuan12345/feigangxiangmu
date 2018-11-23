<template>
  <div class="home">

    <Hello-World msg="Welcome to Your Vue.js App"/>
    <Hello/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import  Hello from  '@/components/Hello.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
      Hello,
  }
}
</script>
