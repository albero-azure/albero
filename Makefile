RUN := @ npm run

env shell:
	@ nix-shell

dev develop: dependencies
	$(RUN) develop

dep dependencies:
	@ [ ! -d node_modules ] && npm i; true


clean:
	@- npm run clean
	@- rm -rf ./node_modules
