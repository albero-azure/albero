PORT := 8000
RUN  := ./run.sh


dev develop:
	@ [ ! -d node_modules ] && $(RUN) npm i; true
	$(RUN) npm run develop

build:
	@ $(RUN) npm i
	@ $(RUN) npm run build

clean:
	@- $(RUN) npm run clean
	@- rm -rf ./node_modules

########################################################################################################################

server: build
	@ $(RUN) caddy file-server --root ./public --listen :$(PORT)

########################################################################################################################

surge: build
	@ $(RUN) npx surge ./public $$SURGE_DOMAIN
