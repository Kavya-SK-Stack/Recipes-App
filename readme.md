# Recipe Management API

A RESTful API for managing recipes built with Node.js, Express, and MongoDB (in-memory for development).

## Features

- Complete CRUD operations for recipes
- MVC architecture
- Input validation
- Error handling
- In-memory MongoDB for development

## API Endpoints

### Recipes

- **POST** `/api/recipes` - Create a new recipe
- **GET** `/api/recipes` - Get all recipes
- **GET** `/api/recipes/:id` - Get a specific recipe
- **PUT** `/api/recipes/:id` - Update a recipe
- **DELETE** `/api/recipes/:id` - Delete a recipe

### Request Body Format (POST/PUT)

```json
{
  "title": "",
  "ingredients": [
    "cooking spray",
    "1 tablespoon vegetable oil",
    "1 potato, sliced paper thin (peel optional",
    "½ teaspoon salt, or to taste"
  ],
  "description": "1. Lightly grease a large dinner plate with cooking spray; set aside.
  
  2. Pour oil into a plastic bag (a produce bag works well). Add potato slices and shake to coat. Arrange potato slices in a single layer on the prepared plate.

  3. Cook in the microwave on high until lightly browned, 3 to 5 minutes. Remove chips to a large bowl and toss with salt. Chips will crisp as they cool. Repeat with remaining potato slices; no need to grease the plate again."
                 
  
  
}
```

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm run dev
   ```

The server will start on port 3000 by default.