export

COMPOSE = docker-compose -f docker-compose.yml

dev-build:
	$(COMPOSE) build

dev-start:
	$(COMPOSE) up

dev-down:
	$(COMPOSE) down