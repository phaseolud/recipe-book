<template>
<div>
  <div class="w-full h-screen"> <!--class="w-full h-screen" -->
  <div class="container mx-auto pb-32">
    <div class="p-2">
      <div v-if="$nuxt.isOffline" class="bg-green-300 border-green-800 border-2 p-2 align-center flex justify-between rounded">Momenteel ben je offline. Verbind met het internet om optimaal gebruik te maken van de app.</div>
      <Nuxt /></div>
  </div>
  <!-- component -->
	<!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
	<section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 border-t-2 border-red-500 bg-white shadow">
		<div id="tabs" class="flex justify-between">
      <nuxt-link to="/" class="w-full focus:text-red-500 hover:text-red-500 justify-center inline block text-center pt-2 pb-2">
        <fa-layers class="fa-2x">
        <fa icon="home"/>
        </fa-layers>
				<span class="tab tab-account block text-xs">Home</span>
      </nuxt-link>

      <nuxt-link to="/recipes" class="w-full focus:text-red-500 hover:text-red-500 justify-center inline block text-center pt-2 pb-2">
        <fa-layers class="fa-2x">
        <fa icon="search"/>
        </fa-layers>
				<span class="tab tab-account block text-xs">Search</span>
      </nuxt-link>

      <nuxt-link to="/recipes/add" class="w-full focus:text-red-500 hover:text-red-500 justify-center inline block text-center pt-2 pb-2">
        <fa-layers class="fa-2x">
        <fa icon="plus"/>
        </fa-layers>
				<span class="tab tab-account block text-xs">Add</span>
      </nuxt-link>
		</div>
	</section>
</div>
</div>
</template>

<style>
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.1s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
</style>