#!/usr/bin/env bash


if [[ -x "$(command -v nix-shell)" ]]; then
  nix-shell --run "$*"
else
  "$@"
fi
