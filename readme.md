# Recipe Book
This repository contains an online recipe book, for home usage. To learn more about different technologies, I chose for a seperate back and frontend, instead of an integrated solution (like laravel with blade). 

The backend consists of an API programmed using laravel, running on a LAMP stack on a leftover raspberry pi. Requests are made to /api/recipes, see the `routes/api.php` file for more details. The API is not protected with an authentication/user verification, because it will only be hosted on our local network.

The frontend is developed using `nuxt.js`, which fetches data using the laravel backend. Mind that the `.nuxt` folder is not included in the `.gitignore` file, because the raspberry pi was not able to build the project. So the project is build on my pc, which is then pulled to the raspberry pi, which serves it.


### Possible future features/todo's: 
- [x] Make it possible to edit added recipes
- [ ] Add a settings page, with an option for 
    - [ ] Creating and managing tags
    - [ ] Enabling dark mode (or use system preference) 
- [ ] Make recipes searchable by ingredient, tag and title
- [ ] Design a home screen with random recipe and recipe that has not been made in a long time
- [ ] Add logs/comment option to recipes
- [ ] Analyze the ingredient order in the recipe, and give a notification about the order of the ingredients
- [ ] Highlight ingredients for each step
- [ ] Find time indications and add a button to automatically add a timer
- [ ] Scale recipes for multiple people
- [ ] Create a frontend using flutter
- [ ] Add documentation for the front and backend
- [ ] Export the recipes to a downloadable pdf for offline usage
