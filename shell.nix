{ pkgs ? import <nixpkgs> {} }:

(pkgs.buildFHSUserEnv {
  name = "gatsby";
  targetPkgs = pkgs: (with pkgs; [
    entr
    nodePackages.gatsby-cli
    # nodePackages.typescript
    nodePackages.node-gyp-build libtool autoconf automake zlib
    # mozjpeg
  ]);
  runScript = "bash";
}).env
