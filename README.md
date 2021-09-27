# Tech Blog  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description  
A simple blog were users can discuss current and upcoming web development technologies. Users can sign up and add, update and delete new posts, and other users can comment on these posts.   
  
## Table of Contents  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)


## Installation 
No need to install anything, you can use the application as it is hosted at https://peaceful-basin-57768.herokuapp.com/

If you wish to install this locally, please follow the instructions below: 

Once the repo has been cloned locally you can enter the commands `npm i` to install all the dependencies.

To run this locally you will also need to set up a `.env` file. There is an example of this with the necessary structure to follow. Once this has been created you can create your own seed data in the files in the seeds folder. Once this has been achieved you can initialise the database with the commands `mysql -u root -p` followed by your password, and then entering source `./db/schema.sql` to get the database running. `npm run seed` will then seed the database, follwed by `npm start` to start the whole project running on `localhost 3001`.

The website is also set up to run on heroku. Once you have pushed it there, you will need to provide a database for this. This is coded to use JAWSDB. Once that has been arranged the website should be good to go!

## Technologies 
- Handlebars
- Sequelise
- Express
- Express-session
- bcrypt 

## Usage
[Link to demonstration](https://drive.google.com/file/d/1EMoW1hc-s-rXs7XZ51HIP1reS-zMb-h7/view)

![screenshot](./assets/techBlogHomepage.png)


![screenshot](./assets/techBlogPost.png)


![screenshot](./assets/techBlogEditPost.png)

## Credits    
https://github.com/kevinjr1998    
  
## License 
This project is covered under the [MIT](https://opensource.org/licenses/MIT) license

## Tests    
No tests required

## Questions
https://github.com/kevinjr1998

For further questions, please contact me at please contact me at kevinryner@yahoo.co.uk     
