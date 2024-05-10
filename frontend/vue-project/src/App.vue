<template>
  <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://cdn-icons-png.freepik.com/512/7997/7997145.png" class="mx-auto h-20 w-auto " >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      
      <span class="ml-3 text-xl">Cookbook Compass</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link to="/">
          <li class="text-indigo-500 hover:text-indigo-300 hover:scale-110 cursor-pointer list-none mr-5">Home</li>
        </router-link>
      <router-link to="/search">
          <li class="text-indigo-500 hover:text-indigo-300 hover:scale-110 cursor-pointer list-none mr-5">Search Recipes</li>
        </router-link>
        <router-link to="/filter">
          <li class="text-indigo-500 hover:text-indigo-300 hover:scale-110 cursor-pointer list-none mr-5">Filters</li>
        </router-link>
      
      <router-link to="/recommendation">
          <li class="text-indigo-500 hover:text-indigo-300 hover:scale-110 cursor-pointer list-none mr-5">Recommendations</li>
        </router-link>
    </nav>
    <router-link to="/login">
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </router-link>
  </div>
</header>
<routerView />
</template>

<script>

import { ref } from 'vue';
export default {
data(){
  return{
    
}
}
}
</script>

<style lang="scss" scoped></style>