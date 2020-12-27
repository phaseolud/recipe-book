<template>
  <div>
    <p v-if="$fetchState.pending"></p>
    <p v-else-if="$fetchState.error">Error tijdens het laden van de recepten</p>
    <div v-else class="transition duration-300 ease-in-out grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <recipe-block v-for="recipe in recipes" :recipe="recipe" v-bind:key="recipe.id"></recipe-block>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    recipes: []
  }
  },
 async fetch() {
   this.recipes = await fetch(
     'http://192.168.2.248/api/recipes'
   ).then(res => res.json())
 }
}
</script>

<style>

</style>