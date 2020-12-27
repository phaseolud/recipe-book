<template>
  <div>
    <div>
      <h1 class="text-xl font-sans mb-3 text-gray-900">Add a recipe</h1>
      <div
        v-if="Object.keys(errors).length !== 0"
        class="bg-red-300 border-red-800 border-2 p-2 align-center flex justify-between rounded"
      >
        <ul>
          <li v-for="error in errors" v-bind:key="error[0]">{{ error[0] }}</li>
        </ul>
        <button
          @click="errors = {}"
          class="hover:text-red-800 focus:outline-none"
        >
          <fa-layers class="">
            <fa icon="times" />
          </fa-layers>
        </button>
      </div>
      <div class="mb-6">
        <div class="flex">
          <div class="flex-grow mr-5">
            <label for="title" class="text-sm text-gray-600 font-sans"
              >titel</label
            >
            <input
              type="text"
              id="title"
              name="title"
              v-model="title"
              class="bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full"
              placeholder="titel"
              required
            />
          </div>
          <div class="w-1/6 flex-none">
            <label class="text-sm text-gray-600 font-sans" for="people"
              >aantal</label
            >
            <input
              class="bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full"
              type="number"
              v-model.number="people"
              name="people"
            />
          </div>
        </div>
      </div>
      <div class="mb-6">
        <label class="text-sm text-gray-600 font-sans block" for="image"
          >afbeelding</label
        >
        <input
          class="bg-gray-300 border-b-2 border-red-300 focus:border-red-500 focus:outline-none"
          type="file"
          accept="image/*"
          name="image"
          id="image"
          @change="handleFile"
        />
      </div>
      <div class="mb-6">
        <label for="ingredients" class="text-sm text-gray-600 font-sans"
          >ingredienten</label
        >
        <div v-for="(ingredient,index) in ingredients" v-bind:key="ingredient">
          <div class="w-full flex">
            <input
              class="bg-gray-300 focus:outline-none p-1 mr-3 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-12 flex-none"
              type="number"
              min="0"
              v-model.number="ingredient.qnty"
              placeholder="hoeveelheid"
            />

            <select
              v-model="ingredient.unit"
              class="bg-gray-300 focus:outline-none p-1 mr-3 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-14 flex-none"
            >
              <option value=""></option>
              <option v-for="option in options" v-bind:value="option" v-bind:key="option">
                {{ option }}
              </option>
            </select>
            <input
              class="bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out flex-grow"
              type="text"
              placeholder="ingredient"
              v-model="ingredient.name"
              :key="ingredient"
            />
            <button
              class="pl-3 hover:text-red-500 focus:outline-none"
              @click="removeIngredient(index)"
            >
              <fa icon="trash" />
            </button>
          </div>
        </div>
        <button
          class="block mt-3 bg-gray-300 p-2 pl-3 pr-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out"
          @click="addIngredient"
        >
          Ingredient Toevoegen
        </button>
      </div>

      <div class="mb-6">
        <label for="instructies" class="text-sm text-gray-600 font-sans"
          >instructies</label
        >
        <div v-for="(stap,index) in instructies" class="mb-2" v-bind:key="stap">
          <div class="flex items-center pb-2">
            <h2 class="text-l">Stap {{ index + 1 }}</h2>
            <button
              class="w-10 hover:text-red-500 focus:outline-none"
              @click="removeStap(index)"
            >
              <fa-layers class="fa-xs">
                <fa icon="trash" />
              </fa-layers>
            </button>
          </div>
          <textarea
            class="bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full"
            type="text"
            placeholder="Instructie"
            v-model="stap.beschrijving"
            :key="index"
          ></textarea>
        </div>

        <button
          class="block mt-3 bg-gray-300 p-2 pl-3 pr-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out"
          @click="addStap"
        >
          Stap toevoegen
        </button>
      </div>
      <div class="mb-6">
        <label for="source" class="text-sm text-gray-600 font-sans">bron</label>
        <input
              type="text"
              id="source"
              name="source"
              v-model="source"
              class="bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full"
              placeholder="bron (website/kookboek)"
            />
      </div>
      <button
        @click="addRecipe"
        class="bg-gray-300 p-2 px-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out"
      >
        Sla op
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    ingredients: [{"name":"ABC","qnty":"1","unit":""}],
    title: "abc",
    people: 1,
    instructies: [{"beschrijving":"abc"}],
    options: ['g','kg','L','mL','tsp','tbsp'],
    errors: {},
    file: null,
    filepath: '',
    source: '',
  }
  },
  methods: {
  addIngredient() {
      this.ingredients.push({"name": '','qnty':''});
  },
  removeIngredient(index) {
      this.ingredients.splice(index,1);
  },
  addStap() {
      this.instructies.push({"beschrijving":""});
  },
  removeStap(index) {
      this.instructies.splice(index,1);
  },

  handleFile(e) {
      this.file = e.target.files[0];
  },

  async uploadImage() {
      let fd = new FormData();
          fd.append('image',this.file);
          return this.$axios.post('http://erised:3333/api/recipes/upload-image',fd).then(response => response.data
          ).catch(error => {
              this.errors = error.response.data;
          });
  },

  async addRecipe() {
      if(typeof(this.file) !== 'undefined' && this.file !== null && this.filepath.length === 0) {
           this.filepath = await this.uploadImage();
      }
      this.$axios.post('http://erised:3333/api/recipes', {
          ingredients: this.ingredients,
          title: this.title,
          people: this.people,
          instructies: this.instructies,
          imagepath: this.filepath,
          source: this.source,
      }).then(function (response) {
          console.log(response); 
      }).catch(error => {
          console.log("ERROR: ", error.response.data);
          this.errors = error.response.data;
      });
  }
  }
}
</script>