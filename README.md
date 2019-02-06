# Django-Vue-SPA
A simple SPA created using django and Vue The actual code of the app implements a simple  crud application and documentation.

It runs under officially Django supported versions:
*Django 2.01
*Python 3 (3.2, 3.4, 3.5, 3.6)

![Sample of the code output]
(https://i.imgur.com/cMnsa7N.png)

## How to install Django-Vue-SPA locally
========================================

This Application can be installed by following the instructions below.

you must have python 3 > and latest pip  installed


###Install and  Virtual Environment :
```
pip install virtualenv

virtualenv -p python3  <virtualenv_name>
```
###Navigate to your Virtual Environment and activate it with the command below.
```
source bin/activate
```

###Make sure you are in virtualenv

Install modules by using this command

```
pip install -r requirement
```

###Run migrations and migrate: 
```
python manage.py makemigrations article 
python manage.py migrate
```

###Start the App.
```
python manage.py runserver
```