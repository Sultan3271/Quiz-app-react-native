# Quiz App

A simple quiz app built with React Native.

## Description

This app allows users to take a quiz with multiple-choice questions. It fetches quiz questions from an external API and presents them to the user one by one. Users can select their answers for each question, and the app will keep track of the score. After answering all the questions, the app will display the final score and whether the user passed or not.

## Screens

The app consists of the following screens:

1. **Home Screen**: The starting screen with a "Start" button. Pressing the "Start" button will navigate the user to the quiz screen.

2. **Quiz Screen**: This screen displays the quiz questions and options for each question. Users can select an option for each question and proceed to the next question. The user's score is calculated based on the correct answers.

3. **Result Screen**: After answering all the questions, this screen displays the final score and whether the user passed the quiz or not. If the score is greater than 5, it shows a "Congrats! You passed" message; otherwise, it shows a "You lose, Best of Luck next Time!" message. Users can navigate back to the Home screen from here.

## Installation

1. Clone the repository to your local machine.

## Libraries Used
react-native: Used for building native mobile apps using React.
@react-navigation/native: Used for handling navigation between screens.
@react-navigation/native-stack: Used for creating native stack navigators.
react-native-gesture-handler: Used for handling gestures in the app.
react-native-reanimated: Used for animation support in React Native.
react-native-safe-area-context: Used for handling safe area insets for various devices.
react-native-screens: Used for native navigation stack and screen support.
react-native-vector-icons: Used for adding icons to the app.
## Contribution
If you find any issues or want to contribute to the project, feel free to open an issue or create a pull request.

## Acknowledgments
The quiz questions are fetched from the Open Trivia Database API (https://opentdb.com/).
