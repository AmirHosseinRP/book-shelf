# BookShelf
#### Video Demo:  https://youtu.be/C8WeNlv8D0s
#### Description:
Welcome to BookShelf!
Organize and track your book collection digitally with BookShelf.

About BookShelf
BookShelf lets you catalog your digital book collection in one place. Easily add books by name, author, and Goodreads link. Take your library anywhere with BookShelf's beautiful, responsive interface.

Track Your Collection:
Add books easily and view your full library in one place.

Organize with Shelves:
Create custom shelves to organize your library your way.

Built with Modern Technologies
Next.js:
Next.js is a front-end framework that uses react.js for a component based web application.
first of all we have the app directory witch contains the page.tsx file, layout.tsx and also slug directory page.tsx is the landing or home page witch contains some material-ui components Typography and CardContent and also some custom components like Login. the page has a header with a login button witch scrolls the page don to the login section and a footer which contains the information about me as the developer and also my city and country information.
the layout file is the parts that should be shared in the whole project like the meta data, html tag with lang attribute and body tag with class attribute that contains google font as a css class. 
we can also see the slug directory that is dynamic routing for each username and contains its own page.tsx file with the custom component BookList and also gets the username from pathname as a route parameter.
in the component folder we have a directory for each component with a tsx file in them.
the Login component is a text field for getting the username and a submit button to login.
the BookList Component is the main part of the project that contains the material-ui Table and Modal and the data fetch witch connects front-end to project's back-end using restful api happens in this component.
for getting the data i used swr witch is a vercel library to fetch client side data and for post and delete there is a try and catch witch uses javascript fetch function.
as mentioned i used material-ui for the ui kit and also tailwind css as a styling css library.
you can run the front-end web application using npm or yarn at this order:

`npm i` or `yarn add all` to install the required libraries.

`npm run build` or `yarn build` to build the application.

`npm run start` or `yarn start` to start the application.

you can also use `npm run dev` or `yarn dev` to run the application in develop mode.

the front-end application will run in "http://localhost:3000"


FastAPI:
FastAPI is a Python framework for building APIs and backend services.
The file starts by importing necessary modules from FastAPI and SQLAlchemy.
It creates a FastAPI instance named app.
Cross-Origin Resource Sharing (CORS) middleware is added to the app to handle requests from different origins. It allows specific origins (e.g., "http://localhost" and "http://localhost:3000") and specifies the allowed methods and headers.
An SQLite database is set up using SQLAlchemy. The database URL is defined, and an engine and session are created.
A Book class is defined as a SQLAlchemy model, representing the structure of the "books" table in the database.
GET /books/{username} retrieves books owned by a specific user.
POST /books adds a new book to the database.
DELETE /books/{owner_name}/{book_name} deletes a book based on the owner's name and the book's name.
Each endpoint performs database operations using SQLAlchemy to interact with the "books" table.
A Pydantic model (BookIn) is defined to validate incoming data for the POST /books endpoint.
The script checks if it's the main module and, if so, uses Uvicorn to run the FastAPI app on "localhost" at port 8000.
In summary, this FastAPI application provides a simple CRUD (Create, Read, Update, Delete) interface for managing a collection of books stored in an SQLite database. It incorporates features like CORS handling, data validation, and database operations through SQLAlchemy.
to run the back-end project simply run the python code using `python main.py` or `python3 main.py`

the project will run in "http://localhost:8000" and to see the swagger docs go to "http://localhost:8000/docs"

© 2023 Amirhossein Rezapanah, Mashhad - Iran