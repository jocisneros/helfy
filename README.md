# helfy #
## Student/Team Information ##

Team #: **47**
Team Name: **Muscle Mango**

* **Cisneros, Jose**; 61177732; jacisne4@uci.edu (Team member 1 (Team Lead))

* **Bokil, Aayush**; 71798747; abokil@uci.edu (Team member 2)

* **Raya, Isaiah**; 92172470; rayai@uci.edu (Team member 3)

* **Golla, Akhil**; 49262163; agolla@uci.edu (Team member 4)

## Project Description ##
### Motivation ###
All students at UCI have free access 24/7 to gym equipment and resources through the ARC (Anteater Recreation Center) or the Mesa Court/Middle Earth Recreation and Fitness Center. Despite the easy access to modern gym equipment, students that have never been to the gym don’t know where to begin. With lack of a more experienced gym partner to help guide through their workouts students never use the gym. Physical activity on a regular basis is essential to maintaining a healthy lifestyle. Going to the gym consistently helps improve overall well being, mood, energy levels, regulate weight, build muscle groups, strengthen bones, as well as reduce chance for disease and health conditions.

### State of the Art / Current solution ###
There are a lot of online resources people can research to find gym fitness routines. The problem is that there are too many and it can be overwhelming for new gym members. Many of these workouts can be confusing as to what exactly they are improving or why they are being done. While students can look up online for different gym routines or use apps to track their routines, there isn't an application that focuses specifically on the user and personalizes the workout for the student that combines a workout schedule with meal tracking and provides recommendations based on the user's model. Some students work with personal fitness trainers and pay for personalized plans, however good plans that optimize training on an individual basis are not affordable for many students.

### Project Goal and Approach ###
Because physical activity is so important to a healthy lifestyle and many students at UCI want to go to the gym but fear the pressures of starting something new we invented helfy. Helfy is a personal gym partner application that manages and guides new gym-goers and gym rats alike into a customizable gym routine.

Our application will focus on a personalized gym routine based on the user's model that gets built by their experience, progress, schedule, accessible equipment, and areas they want to focus on. It will highlight the areas that the user focuses on and recommend a steady increase on workouts they become proficient in and areas they need to workout more frequently.

We will collect workout information from online sources to generate a database containing information such as activated muscles groups, equipment needed, intensity, and calories burned. We will use users' physical parameters, such as weight, height, age and sex, and their personal preferences (body goals) to recommend full workout routines or supplemental exercises. We will also collect step data, and sleep data from Apple watch/iPhone using the healthkit api, and track calories/food intake/schedule using images of daily food.

We will use all collected information to build and maintain an accurate personal fitness model. This model will interact with our recommendation system as well as display as a visualization of the data collected/tracked to show the user what they are working out. Our app will primarily focus on using the model and exercise database to provide exercise recommendations along with calorie and sleep recommendations.

Based on what the user inputs we will display each workout as a task that users can check complete when they finish. Our app will also prompt the user to keep their personal information updated.

![image](https://user-images.githubusercontent.com/18334520/214644084-89755913-8ea1-47c0-8871-02948eb1e998.png)

### Hardware Required ###
|Component/part|Quantity|
|-|-|
|Smartphone (iPhone)|1|
|Apple Watch|1|

### Project Outcome / Deliverables ###
The outcome of the project is a prototype of the helfy mobile app that helps users as their personalized gym partner. 

Helfy will provide users with a complete workout routine and checklist to their preferences. Users will see areas to supplement their workout routines with additional exercises. Users will be prompted to give feedback for each exercise, which will be used by helfy to provide better recommendations in the future. Users will be able to keep track of what meals they’ve eaten throughout the day, with the ability to set different meal time periods (breakfast @ 9am, lunch @ 2pm, dinner @ 6pm, etc) and attach/take photos of their meals.

At the core of helfy will be the AI-powered workout recommendation system and database that categorizes and recommends different workouts based on experience, schedule, intensity, difficulty, focused muscle groups, and accessible equipment. The app will collect information and integrate with the Apple Watch to build a personalized model. Using the collected data, it will suggest workouts and keep track of exercise, sleep, and food.

We will provide a video demo to demonstrate the helfy mobile app’s functionality.

### Running helfy App ###
1. cd into app directory (cd app)
2. npm i
3. npx expo start
4. Download [Expo Go App](https://apps.apple.com/us/app/expo-go/id982107779)
6. Open camera and scan QR code to open application on IOS device
