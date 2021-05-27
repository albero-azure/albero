RUN := ./run.sh


dev develop: dependencies
	$(RUN) npm run develop

dep dependencies:
	@ [ ! -d node_modules ] && $(RUN) npm i; true

########################################################################################################################

build: dependencies
	@ $(RUN) npm run build

clean:
	@- $(RUN) npm run clean
	@- rm -rf ./node_modules
