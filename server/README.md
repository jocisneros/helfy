# How To: Setup Virtual Environment
## 1) Create Virtual Environment Files

MacOS
```
$ python3 -m venv venv
```

Windows
```
> python -m venv venv
```
## 2) Activate Environment

MacOS
```
$ cd venv/bin
$ source activate
```

Windows
```
> cd venv/Scripts
> activate
```

## 3) Install Dependencies
```
cd Server
pip install -r requirements.txt
```

## 4) Run Server
```
$ python3 server.py
```
