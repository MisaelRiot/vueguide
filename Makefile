start:
	export APP_NAME=$(A) APP_PORT=$(P) && docker compose --env-file development.env up -d
stop:
	export APP_NAME=$(A) APP_PORT=$(P) && docker compose --env-file development.env down

start-fundamentos:
	make start A=fundamentos P=3000
stop-fundamentos:
	make stop A=fundamentos P=3000

build:
	export APP_NAME=$(A) APP_PORT=$(P) && docker compose --env-file development.env build
bash:
	docker exec -it $(A) bash

set-git:
	eval "$(ssh-agent -s)" && ssh-add  ~/.ssh/misariot