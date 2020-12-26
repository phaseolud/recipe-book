<template>
  <div>
    <div class="bg-red-500 rounded-lg">
      <img
        :src="'http://localhost:8000/' + recipe_data.image"
        alt=""
        class="w-full h-48 object-cover rounded-lg opacity-100"
      />
    </div>
    <div class="py-2 mb-4">
        
        <p class="text-xl">{{ recipe_data.title }}</p>
        <p v-if="recipe_data.source" class="text-sm text-gray-600">
          bron: {{ recipe_data.source }}
        </p>
    </div>
    <div class="md:flex">
      <div class="py-2 md:flex-shrink md:mr-12">
        <p class="text-lg font-bold">Ingredienten</p>
        <table class="table-auto text">
          <tbody>
            <tr
              v-for="ingredient in recipe_data.ingredient"
              v-bind:key="ingredient"
            >
              <td class="">{{ ingredient.quantity }} {{ ingredient.unit }}</td>
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
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const recipe_id = params.id
    const recipe_data = await $axios
      .get('http://localhost:8000/api/recipes/' + recipe_id)
      .then((res) => res.data)
      .catch((error) => console.log(error))
    return { recipe_id, recipe_data }
  },
}
</script>

<style></style>
