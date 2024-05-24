#!/bin/bash

APPDIRECTORY= $PWD;

#---- install nvm (node manager) ----#

echo "INSTALL NVM...";
cd $HOME;
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh > install-nvm.sh;
/bin/bash install-nvm.sh;
echo "...OK";

#---- install node (js engine) ----#

echo "INSTALL NODE...";
nvm install 20;
nvm use 20;
echo "...OK";

#---- install express js (framework) ----#

echo "INSTALL EXPRESS...";
cd $APPDIRECTORY;
npm install express;
echo "...OK";

#---- launching application  ----#

node src/launch/index.js;
