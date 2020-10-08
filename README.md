# Django-Vue-SPA
A simple SPA created using **django** and **Vue.js** The actual code of the app implements a simple  crud application and documentation.

It runs under officially Django supported versions:
* Django 2.1.5
* Python 3 (3.2, 3.4, 3.5, 3.6)

![love](https://user-images.githubusercontent.com/12122519/52381972-d1255080-2a73-11e9-9745-3bead1e2d3b1.png)


## How to install Django-Vue-SPA locally
========================================

This Application can be installed by following the instructions below.

you must have **[python 3](https://www.python.org/downloads/)** > and  [pipenv](https://pypi.org/project/pipenv/)  installed


### Clone thie repository

    $ git clone git@github.com:JuliRash/Django-Vue-SPA.git

### Change the directory to the application folder.

    $ cd Django-Vue-SPA 

### Activate the virtualenv using pipenv

    $ pipenv shell

### Install the requirements for the project

    $ pipenv install -r requirements.txt


### Run migrations and migrate: 
```
python manage.py makemigrations article 
python manage.py migrate
```

### Start the App.
```
python manage.py runserver
```

### Run Tests.
```
python manage.py test
```