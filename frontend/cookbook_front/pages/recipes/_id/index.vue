<template>
  <div>
    <p v-if="$fetchState.pending"></p>
    <p v-else-if="$fetchState.error">Error tijdens het laden van de recepten</p>
    <div v-else>
      <div class="bg-red-500 rounded-lg h-48">
        <img
          v-if="recipe_data.image !== null"
          :src="'http://' + serverUrl + '/' + recipe_data.image"
          alt=""
          class="w-full h-48 object-cover rounded-lg opacity-100"
        />
      </div>
      <div class="py-2 mb-4">
        <div class="flex items-center">
        <p class="text-2xl inline-block">{{ recipe_data.title }}</p>
        <nuxt-link :to="'/recipes/' + recipe_id + '/edit'" class=" hover:text-red-500 focus:outline-none  mt-1 ml-4">
        <fa-layers class="fa inline-block">
          <fa icon="pen" />
        </fa-layers>
        </nuxt-link>
        </div>
        <p v-if="recipe_data.source" class="text-sm text-gray-600">
          bron: {{ recipe_data.source }}
        </p>
      </div>
      <div class="md:flex">
        <div class="py-2 md:flex-shrink md:mr-12 md:max-w-p40">
          <p class="text-lg font-bold">Ingredienten</p>
          <table class="table-auto">
            <tbody>
              <tr
                v-for="(ingredient,idx) in recipe_data.ingredient"
                v-bind:key="idx"
              >
                <td nowrap="nowrap" class="align-top">
                  {{ ingredient.quantity }} {{ ingredient.unit }}
                </td>
                <td class="px-4">{{ ingredient.ingredient }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="py-2 md:flex-grow">
          <div
            v-for="instruction in recipe_data.instruction"
            v-bind:key="instruction.step"
            class="pb-2 mb-4 w-full border-b-2 border-gray-300"
          >
            <p class="text-lg font-bold">
              Stap {{ Number(instruction.step) + 1 }}
            </p>
            <p class="text-sm">{{ instruction.instruction }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe_data: {},
    }
  },
  async asyncData({ params }) {
    const recipe_id = params.id
    return { recipe_id }
  },
  async fetch() {
    this.recipe_data = await this.$axios
      .get('http://' + process.env.serverUrl + '/api/recipes/' + this.recipe_id)
      .then((res) => res.data)
      .catch((error) => console.log(error))
  },
  computed: {
    serverUrl() {
      return process.env.serverUrl;
    }
  }
}
</script>

<style></style>
