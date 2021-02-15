<template>
  <div>
      <p class="text-2xl">Instellingen</p>

      <div>
      <p class="text-xl my-2">Tags</p>
      <div class="flex content-center">
        <input type="text" v-model="tag_new" class="bg-gray-200 dark:bg-gray-600 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out h-10 mr-3" placeholder="Tag"/>
        <button class=" bg-gray-200 dark:bg-gray-600  px-3 h-10 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out" @click="addTag" >Voeg toe</button>
      </div>
        <transition-group name="fade" tag="div" class="py-4 flex flex-wrap">
        <div v-for="tag in tags" v-bind:key="tag.id">
          <div class="rounded-lg bg-gray-200 dark:bg-gray-600 p-2 mr-2 mb-2">
          {{ tag.name }}
          </div>
        </div>
        </transition-group>
      </div>

      <div>
      <p class="text-xl my-2">Kleur: {{$colorMode.value}}</p>
      <select class="bg-gray-200 dark:bg-gray-600 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out" v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>

      </div>
  </div>
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
  data() {
    return {
      tag_new: '',
      tags: [],
    }
  },
  
  async fetch() {
    this.tags = await this.$axios.get('http://' + process.env.serverUrl + '/api/tags').then(res => res.data).catch(error => console.log(error));
  },

  methods: {
  async addTag() {
    this.tags = await this.$axios.post('http://' + process.env.serverUrl + '/api/tags',{tag: this.tag_new}).then(res => res.data).catch(error => console.log(error));
    this.tag_new = '';
  },

  async removeTag(tag) {
    this.tags = await this.$axios.delete('http://' + process.env.serverUrl + '/api/tags/' + tag).then(res => res.data).catch(error => console.log(error));
  }
  }
}
</script>

<style>

</style>