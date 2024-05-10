const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const HTTP_PORT = 3333;
const app = express();
app.use(cors());
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port: " + HTTP_PORT);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Create a new SQLite database connection
const db = new sqlite3.Database("RecipeDatabase.sqlite");

app.get("/foodsSearch", (req, res) => {
  let {q} = req.query;

 

  // Dynamically construct the SQL query based on the array of ingredients
  let query = `
    Select foodId,name, image from Foods 

  `;
    if (q){
        query +=
      "WHERE name LIKE '%" +
      q +
      "%'";
    }
  

  // Execute the query
  db.all(query, async function (err, rows) {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(rows);
  });
});

app.post("/foodsbyFilter", (req, res) => {
  const ingredients  = req.body.ingredients;
  const  allergens   = req.body.allergens;
  const  budget  = req.body.budget;
  const cuisine  = req.body.cuisine;
  const servings  = req.body.servings;

  // Dynamically construct the SQL query based on the array of ingredients
  let query = `
SELECT f.foodId,f.name AS name, f.image as image
FROM Foods AS f
INNER JOIN FoodIngredients AS fi ON fi.foodId = f.foodId
INNER JOIN Ingredients AS i ON i.ingredientsId = fi.ingredientId
LEFT JOIN FoodAllergens AS fa ON fa.foodId = f.foodId
LEFT JOIN Allergens AS ai ON ai.allergenId = fa.allergenId
WHERE i.name IN (${ingredients.map(() => "?").join(", ")})`

;

let filters=[...ingredients];
if (allergens){
    filters.push(...allergens);
    query=query+`AND (ai.name IS NULL OR ai.name NOT IN (${allergens.map(() => "?").join(", ")})) 
`;
}
if (budget){
    filters.push(budget);
    query=query+"And budget=?";
}
if (cuisine){
    filters.push(...cuisine);
    query=query+`And f.cuisine IN (${cuisine.map(() => "?").join(", ")}) `;
}
if (servings){
    filters.push(servings);
    query=query+"And servings=? "
}

query=query+`GROUP BY f.name
HAVING COUNT(DISTINCT i.name) = ?`;

  // Execute the query
  db.all(query, [...filters, ingredients.length], (err, rows) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.status(200).json(rows);
  });
});


app.get("/foods/:foodsId", (req, res) => {
    const params = req.params.foodsId;

    const query = `
        SELECT f.name, f.image, f.recipe, f.budget, f.cuisine, a.name AS allergen, i.name AS ingredient
        FROM foods AS f
        LEFT JOIN FoodAllergens AS fa ON fa.foodId = f.foodId
        LEFT JOIN Allergens AS a ON a.allergenId = fa.allergenId
        INNER JOIN FoodIngredients AS fi ON fi.foodId = f.foodId
        INNER JOIN Ingredients AS i ON i.ingredientsId = fi.ingredientId
        WHERE f.foodId = ?
    `;

    db.all(query, [params], (err, rows) => {
        if (err) {
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }

        // Process the rows
        const processedRows = rows.map(row => {
            // If allergen is null, set it to 'none'
            if (row.allergen === null) {
                return {
                    ...row,
                    allergen: 'none'
                };
            }
            return row;
        });

        
        let foods = {};
        processedRows.forEach(row => {
            const { image,name, recipe, budget, cuisine, allergen, ingredient } = row;
            if (!foods[name]) {
                foods[name] = {
                    image,
                    name,
                    recipe,
                    budget,
                    cuisine,
                    allergen,
                    ingredients: [ingredient]
                };
            } else {
                foods[name].ingredients.push(ingredient);
            }
        });

        // Converting the object into an  of foods
        

        res.status(200).json(foods);
    });
});



