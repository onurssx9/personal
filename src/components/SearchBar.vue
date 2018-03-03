<template>
  <div class="search-container">
    <h1>Onur Sahin Senturk</h1>
    <p class="legal">Copyright © 2018 - All Rights Reserved</p>
    <input v-model="keyword" placeholder="What do you need?" spellcheck="false"/>
    <Skills :keyword="keyword"></Skills>
  </div>
</template>

<script>
import Skills from './Skills'
export default {
  name: 'SearchBar',
  data () {
    return {
      keyword: ''
    }
  },
  components: {
    'Skills': Skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.search-container input {
  display: flex;
  width: 200px;
  text-align: center;
  padding: 10px;
  border: 1px #eeeeee solid;
  border-radius: 5px;
  outline: none;
  transition: all .5s ease;
}

.search-container input:focus {
  border-radius: 10px;
  background: #eeeeee;
}

h1 {
  font-weight: lighter;
  margin-bottom: 0px;
}

.legal {
  font-size: 10px;
  margin: 0px;
  margin-bottom: 20px;
  font-weight: lighter;
}
</style>
