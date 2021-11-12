# Albert Points Companion

# Environment Variables

| Key              | Required | Values         | Description                                                         |
| ---------------- | -------- | -------------- | ------------------------------------------------------------------- |
| SECRET_KEY       | ○        | [string]       | Django secret key                                                   |
| DEBUG            |          | "True"/"False" | Turns Django debug mode on/off (Default: "False")                   |
| ALLOWED_HOSTS    |          | [string]       | A string of allowed hosts separated by a whitespace                 |
| SSL_ENABLED      |          | "True"/"False" | Force use SSL (Default: "False")                                    |
| STATIC_ROOT      |          | [string]       | Absolute path to gather static files                                |
| USE_DATABASE_URL |          | "True"/"False" | Set the default database with the DATABASE_URL environment variable |
| POSTGRE_NAME     |          | [string]       | Postgresql Database name (Default: "albertpointscompanion")         |
| POSTGRE_USER     | ○        | [string]       | Postgresql Username                                                 |
| POSTGRE_PASSWORD | ○        | [string]       | Postgresql Password                                                 |
| POSTGRE_HOST     | ○        | [string]       | Postgresql Hostname                                                 |
| POSTGRE_PORT     | ○        | [string]       | Postgresql Port                                                     |

# Development Guide

To start up the development environment, run:

```
docker-compose -f docker/local/docker-compose.yml up --build
```

You will be able to access the application from `localhost:3000`.

## First time setup

After starting up the local environment, you may see some errors from the `django`. If this is the case, give the containers a restart (Ctl+C and then run the `docker-compose up` command again)

Once everything is up, run the following command to prepare the database.

```
docker-compose -f docker/local/docker-compose.yml run django python manage.py migrate
```

To create a superuser to access the admin panel, run:

```
docker-compose -f docker/local/docker-compose.yml run -e DJANGO_SUPERUSER_USERNAME=admin -e DJANGO_SUPERUSER_PASSWORD=password -e DJANGO_SUPERUSER_EMAIL=admin@example.com django python manage.py createsuperuser --noinput
```
