# In Home Assignment for UI Engineer @ APIwiz

## Introduction
I created this project using React.js, Tailwind CSS and TypeScript. The idea behind the implmentation is simple.

1. There's a **Intro.tsx** component that displays the basic information about the project.
2. Then, I have a component called **SwitchMenu.tsx**, that switches between two parts of the project according to the option state variable.
3. Then, for the first part of the project, I have the **WordInput.tsx** component as entry point. It has various state variables for storing the word, character count, word count and details regarding the word as fetched from the required API. All of these details is extracted and transferred to as props to the **WordDetails** and **WordStats** component and rendered accordingly.
4. Then, for the second part of the project, I input the required content in a text area, and then dynamically update the required details using `useEffect` hook.

### I also made the project responsive for medium and small screen devices.

## Deployed Link
https://text-analyzer-egvr-j3xfpep3v-swapn652.vercel.app/

## How to run the project locally?
1. First fork the project and then download it locally, either using git bash or GitHub desktop.
2. Then, open the project in VSCode or any other editor of your choice.
3. Open the terminal in the same directory as of project and type the command `npm i` to install all the required dependencies.
4. Then create a `.env` file and declare a variable named: `VITE_API_KEY: {your_api_key}`. You can fetch the API key from Rapid API.
5. Run 'npm run dev` and go to `http://localhost:3000` and find your working project.

## Screenshots
### PC
<img width="1440" alt="Screenshot 2024-01-12 at 5 07 15 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/3db3c06a-1f10-4e0e-bc7c-6b76e297198e">
<img width="1440" alt="Screenshot 2024-01-12 at 5 07 24 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/504e5b5b-d2bc-419a-a2e8-bdf0857d5317">
<img width="1440" alt="Screenshot 2024-01-12 at 5 07 51 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/a376ad58-09fd-44ad-a3c1-65312479a156">
<img width="1440" alt="Screenshot 2024-01-12 at 5 07 43 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/2361857f-230e-4ee6-a79e-b2e2bbef6658">

### iPad
<img width="493" alt="Screenshot 2024-01-12 at 5 08 24 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/faa7d01d-38a5-4abe-84f6-3ac0016362ea">
<img width="496" alt="Screenshot 2024-01-12 at 5 08 39 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/f6d3a7c9-77c4-4ee8-9b16-419ff05135f4">

### Mobile
<img width="379" alt="Screenshot 2024-01-12 at 5 09 09 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/df91867e-34fa-4625-a045-1145b6fff839">
<img width="383" alt="Screenshot 2024-01-12 at 5 09 22 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/0a126d6d-7bc6-4931-b423-56bf52fc3f4b">
<img width="378" alt="Screenshot 2024-01-12 at 5 09 39 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/c0b4b067-d318-4231-9f4d-59ac0c59c6e9">
<img width="378" alt="Screenshot 2024-01-12 at 5 09 51 PM" src="https://github.com/swapn652/text_analyzer/assets/70851202/5fefa831-a517-4410-886f-df68cde052de">



