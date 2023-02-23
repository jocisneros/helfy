import mysql.connector
from mysql.connector import errorcode
import time
from bs4 import BeautifulSoup
from selenium import webdriver


EXERCISEDBCONFIG = {
  'user': 'mytestuser',
  'password': 'My6$Password',
  'host': '127.0.0.1',
  'database': 'exercisedb',
  'raise_on_warnings': True
}


difficultyDict = {"Beginner":0, "Intermediate":1, "Advanced":2}

connection = mysql.connector.connect(**EXERCISEDBCONFIG)
cursor = connection.cursor()


defaultUrl = "https://musclewiki.com"
chromedriver_path= "/Users/aayushbokil/Downloads/chromedriver_mac_arm64/chromedriver"
driver = webdriver.Chrome(chromedriver_path)
driver.get(defaultUrl + "/directory")
time.sleep(3) 
soup = BeautifulSoup(driver.page_source, 'lxml')

allItems = soup.find("div", class_="mw-content-ltr")

exerciseData = allItems.findAll(["h2", "table"])

for i in range(0, len(exerciseData), 2):

    muscleGroupQuery = "INSERT INTO muscle_groups (name) VALUES (%s)"
    muscleGroupVal = (exerciseData[i].text, )
    cursor.execute(muscleGroupQuery, muscleGroupVal)
    connection.commit()

    tr = exerciseData[i+1].findAll("tr")
    j = 0
    for rows in tr:
        if j != 0:

            tipsStr = ""

            td = rows.findAll("td")

            link = td[0].a.get("href").strip()

            driver.get(defaultUrl + link)
            time.sleep(3)
            soup2 = BeautifulSoup(driver.page_source, 'lxml')
            videoLinks = soup2.find("div", class_="exercise-images-grid")
            video = videoLinks.a.get("href")
            tips = soup2.find("ol", {"class":"steps-list"})
            steps = tips.findAll("li")
            for s in steps:
                tipsStr += s.text + " "

            tipsStr.strip()

            workoutName = td[0].a.text.strip()

            equipment = td[2].text.strip()
            
            difficulty = -1
            if(td[3].text.strip() == ""):
                difficulty = 1
            else:
                difficulty = difficultyDict[td[3].text.strip()]
            
            exerciseCheck = "SELECT e.id FROM exercises AS e WHERE e.name=%s"
            workoutVal = (workoutName, )
            cursor.execute(exerciseCheck, workoutVal)
            found = cursor.fetchone()

            exerciseQuery = ""
            if found == None:
                # add to exercises

                exerciseInsert = "INSERT INTO exercises (name, difficulty, tips, link) VALUES (%s, %s, %s, %s)"

                exerciseVal = []
                if(video == None):
                    exerciseVal = (workoutName, difficulty, tipsStr, " ")
                else:
                    exerciseVal = (workoutName, difficulty, tipsStr, video)

                cursor.execute(exerciseInsert, exerciseVal)

                connection.commit()

                exerciseId = cursor.lastrowid

                # muscle_groups_in_exercises

                muscleIdQuery = "SELECT mg.id FROM muscle_groups AS mg WHERE mg.name=%s"   
                muscleName = (exerciseData[i].text, )
                cursor.execute(muscleIdQuery, muscleName)
                muscleId = cursor.fetchone()
                muscleId = muscleId[0]
                

                muscleGroupInExerciseQuery = "INSERT INTO muscle_groups_in_exercises (exerciseID, muscleID) VALUES (%s, %s)"
                muscleGroupInExerciseVal = (exerciseId, muscleId)
                cursor.execute(muscleGroupInExerciseQuery, muscleGroupInExerciseVal)
                connection.commit()



                equipmentQuery = "SELECT e.id FROM equipment AS e WHERE e.name=%s"   
                equipmentVal = (equipment, )
                cursor.execute(equipmentQuery, equipmentVal)
                foundTwo = cursor.fetchone()

                if foundTwo == None:  # Add to equipment

                    equipmentInsertQuery = "INSERT INTO equipment (name) VALUES (%s)"
                    equipmentInsertVal = (equipment, )
                    cursor.execute(equipmentInsertQuery, equipmentInsertVal)
                    connection.commit()

                    equipmentId = cursor.lastrowid

                    # equipment_in_exercises

                    equipmentInExerciseQuery = "INSERT INTO equipment_in_exercises (exerciseID, equipmentID) VALUES (%s, %s)"
                    equipmentInExerciseVal = (exerciseId, equipmentId)
                    cursor.execute(equipmentInExerciseQuery, equipmentInExerciseVal)
                    connection.commit()


                else:   # Add to equipment_in_exercises only

                    equipmentInExerciseQuery = "INSERT INTO equipment_in_exercises (exerciseID, equipmentID) VALUES (%s, %s)"
                    equipmentInExerciseVal = (exerciseId, foundTwo[0])
                    cursor.execute(equipmentInExerciseQuery, equipmentInExerciseVal)
                    connection.commit()

            else:
                # add to muscle_groups_in_exercises only
                muscleIdQuery = "SELECT mg.id FROM muscle_groups AS mg WHERE mg.name=%s"   
                muscleName = (exerciseData[i].text, )
                cursor.execute(muscleIdQuery, muscleName)
                muscleId = cursor.fetchone()
                muscleId = muscleId[0]
                
                muscleGroupInExerciseQuery = "INSERT INTO muscle_groups_in_exercises (exerciseID, muscleID) VALUES (%s, %s)"
                muscleGroupInExerciseVal = (found[0], muscleId)
                cursor.execute(muscleGroupInExerciseQuery, muscleGroupInExerciseVal)
                connection.commit()
        j += 1