# Build a text analyzer tool.

## Features
- Responsive HTML with Bootstrap
- Bootstrap for styling
- Node.js for Backend
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

To run this project, PostgreSQL is required. Here are the steps to install and set up PostgreSQL

1. **Download the Installer**  
   Download the Windows installer from the [official PostgreSQL website](https://www.postgresql.org/download/windows/).

2. **Execute the Installer**  
   Run the downloaded installer, which includes:
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
	

 




    
