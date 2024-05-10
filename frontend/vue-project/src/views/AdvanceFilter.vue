<template>

    <div>
        <div class=" flex flex-grow items-center justify-center ">
            <div class="rounded-lg bg-white p-8 text-center shadow-xl" id="background">
                <h1 class="mb-4 text-4xl font-bold">Advance Filter Option</h1>
                <form @submit="handleSubmit">

                <div>
                <p class="text-lg font-bold mb-2">Ingredients</p>
                    
                    <label for="option1">Onions </label>
                    <input type="checkbox"  value="Onion" v-model="ingredients" class="mr-5" >

                    <label for="option1 ">Tomatoes </label>
                    <input type="checkbox"  value="Tomatoes" v-model="ingredients" class="mr-5" >

                    <label for="option1 mr-2">Lasagna Noodles </label>
                    <input type="checkbox"  value="Lasagna Noodles" v-model="ingredients" class="mr-5" >
                    
                    <label for="option1 pl-2">Marinara Sauce </label>
                    <input type="checkbox"  value="Marinara Sauce" v-model="ingredients" class="mr-5" >
                    
                    <label for="option1">Zucchini </label>
                    <input type="checkbox"  value="Zucchini" v-model="ingredients"  class="mr-5" >

                    <label for="option1 ">Bell Peppers </label>
                    <input type="checkbox"  value="Bell Peppers" v-model="ingredients" class="mr-5" >

                    <label for="option1 mr-2">Spinach </label>
                    <input type="checkbox"  value="Spinach" v-model="ingredients" class="mr-5" >
                    
                    <label for="option1 pl-2">Paneer </label>
                    <input type="checkbox" value="Paneer" v-model="ingredients" class="mr-5" >
                    
                    <label for="option1">Spaghetti </label>
                    <input type="checkbox" value="Spaghetti" v-model="ingredients"  class="mr-5" >

                    <label for="option1 ">Ground Beef </label>
                    <input type="checkbox"  value="Ground Beef" v-model="ingredients" class="mr-5" >

                    <label for="option1 mr-2">Garlic </label>
                    <input type="checkbox" value="Garlic" v-model="ingredients" class="mr-5" >
                    
                    <label for="option1 pl-2">Salmon Fillets </label>
                    <input type="checkbox" value="Salmon Fillets" v-model="ingredients" class="mr-5" >
                    
                    <label for="option1">Lemon </label>
                    <input type="checkbox" v-model="ingredients" class="mr-5" >

                    <label for="option1 ">Chicken </label>
                    <input type="checkbox" value="Chicken" v-model="ingredients" class="mr-5" >

                    <label for="option1 mr-2">Ginger </label>
                    <input type="checkbox" value="Ginger" v-model="ingredients" class="mr-5" >
                    
                    <label for="option1 pl-2">Chickpeas </label>
                    <input type="checkbox" value="Chickpeas" v-model="ingredients" class="mr-5" >
    
                    
                
                </div>
                <div class="pt-5">
                <p class="text-lg font-bold mb-2">Allergens</p>
                    
                    <label for="Option 2">Dairy </label>
                    <input type="checkbox" value="Dairy" v-model="allergens" class="mr-5" >

                    <label for="Gluten">Gluten </label>
                    <input type="checkbox" value="Gluten" v-model="allergens" class="mr-5" >

                    <label for="Nuts">Nuts </label>
                    <input type="checkbox" value="Nuts" v-model="allergens" class="mr-5" >
                    
                    <label for="Soy">Soy </label>
                    <input type="checkbox"  value="Soy" v-model="allergens" class="mr-5" >
                    
                    <label for="Shellfish">Shellfish or Seafoods </label>
                    <input type="checkbox" value="Shellfish" v-model="allergens" class="mr-5" >
    
                    
                
                </div>
                <div class="pt-5">
                <p class="text-lg font-bold mb-2">Cuisine</p>
                    
                    <label for="option1">Indian </label>
                    <input type="checkbox" value="Indian" v-model="cuisine" class="mr-5" >

                    <label for="option1 ">Mexican </label>
                    <input type="checkbox" value="Mexican" v-model="cuisine" class="mr-5" >

                    <label for="option1 ">Italian </label>
                    <input type="checkbox" value="Italian" v-model="cuisine" class="mr-5" >
                    
                    <label for="option1">International </label>
                    <input type="checkbox" value="International" v-model="cuisine" class="mr-5" >
                    
                    <label for="option1">Asian </label>
                    <input type="checkbox" value="Asian" v-model="cuisine" class="mr-5" >
    
                    
                
                </div>
                <div class="pt-5">
                <p class="text-lg font-bold mb-2">Serving Size</p>
                    
                    <label for="2">2 servings </label>
                    <input type="radio" value= "2" v-model="servings" class="mr-5" >

                    <label for="4">4 servings </label>
                    <input type="radio"  value= "4" v-model="servings" class="mr-5" >

                    <label for="6">6 servings </label>
                    <input type="radio"  value= "6" v-model="servings"  class="mr-5" >
                    
                    
                    
                
                </div>
                <div class="pt-5">
                <p class="text-lg font-bold mb-2">Budget</p>
                    
                    <label for="Low">Low (5£-10£) </label>
                    <input type="radio"  value="Low" v-model="budget" class="mr-5" >

                    <label for="Moderate ">Moderate (10£-15£)</label>
                    <input type="radio"  value="Moderate" v-model="budget" class="mr-5" >

                    <label for="High">High (15£-Higher)</label>
                    <input type="radio"  value="High" v-model="budget" class="mr-5" >
                    
                    
    
                    
                
                </div>

               <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ">
                Search
            </button>
            </form>

            </div>
        </div>
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
<!-- <div v-if="!foods.length">
        <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 class="mb-4 text-4xl font-bold">No foods with this character in the database at the moment!</h1>
                <p class="text-gray-600">Oops! foods not found with the above characters <br> Try using different characters
                    <br> Or click on Search leaving the input empty.
                </p>

            </div>
        </div>
    </div> -->
    </div>
</template>

<script>
    import { foodservices } from "../services/foodservices";

export default {
  data() {
    return {
      foods: [],
      ingredients: [],
      cuisine: [],
      allergens: [],
      budget: {},
      servings: {},
      error: null,
      body:{}
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
        if (this.ingredients.length===0){
            this.ingredients=null;
        }
        if (this.allergens.length===0){
            this.allergens=null;
        }
        if (this.cuisine.length===0){
            this.cuisine=null;
        }
        if (Object.keys(this.budget).length===0){
            this.budget=null;
        }
        if (Object.keys(this.servings).length===0){
            this.servings=null;
        }
      foodservices
        .foodByFilter(
          JSON.parse(JSON.stringify(this.ingredients)),
          JSON.parse(JSON.stringify(this.allergens)),
          JSON.parse(JSON.stringify(this.cuisine)),
          this.budget,
          this.servings
        )
        .then((foods) => {
          this.foods = foods;
          console.log(foods)
          console.log(this.ingredients)
          console.log(JSON.parse(JSON.stringify(this.ingredients)))
          console.log(this.cuisine)
          console.log(this.allergens)
            console.log(JSON.stringify({
            
            "ingredients":this.ingredients,
            "allergens":this.allergens,
            "cuisine":this.cuisine,
            "budget":this.budget,
            "servings":this.servings
            
            
        }))
          this.error = null; 
        })
        .catch((error) => {
          
          console.error("Error fetching data:", error);
          this.error = error.message || "An error occurred";
          this.foods = []; 
        });
    },
  },
};
</script>

<style lang="scss" scoped>          

</style>