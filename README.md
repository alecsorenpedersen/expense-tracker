# Expense Tracker

Welcome to the Expense Tracker app! This application is designed to simplify your personal finance management. Easily keep track of your expenses, set budgets, and visualize your transactions with our user-friendly dashboard. With this tool, you can keep an eye on your financial health in a more organized and efficient way.

## Features

- **Add Transactions**: Easily add your income and expenses, categorizing them for easier tracking.
- **Set Budgets**: Define budgets for specific categories and ensure you're staying on top of your spending.
- **Data Visualization**: Our app provides visually appealing and intuitive graphs to help you understand your financial trends better.
- **Multi-language Support**: The application supports localization through i18next, making it more accessible to users around the world.

## Tech Stack

The application is built with React and is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses various modern libraries and tools:

- **State Management**: Redux for application-wide state management.
- **Form Management**: Formik for effective form state handling and validations.
- **Styling**: Emotion and Material-UI for styling and UI components.
- **Date handling**: Date-fns and Material-UI Pickers for date manipulation and pickers.
- **Data visualization**: ApexCharts and Recharts for providing interactive charts.
- **Testing**: Cypress Jest along with Testing Library for testing the application.
- **Type checking**: Typescript to provide static typing.
- **Localization**: i18next for internationalization and localization.

This project also follows best practices for code quality and maintainability with the help of ESLint.

## Getting Started

First, clone the repository to your local machine:

```bash
git clone https://github.com/alecsorenpedersen/expense-tracker.git
```

Navigate to the project directory:

```bash
cd expense-tracker
```

Install the dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser. The app will automatically reload if you make any changes to the code.

## Scripts

This project supports the following scripts:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.
- `npx cypress run`: Runs the cypress tests in you terminal.
- `npx cypress open`: Opens the cyress test in you.

## Contributing

Feel free to fork this repository, make some changes, and submit pull requests. This project is always open to contributions and suggestions to improve!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
