<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },
  mounted(){
      axios.post('https://f953dfd37510.ngrok.io/check', {
          token: localStorage.getItem('Token')
      })
  }
}
</script>
