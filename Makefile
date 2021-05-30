RUN := ./run.sh


dev develop: dependencies
	$(RUN) npm run develop

dep dependencies:
	@ [ ! -d node_modules ] && $(RUN) npm i; true

########################################################################################################################

build:
	@ $(RUN) npm i
	@ $(RUN) npm run build

clean:
	@- $(RUN) npm run clean
	@- rm -rf ./node_modules

########################################################################################################################

surge: build
	@ npx surge ./public $SURGE_DOMAIN
