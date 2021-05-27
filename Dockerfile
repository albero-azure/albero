FROM nixos/nix:2.3.11

RUN nix-channel --add https://nixos.org/channels/nixpkgs-stabe nixpkgs && nix-channel --update

########################################################################################################################

ENV NODE_ENV=production

WORKDIR /usr/src/app

ADD shell.nix .

RUN nix-env -f shell.nix -i -A buildInputs

########################################################################################################################

COPY package.json package-lock.json

RUN npm i

########################################################################################################################

COPY . ./

RUN npm build
