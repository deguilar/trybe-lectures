FROM python

ADD . /projetos
WORKDIR /projetos
COPY ./ /projetos

RUN apt-get update
RUN apt-get install nano

RUN pip install -r requirements.txt

CMD flask run --host=0.0.0.0