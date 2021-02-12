export { default as Logo } from '../..\\components\\Logo.vue'
export { default as RecipeBlock } from '../..\\components\\RecipeBlock.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyRecipeBlock = import('../..\\components\\RecipeBlock.vue' /* webpackChunkName: "components/recipe-block" */).then(c => c.default || c)
