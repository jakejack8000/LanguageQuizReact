Hello and welcome to English Exercise Quiz App


## **Running The App**

To get started using the application, you must have nodejs installed on your machine. and follow these steps:

##### 1. Installing Node Modules:

Open a new terminal window and cd into project folder and run:
    
    cd client-app
    npm install

note: if npm returns errors,try:

    npm install --legacy-peer-deps
    
Repeat the previous steps for Server app:

    cd server-app
    npm install


##### 2. Starting Node Servers for client and server apps:

Open another terminal window and cd into project folder and run:

    cd client-app
    npm start

for Server app:

    cd server-app
    node index.js

You should get a message 
that server is listening at port 4000

##### 3. Start using the app in your browser

## **App Features**

The app should cover all the required functionalities in TaskDescription.pdf

1- The app features a Home Screen, Where the student can start a new Quiz.

2- The app features a Quiz Screen, Where the student takes the quiz,
As required, each quiz features a set of 10 random words
(can be configured), containing at least 1 noun,1 adverb, 1 adjective, 1 verb.

3- When a student selects an answer, Feedback is shown after each answer, NOT showing the correct word (as required).

4- App features a progress bar that shows quiz progress.

5- Each quiz features a stopwatch that shows time taken to complete the quiz.

6- After finishing the quiz, student is taken to result page, where he is shown his score, and his ranking among
other scores

7- In results page, student can click "Review answers" to go to "review answers" screen to show all his answers and whether correct or not
 and he can click "Start a New Quiz" To start a new Quiz 

8- Results page also features: Personal best ranking and Personal best score for this session, to encourage the student
to beat his own personal best record.

9- After returning to Home Page, you can either show previous result, or start a new quiz.

10- The app design is responsive.

## **Technical Details**

1- To keep code clean as possible, I have chosen to use ReduxJS to handle state management.

2- At the beginning of each quiz, a GET request is sent to server endpoint /words to fetch words

3- After each quiz at result page, a POST request with the score in the request body is sent to server, then the server 
calculates ranking based on PeopleWhoScoredLess/AllPeople * 100, and responds with the result.

4- You can configure App Port, Words Per Quiz for server app in configurations.js in server app folder.

5- You can configure endpoint url in client app in configurations.js in client app folder.

### Thank you, Your feedback would be much appreciated.









