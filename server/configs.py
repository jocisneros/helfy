
PERSONALDBCONFIG = {
  'user': 'mytestuser',
  'password': 'My6$Password',
  'host': '127.0.0.1',
  'database': 'personaldb',
  'raise_on_warnings': True
}

EXERCISEDBCONFIG = {
  'user': 'mytestuser',
  'password': 'My6$Password',
  'host': '127.0.0.1',
  'database': 'exercisedb',
  'raise_on_warnings': True
}

RATING_MAX = 3
RATING_MIN = -2
RATING_DEFAUT = 0
GENDER_DICT = {'male' : 1, 'female' : 0, 'other' : 0.5}
SIMILIARITY_CUTOFF = 0.4
# [gender, experiance, weight, height]
SIMILARITY_WEIGHTS = [1,1,1,1]
RECOMMENDATION_LIMIT = 50