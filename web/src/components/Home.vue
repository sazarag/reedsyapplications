<template>
  <div class="main">
    <img alt="Vue logo" src="../assets/images/q3/04-educated.jpg">
    <h1>{{ msg }}</h1>
    <p>
      3. Styling - implementation the styling example  page
    </p>
    <p>
      4. SPA - Using Vue.js implementation an SPA that gets information from a server
    </p>
    <h3>Answers to questions</h3>
    <ul>
      <li>
        <a v-on:click="$router.push({ name: 'Q3' })" class=""><span>Answer 3</span></a>
      </li>
      <li>
        <a v-on:click="$router.push({ name: 'Q4' })" class=""><span>Answer 4</span></a>
      </li>
    </ul>    
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: underline;
  cursor: pointer;
}
</style>
