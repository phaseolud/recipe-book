<template>
<transition name="fade" appear>
  <nuxt-link class="bg-gray-200 dark:bg-gray-600 p-2 rounded-sm" :to="'recipes/' + recipe.id">
      <div class="bg-red-300 h-32 rounded-lg hover:bg-red-500 flex align-center">

          <img v-if="recipe.image !== null" :src=" 'http://' + serverUrl + '/' + recipe.image" alt="" class="hover:opacity-50 object-cover w-full h-32 rounded-lg" onerror="this.style.display='none'">
      </div>
    <div class="flex justify-between py-2"><p class="text-sm font-bold">{{ recipe.title }}</p></div>
  </nuxt-link>
  </transition>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
export default {
    props: ['recipe'],
    computed: {
      serverUrl() {
        return process.env.serverUrl;
      }
    }
}
</script>

<style>

</style>