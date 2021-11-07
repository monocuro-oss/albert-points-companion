FROM python:3.8-alpine

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

WORKDIR /app
COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv install --system --deploy --ignore-pipfile

CMD python manage.py runserver 0.0.0.0:8000