import mysql.connector
from mysql.connector import errorcode
from configs import PERSONALDBCONFIG, EXERCISEDBCONFIG

def getUserById(userId: str):
    users = []
    try:
        connection = mysql.connector.connect(**PERSONALDBCONFIG)

        cursor = connection.cursor()
        query = ("SELECT * FROM users WHERE id = %s")
        # query = ("SELECT * FROM users")

        cursor.execute(query, (userId,))
        # cursor.execute(query)
        
        for (userId, name, height, weight, gender) in cursor:
            user = {}
            user["userid"] = userId
            user["name"] = name
            user["height"] = height
            user["weight"] = weight
            user["gender"] = gender
            users.append(user)

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Username/Password Error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database Error")
        else:
            print(err)
    else:
        connection.close()
    
    return users
            

if __name__ == "__main__":
    users = getUserById(1)
    print(users)