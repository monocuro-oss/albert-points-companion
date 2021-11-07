# Albert Points Companion

# Development Guide

To start up the development environment, run:

```
docker-compose -f docker/local/docker-compose.yml up --build
```

## First time setup

After starting up the local environment, you may see some errors from the `backend`. If this is the case, give the containers a restart (Ctl+C and then run the `docker-compose up` command again)

Once everything is up, run the following command to prepare the database.

```
docker-compose -f docker/local/docker-compose.yml run backend python manage.py migrate
```

To create a superuser to access the admin panel, run:

```
docker-compose -f docker/local/docker-compose.yml run -e DJANGO_SUPERUSER_USERNAME=admin -e DJANGO_SUPERUSER_PASSWORD=password -e DJANGO_SUPERUSER_EMAIL=admin@example.com backend python manage.py createsuperuser --noinput
```
