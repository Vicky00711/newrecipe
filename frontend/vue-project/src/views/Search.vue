<template>
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <input type="search" id="default-search" v-model="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type any food items or meals" required>
        <button v-on:click="searchMeal"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    <div>
    <section class="text-gray-600 body-font">
    <div v-if="foods.length">
  <div class="container px-5 py-24 mx-auto">
    <div class="grid grid-cols-3 gap-4"> 
  <div v-for="food in foods" :key="food.foodId" class="rounded-lg overflow-hidden">
    <img alt="content" class="object-cover object-center h-64 w-full" :src="food.image">
    <div class="p-4">
      <h2 class="title-font text-2xl font-medium text-gray-900 mb-3">{{ food.name }}</h2>
      <p class="leading-relaxed text-base">Description goes here</p> 
      <router-link :to="'/foods/' +  food.foodId" >
      <button class="mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">More Info</button>
     </router-link>
    </div>
    </div>
  </div>
</div>
  </div>
</section>
<div v-if="!foods.length">
        <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 class="mb-4 text-4xl font-bold">No foods with this character in the database at the moment!</h1>
                <p class="text-gray-600">Oops! foods not found with the above characters <br> Try using different characters
                    <br> Or click on Search leaving the input empty.
                </p>

            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { foodservices } from '../services/foodservices'
    export default {
        data(){
            return{
                search:"",
                foods:[],
                
            }
        },
        methods:{
            searchMeal(){
                foodservices.search(this.search)
                .then((foods) => {
                    this.foods = foods;
                    

                })
                .catch(error => this.error = error);
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>