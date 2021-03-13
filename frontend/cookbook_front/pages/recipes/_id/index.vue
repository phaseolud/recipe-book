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
      <div class="py-2 mb-1">
        <div class="flex items-center">
        <p class="text-2xl inline-block">{{ recipe_data.title }}</p>
        <nuxt-link :to="'/recipes/' + recipe_id + '/edit'" class=" hover:text-red-500 focus:outline-none  mt-1 ml-4">
        <fa-layers class="fa inline-block">
          <fa icon="pen" />
        </fa-layers>
        </nuxt-link>
        <button @click="createPDF" class="mt-1 ml-4"> <fa icon="save"/> </button>
        </div>
        <p v-if="recipe_data.source" class="text-sm text-gray-600 dark:text-gray-300">
          bron: {{ recipe_data.source }}
        </p>
        <div class="flex flex-wrap mt-1">
          <div class="bg-gray-200 dark:bg-gray-600 py-1 px-2 rounded-md mr-2" v-for="(tag,index) in recipe_data.tags" :key="index">
            {{ tag.name }}
          </div>
        </div>
      </div>
      <div class="md:flex">
        <div class="py-2 md:flex-shrink md:mr-12 md:max-w-p40">
          <p class="text-lg font-bold pb-1">Aantal personen</p>

          <input type="number" v-model="people" class="bg-gray-200 dark:bg-gray-600 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-16 mb-2"/>

          <p class="text-lg font-bold">Ingredienten</p>
          <table class="table-auto">
            <tbody>
              <tr
                v-for="(ingredient,idx) in recipe_data.ingredient"
                v-bind:key="idx"
              >
                <td nowrap="nowrap" class="align-top">
                  <div v-if="ingredient.quantity">
                    
                    {{ Math.round(ingredient.quantity * people/ recipe_data.people) }} {{ ingredient.unit }}
                  </div>
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
import jsPDF from 'jspdf';
export default {
  data() {
    return {
      recipe_data: {},
      people: null
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
      .catch((error) => console.log(error));
    this.people = this.recipe_data.people;
  },
  computed: {
    serverUrl() {
      return process.env.serverUrl;
    }
  },
  methods: {
    createPDF() {
      const doc = new jsPDF();
      let row = 30;
      let ingredient_col = 20;
      doc.setFont('helvetica');
      doc.setFontSize(36);
      doc.text(this.recipe_data.title, ingredient_col, row);
      row += 6;
      doc.setFontSize(16);
      doc.setTextColor(110,110,110);
      doc.text(String(this.recipe_data.people) + ' personen', ingredient_col, row);

      row += 30;
      let title_row = row;
      // ingredients
      doc.setFontSize(18);
      doc.setTextColor(232, 23, 82);
      doc.text('Ingredienten', ingredient_col, row);
      row += 8;
      doc.setFontSize(10);
      let lineHeight = doc.getLineHeight('Some text') / doc.internal.scaleFactor;
      doc.setTextColor(50,50,50);
      for (let i = 0; i < this.recipe_data.ingredient.length; i++) {
        const ing = this.recipe_data.ingredient[i];
        let ing_str = '';
        if (ing.quantity !== null) {ing_str += ing.quantity + " "};
        if (ing.unit !== null) {ing_str += ing.unit + " "};
        ing_str += ing.ingredient
        let splitIng = doc.splitTextToSize(ing_str,50);
        let ing_lines = splitIng.length;
        let blockHeight = splitIng.length * lineHeight;
        doc.text(splitIng, ingredient_col , row);
        row += blockHeight;

      }
      
      // beschrijving
      const beschrijving_col = 90;
      row = title_row;
      doc.setFontSize(18);
      doc.setTextColor(232, 23, 82);
      doc.text('Beschrijving', beschrijving_col, row);
      row += 8;
      doc.setFontSize(10);
      doc.setTextColor(50,50,50);
      for (let i = 0; i < this.recipe_data.instruction.length; i++) {
        const instr = this.recipe_data.instruction[i];
        
        // step
        doc.setFontSize(18);
        doc.setTextColor(232, 23, 82);
        doc.text( String(i + 1), beschrijving_col - 3, row + 3, 'right');

        // instruction
        doc.setFontSize(10);
        doc.setTextColor(50,50,50);
        let splitText = doc.splitTextToSize(instr.instruction, 110);
        doc.text(splitText, beschrijving_col, row);

        let lines = splitText.length;
        let blockHeight = lines * lineHeight;
        row += blockHeight + 6;
      }
   
        doc.save("Recept " + recipe_data.title + ".pdf");
    }
  }
}
</script>

<style></style>
