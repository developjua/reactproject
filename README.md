# React Dashboard with Counter, Rich Text Editor, and User Data Form

This project is a React-based dashboard that includes the following features:
- **Counter**: A simple counter with increment, decrement, and reset functionality.
- **Rich Text Editor**: A text editor with formatting options (bold, italic, underline, lists, etc.).
- **User Data Form**: A form to collect user data (name, address, email, phone).
- **User Profile Chart**: A bar chart that visualizes user interactions with the Counter, Rich Text Editor, and User Data Form.
- **Authentication**: Mock authentication with login and logout functionality.
- **Unsaved Changes Warning**: Warns the user if there are unsaved changes before closing the browser or navigating away.

---

## Project Structure

```
my-app/
├── public/ # Static assets (e.g., index.html)
├── src/
│ ├── assets/ # Static assets (images, fonts, etc.)
│ ├── components/ # Reusable components
│ │ ├── Counter.tsx # Counter component
│ │ ├── RichTextEditor.tsx / # Rich Text Editor component
│ │ ├── UserProfileChart.tsx / # User Profile Chart component
│ │ └──── UserDataForm.tsx/ # User Data Form component  
│ ├── context/ # Context providers
│ │ └── AuthContext.tsx # Authentication context
│ ├── pages/ # Page components
│ │ ├── Dashboard.tsx # Dashboard page
│ │ |── Login.tsx # Login page
| | └──Signup.tsx # signup page
│ ├── routes/ # Routing configuration
│ │ └── AppRoutes.tsx # Main routing logic
│ ├── App.tsx # Main App component
│ ├── index.tsx # Entry point
│ └── react-app-env.d.ts # TypeScript declarations
├── .gitignore # Git ignore file
├── package.json # Project dependencies
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation

```



---

## Components Overview

### 1. **Counter**
- **Location**: `src/components/Counter.tsx`
- **Description**: A simple counter with buttons to increment, decrement, and reset the count.
- **Features**:
  - Tracks the count value.
  - Updates the User Profile Chart with interaction data.
  - Overall background should be a level/height of colour and it should increase in a linear
     manner(preferably bezier curve)
  - reset should reset the level of colour in background to 0


### 2. **Rich Text Editor**
- **Location**: `src/components/RichTextEditor.tsx`
- **Description**: A rich text editor with formatting options (bold, italic, underline, lists, etc.).
- **Features**:
  - Allows users to write and format text.
  - Saves content to local storage.
  - Updates the User Profile Chart with interaction data.

### 3. **User Data Form**
- **Location**: `src/components/UserDataForm.tsx`
- **Description**: A form to collect user data (name, address, email, phone).
- **Features**:
  - Saves data to local storage.
  - Updates the User Profile Chart with interaction data.

### 4. **User Profile Chart**
- **Location**: `src/components/UserProfileChart.tsx`
- **Description**: A bar chart that visualizes user interactions with the Counter, Rich Text Editor, and User Data Form.
- **Features**:
  - Uses `react-chartjs-2` for rendering the chart.
  - Dynamically updates based on user interactions.

### 5. **Authentication**
- **Location**: `src/context/AuthContext.tsx`
- **Description**: Mock authentication system with login and logout functionality.
- **Features**:
  - Tracks authentication state.
  - Protects routes using `PrivateRoute`.

### 6. **Unsaved Changes Warning**
- **Description**: Warns the user if there are unsaved changes before closing the browser or navigating away.
- **Implementation**:
  - Uses the `beforeunload` event to detect browser/tab closure.
  - Tracks unsaved changes in the `AuthContext`.

---

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/developjua/reactproject.git
   cd reactproject

2. **Install Dependencies**:
   ```bash
      npm install

3. **Run the Application:**:
   ```bash
      npm start

### Key Features

**Dynamic Chart**: The User Profile Chart updates in real-time based on user interactions with the Counter, Rich Text Editor, and User Data Form. 

**Unsaved Changes Warning**: Prevents users from losing unsaved changes by showing a warning before closing the browser or navigating away.

**Mock Authentication**: Simulates user authentication with a simple username and password.


### Technologies Used

**React**: A JavaScript library for building user interfaces.

**TypeScript**: Adds static typing to JavaScript for better code quality.

**Material-UI**: A popular React UI framework for building responsive and attractive interfaces.

**React Quill**: A rich text editor component for React.

**React ChartJS 2**: A React wrapper for Chart.js to create interactive charts.

**React Router**: Handles routing and navigation in the application.

**React Spring**: Adds smooth animations to the application.
 