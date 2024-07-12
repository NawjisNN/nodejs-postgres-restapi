
# Build a Text Analyzer Tool
=======
# Build a text analyzer tool.


## Features
- Responsive HTML with Bootstrap
- Bootstrap for styling
- Node.js for Backend
- JavaScript for Frontend
- Database management system (PostgreSQL)
- Testing framework (Jest)

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed on your system to use `npm` commands.

### Clone the Repository
=======
- Javascript used for Frontend
- database management system (PostgreSQL)
- Testing framework (Jest)

##Installation

Ensure you have [Node.js](https://nodejs.org/) installed on your system to use `npm` commands.


# Clone the repository


```bash
git clone https://your-repository-link
```
```bash
cd your-project-directory
```

# Install dependencies

```bash
npm install
```

### PostgreSQL Setup

To run this project, PostgreSQL is required. Here are the steps to install and set up PostgreSQL:
=======
To run this project, PostgreSQL is required. Here are the steps to install and set up PostgreSQL


1. **Download the Installer**  
   Download the Windows installer from the [official PostgreSQL website](https://www.postgresql.org/download/windows/).

2. **Execute the Installer**  
   Run the downloaded installer, which includes:

    - **PostgreSQL Server**: The main database component.
    - **pgAdmin**: A graphical tool for managing and developing your databases.

3. **Create Database**
    - Create a database and name it **text_analyzer**.
    - ![image](https://github.com/user-attachments/assets/c534b9ab-5f9b-497b-9ab7-fb51223b9fc9)
    - Use your username and password that you provided while installing PostgreSQL.

**Note:** The tables will be generated automatically by Sequelize, so no need to create them manually.

## API Implementation

All the tasks are running based on proper APIs.

### Data Flow

1. **Client Side (Frontend)**:
    - The client side consists of an HTML file (`index.html`) and a JavaScript file (`script.js`) located in the `public` folder.
    - Users interact with the web interface to perform CRUD operations on users and texts.
    - When a user performs an action (e.g., creating a user, getting text analysis), the JavaScript code makes HTTP requests to the server using the Fetch API.

2. **Server Side (Backend)**:
    - The server is set up using Node.js and Express.
    - The server's main entry point is `index.js`, which initializes the Express application and sets up the routes.

3. **Controllers**:
    - Controllers handle the incoming HTTP requests and send responses back to the client.
    - The `TextController.js` and `UserController.js` files in the `controllers` directory contain methods for handling different routes.
    - Each controller method calls the corresponding service method to perform the required operation.

4. **Services**:
    - Services contain the business logic and interact with the repositories.
    - The `TextService.js` and `UserService.js` files in the `services` directory contain methods for performing operations such as creating a user, getting text analysis, etc.
    - Services ensure that the data is correctly processed before interacting with the database.

5. **Repositories**:
    - Repositories are responsible for interacting with the database.
    - The `TextRepository.js` and `UserRepository.js` files in the `repositories` directory contain methods for performing CRUD operations on the database.
    - Repositories use Sequelize, an ORM for Node.js, to interact with the PostgreSQL database.

6. **Database (PostgreSQL)**:
    - The database stores the data for users and texts.
    - The `Database.js` file in the `utils` directory sets up the Sequelize connection to the PostgreSQL database.
    - Models are defined using Sequelize in the `models` directory, where `UserModel.js` and `TextModel.js` define the schema for users and texts, respectively.

### API Endpoints

![image](https://github.com/user-attachments/assets/bb53b3de-b6f6-4618-8ff5-cacbeaaf1313)

#### User Endpoints

- **Get All Users**
    - **URL**: `/users`
    - **Method**: `GET`
    - **Description**: Fetches all users from the database.

- **Get User By ID**
    - **URL**: `/users/:id`
    - **Method**: `GET`
    - **Description**: Fetches a user by ID from the database.

- **Create User**
    - **URL**: `/users`
    - **Method**: `POST`
    - **Description**: Creates a new user in the database.

- **Update User**
    - **URL**: `/users/:id`
    - **Method**: `PUT`
    - **Description**: Updates a user's information in the database.

- **Delete User**
    - **URL**: `/users/:id`
    - **Method**: `DELETE`
    - **Description**: Deletes a user from the database.

#### Text Endpoints

- **Get All Texts**
    - **URL**: `/texts`
    - **Method**: `GET`
    - **Description**: Fetches all texts from the database.

- **Get Text By ID**
    - **URL**: `/texts/:id`
    - **Method**: `GET`
    - **Description**: Fetches a text by ID from the database.

- **Create Text**
    - **URL**: `/texts`
    - **Method**: `POST`
    - **Description**: Creates a new text in the database.

- **Update Text**
    - **URL**: `/texts/:id`
    - **Method**: `PUT`
    - **Description**: Updates a text's information in the database.

- **Delete Text**
    - **URL**: `/texts/:id`
    - **Method**: `DELETE`
    - **Description**: Deletes a text from the database.

- **Get Word Count**
    - **URL**: `/texts/word-count`
    - **Method**: `POST`
    - **Description**: Returns the number of words in the provided text.

- **Get Character Count**
    - **URL**: `/texts/character-count`
    - **Method**: `POST`
    - **Description**: Returns the number of characters in the provided text.

- **Get Sentence Count**
    - **URL**: `/texts/sentence-count`
    - **Method**: `POST`
    - **Description**: Returns the number of sentences in the provided text.

- **Get Paragraph Count**
    - **URL**: `/texts/paragraph-count`
    - **Method**: `POST`
    - **Description**: Returns the number of paragraphs in the provided text.

- **Get Longest Words**
    - **URL**: `/texts/longest-words`
    - **Method**: `POST`
    - **Description**: Returns the longest words in each paragraph of the provided text.

### Example Data Flow for Creating a User

1. The user fills out a form on the web interface to create a new user.
2. The `script.js` file captures the form data and makes a POST request to `/users` with the user data in JSON format.
3. The request is received by the `UserController`'s `createUser` method.
4. The `createUser` method calls the `UserService`'s `createUser` method, passing the user data.
5. The `UserService` processes the data and calls the `UserRepository`'s `create` method to insert the user data into the database.
6. The `UserRepository` uses Sequelize to interact with the PostgreSQL database and inserts the new user record.
7. Once the user is created, the `create` method returns the newly created user data to the `UserService`.
8. The `UserService` returns the user data to the `UserController`.
9. The `UserController` sends the user data back as a JSON response to the client.
10. The `script.js` file receives the response and updates the web interface to show the newly created user.

### Example Data Flow for Text Analysis (Word Count)

1. The user inputs a text into the web interface and requests word count analysis.
2. The `script.js` file captures the input text and makes a POST request to `/texts/word-count` with the text content in JSON format.
3. The request is received by the `TextController`'s `getWordCount` method.
4. The `getWordCount` method calls the `TextService`'s `getWordCount` method, passing the text content.
5. The `TextService` processes the text to count the words and returns the word count.
6. The `getWordCount` method sends the word count back as a JSON response to the client.
7. The `script.js` file receives the response and updates the web interface to show the word count result.

This detailed explanation covers the data flow from the client side to the server side, through the controllers, services, repositories, and database, and back to the client side.

## Test Suite

The project includes a comprehensive test suite using [Jest](https://jestjs.io/) to ensure the reliability and correctness of functionalities.

### Test Structure

Tests are located in the **src/services** directory and follow the ```*.test.js``` naming convention.

Example test file: ```TextService.test.js```.

### Running Tests

Run the test suite with:

```bash
npm test
```
This command will execute all tests and generate a coverage report.

![image](https://github.com/user-attachments/assets/c24791ee-47db-450d-b6fe-7df03b7e2353)

### Test Coverage

After running the tests, a coverage report is generated in the coverage directory.

Open ***coverage/lcov-report/index.html*** in a web browser to view detailed coverage information.

This concise version covers the essential information about the test suite, installation, running tests, test structure, and coverage.

![image](https://github.com/user-attachments/assets/51c1a888-c415-4bd7-8e83-e1d14fb2a816)
![image](https://github.com/user-attachments/assets/63dcb7c1-4f6d-42ad-9001-8cc2f1df96c3)
![image](https://github.com/user-attachments/assets/613b035d-04ee-417e-ae12-7bf5789deab5)

## User Interface

![image](https://github.com/user-attachments/assets/6d46f41a-08ae-460d-83fb-d42cf44928f7)

To use the UI:

1. **Start the Server**
    - Open a terminal and start the server by running:
      ```bash
      npm start
      ```
    - This will start the API and listen for requests.

2. **Open the HTML File**
    - Navigate to the `public` folder in your project directory.
    - Locate the `index.html` file.
    - Right-click on `index.html` and select **"Open with"** to open it in your web browser.

3. **Using the Web Interface**
    - The web interface allows you to interact with the API for performing CRUD operations on users and texts.
    - You can also perform text analysis such as word count, character count, sentence count, paragraph count, and finding the longest words in paragraphs.

### Example JSON Formats

#### Creating Users

To create a user, use the following JSON format:

```json
{
    "username": "john_doe",
    "email": "john@example.com",
    "password_hash": "hashed_password"
}
```

To create a text, use the following JSON format:

```json
{
    "user_id": 1,
    "content": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun."
}
```
=======
   - **PostgreSQL Server**: The main database component.
   - **pgAdmin**: A graphical tool for managing and developing your databases.
   - **create** a database and name the database **text_analyzer**
   - ![image](https://github.com/user-attachments/assets/c534b9ab-5f9b-497b-9ab7-fb51223b9fc9)


**Note:** While using `postgres` as both the username and password when needed, use your username and password that you provided while instaling postgres 
  - As already sequalized the code so no table is needed to create, it will be generated


## API implementation
  All the tasks are running based on proper API.

   ![image](https://github.com/user-attachments/assets/bb53b3de-b6f6-4618-8ff5-cacbeaaf1313)
   
  - In the repository folder you will find all the api and in script.js file you will find the API functionalities

   


## Test Suite
To run the testing part type **"npm test"** in the terminal. It will run the testing using Jest.

![image](https://github.com/user-attachments/assets/c24791ee-47db-450d-b6fe-7df03b7e2353)


## User Interface
 To use the ui, at first type **"npm start"** in the terminal, it will start the API.

 ![image](https://github.com/user-attachments/assets/6d46f41a-08ae-460d-83fb-d42cf44928f7)

   
- After that from the public folder there is index.HTML(mentioned in the image), right click on that and click 
  **"reveal in file explorer"**, then open the file from there. It will open the UI
	
![image](https://github.com/user-attachments/assets/ca59ff40-6dcc-4cc0-a129-2eafdfa8ecee)

- Then you can enter values in the database through UI. A sample json format of creating texts and cretaing
	  users is given here.
 
**json format for creating users-
   ![image](https://github.com/user-attachments/assets/d7c8f077-2925-4c62-a5c4-1ffc135a7ef8)
	
**json format for creating texts-
	![image](https://github.com/user-attachments/assets/7581744b-0a0a-4454-9c1e-5825cdb320f9)

 Finally you can use the complete UI for CRUD and also the counting schemas.
	

 




    
>>>>>>> df1f7d5d462107e85f5c04a67703d3c017de3f8b
