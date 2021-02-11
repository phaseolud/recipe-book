<template>
  <div>
      <p class="text-2xl">Instellingen</p>

      <div>
      <p class="text-xl my-2">Tags</p>
      <div class="flex content-center">
        <input type="text" v-model="tag_new" class="bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out h-10 mr-3" placeholder="Tag"/>
        <button class=" bg-gray-300  px-3 h-10 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out">Voeg toe</button>
      </div>
      <div>
        <div v-for="tag in tags" v-bind:key="tag" class="rounded-lg bg-gray-300">
          {{ tag }}
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag_new: '',
      tags: ['abc'],
    }
  },

  async addTag() {
    this.tags = await this.$axios.post('http://' + process.env.serverUrl + '/api/tags',{tag: this.tag_new}).then(function(res) {this.tag_new = '';return res.data}).catch(error => console.log(error));
  },

  async removeTag(tag) {
    this.tags = await this.$axios.delete('http://' + process.env.serverUrl + '/api/tags/' + tag).then(res => res.data).catch(error => console.log(error));
  },

  async fetch() {
    this.tags = await this.$axios.get('http://' + process.env.serverUrl + '/api/tags').then(res => res.data).catch(error => console.log(error));
  }
}
</script>

<style>

</style>