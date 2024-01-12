# In Home Assignment for UI Engineer @ APIwiz

## Introduction
I created this project using React.js, Tailwind CSS and TypeScript. The idea behind the implmentation is simple.

1. There's a **Intro.tsx** component that displays the basic information about the project.
2. Then, I have a component called **SwitchMenu.tsx**, that switches between two parts of the project according to the option state variable.
3. Then, for the first part of the project, I have the **WordInput.tsx** component as entry point. It has various state variables for storing the word, character count, word count and details regarding the word as fetched from the required API. All of these details is extracted and transferred to as props to the **WordDetails** and **WordStats** component and rendered accordingly.
4. Then, for the second part of the project, I input the required content in a text area, and then dynamically update the required details using `useEffect` hook.

## Deployed Link
https://text-analyzer-egvr-j3xfpep3v-swapn652.vercel.app/

## How to run the project locally?
1. First fork the project and then download it locally, either using git bash or GitHub desktop.
2. Then, open the project in VSCode or any other editor of your choice.
3. Open the terminal in the same directory as of project and type the command `npm i` to install all the required dependencies.
4. Then create a `.env` file and declare a variable named: `VITE_API_KEY: {your_api_key}`. You can fetch the API key from Rapid API.
5. Run 'npm run dev` and go to `http://localhost:3000` and find your working project.

## Screenshots

