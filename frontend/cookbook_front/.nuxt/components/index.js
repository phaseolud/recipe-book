export { default as Logo } from '../..\\components\\Logo.vue'
export { default as RecipeBlock } from '../..\\components\\RecipeBlock.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyRecipeBlock = import('../..\\components\\RecipeBlock.vue' /* webpackChunkName: "components_RecipeBlock" */).then(c => c.default || c)
