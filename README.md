# Welcome to The Table App Backend Repo

The Table Potluck App is a web application built using the PERN stack (PostgreSQL, Express.js, React.js, and Node.js) that simplifies the process of organizing and managing potluck events. With this app, users can add, create, delete, and update dishes for their potluck events. The backend server is powered by PostgreSQL, providing a reliable and scalable data storage solution.

## Table of Contents
- _Key Features_
- _Team Members_
- _Contributing_
- _Technologies Used_
- _Project Structure_
- _Development Process_
- _Deployment_
- _Installations_
- _App Endpoints_
- _License_
# Key Features
- Add a dish: Users can easily add a new dish to their potluck event, including details such as dish name, description, ingredients, and any other relevant information.
- View all dishes: Participants can browse through a comprehensive list of dishes contributed by other users, ensuring a diverse and well-coordinated spread of food.
- Delete a dish: Users have the ability to remove a dish from the potluck if needed, ensuring accurate planning and organization.
- Update a dish: Participants can modify the details of their contributed dish, such as changing the name, description, ingredients, or other attributes.

# Team Members
- Florence Ernestina Osei
- Joshua Nelson
- Lakisha Trusty

# Contributions
We value collaboration and contributions from the team members. We have used a Trello board to keep track of tasks, assign responsibilities, and maintain transparency in the development process. Pair programming is encouraged, allowing team members to work together on challenging tasks and ensuring high-quality code.

## [Trello Board](https://trello.com/b/qnXqs6o9/the-table-project)

## [canva](https://www.canva.com/design/DAFiYB7wjic/t3gjY1McoAbUvgL3m6Ao5A/view?analyticsCorrelationId=c62f75f0-0019-457f-ae1e-117efc0d4509)

# Technologies Used
The Table Potluck App leverages the following technologies and frameworks:
## Backend Frame work
- PostgreSQL
- Express.js
- Node.js
- Dotenv
- nodemon

### Backend Dependencies:
- express: ^4.17.1
- pg: ^8.7.1
- sequelize: ^6.10.0
- sequelize-cli: ^6.2.0


## Project Structure
The project follows a modular structure to ensure code organization and maintainability. It consists of separate frontend and backend directories.

The backend utilizes the schema and seed files to set up and populate the database with initial data.

# Development Process
To get started with the development of the Table Potluck App:

- One team member creates the repository and sets up the initial project structure.
- The other two team members clone the repository to their local machines.
- Collaborate using pair programming or assign tasks on the Trello board.
- Regularly communicate, share progress, and seek assistance when needed.

## Deployment
The backend server is deployed on Render and can be accessed at [Onrender](https://the-table-backend.onrender.com)

The frontend application is deployed on Netlify and can be accessed at 
[netlify](https://app.netlify.com/sites/thetable-app/deploys/645e6a561142220008d155cc)


# Installation
- To install and run the Table App locally, follow these steps:

## Backend Installation 
## [Github](https://github.com/)
### Clone this repository:
git clone [The Table Backend Repo](https://github.com/joshuanelsondev/table-backend-project.git)

## Creating a branch 
Create a new branch for your feature or bug fix
- git checkout -b <name the branch>

## switching branches
- git switch <name of branch you want to switch to>

## Make your changes and commit them
- git add . or git add what ever file you want to commit
- git commit -m"Add your commit message"

## Push to the branch:
- git push origin feature/your-feature-name


## Navigate to the project directory:
cd the-table-app

## Installing the dependencies backend
cd the-table/backend
npm install express pg dotenv nodemon cors --save
npm install / npm i
## Set up the PostgreSQL database by executing the schema and seed files:
- psql -f db/schema.sql
- psql -f db/seed.sql

## Start the backend server:
- npm start
- npm run dev(used to run app still in development mode)

The backend server will run on [The Table](http://localhost:3003)

# Frontend dependencies
cd client
npm install

Set up the environment variables:
- Create a .env file in the project root.
- Define the required environment variables, such as the database connection string, API keys, etc.

#
# Endpoints
- GET /api/dishes: Get all dishes.
- GET /api/dishes/:id: Get a specific dish by ID.
- POST /api/dishes: Create a new dish.
- PUT /api/dishes/:id: Update an existing dish by ID.
- DELETE /api/dishes/:id: Delete a dish by ID.

 # License
This project is licensed under Pursuit
